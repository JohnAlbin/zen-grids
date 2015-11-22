'use strict';

describe('@import "zen-grids/background";', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/background')
    });
    done();
  });

  it('should output a background image', function(done) {
    sassyTest.renderFixture('./', {}, function(error, result, expectedOutput) {
      should.not.exist(error);
      done();
    });
  });
});
