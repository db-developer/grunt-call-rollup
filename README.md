# grunt-call-rollup

run npm commands (like `install` or `update`) from grunt.

[![npm version](https://img.shields.io/npm/v/grunt-call-rollup?color=blue)](https://www.npmjs.com/package/grunt-call-rollup)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![jsdoc](https://img.shields.io/static/v1?label=jsdoc&message=%20api%20&color=blue)](https://jsdoc.app/)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![codecov](https://codecov.io/gh/db-developer/grunt-call-rollup/branch/master/graph/badge.svg)](https://codecov.io/gh/db-developer/grunt-call-rollup)
[![Build Status](https://travis-ci.com/db-developer/grunt-call-rollup.svg?branch=master)](https://travis-ci.com/db-developer/grunt-call-rollup)
[![dependencies](https://img.shields.io/librariesio/release/npm/grunt-call-rollup)](https://libraries.io/)

This plugin is a fork of [grunt-npm-command](https://github.com/unindented/grunt-npm-command) (archived repository)  
Reason: https://nodejs.org/en/blog/vulnerability/april-2024-security-releases-2

## content ##

* Usage (see further down this page)
  * [Getting started guide](#getting-started)
  * [Usage and examples](#usage)

* Developers
  * [Testing grunt-call-rollup](docs/grunt.md#testing)
  * [Code coverage of tests for grunt-call-rollup](docs/grunt.md#code-coverage)
  * [Build grunt-call-rollup from scratch](docs/grunt.md#building)
  * [NPM integration of grunt-call-rollup](docs/grunt.md#npm_integration)
  * [Frameworks used for testing, building, etc.](docs/frameworks.md)
  * [API of package grunt-call-rollup](docs/api.index.md)

[Changelog](CHANGELOG.md)

## getting started ##

This guide assumes, that you are familiar with the use of
[npm](https://npmjs.com "Homepage of npm") and
[grunt](https://gruntjs.com "Homepage of grunt").  
The plugin can be installed by the following command:

<code>npm install grunt-call-rollup --save-dev</code>

Once installed, the plugin may be loaded from within your gruntfile:

<code>grunt.loadNpmTasks( "grunt-call-rollup" );</code>

Setup the task configuration as described below (see usage) and run the task:

<code>grunt call_rollup</code>

Of cause, the task can be integrated into any complex build process.

## usage ##

The following examples assume that the grunt plugin 'load-grunt-config' is used.
Alternatively, the code can of course be integrated into the 'gruntfile.js' file.  

```javascript
// file call_rollup.js
module.exports = function ( grunt, options ) {
  return {
    options: {
      config: ".conf/rollup.config.json" // path to rollup configuration file
                        // 'config' is [required!] in either 'options' or a 'build target' 
    },
    always: { // target 'always' of grunt multitask 'call_rollup'
      dryrun: true,     // outputs rollup options but does not run rollup
      override: {       // [optional!] a full or partial  rollup configuration which
                        // overrides the values found in the config rollup file
      }
    }
  };
};
```
For 'rollup &lt;command&gt;' and matching command line arguments see [npm Docs](https://docs.npmjs.com/)