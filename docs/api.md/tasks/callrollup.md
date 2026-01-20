
<br><a name="module_grunt-call-rollup/tasks/callrollup"></a>

## grunt-call-rollup/tasks/callrollup
> lib/tasks/callrollup.js: grunt-call-rollup> > Implements the core logic of the `call_rollup` Grunt multitask.> > This module provides functions for loading Rollup, reading config files,> preparing task options, executing Rollup bundles, and registering the task.


* [grunt-call-rollup/tasks/callrollup](#module_grunt-call-rollup/tasks/callrollup)
    * [.getPackage(grunt, [pkg])](#module_grunt-call-rollup/tasks/callrollup.getPackage) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.readConfig(grunt, config, [cmdline])](#module_grunt-call-rollup/tasks/callrollup.readConfig) ⇒ <code>Promise.&lt;{options: Array.&lt;Object&gt;, warnings: Object}&gt;</code>
    * [.execute(grunt, task, obj)](#module_grunt-call-rollup/tasks/callrollup.execute) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.runTask(grunt, task)](#module_grunt-call-rollup/tasks/callrollup.runTask) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.registerMultiTask(grunt)](#module_grunt-call-rollup/tasks/callrollup.registerMultiTask)


<br><a name="module_grunt-call-rollup/tasks/callrollup.getPackage"></a>

### grunt-call-rollup/tasks/callrollup.getPackage(grunt, [pkg]) ⇒ <code>Promise.&lt;Object&gt;</code>
> Loads a Node.js package, defaulting to `rollup`.> >  This function attempts to `require()` the given package name and>  resolves the module. If the package cannot be found, the promise>  is rejected and an optional Grunt error is logged.

**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolves with the required module.  
**Throws**:

- <code>Error</code> If the package cannot be loaded.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| grunt | <code>grunt</code> |  | The Grunt runtime instance, used for logging errors. |
| [pkg] | <code>string</code> | <code>&quot;\&quot;rollup\&quot;&quot;</code> | The name of the package to require. |


<br><a name="module_grunt-call-rollup/tasks/callrollup.readConfig"></a>

### grunt-call-rollup/tasks/callrollup.readConfig(grunt, config, [cmdline]) ⇒ <code>Promise.&lt;{options: Array.&lt;Object&gt;, warnings: Object}&gt;</code>
> Loads and parses a Rollup configuration file.> >  This function attempts to load a Rollup config file (JS or JSON) using>  Rollup's `loadConfigFile` helper. Optional `cmdline` parameters can>  override configuration entries.> >  All warnings emitted by Rollup during config loading are flushed.

**Returns**: <code>Promise.&lt;{options: Array.&lt;Object&gt;, warnings: Object}&gt;</code> - Resolves with         the loaded configuration and warnings object.  
**Throws**:

- <code>Error</code> If `config` is invalid or `cmdline` is not an object/null/undefined.


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | The Grunt runtime instance, used for logging errors. |
| config | <code>string</code> | Path to the Rollup configuration file. |
| [cmdline] | <code>Object</code> | Optional command-line overrides for configuration. |


<br><a name="module_grunt-call-rollup/tasks/callrollup.execute"></a>

### grunt-call-rollup/tasks/callrollup.execute(grunt, task, obj) ⇒ <code>Promise.&lt;Object&gt;</code>
> Executes the Rollup bundler using the provided task options.> > This function performs the following steps:>   1. Validates the presence of the `obj` wrapper and its `config`.>   2. Loads the Rollup configuration via `readConfig`.>   3. Logs the configuration and any warnings.>   4. If `dryrun` is true, only logs the execution plan.>   5. Otherwise, loads the Rollup package and executes each bundle.

**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolves with either the original `obj` (for dryrun) or the Rollup instance.  
**Throws**:

- <code>Error</code> If `obj` or `obj.config` is missing, or if configuration loading fails.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| grunt | <code>grunt</code> |  | The Grunt runtime instance for logging. |
| task | <code>grunt.task</code> |  | The current Grunt task instance. |
| obj | <code>Object</code> |  | Wrapper object containing `config`, `override`, and `dryrun` properties. |
| obj.config | <code>string</code>, <code>boolean</code> |  | Path to the Rollup config file. |
| [obj.override] | <code>Object</code> |  | Optional command-line overrides for the configuration. |
| [obj.dryrun] | <code>boolean</code> | <code>false</code> | If true, only prints the planned execution without running Rollup. |


<br><a name="module_grunt-call-rollup/tasks/callrollup.runTask"></a>

### grunt-call-rollup/tasks/callrollup.runTask(grunt, task) ⇒ <code>Promise.&lt;Object&gt;</code>
> Runs the `call_rollup` task for the given Grunt task instance.> >  This function performs the full execution pipeline:>    1. Converts task-specific options into an options object via `toArgs`.>    2. Executes Rollup with the resolved options using `execute`.> >  It returns a Promise that resolves once the task has completed, either>  successfully or with a Rollup instance.

**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolves with the Rollup instance or task options, depending on execution.  
**Throws**:

- <code>Error</code> If option resolution or Rollup execution fails.


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | The Grunt runtime instance. |
| task | <code>grunt.task</code> | The current Grunt task instance. |


<br><a name="module_grunt-call-rollup/tasks/callrollup.registerMultiTask"></a>

### grunt-call-rollup/tasks/callrollup.registerMultiTask(grunt)
> Registers the `call_rollup` multitask with Grunt.> >  This is the main integration point for `grunt-call-rollup` in a Gruntfile.>  It wraps the asynchronous task execution pipeline:>    1. Resolves task options via `runTask`.>    2. Handles logging and error reporting.


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | The Grunt runtime instance. |

