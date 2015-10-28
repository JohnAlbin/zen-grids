'use strict';

describe('compatibility with other libraries', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/integration')
    });
    done();
  });

  describe('Compass', function() {
    it('should work with Compass', function(done) {
      sassyTest.renderFixture('compass', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
