/**
 * lib/tasks/index.js: grunt-call-rollup
 *
 * Aggregated tasks API for `grunt-call-rollup`.
 *
 * This module exposes the public task-related functions that are
 * intended for external consumption.
 * 
 * @module grunt-call-rollup/tasks
 *
 *//*
 *  © 2024, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

const callrollup = require( "./callrollup" );

/**
 *  Registers the `call_rollup` multitask with Grunt.
 *
 *  This function is the main entry point to integrate `grunt-call-rollup`
 *  into a Gruntfile. Internally, it forwards to
 *  [callrollup.registerMultiTask]{@link ./callrollup.md#.registerMultiTask}.
 *
 *  @function module:grunt-call-rollup/tasks.registerMultiTask
 *  @param  {grunt} grunt - The Grunt runtime instance.
 */
module.exports.registerMultiTask = callrollup.registerMultiTask
