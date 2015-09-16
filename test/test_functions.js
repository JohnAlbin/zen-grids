'use strict';

describe('@import "zen-grids/functions";', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/functions')
    });
    done();
  });

  describe('@function zen-half-gutter()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('zen-half-gutter', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function zen-compare-units()', function() {
    it.skip('should have some tests', function(done) {
      sassyTest.renderFixture('zen-compare-units', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function zen-unit-width()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('zen-unit-width', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function zen-grid-item-width()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('zen-grid-item-width', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function zen-direction-switch()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('zen-direction-switch', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        result.warn[0].should.equal('Invalid direction passed to zen-direction-switch().');
        done();
      });
    });
  });
});
