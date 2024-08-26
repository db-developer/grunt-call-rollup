
<br><a name="module_grunt-call-npm/tasks/callnpm"></a>

## grunt-call-npm/tasks/callnpm
> tasks/callnpm.js: grunt-call-npm


* [grunt-call-npm/tasks/callnpm](#module_grunt-call-npm/tasks/callnpm)
    * [.getPackage(grunt, pkg)](#module_grunt-call-npm/tasks/callnpm.getPackage) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.readConfig(grunt, config, cmdline)](#module_grunt-call-npm/tasks/callnpm.readConfig) ⇒ <code>Promise</code>
    * [.execute(grunt, task, obj)](#module_grunt-call-npm/tasks/callnpm.execute)
    * [.runTask()](#module_grunt-call-npm/tasks/callnpm.runTask) ⇒ <code>Promise</code>
    * [.registerMultiTask(grunt)](#module_grunt-call-npm/tasks/callnpm.registerMultiTask)


<br><a name="module_grunt-call-npm/tasks/callnpm.getPackage"></a>

### grunt-call-npm/tasks/callnpm.getPackage(grunt, pkg) ⇒ <code>Promise.&lt;Object&gt;</code>
> Tries to load a package. The package name defaults to 'rollup'

**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolves with module 'rollup' by default.  

| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>Grunt</code> |  |
| pkg | <code>string</code> | Name of the package to resolve. Defaults to 'rollup' |


<br><a name="module_grunt-call-npm/tasks/callnpm.readConfig"></a>

### grunt-call-npm/tasks/callnpm.readConfig(grunt, config, cmdline) ⇒ <code>Promise</code>
> Tries to lod a typedoc config file (must be json format)


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>Grunt</code> |  |
| config | <code>string</code> | path to config file 'rollup.js' |
| cmdline | <code>object</code> | commandline parameters in json format, overriding config entries. |


<br><a name="module_grunt-call-npm/tasks/callnpm.execute"></a>

### grunt-call-npm/tasks/callnpm.execute(grunt, task, obj)
> Return a promise for executing>    'node --[node opts] call-npm --[opts]'


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | the runtime 'instance' of grunt. |
| task | <code>grunt.task</code> | the current task |
| obj | <code>Object</code> | wrapper for options and arguments. |


<br><a name="module_grunt-call-npm/tasks/callnpm.runTask"></a>

### grunt-call-npm/tasks/callnpm.runTask() ⇒ <code>Promise</code>
> Run the 'call_rollup' task.

**Returns**: <code>Promise</code> - ... required by callee to terminate async call (on "then")  

<br><a name="module_grunt-call-npm/tasks/callnpm.registerMultiTask"></a>

### grunt-call-npm/tasks/callnpm.registerMultiTask(grunt)
> Registers the 'call_rollup' multitask.


| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 

