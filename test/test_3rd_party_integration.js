'use strict';

var eyeglass = require('eyeglass');
var importOnce = require('node-sass-import-once');

var sassyTest = new SassyTest({
  // Path to Zen Grids and optional dependencies.
  includePaths: [
    path.join(__dirname, '../sass'),
    path.join(__dirname, '../node_modules/support-for/sass')
  ],
  // Path to this suite's fixtures.
  fixtures: path.join(__dirname, 'fixtures/integration')
});

describe('compatibility with other libraries', function() {
  describe('Support-for', function() {
    it('should work with Support-for', function() {
      return sassyTest.renderFixture('support-for');
    });
  });

  describe('Eyeglass', function() {
    before(function(done) {
      this.sassyTest = new SassyTest({
        fixtures: path.join(__dirname, 'fixtures/integration/eyeglass')
      });
      done();
    });

    it('should fail to import Zen Grids without Eyeglass', function() {
      return this.sassyTest.renderFixture('import-zen-grids').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.include('File to import not found or unreadable: zen-grids');
      });
    });

    it('should import Zen Grids with Eyeglass', function() {
      return this.sassyTest.renderFixture('import-zen-grids', eyeglass({
        eyeglass: {
          // Eyeglass will look in the root for a package.json.
          root: this.sassyTest.fixture()
        }
      }));
    });
  });

  describe('node-sass-import-once', function() {
    it('should work with node-sass-import-once', function() {
      return sassyTest.renderFixture('node-sass-import-once', {
        importer: importOnce,
        importOnce: {
          index: false,
          css: false,
          bower: false
        }
      });
    });
  });
});
