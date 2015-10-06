'use strict';

describe('Compass compatibility', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/compass')
    });
    done();
  });

  it('should work with Compass', function(done) {
    sassyTest.renderFixture('./', {}, function(error, result, expectedOutput) {
      should.not.exist(error);
      done();
    });
  });
});
