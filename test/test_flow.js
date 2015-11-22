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
    it('should add grid item base', function(done) {
      sassyTest.renderFixture('zen-flow-item-base/gutters', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should use gutter-method option', function(done) {
      sassyTest.renderFixture('zen-flow-item-base/gutter-method', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should use box-sizing option', function(done) {
      sassyTest.renderFixture('zen-flow-item-base/box-sizing', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should use direction option', function(done) {
      sassyTest.renderFixture('zen-flow-item-base/direction', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should use switch-direction option', function(done) {
      sassyTest.renderFixture('zen-flow-item-base/switch-direction', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should use rtl-selector option', function(done) {
      sassyTest.renderFixture('zen-flow-item-base/rtl-selector', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support IE 7', function(done) {
      sassyTest.renderFixture('zen-flow-item-base/ie', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should warn about IE 7 support', function(done) {
      sassyTest.renderFixture('zen-flow-item-base/warn-box-sizing-polyfill-path', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        result.warn[0].should.equal('Setting $box-sizing to border-box will fail for IE 7 and earlier because the $box-sizing-polyfill-path is empty.');
        done();
      });
    });
  });

  describe('@mixin zen-float()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('zen-float', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
