'use strict';

describe('@import "zen-grids/grids";', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/grids')
    });
    done();
  });

  describe('@mixin zen-grid-container()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('zen-grid-container', {}, function (error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@mixin zen-grid-item()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('zen-grid-item', {}, function (error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@mixin zen-grid-item-base()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('zen-grid-item-base', {}, function (error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@mixin zen-new-row()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('zen-new-row', {}, function (error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@mixin zen-apply-gutter-padding()', function() {
    it.skip('should have some tests', function(done) {
      sassyTest.renderFixture('zen-apply-gutter-padding', {}, function (error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
