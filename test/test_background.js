'use strict';

var sassyTest = new SassyTest({
  // Path to Zen Grids and optional dependencies.
  includePaths: [
    path.join(__dirname, '../sass'),
    path.join(__dirname, '../node_modules/support-for/sass')
  ],
  // Path to this suite's fixtures.
  fixtures: path.join(__dirname, 'fixtures/background')
});

describe('@import "zen-grids/background";', function() {
  it('should output a background image', function() {
    return sassyTest.renderFixture('./');
  });
});
