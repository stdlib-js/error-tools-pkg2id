/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var INTERNAL_TO_ID = require( './../data/internal.json' );
var STANDALONE_TO_ID = require( './../data/standalone.json' );


// MAIN //

/**
* Returns the error code identifier prefix associated with a specified package name.
*
* @param {string} pkg - package name
* @throws {TypeError} must provide a string
* @returns {(string|null)} identifier prefix
*
* @example
* var v = pkg2id( '@stdlib/math-base-special-sin' );
* // returns '0H5'
*/
function pkg2id( pkg ) {
	if ( !isString( pkg ) ) {
		throw new TypeError( 'invalid argument. Must provide a string. Value: `' + pkg + '`.' );
	}
	if ( hasOwnProp( INTERNAL_TO_ID, pkg ) ) {
		return INTERNAL_TO_ID[ pkg ];
	}
	if ( hasOwnProp( STANDALONE_TO_ID, pkg ) ) {
		return STANDALONE_TO_ID[ pkg ];
	}
	return null;
}


// EXPORTS //

module.exports = pkg2id;
