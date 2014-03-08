'use strict';

describe('@import "zen-grids/layout";', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/layout')
    });
    done();
  });

  describe('@mixin zen-layout()', function() {
    it('should temporarily override global variables', function(done) {
      sassyTest.renderFixture('zen-layout/override-globals', {}, function (error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should use overrides from a named layout', function(done) {
      sassyTest.renderFixture('zen-layout/use-layout', {}, function (error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should have parameters that override a named layout', function(done) {
      sassyTest.renderFixture('zen-layout/parameter-overrides-layout', {}, function (error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
