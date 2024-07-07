# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2024-07-07)

<section class="features">

### Features

-   [`9044e4d`](https://github.com/stdlib-js/stdlib/commit/9044e4d4b9e390c08ac28195958d2941129a2fe8) - update error databases [(#2529)](https://github.com/stdlib-js/stdlib/pull/2529)
-   [`a0b68ef`](https://github.com/stdlib-js/stdlib/commit/a0b68ef39946d3dba3bbeddf028b10aa9ed28b92) - update error databases [(#2438)](https://github.com/stdlib-js/stdlib/pull/2438)
-   [`7d9bf3e`](https://github.com/stdlib-js/stdlib/commit/7d9bf3e1e3ea42afce52625cc7a7e1a506607828) - update error databases [(##2343)](#2343 )
-   [`b13dd89`](https://github.com/stdlib-js/stdlib/commit/b13dd890b893dac7823a42a347e832bad9f151f3) - update error databases [(##2268)](#2268)
-   [`bd9abbc`](https://github.com/stdlib-js/stdlib/commit/bd9abbc25f0c7f3d94c672aac74410def7846a76) - update error databases [(#2133)](https://github.com/stdlib-js/stdlib/pull/2133)
-   [`e74c50b`](https://github.com/stdlib-js/stdlib/commit/e74c50baeee21473bab4cef31d7303e59ab17696) - update error databases [(##1461)](#1461)
-   [`115711b`](https://github.com/stdlib-js/stdlib/commit/115711beed462231d35989ee01f9efc33870bc1b) - update error databases [(#1376)](https://github.com/stdlib-js/stdlib/pull/1376)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`0be60c5`](https://github.com/stdlib-js/stdlib/commit/0be60c5b5c2136ca09e4dfd2edd5efdaf3bb2423): remove `complex/base/assert/is-equal` 

    -   To migrate, users should update their require/import paths to use
    `@stdlib/complex-float64/base/assert/is-equal` which provides the
    same API and implementation.

-   [`55df587`](https://github.com/stdlib-js/stdlib/commit/55df587285d107ccccdef95c18f702c60ef642bb): remove `complex/parse-float64` 

    -   To migrate, users should update their require/import paths to use
    `@stdlib/complex-float64/parse` which provides the same API and
    implementation.

-   [`117867e`](https://github.com/stdlib-js/stdlib/commit/117867e22932d9e355740aa4116994e91f096f95): remove `complex/parse-float32` 

    -   To migrate, users should update their require/import paths to use
    `@stdlib/complex-float32/parse` which provides the same API and
    implementation.

-   [`7381394`](https://github.com/stdlib-js/stdlib/commit/738139479cf29cbe123d7c5028024983ba11b3bd): remove `complex/reviver-float64` 

    -   To migrate, users should update their require/import paths to use
    `@stdlib/complex-float64/reviver` which provides the same API and
    implementation.

-   [`00d0530`](https://github.com/stdlib-js/stdlib/commit/00d0530d0daabe872c5bc9559abae76b2024dfe3): remove `complex/reviver-float32` 

    -   To migrate, users should update their require/import paths to use
    `@stdlib/complex-float32/reviver` which provides the same API and
    implementation.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`9044e4d`](https://github.com/stdlib-js/stdlib/commit/9044e4d4b9e390c08ac28195958d2941129a2fe8) - **feat:** update error databases [(#2529)](https://github.com/stdlib-js/stdlib/pull/2529) _(by stdlib-bot, Philipp Burckhardt)_
-   [`a0b68ef`](https://github.com/stdlib-js/stdlib/commit/a0b68ef39946d3dba3bbeddf028b10aa9ed28b92) - **feat:** update error databases [(#2438)](https://github.com/stdlib-js/stdlib/pull/2438) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7d9bf3e`](https://github.com/stdlib-js/stdlib/commit/7d9bf3e1e3ea42afce52625cc7a7e1a506607828) - **feat:** update error databases [(##2343)](#2343 ) _(by stdlib-bot, Philipp Burckhardt)_
-   [`b13dd89`](https://github.com/stdlib-js/stdlib/commit/b13dd890b893dac7823a42a347e832bad9f151f3) - **feat:** update error databases [(##2268)](#2268) _(by stdlib-bot, Philipp Burckhardt)_
-   [`0be60c5`](https://github.com/stdlib-js/stdlib/commit/0be60c5b5c2136ca09e4dfd2edd5efdaf3bb2423) - **remove:** remove `complex/base/assert/is-equal` _(by Athan Reines)_
-   [`55df587`](https://github.com/stdlib-js/stdlib/commit/55df587285d107ccccdef95c18f702c60ef642bb) - **remove:** remove `complex/parse-float64` _(by Athan Reines)_
-   [`117867e`](https://github.com/stdlib-js/stdlib/commit/117867e22932d9e355740aa4116994e91f096f95) - **remove:** remove `complex/parse-float32` _(by Athan Reines)_
-   [`7381394`](https://github.com/stdlib-js/stdlib/commit/738139479cf29cbe123d7c5028024983ba11b3bd) - **remove:** remove `complex/reviver-float64` _(by Athan Reines)_
-   [`00d0530`](https://github.com/stdlib-js/stdlib/commit/00d0530d0daabe872c5bc9559abae76b2024dfe3) - **remove:** remove `complex/reviver-float32` _(by Athan Reines)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_
-   [`c91d15e`](https://github.com/stdlib-js/stdlib/commit/c91d15e07e9fd9f4ac754f55d48bd18935bf8536) - **build:** add trailing newlines in generated JSON files _(by Philipp Burckhardt)_
-   [`0244027`](https://github.com/stdlib-js/stdlib/commit/0244027e1e2c0ceb1cd8ae1808196c24fa77b142) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_
-   [`bd9abbc`](https://github.com/stdlib-js/stdlib/commit/bd9abbc25f0c7f3d94c672aac74410def7846a76) - **feat:** update error databases [(#2133)](https://github.com/stdlib-js/stdlib/pull/2133) _(by stdlib-bot, Philipp Burckhardt)_
-   [`e74c50b`](https://github.com/stdlib-js/stdlib/commit/e74c50baeee21473bab4cef31d7303e59ab17696) - **feat:** update error databases [(##1461)](#1461) _(by stdlib-bot)_
-   [`115711b`](https://github.com/stdlib-js/stdlib/commit/115711beed462231d35989ee01f9efc33870bc1b) - **feat:** update error databases [(#1376)](https://github.com/stdlib-js/stdlib/pull/1376) _(by stdlib-bot, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-22)

<section class="features">

### Features

-   [`43af7eb`](https://github.com/stdlib-js/stdlib/commit/43af7eb290aa0262006057f4358cf45e7ba9ec84) - update error databases [(##1319)](#1319)
-   [`8349457`](https://github.com/stdlib-js/stdlib/commit/83494579fa8e58bcb3458073141d29d67d0190a3) - update error databases [(#1311)](https://github.com/stdlib-js/stdlib/pull/1311)
-   [`2a3557b`](https://github.com/stdlib-js/stdlib/commit/2a3557b72932bfe1062a468e26b0bf4ce46c96a5) - update error databases [(##1286)](#1286)
-   [`b9d2556`](https://github.com/stdlib-js/stdlib/commit/b9d25560aa64e07a0117285943c15f7981ba2b3d) - update error databases [(#1256)](https://github.com/stdlib-js/stdlib/pull/1256)
-   [`41fe635`](https://github.com/stdlib-js/stdlib/commit/41fe6354e029f681b26c9d30838e4d317cb81a22) - update error databases [(#1242)](https://github.com/stdlib-js/stdlib/pull/1242)
-   [`520acec`](https://github.com/stdlib-js/stdlib/commit/520acecb7b0d18dd0be584afbed4cc3a06fe227d) - update error databases [(#1208)](https://github.com/stdlib-js/stdlib/pull/1208)
-   [`97525c6`](https://github.com/stdlib-js/stdlib/commit/97525c6aa76c340de5d362bcefa1ddb5a362dd44) - update error databases [(#1149)](https://github.com/stdlib-js/stdlib/pull/1149)
-   [`5d698ee`](https://github.com/stdlib-js/stdlib/commit/5d698eecab5459bccc0c28ab7057c42871f25d99) - update error databases [(#1143)](https://github.com/stdlib-js/stdlib/pull/1143)
-   [`6341d50`](https://github.com/stdlib-js/stdlib/commit/6341d50242636bbfa06975ac60ad9cea49730c9d) - update error databases [(#1129)](https://github.com/stdlib-js/stdlib/pull/1129)
-   [`08b3dd9`](https://github.com/stdlib-js/stdlib/commit/08b3dd93e2f04570ecfa5613a38122871940c75f) - update error databases [(##1110)](#1110 )
-   [`79b99b9`](https://github.com/stdlib-js/stdlib/commit/79b99b9f82dbb9eb02f71422d11283043793a746) - update error databases [(##1109)](#1109)
-   [`0dc904b`](https://github.com/stdlib-js/stdlib/commit/0dc904bcd5b306606d0e453da218372859123eb5) - update error databases [(#1108)](https://github.com/stdlib-js/stdlib/pull/1108)
-   [`17e20e3`](https://github.com/stdlib-js/stdlib/commit/17e20e380bb1f59f309203bbfa609b57fd3ea317) - update error databases [(#1106)](https://github.com/stdlib-js/stdlib/pull/1106)
-   [`f3dc3fe`](https://github.com/stdlib-js/stdlib/commit/f3dc3fecfe2c1730edecb363099da4971f9570d1) - update error databases [(#1099)](https://github.com/stdlib-js/stdlib/pull/1099)
-   [`434d4ea`](https://github.com/stdlib-js/stdlib/commit/434d4ea76ddf74953ea55d95bc4ce4db4fbc6274) - update error databases [(##1094)](#1094)
-   [`00186a8`](https://github.com/stdlib-js/stdlib/commit/00186a820d1859edca3f5c2e94c241007ae2caac) - update error databases [(#1083)](https://github.com/stdlib-js/stdlib/pull/1083)
-   [`3dec037`](https://github.com/stdlib-js/stdlib/commit/3dec037f6c9097c6778408c877008d7eeee5ad78) - update minimum TypeScript version
-   [`9a90bd6`](https://github.com/stdlib-js/stdlib/commit/9a90bd6382db9ea47d928cc452519ec29f1d5e72) - update error databases [(##1080)](#1080)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`3dec037`](https://github.com/stdlib-js/stdlib/commit/3dec037f6c9097c6778408c877008d7eeee5ad78): update minimum TypeScript version
-   [`3dec037`](https://github.com/stdlib-js/stdlib/commit/3dec037f6c9097c6778408c877008d7eeee5ad78): update minimum TypeScript version to 4.1 

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`43af7eb`](https://github.com/stdlib-js/stdlib/commit/43af7eb290aa0262006057f4358cf45e7ba9ec84) - **feat:** update error databases [(##1319)](#1319) _(by stdlib-bot, Philipp Burckhardt)_
-   [`8349457`](https://github.com/stdlib-js/stdlib/commit/83494579fa8e58bcb3458073141d29d67d0190a3) - **feat:** update error databases [(#1311)](https://github.com/stdlib-js/stdlib/pull/1311) _(by stdlib-bot, Philipp Burckhardt)_
-   [`2a3557b`](https://github.com/stdlib-js/stdlib/commit/2a3557b72932bfe1062a468e26b0bf4ce46c96a5) - **feat:** update error databases [(##1286)](#1286) _(by stdlib-bot, Philipp Burckhardt)_
-   [`b9d2556`](https://github.com/stdlib-js/stdlib/commit/b9d25560aa64e07a0117285943c15f7981ba2b3d) - **feat:** update error databases [(#1256)](https://github.com/stdlib-js/stdlib/pull/1256) _(by stdlib-bot, Philipp Burckhardt)_
-   [`41fe635`](https://github.com/stdlib-js/stdlib/commit/41fe6354e029f681b26c9d30838e4d317cb81a22) - **feat:** update error databases [(#1242)](https://github.com/stdlib-js/stdlib/pull/1242) _(by stdlib-bot, Philipp Burckhardt)_
-   [`520acec`](https://github.com/stdlib-js/stdlib/commit/520acecb7b0d18dd0be584afbed4cc3a06fe227d) - **feat:** update error databases [(#1208)](https://github.com/stdlib-js/stdlib/pull/1208) _(by stdlib-bot, Philipp Burckhardt)_
-   [`97525c6`](https://github.com/stdlib-js/stdlib/commit/97525c6aa76c340de5d362bcefa1ddb5a362dd44) - **feat:** update error databases [(#1149)](https://github.com/stdlib-js/stdlib/pull/1149) _(by stdlib-bot, Philipp Burckhardt)_
-   [`5d698ee`](https://github.com/stdlib-js/stdlib/commit/5d698eecab5459bccc0c28ab7057c42871f25d99) - **feat:** update error databases [(#1143)](https://github.com/stdlib-js/stdlib/pull/1143) _(by stdlib-bot, Philipp Burckhardt)_
-   [`6341d50`](https://github.com/stdlib-js/stdlib/commit/6341d50242636bbfa06975ac60ad9cea49730c9d) - **feat:** update error databases [(#1129)](https://github.com/stdlib-js/stdlib/pull/1129) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - **fix:** make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111) _(by stdlib-bot, Philipp Burckhardt)_
-   [`08b3dd9`](https://github.com/stdlib-js/stdlib/commit/08b3dd93e2f04570ecfa5613a38122871940c75f) - **feat:** update error databases [(##1110)](#1110 ) _(by stdlib-bot, Philipp Burckhardt)_
-   [`79b99b9`](https://github.com/stdlib-js/stdlib/commit/79b99b9f82dbb9eb02f71422d11283043793a746) - **feat:** update error databases [(##1109)](#1109) _(by stdlib-bot)_
-   [`0dc904b`](https://github.com/stdlib-js/stdlib/commit/0dc904bcd5b306606d0e453da218372859123eb5) - **feat:** update error databases [(#1108)](https://github.com/stdlib-js/stdlib/pull/1108) _(by stdlib-bot, Philipp Burckhardt)_
-   [`17e20e3`](https://github.com/stdlib-js/stdlib/commit/17e20e380bb1f59f309203bbfa609b57fd3ea317) - **feat:** update error databases [(#1106)](https://github.com/stdlib-js/stdlib/pull/1106) _(by stdlib-bot, Philipp Burckhardt)_
-   [`f3dc3fe`](https://github.com/stdlib-js/stdlib/commit/f3dc3fecfe2c1730edecb363099da4971f9570d1) - **feat:** update error databases [(#1099)](https://github.com/stdlib-js/stdlib/pull/1099) _(by stdlib-bot, Athan Reines, Philipp Burckthardt)_
-   [`434d4ea`](https://github.com/stdlib-js/stdlib/commit/434d4ea76ddf74953ea55d95bc4ce4db4fbc6274) - **feat:** update error databases [(##1094)](#1094) _(by stdlib-bot, Philipp Burckhardt)_
-   [`00186a8`](https://github.com/stdlib-js/stdlib/commit/00186a820d1859edca3f5c2e94c241007ae2caac) - **feat:** update error databases [(#1083)](https://github.com/stdlib-js/stdlib/pull/1083) _(by stdlib-bot, Philipp Burckhardt)_
-   [`3dec037`](https://github.com/stdlib-js/stdlib/commit/3dec037f6c9097c6778408c877008d7eeee5ad78) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`9a90bd6`](https://github.com/stdlib-js/stdlib/commit/9a90bd6382db9ea47d928cc452519ec29f1d5e72) - **feat:** update error databases [(##1080)](#1080) _(by stdlib-bot, Planeshifter)_
-   [`34071a1`](https://github.com/stdlib-js/stdlib/commit/34071a1984a3a03a9bf4dd5df134e2a09502a4da) - **chore:** resolve lint errors _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Philipp Burckthardt
-   Planeshifter

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

