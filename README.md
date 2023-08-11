<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# pkg2id

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the error identifier prefix associated with a specified package name.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import pkg2id from 'https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-pkg2id@esm/index.mjs';
```

#### pkg2id( pkg )

Returns the error identifier prefix associated with a specified package name.

```javascript
var v = pkg2id( '@stdlib/math-base-special-sin' );
// returns '0YK'
```

If provided an unrecognized `pkg`, the function returns `null`.

```javascript
var v = pkg2id( 'unrecognized_pkg_beep_boop_bop_bip' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function supports providing both internal and standalone package names.

    ```javascript
    var v = pkg2id( '@stdlib/math-base-special-sin' );
    // returns '0YK'
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import formatProdErrorMessage from 'https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs';
import pkg2id from 'https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-pkg2id@esm/index.mjs';

var prefix = pkg2id( '@stdlib/math-base-special-sin' );
var errorCode = '23';
var code = prefix + errorCode;

var msg = formatProdErrorMessage( code );
console.log( msg );
// => <string>

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/error-tools-pkg2id.svg
[npm-url]: https://npmjs.org/package/@stdlib/error-tools-pkg2id

[test-image]: https://github.com/stdlib-js/error-tools-pkg2id/actions/workflows/test.yml/badge.svg?branch=v0.0.3
[test-url]: https://github.com/stdlib-js/error-tools-pkg2id/actions/workflows/test.yml?query=branch:v0.0.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/error-tools-pkg2id/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/error-tools-pkg2id?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/error-tools-pkg2id.svg
[dependencies-url]: https://david-dm.org/stdlib-js/error-tools-pkg2id/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/error-tools-pkg2id#cli
[cli-url]: https://github.com/stdlib-js/error-tools-pkg2id/tree/cli
[@stdlib/error-tools-pkg2id]: https://github.com/stdlib-js/error-tools-pkg2id/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/error-tools-pkg2id/tree/deno
[umd-url]: https://github.com/stdlib-js/error-tools-pkg2id/tree/umd
[esm-url]: https://github.com/stdlib-js/error-tools-pkg2id/tree/esm
[branches-url]: https://github.com/stdlib-js/error-tools-pkg2id/blob/main/branches.md

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
