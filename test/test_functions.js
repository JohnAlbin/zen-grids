'use strict';

var sassyTest = new SassyTest({
  // Path to Zen Grids and optional dependencies.
  includePaths: [
    path.join(__dirname, '../sass'),
    path.join(__dirname, '../node_modules/support-for/sass')
  ],
  // Path to this suite's fixtures.
  fixtures: path.join(__dirname, 'fixtures/functions')
});

describe('@import "zen-grids/functions";', function() {
  describe('@function zen-half-gutter()', function() {
    it('should pass legacy tests', function() {
      return sassyTest.renderFixture('zen-half-gutter');
    });
  });

  describe('@function zen-compare-units()', function() {
    it('should return true when units are comparable', function() {
      return sassyTest.renderFixture('zen-compare-units/comparable');
    });

    it('should return false and warn when units are not comparable', function() {
      return sassyTest.renderFixture('zen-compare-units/warn').then(function(result) {
        expect(result.warn[0]).to.equal('The layout cannot be calculated correctly; when using test feature, the units of the gutter (em must match the units of the grid width (rem).');
      });
    });
  });

  describe('@function zen-unit-width()', function() {
    it('should pass legacy tests', function() {
      return sassyTest.renderFixture('zen-unit-width');
    });
  });

  describe('@function zen-grid-item-width()', function() {
    it('should pass legacy tests', function() {
      return sassyTest.renderFixture('zen-grid-item-width');
    });
  });

  describe('@function zen-direction-switch()', function() {
    it('should switch any direction', function() {
      return sassyTest.renderFixture('zen-direction-switch/valid');
    });

    it('should warn about invalid directions', function() {
      return sassyTest.renderFixture('zen-direction-switch/invalid').then(function(result) {
        expect(result.warn[0]).to.equal('Invalid direction passed to zen-direction-switch().');
      });
    });
  });
});
