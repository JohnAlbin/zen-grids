'use strict';

var sassyTest = new SassyTest({
  // Path to Zen Grids and optional dependencies.
  includePaths: [
    path.join(__dirname, '../sass'),
    path.join(__dirname, '../node_modules/support-for/sass')
  ],
  // Path to this suite's fixtures.
  fixtures: path.join(__dirname, 'fixtures/grids')
});


describe('@import "zen-grids/grids";', function() {
  describe('@mixin zen-grid-container()', function() {
    it('should pass legacy tests', function() {
      return sassyTest.renderFixture('zen-grid-container');
    });
  });

  describe('@mixin zen-grid-item()', function() {
    it('should pass legacy tests', function() {
      return sassyTest.renderFixture('zen-grid-item');
    });
  });

  describe('@mixin zen-grid-item-base()', function() {
    it('should add grid item base', function() {
      return sassyTest.renderFixture('zen-grid-item-base/gutters');
    });

    it('should use gutter-method option', function() {
      return sassyTest.renderFixture('zen-grid-item-base/gutter-method');
    });

    it('should use box-sizing option', function() {
      return sassyTest.renderFixture('zen-grid-item-base/box-sizing');
    });

    it('should use direction option', function() {
      return sassyTest.renderFixture('zen-grid-item-base/direction');
    });

    it('should use switch-direction option', function() {
      return sassyTest.renderFixture('zen-grid-item-base/switch-direction');
    });

    it('should support IE 7', function() {
      return sassyTest.renderFixture('zen-grid-item-base/ie');
    });

    it('should warn about IE 7 support', function() {
      return sassyTest.renderFixture('zen-grid-item-base/warn-box-sizing-polyfill-path').then(function(result) {
        expect(result.warn[0]).to.equal('Setting $box-sizing to border-box will fail for IE 7 and earlier because the $box-sizing-polyfill-path is empty.');
      });
    });
  });

  describe('@mixin zen-new-row()', function() {
    it('should add clear', function() {
      return sassyTest.renderFixture('zen-new-row/clear');
    });

    it('should switch direction of clear', function() {
      return sassyTest.renderFixture('zen-new-row/switch-direction');
    });

    it('should add RTL rules', function() {
      return sassyTest.renderFixture('zen-new-row/rtl-selector');
    });
  });

  describe('@mixin zen-apply-gutter-padding()', function() {
    it('should add gutter padding', function() {
      return sassyTest.renderFixture('zen-apply-gutter-padding/gutters');
    });

    it('should add directional padding', function() {
      return sassyTest.renderFixture('zen-apply-gutter-padding/direction');
    });

    it('should switch directional padding', function() {
      return sassyTest.renderFixture('zen-apply-gutter-padding/switch-direction');
    });

    it('should add RTL rules', function() {
      return sassyTest.renderFixture('zen-apply-gutter-padding/rtl-selector');
    });
  });
});
