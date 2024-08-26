/**
 *  © 2024, slashlib.org.
 */
const expect = require( "expect.js" );

( async function() {
  describe( "02.09.options.index.spec.js - Testing module 'lib/options/index.js'", () => {
    const options = require( "../../lib/options" );

    describe( "Testing exports of module 'options'", () => {
      it( "Function 'toArgs' should exist", () => {
          expect( options.toArgs ).not.to.be( undefined  );
          expect( options.toArgs ).not.to.be( null       );
          expect( options.toArgs ).to.be.a(   "function" );
      });
    });
  });
})();
