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
    it('should return true when units are comparable', function(done) {
      sassyTest.renderFixture('zen-compare-units/comparable', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should return false and warn when units are not comparable', function(done) {
      sassyTest.renderFixture('zen-compare-units/warn', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        result.warn[0].should.equal('The layout cannot be calculated correctly; when using test feature, the units of the gutter (em must match the units of the grid width (rem).');
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
    it('should switch any direction', function(done) {
      sassyTest.renderFixture('zen-direction-switch/valid', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should warn about invalid directions', function(done) {
      sassyTest.renderFixture('zen-direction-switch/invalid', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        result.warn[0].should.equal('Invalid direction passed to zen-direction-switch().');
        done();
      });
    });
  });
});
