/**
 *	Package interface of grunt-call-rollup<br />
 *  All static members of this module are available for 3rd party access.
 *
 *  @module grunt-call-rollup
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
const _m = {
  tasks:    require( "./tasks" )
}

/**
 *  Register a multitask for call_rollup.
 *
 *  @see    Function [registerMultiTask]{@link tasks/index.md#.registerMultiTask}
 *          published by module tasks for a detailed function description.
 *
 *  @function module:grunt-call-rollup.registerMultiTask
 *  @param  {grunt} grunt
 */
module.exports.registerMultiTask = _m.tasks.registerMultiTask
