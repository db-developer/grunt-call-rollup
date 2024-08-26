
<br><a name="module_grunt-call-rollup/options/callrollup"></a>

## grunt-call-rollup/options/callrollup
> options/callrollup.js: grunt-call-rollup


* [grunt-call-rollup/options/callrollup](#module_grunt-call-rollup/options/callrollup)
    * [~getOptions()](#module_grunt-call-rollup/options/callrollup..getOptions) ⇒ <code>Object</code>
    * [~getTaskOptions(task)](#module_grunt-call-rollup/options/callrollup..getTaskOptions) ⇒ <code>Object</code>
    * [~toArgs(grunt, task)](#module_grunt-call-rollup/options/callrollup..toArgs) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>


<br><a name="module_grunt-call-rollup/options/callrollup..getOptions"></a>

### grunt-call-rollup/options/callrollup~getOptions() ⇒ <code>Object</code>
> Defines and returns the set of default options which>  is passed to task 'call_rollup'.

**Returns**: <code>Object</code> - check_outdated default options  

<br><a name="module_grunt-call-rollup/options/callrollup..getTaskOptions"></a>

### grunt-call-rollup/options/callrollup~getTaskOptions(task) ⇒ <code>Object</code>
> Returns grunt task specific options for 'call_rollup'.>  Note: 'call_rollup' default options and configuration>        options have already been merged!

**Returns**: <code>Object</code> - 'callrollup' options for grunt task  

| Param | Type |
| --- | --- |
| task | <code>grunt.task</code> | 


<br><a name="module_grunt-call-rollup/options/callrollup..toArgs"></a>

### grunt-call-rollup/options/callrollup~toArgs(grunt, task) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
> Convert grunt task specific options for 'call_rollup' to an >  array of arguments, which will be used for calling rollup.

**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - { args, opts }  

| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 
| task | <code>grunt.task</code> | 

