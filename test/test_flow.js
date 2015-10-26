'use strict';

describe('@import "zen-grids/flow";', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/flow')
    });
    done();
  });

  describe('@mixin zen-flow-item-width()', function() {
    it('should error on responsive layouts with no $parent-span', function(done) {
      sassyTest.renderFixture('zen-flow-item-width/error', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('For responsive layouts with a percentage-based grid width, you must set the $parent-column-span to the number of columns that the parent element spans.');
        done();
      });
    });

    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('zen-flow-item-width/legacy', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@mixin zen-flow-item-base()', function() {
    it('should have some tests');
  });

  describe('@mixin zen-float()', function() {
    it('should pass legacy tests', function (done) {
      sassyTest.renderFixture('zen-float', {}, function (error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
