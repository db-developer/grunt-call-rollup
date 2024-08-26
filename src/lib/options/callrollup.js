/**
 *	options/callrollup.js: grunt-call-rollup
 *
 *  @module grunt-call-rollup/options/callrollup
 *
 *//*
 *  © 2024, slashlib.org.
 *
 *  callrollup.js  is distributed  WITHOUT ANY  WARRANTY;  without  even the
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */
"use strict";

/**
 *  String table initializer
 *  @ignore
 */
function _init_STRINGS() {
  const toargs    = "toArgs";
  const errormsg  = `callrollup.js - Function '${ toargs }': missing parameter`;

  return {    
    ERROR_MSG_MISSING_GRUNT:          `${ errormsg } 'grunt'.`,
    ERROR_MSG_MISSING_OPTIONS:        `${ errormsg } 'options'.`,
    ERROR_MSG_MISSING_TASK:           `${ errormsg } 'task'.`,
    GETOPTIONS:                       "getOptions",
    GETTASKOPTIONS:                   "getTaskOptions",
    TOARGS:                           `${ toargs }`
  };
}

/**
 *  String table
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 *  Defines and returns the set of default options which
 *  is passed to task 'call_rollup'.
 *
 *  @return {Object}  check_outdated default options
 */
function getOptions() {
  return {
    config:                     false,  // typedoc configuration file
    dryrun:                     false   // dry run - do nothing just print cmd line
  };
}

/**
 *  Returns grunt task specific options for 'call_rollup'.
 *  Note: 'call_rollup' default options and configuration
 *        options have already been merged!
 *
 *  @param  {grunt.task}  task
 *
 *  @return {Object}  'callrollup' options for grunt task
 */
function getTaskOptions( task ) {
  const  dfltopts = JSON.parse( JSON.stringify( getOptions()));
  const  options  = JSON.parse( JSON.stringify( task.options()));
  return Object.assign( dfltopts, options );
}

/**
 *  Convert grunt task specific options for 'call_rollup' to an 
 *  array of arguments, which will be used for calling rollup.
 *
 *  @param  {grunt}                   grunt
 *  @param  {grunt.task}              task
 *  @return {Promise<Array<Object>>}  { args, opts }
 */
function toArgs( grunt, task, options ) {
  return new Promise(( resolve, reject ) => {
    if (( grunt === null ) || ( grunt === undefined )) {
          return reject( new Error( _STRINGS.ERROR_MSG_MISSING_GRUNT ));
    }
    else  if (( task === null ) || ( task === undefined )) {
          return reject( new Error( _STRINGS.ERROR_MSG_MISSING_TASK ));
    }
    else {
          options = options || getTaskOptions( task );
          /* istanbul ignore if */
          if (( options === null ) || ( options === undefined )) {
                return reject( new Error( _STRINGS.ERROR_MSG_MISSING_OPTIONS ));
          }
    }
    try { resolve({ ...options })}
    catch( error ) { /* istanbul ignore next */ reject( error ); }
  });
}

// Module exports:
Object.defineProperty( module.exports, _STRINGS.GETOPTIONS,     {
  value:    getOptions,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.GETTASKOPTIONS, {
  value:    getTaskOptions,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.TOARGS,         {
  value:    toArgs,
  writable: false, enumerable: true, configurable: false });
