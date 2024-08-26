/**
 *	index.js: grunt-call-rollup/tasks
 *
 *  @module grunt-call-rollup/tasks
 *
 *//*
 *  © 2024, slashlib.org.
 *
 *  index.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 */
"use strict";

/**
 *  Module table
 *  @ignore
 */
const _m = { callrollup:  require( "./callrollup" )};

/**
 *  Register a multitask for call_rollup.
 *
 *  @see    Function [registerMultiTask]{@link callrollup.md#.registerMultiTask}
 *          published by module 'callrollup' for a detailed function description.
 *
 *  @function module:grunt-call-rollup/tasks.registerMultiTask
 *  @param  {grunt} grunt
 */
module.exports.registerMultiTask = _m.callrollup.registerMultiTask
