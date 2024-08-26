/**
 *  © 2024, slashtasks.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "03.00.tasks.callrollup.spec.js - Testing module 'lib/task/callrollup.js'", () => {
    const tasks      = require( "../../lib/tasks/callrollup"   );
    const cfgdir     = "src/test/tmp/";

    describe( "Testing exports of module 'callrollup'", () => {
      it( "Function 'execute' should exist", () => {
          expect( tasks.execute    ).not.to.be( undefined  );
          expect( tasks.execute    ).not.to.be( null       );
          expect( tasks.execute    ).to.be.a(   "function" );
      });
      it( "Function 'getPackage' should exist", () => {
          expect( tasks.getPackage ).not.to.be( undefined  );
          expect( tasks.getPackage ).not.to.be( null       );
          expect( tasks.getPackage ).to.be.a(   "function" );
      });
      it( "Function 'readConfig' should exist", () => {
          expect( tasks.readConfig ).not.to.be( undefined  );
          expect( tasks.readConfig ).not.to.be( null       );
          expect( tasks.readConfig ).to.be.a(   "function" );
      });
      it( "Function 'runTask' should exist", () => {
          expect( tasks.runTask    ).not.to.be( undefined  );
          expect( tasks.runTask    ).not.to.be( null       );
          expect( tasks.runTask    ).to.be.a(   "function" );
      });
      it( "Function 'registerMultiTask' should exist", () => {
          expect( tasks.registerMultiTask ).not.to.be( undefined  );
          expect( tasks.registerMultiTask ).not.to.be( null       );
          expect( tasks.registerMultiTask ).to.be.a(   "function" );
      });
    });

    describe( "Testing function 'getPackage' of module 'callrollup'", () => {
      it( "should be callable without parameters and resolve", ( done ) => {
          expect(() => { tasks.getPackage()
                              .then(( value  ) => { done()})
                              .catch(( error ) => { done( error )});
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
      it( "should be callable with parameter 'pkg' and get rejected", ( done ) => {
          const errmsg = "Cannot find module 'hurz'";
          expect(() => { tasks.getPackage( undefined, "hurz" )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error.message );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message.startsWith( errmsg )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
      it( "should be callable with parameters 'grunt' and 'pkg' and get rejected", ( done ) => {
          const errmsg = "Cannot find module 'hurz'";
          expect(() => { tasks.getPackage( env.grunt, "hurz" )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error.message );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message.startsWith( errmsg )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
    });

    describe( "Testing function 'readConfig' of module 'callrollup'", () => {
      it( "should be callable without parameters and get rejected", ( done ) => {
          const errmsg = "Parameter 'config' does not specify a rollup config file";
          expect(() => { tasks.readConfig()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error.message );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message.startsWith( errmsg )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
      it( "should be callable with parameter 'config' and 'cmdline' {string} and get rejected", ( done ) => {
          const errmsg = "Parameter 'cmdline' must be of type {undefined|null|object}";
          expect(() => { tasks.readConfig( undefined, `${ cfgdir }/rollup.test.0.config.js`, "blubb" )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error.message );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message.startsWith( errmsg )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
      it( "should be callable with parameter 'config' and resolve", ( done ) => {
          expect(() => { tasks.readConfig( undefined, `${ cfgdir }/rollup.test.0.config.js`, undefined )
                              .then(( value ) => { 
                                      // console.log( value );
                                      expect( value ).to.be.an( Object );
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
      it( "should be callable with parameter 'config' and 'cmdline' {null} and resolve", ( done ) => {
          expect(() => { tasks.readConfig( undefined, `${ cfgdir }/rollup.test.0.config.js`, null )
                              .then(( value ) => { 
                                      // console.log( value );
                                      expect( value ).to.be.an( Object );
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
    });

    describe( "Testing function 'execute' of module 'callrollup'", () => {
      it( "should be callable without parameters but get rejected", ( done ) => {
          const errmsg = "execute: Missing property 'obj'.";
          expect(() => { tasks.execute()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
      it( "should be callable with parameter 'obj' { } and get rejected", ( done ) => {
          const errmsg  = "execute: Missing property 'obj.config'.";
          expect(() => { tasks.execute( undefined, undefined, { })
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
      it( "should be callable with parameter 'obj' { config: } and get rejected", ( done ) => {
          const errmsg  = "Cannot read properties of undefined (reading 'log')";
          expect(() => { tasks.execute( undefined, undefined, { dryrun: true, config: `${ cfgdir }/rollup.test.0.config.js` })
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( TypeError );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
      it( "should be callable with parameters 'grunt' and 'obj' { dryrun, config: } and resolve", ( done ) => {
          expect(() => { tasks.execute( env.grunt, undefined, { dryrun: true, config: `${ cfgdir }/rollup.test.0.config.js` })
                              .then((  value ) => { done( )})
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
      it( "should be callable with parameters 'grunt' and 'obj' { config: } and resolve", ( done ) => {
          const errmsg  = "Could not resolve entry module \"src/index.js\".";
          expect(() => { tasks.execute( env.grunt, undefined, { config: `${ cfgdir }/rollup.test.0.config.js` })
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error.message );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
      it( "should be callable with parameters 'grunt' and 'obj' { config: } and resolve", ( done ) => {
          expect(() => { tasks.execute( env.grunt, undefined, { config: `${ cfgdir }/rollup.test.1.config.js` })
                              .then((  value ) => { done( )})
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
    });

    describe( "Testing function 'runTask' of module 'callrollup'", () => {
      it( "should be callable without parameters but get rejected", ( done ) => {
          const errmsg = "callrollup.js - Function 'toArgs': missing parameter 'grunt'.";
          expect(() => { tasks.runTask()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
      it( "should be callable without parameter 'grunt' {grunt} but get rejected", ( done ) => {
          const errmsg = "callrollup.js - Function 'toArgs': missing parameter 'task'.";
          expect(() => { tasks.runTask( env.grunt )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
      it( "should be callable with parameters 'grunt' {grunt} and 'task' {task} but get rejected", ( done ) => {
          const errmsg = "Cannot find module";
          expect(() => { tasks.runTask( env.grunt, env.task )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error.message );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message.startsWith( errmsg )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException(( error ) => { console.error( error )});
      });
    });

    describe( "Testing function 'registerMultiTask' of module 'callrollup'", () => {
      const errmsg      = "Cannot read property 'registerMultiTask' of undefined";
      const errmsg_v_16 = "Cannot read properties of undefined (reading 'registerMultiTask')"
      it( "should not be callable without parameters", () => {
          expect(() => { tasks.registerMultiTask(); }).to.throwException(( error ) => {
            // console.log( error );
            expect( error ).to.be.an( Error );
            expect(( error.message === errmsg ) || ( error.message === errmsg_v_16 )).to.be.ok();
          });
      });
      it( "should be callable with parameter 'grunt' {grunt}", () => {
          expect(() => { tasks.registerMultiTask( env.grunt ); }).not.to.throwException();
      });
    });
  });
})();
