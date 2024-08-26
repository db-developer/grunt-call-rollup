/**
 *	tasks/callnpm.js: grunt-call-npm
 *
 *  @module grunt-call-npm/tasks/callnpm
 *
 *//*
 *  © 2024, slashlib.org.
 *
 *  tasks/callnpm.js  is distributed WITHOUT  ANY WARRANTY; without even the
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */
"use strict";

/**
 *  Module table
 *  @ignore
 */
const _m = {
  const:    require( "../constants" ),
  options:  require( "../options"   )
};

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
 *  Tries to load a package. The package name defaults to 'rollup'
 * 
 *  @param   {Grunt}           grunt 
 *  @param   {string}          pkg    - Name of the package to resolve. Defaults to 'rollup'
 * 
 *  @returns {Promise<Object>} Resolves with module 'rollup' by default.
 */
module.exports.getPackage = function getPackage( grunt, pkg = _STRINGS.PACKAGE ) {
  try { return Promise.resolve( require( pkg ))}
  catch( e ) {
    if ( grunt ) { grunt.log.error( `missing dependency '${ pkg }'`, e )}
    return Promise.reject( e );
  }
}

/**
 *  Tries to lod a typedoc config file (must be json format)
 * 
 *  @param   {Grunt}   grunt
 *  @param   {string}  config   - path to config file 'rollup.js'
 *  @param   {object}  cmdline  - commandline parameters in json format, overriding config entries.
 *  @returns {Promise}
 */
module.exports.readConfig = function readConfig( grunt, config, cmdline ) {
  if (( config !== false ) && (( typeof( config ) === _STRINGS.STRING ) || ( config instanceof String ))) {
        return module.exports.getPackage( grunt, "rollup/loadConfigFile" ).then(({ loadConfigFile }) => {
          if (( cmdline === undefined ) || ( cmdline === null ) || ( Object.getPrototypeOf( cmdline ) === Object.prototype )) {
                cmdline = ( cmdline === null ) ? undefined : cmdline;
                return loadConfigFile( config, cmdline ).then(({ options, warnings }) => {
                        // print all warnings
                        warnings.flush();
                        return { options, warnings }
                      });
          }
          else  return Promise.reject( new Error( _STRINGS.ERROR_MSG_PARAMETER_CMDLINE ));
        });
  }
  else  return Promise.reject( new Error( _STRINGS.ERROR_MSG_PARAMETER_CONFIG ));
}

/**
 *  Return a promise for executing
 *    'node --[node opts] call-npm --[opts]'
 *
 *  @param  {grunt}       grunt the runtime 'instance' of grunt.
 *  @param  {grunt.task}  task  the current task
 *  @param  {Object}      obj   wrapper for options and arguments.
 * 
 */
module.exports.execute = function execute( grunt, task, obj ) {
  return new Promise(( resolve, reject ) => {
    try {
      if ( ! obj ) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_OBJ );
      }
      else if (( obj?.config === undefined ) || ( obj?.config === null )) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_CONFIG );
      }
      else module.exports.readConfig( grunt, obj?.config, obj?.override ).then(({ options, warnings }) => {
           const logmsg = `${ _STRINGS.LOGINTRO } ${ JSON.stringify({ options, warnings }) }`;

           if ( obj?.dryrun === true ) {
                grunt.log.ok( logmsg );
                resolve( obj );
           }
           else {
                grunt.verbose.ok( logmsg );

                module.exports.getPackage( grunt, _STRINGS.PACKAGE ).then( async ( rollup ) => {
                  for ( const optionsObj of options ) {
                        const bundle = await rollup.rollup( optionsObj );
                        await Promise.all( optionsObj.output.map( bundle.write ))
                  }
                  resolve( rollup );
                }).catch(( error ) => { reject( error )});
           }
      }).catch(( error ) => { reject( error )});
    }
    catch( error ) { reject( error )}
  });
}

/**
 *  Run the 'call_rollup' task.
 *
 *  @return {Promise} ... required by callee to terminate async call (on "then")
 * 
 */
module.exports.runTask = function runTask( grunt, task ) {
  return _m.options.toArgs( grunt, task ).then(( obj ) => { return module.exports.execute( grunt, task, obj )});
}

/**
 *  Registers the 'call_rollup' multitask.
 *
 *  @param  {grunt} grunt
 * 
 */
module.exports.registerMultiTask = function registerMultiTask( grunt ) {
  grunt.registerMultiTask( _m.const.TASKNAME, _m.const.TASKDESCRIPTION,
    /* istanbul ignore next */ function () {
    const task = this;
    const done = task.async();
    module.exports.runTask( grunt, task )
                  .then((       ) => { done()},
                        ( error ) => { grunt.log.error( error ); done( false )});
  });
}
