/**
 *	index.js: grunt-call-rollup/options
 *
 *  @module grunt-call-rollup/options
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
const _m = { callrollup: require( "./callrollup" )};

/**
 *  Create rollup arguments
 *
 *  @see    Function [toArgs]{@link callrollup.md#.toArgs}
 *          published by module callrollup for a detailed function description.
 *
 *  @function module:grunt-call-rollup/options.toArgs
 *  @param  {grunt}           grunt
 *  @param  {grunt.task}      task
 *
 *  @return {Promise<Object>} obj
 *  @return {Array<strings>}  obj.args  an array of arguments
 *  @return {Array<any>}      obj.opts  an array of options
 */
module.exports.toArgs = _m.callrollup.toArgs