/**
 * lib/options/index.js: grunt-call-rollup
 * 
 * Aggregated options API for `grunt-call-rollup`.
 *
 * This module exposes the public option-related functions that are
 * intended for external consumption.
 *
 * @module grunt-call-rollup/options
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
 *  Converts task-specific options for the `call_rollup` task into
 *  a plain options object used for executing Rollup.
 *
 *  This is a re-export of function [toArgs]{@link callrollup.md#.toArgs}
 *  published by module [options/callrollup]{@link callrollup.md}
 *
 *  @function module:grunt-call-rollup/options.toArgs
 *  @param   {grunt}        grunt    The Grunt runtime instance
 *  @param   {grunt.task}   task     The current Grunt task instance
 *  @param   {Object}      [options] Optional task options override
 *  @returns {Promise<Object>}       Resolved options object
 */
module.exports.toArgs = callrollup.toArgs