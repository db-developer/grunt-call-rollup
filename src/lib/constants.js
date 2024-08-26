
/**
 *	constants.js: grunt-call-rollup
 *
 *  @module grunt-call-rollup/constants
 *
 *//*
 *  © 2024, db-developer.
 *
 *  constants.js  is distributed  WITHOUT  ANY WARRANTY;  without  even  the
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * 
 */
"use strict";

/**
 *  String table
 *  @ignore
 */
const _STRINGS = {
  PROPERTY_TASKNAME:    "TASKNAME",
  PROPERTY_TASKDESC:    "TASKDESCRIPTION",
  TASKNAME:             "call_rollup",
  TASKDESCRIPTION:      "Run rollup bundler from grunt."
};

// Module exports:
Object.defineProperty( module.exports, _STRINGS.PROPERTY_TASKNAME, {
  value:    _STRINGS.TASKNAME,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.PROPERTY_TASKDESC, {
  value:    _STRINGS.TASKDESCRIPTION,
  writable: false, enumerable: true, configurable: false });
