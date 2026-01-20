/**
 * lib/options/callrollup.js: grunt-call-rollup
 *
 * @module grunt-call-rollup/options/callrollup
 *
 *//*
 *  © 2024, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

/**
 *  String table initializer
 *  @ignore
 */
function _init_STRINGS() {
  const errormsg  = `callrollup.js - Function 'toArgs': missing parameter`;

  return {    
    ERROR_MSG_MISSING_GRUNT:          `${ errormsg } 'grunt'.`,
    ERROR_MSG_MISSING_OPTIONS:        `${ errormsg } 'options'.`,
    ERROR_MSG_MISSING_TASK:           `${ errormsg } 'task'.`
  };
}

/**
 *  String table
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 *  Returns the default options for the `call_rollup` task.
 *
 *  These defaults are used as a base and will be merged with
 *  task-specific options provided via `task.options()`.
 *
 *  @function module:grunt-call-rollup/options/callrollup.getOptions
 *  @returns {Object} default options object
 *  @property {string|false}  config  Path to a Rollup config file or `false`
 *  @property {boolean}       dryrun  If `true`, only log actions without executing Rollup
 */
module.exports.getOptions = function getOptions() {
  return {
    config: false,  // typedoc configuration file
    dryrun: false   // dry run - do nothing just print cmd line
  };
}

/**
 *  Returns task-specific options for the `call_rollup` task.
 *
 *  The returned object is a merge of the default options and the
 *  options provided via `task.options()`.
 *
 *  A deep clone is used to avoid side effects caused by Grunt's
 *  internal option handling in multi-task environments.
 *
 *  @function module:grunt-call-rollup/options/callrollup.getTaskOptions
 *  @param   {grunt.task} task  The current Grunt task instance
 *  @returns {Object}           Resolved task options
 */
module.exports.getTaskOptions = function getTaskOptions(task) {
  const dfltopts = structuredClone(module.exports.getOptions());
  const taskOpts = structuredClone(task.options());
  return { ...dfltopts, ...taskOpts };
}

/**
 *  Converts task-specific options for the `call_rollup` task into
 *  a plain options object used for executing Rollup.
 *
 *  If an `options` object is provided explicitly, it will be deep-cloned
 *  using `structuredClone()` to prevent unintended mutations.
 *  Otherwise, task options are resolved via `getTaskOptions()`.
 *
 *  @function module:grunt-call-rollup/options/callrollup.toArgs
 *  @param   {grunt}        grunt    The Grunt runtime instance
 *  @param   {grunt.task}   task     The current Grunt task instance
 *  @param   {Object}      [options] Optional task options override
 *  @returns {Promise<Object>}       Resolved options object
 *  @throws  {Error}                 If required parameters are missing
 */
module.exports.toArgs = async function toArgs(grunt, task, options) {
  if (grunt === null || grunt === undefined) {
    throw new Error(_STRINGS.ERROR_MSG_MISSING_GRUNT);
  }
  if (task === null || task === undefined) {
    throw new Error(_STRINGS.ERROR_MSG_MISSING_TASK);
  }

  options = options ? structuredClone(options) : module.exports.getTaskOptions(task);
  /* istanbul ignore if - should be impossible to reach*/
  if (options === null || options === undefined) {
    throw new Error(_STRINGS.ERROR_MSG_MISSING_OPTIONS);
  }

  return options;
}
