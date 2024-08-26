/**
 *  © 2024, slashlib.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "02.00.options.callrollup.spec.js - Testing module 'lib/options/callrollup.js'", () => {
    const callrollup = require( "../../lib/options/callrollup" );

    describe( "Testing exports of module 'options/callrollup'", () => {
      it( "Function 'getOptions' should exist", () => {
          expect( callrollup.getOptions     ).not.to.be( undefined  );
          expect( callrollup.getOptions     ).not.to.be( null       );
          expect( callrollup.getOptions     ).to.be.a(   "function" );
      });
      it( "Function 'getTaskOptions' should exist", () => {
          expect( callrollup.getTaskOptions ).not.to.be( undefined  );
          expect( callrollup.getTaskOptions ).not.to.be( null       );
          expect( callrollup.getTaskOptions ).to.be.a(   "function" );
      });
      it( "Function 'toArgs' should exist", () => {
          expect( callrollup.toArgs         ).not.to.be( undefined  );
          expect( callrollup.toArgs         ).not.to.be( null       );
          expect( callrollup.toArgs         ).to.be.a(   "function" );
      });
    });

    describe( "Testing function 'getOptions' of module 'options/callrollup'", () => {
      it( "should be callable without parameters", () => {
          expect(() => { callrollup.getOptions(); }).not.to.throwException();
      });
      describe( "should return an object literal {object}", () => {
        const value = callrollup.getOptions();
        it( "with properties 'config', 'dryrun' and 'typedoc-plugin-markdown'", () => {
            expect( value ).to.be.an( "object" );
            expect( value.config                      ).not.to.be( undefined );
            expect( value.config                      ).not.to.be( null      );
            expect( value.config                      ).to.be.a(   "boolean" );
            expect( value.config === false            ).to.be.ok();
            expect( value.dryrun                      ).not.to.be( undefined );
            expect( value.dryrun                      ).not.to.be( null      );
            expect( value.dryrun                      ).to.be.a(   "boolean" );
            expect( value.dryrun === false            ).to.be.ok();
        });
      });
    });

    describe( "Testing function 'getTaskOptions' of module 'options/callrollup'", () => {
      it( "should not be callable without parameters", () => {
          const errmsg      = "Cannot read property 'options' of undefined";
          // WTF?!?!? Really??? *sigh*
          const errmsg_v_16 = "Cannot read properties of undefined (reading 'options')";
          expect(() => { callrollup.getTaskOptions(); }).to.throwException(( error ) => {
            expect( error ).to.be.a( TypeError );
            expect(( error.message === errmsg ) || ( error.message === errmsg_v_16 )).to.be.ok();
          });
      });
      it( "should be callable with parameter 'task' {grunt.task}", () => {
          expect(() => { callrollup.getTaskOptions( env.task ); }).not.to.throwException();
      });
      describe( "should return a value which", () => {
        const value = callrollup.getTaskOptions( env.task );
        // console.log( env.task.data );
        // console.log( value );
        it( "should be of type object", () => {
            expect( value ).to.be.an( "object" );
        });
        it( "should provide property 'config'", () => {
            expect( value.config ).not.to.be( undefined );
            expect( value.config ).not.to.be( null      );
            expect( value.config ).to.be.a(   "string"  );
            expect( value.config === "./somewhere/over/the/rainbow.json" ).to.be.ok();
        });
        it( "should provide property 'dryrun'", () => {
            expect( value.dryrun ).not.to.be( undefined );
            expect( value.dryrun ).not.to.be( null      );
            expect( value.dryrun ).to.be.a(   "boolean"  );
            expect( value.dryrun === false ).to.be.ok();
        });
      });
    });

    describe( "Testing function 'toArgs' of module 'options/callrollup'", () => {
      it( "should be callable without parameter 'grunt' {grunt} but get rejected", ( done ) => {
          const errmsg  = "callrollup.js - Function 'toArgs': missing parameter 'grunt'.";
          expect(() => { callrollup.toArgs()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable without parameter 'task' {task} but get rejected", ( done ) => {
          const errmsg  = "callrollup.js - Function 'toArgs': missing parameter 'task'.";
          expect(() => { callrollup.toArgs( env.grunt )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task} and resolve", ( done ) => {
          expect(() => { callrollup.toArgs( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      /** *******************************************************************************************
       *
       *  Test options...
       *
       */// *****************************************************************************************
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve", ( done ) => {
          expect(() => { callrollup.toArgs( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve", ( done ) => {
          expect(() => { callrollup.toArgs( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value        ).to.be.an( "object"  );
                                      expect( value.config ).to.be.a(  "string"  );
                                      expect( value.dryrun ).to.be.a(  "boolean" );
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
    });
  });
})();
