
<br><a name="module_grunt-call-rollup/options"></a>

## grunt-call-rollup/options
> lib/options/index.js: grunt-call-rollup> > Aggregated options API for `grunt-call-rollup`.> > This module exposes the public option-related functions that are> intended for external consumption.


<br><a name="module_grunt-call-rollup/options.toArgs"></a>

### grunt-call-rollup/options.toArgs(grunt, task, [options]) ⇒ <code>Promise.&lt;Object&gt;</code>
> Converts task-specific options for the `call_rollup` task into>  a plain options object used for executing Rollup.> >  This is a re-export of function [toArgs](callrollup.md#.toArgs)>  published by module [options/callrollup](callrollup.md)

**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolved options object  

| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | The Grunt runtime instance |
| task | <code>grunt.task</code> | The current Grunt task instance |
| [options] | <code>Object</code> | Optional task options override |

