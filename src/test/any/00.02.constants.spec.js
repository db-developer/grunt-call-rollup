/**
 *  © 2024, slashlib.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  describe( "00.02.constants.spec.js - Testing module 'lib/constants.js'", () => {
    const constants = require( "../../lib/constants" );

    describe( "Testing exports of module 'options/callnpm'", () => {
      it( "Property 'TASKNAME' should exist", () => {
          const taskname = "call_rollup"
          expect( constants.TASKNAME        ).not.to.be( undefined  );
          expect( constants.TASKNAME        ).not.to.be( null       );
          expect( constants.TASKNAME        ).to.be.a(   "string"   );
          expect( constants.TASKNAME === taskname ).to.be.ok(       );
      });
      it( "Property 'TASKDESCRIPTION' should exist", () => {
          const desc = "Run rollup bundler from grunt.";
          expect( constants.TASKDESCRIPTION ).not.to.be( undefined  );
          expect( constants.TASKDESCRIPTION ).not.to.be( null       );
          expect( constants.TASKDESCRIPTION ).to.be.a(   "string"   );
          expect( constants.TASKDESCRIPTION === desc ).to.be.ok(    );
      });
    });
   
  });
})();
