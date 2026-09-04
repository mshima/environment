# Changelog

## [7.0.0](https://github.com/mshima/environment/compare/v6.3.0...v7.0.0) (2026-09-04)


### ⚠ BREAKING CHANGES

* drop node 20 support ([#825](https://github.com/mshima/environment/issues/825))
* bump node requirement ([#602](https://github.com/mshima/environment/issues/602))

### Features

* accept @yeoman/adapter v5 and mem-fs v6 ([#819](https://github.com/mshima/environment/issues/819)) ([f8dfc6c](https://github.com/mshima/environment/commit/f8dfc6c3b955bd5b23936adb0ad06b457ef3e26f))
* add context map to environment ([#601](https://github.com/mshima/environment/issues/601)) ([0ab7c62](https://github.com/mshima/environment/commit/0ab7c623a506864caa0f3ea595cefbf7bd9b0a93))
* add generatorLookupOptions option ([#674](https://github.com/mshima/environment/issues/674)) ([a301ab8](https://github.com/mshima/environment/commit/a301ab830bcd568b6f4b278a857eed53ab4fe5a3))
* add getPackageJson to meta ([#811](https://github.com/mshima/environment/issues/811)) ([4d73086](https://github.com/mshima/environment/commit/4d73086cda03588d4dff65edb1fef8cf9ecfd5d8))
* add support to ask customInstallTask ([#770](https://github.com/mshima/environment/issues/770)) ([136e4f4](https://github.com/mshima/environment/commit/136e4f49b2593bf3a45296c4a47dd9a282be4deb))
* adjusts for adapter's signal ([#655](https://github.com/mshima/environment/issues/655)) ([df63be6](https://github.com/mshima/environment/commit/df63be694c5843a0178aeb94676e9ffb693bb8b1))
* **deps:** bump @yeoman/adapter from 4.0.2 to 5.0.0 ([#818](https://github.com/mshima/environment/issues/818)) ([5ba2faf](https://github.com/mshima/environment/commit/5ba2fafcc640e98795de4e6615174fb82bd67cb4))
* **deps:** bump @yeoman/namespace from 1.0.1 to 2.1.0 ([#766](https://github.com/mshima/environment/issues/766)) ([4a3ae84](https://github.com/mshima/environment/commit/4a3ae84caaa70ae41cf8630d4907f144e3cec7a3))
* **deps:** bump chalk from 5.6.2 to 6.0.0 ([#800](https://github.com/mshima/environment/issues/800)) ([8022351](https://github.com/mshima/environment/commit/80223510a329815fafaaf8f8c384b12ef6dd0e21))
* **deps:** bump commander from 14.0.3 to 15.0.0 ([#787](https://github.com/mshima/environment/issues/787)) ([c9a78be](https://github.com/mshima/environment/commit/c9a78bea54f3bb932057bfb2be7130d7595c50a0))
* **deps:** bump execa from 9.6.1 to 10.0.1 ([#803](https://github.com/mshima/environment/issues/803)) ([8de893f](https://github.com/mshima/environment/commit/8de893fde548fafd9ec24017b435a5c9690666a6))
* drop node 20 support ([#825](https://github.com/mshima/environment/issues/825)) ([b93b7b3](https://github.com/mshima/environment/commit/b93b7b3ca29d2871de6c77312fea6c00ae57b4af))
* extract getFeaturesFromGenerator ([#769](https://github.com/mshima/environment/issues/769)) ([d244f0c](https://github.com/mshima/environment/commit/d244f0ca18f1f83ed18320a2eabdcc0f70cec780))
* lookup for generators in pnpm global folder ([#680](https://github.com/mshima/environment/issues/680)) ([2fcd028](https://github.com/mshima/environment/commit/2fcd028310ac23560f06f84c410955ecb46f088e))
* pass _meta to generator options ([#810](https://github.com/mshima/environment/issues/810)) ([838a699](https://github.com/mshima/environment/commit/838a6997c518d619e03e3a2ad38b5c520745f4f4))
* pass register in constructor ([#429](https://github.com/mshima/environment/issues/429)) ([10fa273](https://github.com/mshima/environment/commit/10fa273a255f00bd6c2946275e25f74b22ea57d4))
* update dependencies ([#828](https://github.com/mshima/environment/issues/828)) ([4100c87](https://github.com/mshima/environment/commit/4100c8721b20d63ce81ce9d01b722830c1ab4b74))


### Bug Fixes

* adjusts to commander support ([#641](https://github.com/mshima/environment/issues/641)) ([ab5480b](https://github.com/mshima/environment/commit/ab5480b0a813cc0ecc5a6e9f8d660f7de3203616))
* allow to override a generator. ([#418](https://github.com/mshima/environment/issues/418)) ([2f7fe9f](https://github.com/mshima/environment/commit/2f7fe9f06eceaee515806f4f207c106a06bf841a))
* ask before installing local packages. ([#753](https://github.com/mshima/environment/issues/753)) ([78d2af7](https://github.com/mshima/environment/commit/78d2af7e60294784b8a8b3b3b5099c6874b6a1fa))
* conflict on file permission change. ([#415](https://github.com/mshima/environment/issues/415)) ([a8fb7d3](https://github.com/mshima/environment/commit/a8fb7d3a3d1ee3fd7936edfc004d26d1bbcfc83e))
* convert getPackageJson to sync ([#813](https://github.com/mshima/environment/issues/813)) ([4a0951c](https://github.com/mshima/environment/commit/4a0951c695779f34c3797cb2d48e04d976074c67))
* expose missing types ([#673](https://github.com/mshima/environment/issues/673)) ([4de747f](https://github.com/mshima/environment/commit/4de747fa5203e985de9d1fc1cdab2948aa520ef2))
* improve types ([#640](https://github.com/mshima/environment/issues/640)) ([9f4d1c8](https://github.com/mshima/environment/commit/9f4d1c82ddbee9e2c9b2feabaa8204e8f60d48a0))
* improve types ([#643](https://github.com/mshima/environment/issues/643)) ([aa1c6af](https://github.com/mshima/environment/commit/aa1c6afc62e07ba9db5679b15fa486e1e7723c27))
* only fallback to import if requiring fails with esm/async error ([#716](https://github.com/mshima/environment/issues/716)) ([e4fb745](https://github.com/mshima/environment/commit/e4fb7451fc91bcd73fda1337bba296409e8e41fc))
* revert npm to v7 at ci ([#413](https://github.com/mshima/environment/issues/413)) ([4265953](https://github.com/mshima/environment/commit/4265953b2f65e390332e5e2fca7d3e86e4c4db56))
* typo in issue type trigger ([79bd5e5](https://github.com/mshima/environment/commit/79bd5e5fc3e3500d2d0148b38e8b7e1c191c4565))
* use correct registry prop for arborist ([#440](https://github.com/mshima/environment/issues/440)) ([48a33d1](https://github.com/mshima/environment/commit/48a33d1adddb57545ee4c57b2f0646cf68a838a3))
* use globbySync to resolve PNPM global node_modules paths ([#692](https://github.com/mshima/environment/issues/692)) ([4317fef](https://github.com/mshima/environment/commit/4317fef45b8e01076debe69d71f121f92a437014))


### Miscellaneous Chores

* bump node requirement ([#602](https://github.com/mshima/environment/issues/602)) ([5b43a11](https://github.com/mshima/environment/commit/5b43a1120b3e6ee752b6420f07ff658debf775b3))

## [6.3.0](https://github.com/yeoman/environment/compare/v6.2.0...v6.3.0) (2026-09-02)

### Features

- accept @yeoman/adapter v5 and mem-fs v6 ([#819](https://github.com/yeoman/environment/issues/819)) ([f8dfc6c](https://github.com/yeoman/environment/commit/f8dfc6c3b955bd5b23936adb0ad06b457ef3e26f))

## [6.2.0](https://github.com/yeoman/environment/compare/v6.1.0...v6.2.0) (2026-08-24)

### Features

- add getPackageJson to meta ([#811](https://github.com/yeoman/environment/issues/811)) ([4d73086](https://github.com/yeoman/environment/commit/4d73086cda03588d4dff65edb1fef8cf9ecfd5d8))
- pass \_meta to generator options ([#810](https://github.com/yeoman/environment/issues/810)) ([838a699](https://github.com/yeoman/environment/commit/838a6997c518d619e03e3a2ad38b5c520745f4f4))

### Bug Fixes

- convert getPackageJson to sync ([#813](https://github.com/yeoman/environment/issues/813)) ([4a0951c](https://github.com/yeoman/environment/commit/4a0951c695779f34c3797cb2d48e04d976074c67))

## [6.1.0](https://github.com/yeoman/environment/compare/v6.0.1...v6.1.0) (2026-04-29)

### Features

- add support to ask customInstallTask ([#770](https://github.com/yeoman/environment/issues/770)) ([136e4f4](https://github.com/yeoman/environment/commit/136e4f49b2593bf3a45296c4a47dd9a282be4deb))
- **deps:** bump @yeoman/namespace from 1.0.1 to 2.1.0 ([#766](https://github.com/yeoman/environment/issues/766)) ([4a3ae84](https://github.com/yeoman/environment/commit/4a3ae84caaa70ae41cf8630d4907f144e3cec7a3))
- extract getFeaturesFromGenerator ([#769](https://github.com/yeoman/environment/issues/769)) ([d244f0c](https://github.com/yeoman/environment/commit/d244f0ca18f1f83ed18320a2eabdcc0f70cec780))
