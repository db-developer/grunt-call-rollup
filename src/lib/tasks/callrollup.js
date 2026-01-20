/**
 * lib/tasks/callrollup.js: grunt-call-rollup
 * 
 * Implements the core logic of the `call_rollup` Grunt multitask.
 *
 * This module provides functions for loading Rollup, reading config files,
 * preparing task options, executing Rollup bundles, and registering the task.
 *
 * @module grunt-call-rollup/tasks/callrollup
 *
 *//*
 *  © 2024, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

const constants =  require( "../constants" );
const options   =  require( "../options"   );

/**
 *  String table initializer
 *  @ignore
 */
function _init_STRINGS() {
  const execute           = "execute";
  const config            = "config";
  const missingproperty   = "Missing property";
  const rollup            = "rollup";

  return {
    ERROR_MSG_MISSING_OBJ:        `${ execute }: ${ missingproperty } 'obj'.`,
    ERROR_MSG_MISSING_CONFIG:     `${ execute }: ${ missingproperty } 'obj.config'.`,
    ERROR_MSG_PARAMETER_CMDLINE:  "Parameter 'cmdline' must be of type {undefined|null|object}",
    ERROR_MSG_PARAMETER_CONFIG:   `Parameter '${ config }' does not specify a ${ rollup } ${ config } file`,
    LOGINTRO:                     `Will ${ execute }: ${ rollup } with ${ config }`,
    PACKAGE:                      `${ rollup }`,
    STRING:                       "string"
  };
}

/**
 *  String table
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 *  Loads a Node.js package, defaulting to `rollup`.
 *
 *  This function attempts to `require()` the given package name and
 *  resolves the module. If the package cannot be found, the promise
 *  is rejected and an optional Grunt error is logged.
 *
 *  @async
 *  @function module:grunt-call-rollup/tasks/callrollup.getPackage
 *  @param {grunt} grunt - The Grunt runtime instance, used for logging errors.
 *  @param {string} [pkg="rollup"] - The name of the package to require.
 *  @returns {Promise<Object>} Resolves with the required module.
 *  @throws {Error} If the package cannot be loaded.
 */
module.exports.getPackage = async function getPackage(grunt, pkg = _STRINGS.PACKAGE) {
  try { return require(pkg); } 
  catch (error) {
    if (grunt) {
      grunt.log.error(`missing dependency '${pkg}'`, error);
    }
    throw error;
  }
}

/**
 *  Loads and parses a Rollup configuration file.
 *
 *  This function attempts to load a Rollup config file (JS or JSON) using
 *  Rollup's `loadConfigFile` helper. Optional `cmdline` parameters can
 *  override configuration entries.
 *
 *  All warnings emitted by Rollup during config loading are flushed.
 * 
 *  @async
 *  @function module:grunt-call-rollup/tasks/callrollup.readConfig
 *  @param {grunt} grunt - The Grunt runtime instance, used for logging errors.
 *  @param {string} config - Path to the Rollup configuration file.
 *  @param {Object} [cmdline] - Optional command-line overrides for configuration.
 *  @returns {Promise<{options: Object[], warnings: Object}>} Resolves with
 *          the loaded configuration and warnings object.
 *  @throws {Error} If `config` is invalid or `cmdline` is not an object/null/undefined.
 */
module.exports.readConfig = async function readConfig(grunt, config, cmdline) {
  if (config === false || !(typeof config === "string" || config instanceof String)) {
    throw new Error(_STRINGS.ERROR_MSG_PARAMETER_CONFIG);
  }

  const { loadConfigFile } = await module.exports.getPackage(grunt, "rollup/loadConfigFile");

  if (cmdline !== undefined && cmdline !== null && Object.getPrototypeOf(cmdline) !== Object.prototype) {
    throw new Error(_STRINGS.ERROR_MSG_PARAMETER_CMDLINE);
  }

  // normalize cmdline
  cmdline = cmdline === null ? undefined : cmdline;

  const { options, warnings } = await loadConfigFile(config, cmdline);
  warnings.flush();

  return { options, warnings };
}

/**
 * Executes the Rollup bundler using the provided task options.
 *
 * This function performs the following steps:
 *   1. Validates the presence of the `obj` wrapper and its `config`.
 *   2. Loads the Rollup configuration via `readConfig`.
 *   3. Logs the configuration and any warnings.
 *   4. If `dryrun` is true, only logs the execution plan.
 *   5. Otherwise, loads the Rollup package and executes each bundle.
 *
 *  @async
 *  @function module:grunt-call-rollup/tasks/callrollup.execute
 *  @param {grunt} grunt - The Grunt runtime instance for logging.
 *  @param {grunt.task} task - The current Grunt task instance.
 *  @param {Object} obj - Wrapper object containing `config`, `override`, and `dryrun` properties.
 *  @param {string|boolean} obj.config - Path to the Rollup config file.
 *  @param {Object} [obj.override] - Optional command-line overrides for the configuration.
 *  @param {boolean} [obj.dryrun=false] - If true, only prints the planned execution without running Rollup.
 *  @returns {Promise<Object>} Resolves with either the original `obj` (for dryrun) or the Rollup instance.
 *  @throws {Error} If `obj` or `obj.config` is missing, or if configuration loading fails.
 */
module.exports.execute = async function execute(grunt, task, obj) {
  if (!obj) {
    throw new Error(_STRINGS.ERROR_MSG_MISSING_OBJ);
  }
  if (obj.config === undefined || obj.config === null) {
    throw new Error(_STRINGS.ERROR_MSG_MISSING_CONFIG);
  }

  // Load config and get options
  const { options, warnings } = await module.exports.readConfig(grunt, obj.config, obj.override);

  const logmsg = `${_STRINGS.LOGINTRO} ${JSON.stringify({ options, warnings })}`;

  if (obj.dryrun === true) {
    grunt.log.ok(logmsg);
    return obj;
  }

  grunt.verbose.ok(logmsg);

  // Load Rollup package
  const rollup = await module.exports.getPackage(grunt, _STRINGS.PACKAGE);

  // Execute each bundle
  for (const optionsObj of options) {
    const bundle = await rollup.rollup(optionsObj);
    await Promise.all(optionsObj.output.map(bundle.write));
  }

  return rollup;
}

/**
 *  Runs the `call_rollup` task for the given Grunt task instance.
 *
 *  This function performs the full execution pipeline:
 *    1. Converts task-specific options into an options object via `toArgs`.
 *    2. Executes Rollup with the resolved options using `execute`.
 *
 *  It returns a Promise that resolves once the task has completed, either
 *  successfully or with a Rollup instance.
 *
 *  @async
 *  @function module:grunt-call-rollup/tasks/callrollup.runTask
 *  @param {grunt} grunt - The Grunt runtime instance.
 *  @param {grunt.task} task - The current Grunt task instance.
 *  @returns {Promise<Object>} Resolves with the Rollup instance or task options, depending on execution.
 *  @throws {Error} If option resolution or Rollup execution fails.
 */
module.exports.runTask = async function runTask(grunt, task) {
  const obj = await options.toArgs(grunt, task);
  return module.exports.execute(grunt, task, obj);
}

/**
 *  Registers the `call_rollup` multitask with Grunt.
 *
 *  This is the main integration point for `grunt-call-rollup` in a Gruntfile.
 *  It wraps the asynchronous task execution pipeline:
 *    1. Resolves task options via `runTask`.
 *    2. Handles logging and error reporting.
 *
 *  @function registerMultiTask
 *  @memberof module:grunt-call-rollup/tasks/callrollup
 *  @param {grunt} grunt - The Grunt runtime instance.
 */
module.exports.registerMultiTask = function registerMultiTask( grunt ) {
  grunt.registerMultiTask( constants.TASKNAME, constants.TASKDESCRIPTION,
    /* istanbul ignore next */ function () {
    const task = this;
    const done = task.async();
    module.exports.runTask( grunt, task )
                  .then((       ) => { done()},
                        ( error ) => { grunt.log.error( error ); done( false )});
  });
}
