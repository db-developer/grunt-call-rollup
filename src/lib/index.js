/**
 * lib/index.js: grunt-call-rollup
 *
 * Package interface of grunt-call-rollup.
 * All static members of this module are available for 3rd party access.
 * 
 * @module grunt-call-rollup
 *
 *//*
 *  © 2024, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

const tasks = require( "./tasks" );

/**
 *  Register a multitask for call_rollup.
 * 
 *  This function forwards to `tasks.registerMultiTask()` and is the main
 *  entry point for integrating the plugin into a Gruntfile.
 *
 *  This is a re-export of function 
 *  [registerMultiTask]{@link tasks/index.md#.registerMultiTask}
 *  published by module [tasks]{@link tasks/index.md}
 *
 *  @function module:grunt-call-rollup.registerMultiTask
 *  @param  {grunt} grunt - The Grunt runtime instance.
 */
module.exports.registerMultiTask = tasks.registerMultiTask;
