'use strict';

var sassyTest = new SassyTest({
  // Path to Zen Grids and optional dependencies.
  includePaths: [
    path.join(__dirname, '../sass'),
    path.join(__dirname, '../node_modules/support-for/sass')
  ],
  // Path to this suite's fixtures.
  fixtures: path.join(__dirname, 'fixtures/flow')
});

describe('@import "zen-grids/flow";', function() {
  describe('@mixin zen-flow-item-width()', function() {
    it('should error on responsive layouts with no $parent-span', function() {
      return sassyTest.renderFixture('zen-flow-item-width/error').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('For responsive layouts with a percentage-based grid width, you must set the $parent-column-span to the number of columns that the parent element spans.');
      });
    });

    it('should pass legacy tests', function() {
      return sassyTest.renderFixture('zen-flow-item-width/legacy');
    });
  });

  describe('@mixin zen-flow-item-base()', function() {
    it('should add grid item base', function() {
      return sassyTest.renderFixture('zen-flow-item-base/gutters');
    });

    it('should use gutter-method option', function() {
      return sassyTest.renderFixture('zen-flow-item-base/gutter-method');
    });

    it('should use box-sizing option', function() {
      return sassyTest.renderFixture('zen-flow-item-base/box-sizing');
    });

    it('should use direction option', function() {
      return sassyTest.renderFixture('zen-flow-item-base/direction');
    });

    it('should use switch-direction option', function() {
      return sassyTest.renderFixture('zen-flow-item-base/switch-direction');
    });

    it('should use rtl-selector option', function() {
      return sassyTest.renderFixture('zen-flow-item-base/rtl-selector');
    });

    it('should support IE 7', function() {
      return sassyTest.renderFixture('zen-flow-item-base/ie');
    });

    it('should warn about IE 7 support', function() {
      return sassyTest.renderFixture('zen-flow-item-base/warn-box-sizing-polyfill-path').then(function(result) {
        expect(result.warn[0]).to.equal('Setting $box-sizing to border-box will fail for IE 7 and earlier because the $box-sizing-polyfill-path is empty.');
      });
    });
  });

  describe('@mixin zen-float()', function() {
    it('should pass legacy tests', function() {
      return sassyTest.renderFixture('zen-float');
    });
  });
});
