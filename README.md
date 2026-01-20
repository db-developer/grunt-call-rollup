# grunt-call-rollup

Integrate Rollup builds directly into Grunt processes using the Rollup JavaScript API.

[![npm version](https://img.shields.io/npm/v/grunt-call-rollup?color=blue)](https://www.npmjs.com/package/grunt-call-rollup)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![jsdoc](https://img.shields.io/static/v1?label=jsdoc&message=%20api%20&color=blue)](https://jsdoc.app/)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![dependencies](https://img.shields.io/librariesio/release/npm/grunt-call-rollup)](https://libraries.io/)
![Build & Test](https://github.com/db-developer/grunt-call-rollup/actions/workflows/ci.yml/badge.svg)
[![codecov](https://codecov.io/gh/db-developer/grunt-call-rollup/branch/main/graph/badge.svg)](https://codecov.io/gh/db-developer/grunt-call-rollup)

## Content

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

## Getting started

This guide assumes that you are familiar with the use of
[npm](https://npmjs.com "Homepage of npm") and
[grunt](https://gruntjs.com "Homepage of grunt").  
The plugin can be installed using the following command:

```
npm install grunt-call-rollup --save-dev
```

Once installed, the plugin can be loaded from within your Gruntfile:

```
grunt.loadNpmTasks("grunt-call-rollup");
```

Set up the task configuration as described below (see usage) and run the task:

```
grunt call_rollup
```

Of course, the task can be integrated into any complex build process.

## Usage

The following examples assume that the Grunt plugin `load-grunt-config` is used.
Alternatively, the configuration can be integrated directly into the `gruntfile.js`.

```javascript
// file call_rollup.js
module.exports = function ( grunt, options ) {
  return {
    options: {
      config: ".conf/rollup.config.json" // path to Rollup configuration file
                        // 'config' is [required!] in either 'options' or a build target
    },
    always: { // target 'always' of Grunt multitask 'call_rollup'
      dryrun: true,     // outputs Rollup options but does not run Rollup
      override: {       // [optional!] a full or partial Rollup configuration which
                        // overrides the values found in the Rollup config file
      }
    }
  };
};
```

### How the task works

`grunt-call-rollup` does **not** invoke Rollup via the command line, `npx`, or a binary from
`node_modules/.bin`. Instead, Rollup is executed directly using its JavaScript API.

This means:

- No shell execution is involved
- No dependency on a globally installed Rollup binary
- Full control over the Rollup configuration object at runtime
