'use strict';

var $ = require('jquery'),
    _ = require('underscore');

require('bootstrap');
require('bootstrap-hover-dropdown');

console.log($);
console.log((typeof $().emulateTransitionEnd == 'function')); // this should return true

module.exports = {};
