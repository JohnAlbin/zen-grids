'use strict';

var Eyeglass = require('eyeglass').Eyeglass;
var eyeglass = new Eyeglass({});
var importOnce = require('node-sass-import-once');

describe('compatibility with other libraries', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/integration')
    });
    done();
  });

  describe('Support-for', function() {
    it('should work with Support-for', function(done) {
      sassyTest.renderFixture('support-for', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('Eyeglass', function() {
    it('should work with Eyeglass', function(done) {
      sassyTest.renderFixture('eyeglass', eyeglass.sassOptions(), function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('node-sass-import-once', function() {
    it('should work with node-sass-import-once', function(done) {
      sassyTest.renderFixture('node-sass-import-once', {
        importer: importOnce,
        importOnce: {
          index: false,
          css: false,
          bower: false
        }
      }, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
