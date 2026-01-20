
<br><a name="module_grunt-call-rollup/options/callrollup"></a>

## grunt-call-rollup/options/callrollup
> lib/options/callrollup.js: grunt-call-rollup


* [grunt-call-rollup/options/callrollup](#module_grunt-call-rollup/options/callrollup)
    * [.getOptions()](#module_grunt-call-rollup/options/callrollup.getOptions) ⇒ <code>Object</code>
    * [.getTaskOptions(task)](#module_grunt-call-rollup/options/callrollup.getTaskOptions) ⇒ <code>Object</code>
    * [.toArgs(grunt, task, [options])](#module_grunt-call-rollup/options/callrollup.toArgs) ⇒ <code>Promise.&lt;Object&gt;</code>


<br><a name="module_grunt-call-rollup/options/callrollup.getOptions"></a>

### grunt-call-rollup/options/callrollup.getOptions() ⇒ <code>Object</code>
> Returns the default options for the `call_rollup` task.> >  These defaults are used as a base and will be merged with>  task-specific options provided via `task.options()`.

**Returns**: <code>Object</code> - default options object  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| config | <code>string</code> \| <code>false</code> | Path to a Rollup config file or `false` |
| dryrun | <code>boolean</code> | If `true`, only log actions without executing Rollup |


<br><a name="module_grunt-call-rollup/options/callrollup.getTaskOptions"></a>

### grunt-call-rollup/options/callrollup.getTaskOptions(task) ⇒ <code>Object</code>
> Returns task-specific options for the `call_rollup` task.> >  The returned object is a merge of the default options and the>  options provided via `task.options()`.> >  A deep clone is used to avoid side effects caused by Grunt's>  internal option handling in multi-task environments.

**Returns**: <code>Object</code> - Resolved task options  

| Param | Type | Description |
| --- | --- | --- |
| task | <code>grunt.task</code> | The current Grunt task instance |


<br><a name="module_grunt-call-rollup/options/callrollup.toArgs"></a>

### grunt-call-rollup/options/callrollup.toArgs(grunt, task, [options]) ⇒ <code>Promise.&lt;Object&gt;</code>
> Converts task-specific options for the `call_rollup` task into>  a plain options object used for executing Rollup.> >  If an `options` object is provided explicitly, it will be deep-cloned>  using `structuredClone()` to prevent unintended mutations.>  Otherwise, task options are resolved via `getTaskOptions()`.

**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolved options object  
**Throws**:

- <code>Error</code> If required parameters are missing


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | The Grunt runtime instance |
| task | <code>grunt.task</code> | The current Grunt task instance |
| [options] | <code>Object</code> | Optional task options override |

