'use strict';

// Globals for all test_*.js files.
global.path = require('path');
global.should = require('chai').should();
global.sassyTest = require('sassy-test');

// This before() is run before any test_*.js file.
before(function(done) {
  sassyTest.configurePaths({
    // Path to Zen Grids.
    library: path.join(__dirname, '../stylesheets')
  });
  done();
});
