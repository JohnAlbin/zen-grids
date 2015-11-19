'use strict';

describe('@import "zen-grids/undo";', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/undo')
    });
    done();
  });

  describe('@mixin undo-zen-grid-container()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('undo-zen-grid-container', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@mixin undo-zen-grid-item()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('undo-zen-grid-item', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@mixin undo-zen-grid-item-base()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('undo-zen-grid-item-base', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@mixin undo-zen-new-row()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('undo-zen-new-row', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@mixin undo-zen-apply-gutter-padding()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('undo-zen-apply-gutter-padding', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
