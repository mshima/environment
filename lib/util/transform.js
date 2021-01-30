'use strict';

const {WError} = require('error');
const fs = require('fs');
const path = require('path');
const findUp = require('find-up');
const minimatch = require('minimatch');
const through = require('through2');

class YoResolveError extends WError {}

function parseYoAttributesFile(yoAttributeFileName) {
  let overridesContent;
  try {
    overridesContent = fs.readFileSync(yoAttributeFileName, 'utf-8');
  } catch (error) {
    throw YoResolveError.wrap('Error loading yo attributes file {yoAttributeFileName}', error, {yoAttributeFileName});
  }
  const absoluteDir = path.dirname(yoAttributeFileName);
  return Object.fromEntries(
    overridesContent
      .split(/\r?\n/)
      .map(override => override.trim())
      .map(override => override.split('#')[0].trim())
      .filter(override => override)
      .map(override => override.split(/\s+/))
      .map(([pattern, status = 'skip']) => [path.join(absoluteDir, pattern), status])
  );
}

function getConflicterStatusForFile(conflicter, filePath, yoAttributeFileName) {
  const fileDir = path.dirname(filePath);
  conflicter.yoResolveByFile = conflicter.yoResolveByFile || {};
  const yoResolveFiles = [];
  let foundYoAttributesFile = findUp.sync([yoAttributeFileName], {cwd: fileDir});
  while (foundYoAttributesFile) {
    yoResolveFiles.push(foundYoAttributesFile);
    foundYoAttributesFile = findUp.sync([yoAttributeFileName], {cwd: path.join(path.dirname(foundYoAttributesFile), '..')});
  }

  let fileStatus;
  if (yoResolveFiles) {
    yoResolveFiles.forEach(yoResolveFile => {
      if (conflicter.yoResolveByFile[yoResolveFile] === undefined) {
        conflicter.yoResolveByFile[yoResolveFile] = parseYoAttributesFile(yoResolveFile);
      }
    });
    yoResolveFiles
      .map(yoResolveFile => conflicter.yoResolveByFile[yoResolveFile])
      .map(attributes => attributes)
      .find(yoResolve => {
        return Object.entries(yoResolve).some(([pattern, status]) => {
          if (minimatch(filePath, pattern)) {
            fileStatus = status;
            return true;
          }
          return false;
        });
      });
  }
  return fileStatus;
}

/**
 * Create a yo-resolve transform stream.
 * Suports pre-defined conflicter actions action based on file glob.
 * @param {Conflicter} conflicter - Conflicter instance
 * @param {string} yoResolveFileName - .yo-resolve filename
 * @return {Transform} A Transform https://nodejs.org/api/stream.html#stream_class_stream_transform
 */
function createYoResolveTransform(conflicter, yoResolveFileName = '.yo-resolve') {
  return createEachFileTransform(file => {
    // If the file has no state requiring action, move on
    if (file.state === null) {
      return;
    }

    // If the file already has a conflicter status, move on
    if (file.conflicter) {
      return;
    }

    const status = getConflicterStatusForFile(conflicter, file.path, yoResolveFileName);
    if (status) {
      file.conflicter = status;
    }
  });
}

/**
 * Create a force yeoman configs transform stream.
 * @return {Transform} A Transform https://nodejs.org/api/stream.html#stream_class_stream_transform
 */
function createYoRcTransform() {
  return createEachFileTransform(file => {
    // If the file has no state requiring action, move on
    if (file.state === null) {
      return;
    }

    const filename = path.basename(file.path);
    // Config file should not be processed by the conflicter. Force override.
    if (filename === '.yo-rc.json' || filename === '.yo-rc-global.json') {
      file.conflicter = 'force';
    }
  });
}

/**
 * Create a for each file stream transform.
 * @param {Conflicter} conflicter - Conflicter instance
 * @param {Conflicter} conflicter - Conflicter instance
 * @return {Transform} A Transform https://nodejs.org/api/stream.html#stream_class_stream_transform
 */
function createEachFileTransform(forEach) {
  return through.obj((file, enc, cb) => {
    const mayBePromise = forEach(file, enc);
    if (mayBePromise && mayBePromise.then) {
      mayBePromise.then(() => cb(file));
    } else {
      cb(file);
    }
  });
}

/**
 * Create a collision checker transform.
 * @param {Conflicter} conflicter - Conflicter instance
 * @return {Transform} A Transform https://nodejs.org/api/stream.html#stream_class_stream_transform
 */
function createCollisionCheckerTransform(conflicter) {
  return through.obj(function (file, enc, cb) {
    const stream = this;

    // If the file has no state requiring action, move on
    if (file.state === null) {
      cb();
      return;
    }

    conflicter.checkForCollision(file, (err, status) => {
      if (err) {
        cb(err);
        return;
      }

      if (status === 'skip') {
        delete file.state;
      } else {
        stream.push(file);
      }

      cb();
    });
    conflicter.resolve();
  });
}

module.exports = {
  createYoResolveTransform,
  createCollisionCheckerTransform,
  createEachFileTransform,
  createYoRcTransform
};
