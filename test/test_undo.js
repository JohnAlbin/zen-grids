'use strict';

var sassyTest = new SassyTest({
  // Path to Zen Grids and optional dependencies.
  includePaths: [
    path.join(__dirname, '../sass'),
    path.join(__dirname, '../node_modules/support-for/sass')
  ],
  // Path to this suite's fixtures.
  fixtures: path.join(__dirname, 'fixtures/undo')
});


describe('@import "zen-grids/undo";', function() {
  describe('@mixin undo-zen-grid-container()', function() {
    it('should pass legacy tests', function() {
      return sassyTest.renderFixture('undo-zen-grid-container');
    });
  });

  describe('@mixin undo-zen-grid-item()', function() {
    it('should pass legacy tests', function() {
      return sassyTest.renderFixture('undo-zen-grid-item');
    });
  });

  describe('@mixin undo-zen-grid-item-base()', function() {
    it('should pass legacy tests', function() {
      return sassyTest.renderFixture('undo-zen-grid-item-base');
    });
  });

  describe('@mixin undo-zen-new-row()', function() {
    it('should pass legacy tests', function() {
      return sassyTest.renderFixture('undo-zen-new-row');
    });
  });

  describe('@mixin undo-zen-apply-gutter-padding()', function() {
    it('should pass legacy tests', function() {
      return sassyTest.renderFixture('undo-zen-apply-gutter-padding');
    });
  });
});
