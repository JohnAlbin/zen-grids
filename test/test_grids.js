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
      sassyTest.renderFixture('zen-grid-container', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@mixin zen-grid-item()', function() {
    it('should pass legacy tests', function(done) {
      sassyTest.renderFixture('zen-grid-item', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@mixin zen-grid-item-base()', function() {
    it('should add grid item base', function(done) {
      sassyTest.renderFixture('zen-grid-item-base/gutters', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should use gutter-method option', function(done) {
      sassyTest.renderFixture('zen-grid-item-base/gutter-method', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should use box-sizing option', function(done) {
      sassyTest.renderFixture('zen-grid-item-base/box-sizing', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should use direction option', function(done) {
      sassyTest.renderFixture('zen-grid-item-base/direction', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should use switch-direction option', function(done) {
      sassyTest.renderFixture('zen-grid-item-base/switch-direction', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support IE 7', function(done) {
      sassyTest.renderFixture('zen-grid-item-base/ie', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should warn about IE 7 support', function(done) {
      sassyTest.renderFixture('zen-grid-item-base/warn-box-sizing-polyfill-path', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        result.warn[0].should.equal('Setting $box-sizing to border-box will fail for IE 7 and earlier because the $box-sizing-polyfill-path is empty.');
        done();
      });
    });
  });

  describe('@mixin zen-new-row()', function() {
    it('should add clear', function(done) {
      sassyTest.renderFixture('zen-new-row/clear', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should switch direction of clear', function(done) {
      sassyTest.renderFixture('zen-new-row/switch-direction', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add RTL rules', function(done) {
      sassyTest.renderFixture('zen-new-row/rtl-selector', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@mixin zen-apply-gutter-padding()', function() {
    it('should add gutter padding', function(done) {
      sassyTest.renderFixture('zen-apply-gutter-padding/gutters', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add directional padding', function(done) {
      sassyTest.renderFixture('zen-apply-gutter-padding/direction', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should switch directional padding', function(done) {
      sassyTest.renderFixture('zen-apply-gutter-padding/switch-direction', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add RTL rules', function(done) {
      sassyTest.renderFixture('zen-apply-gutter-padding/rtl-selector', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
