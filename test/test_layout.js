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
      sassyTest.renderFixture('zen-layout/override-globals', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should use overrides from a named layout', function(done) {
      sassyTest.renderFixture('zen-layout/use-layout', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should have parameters that override a named layout', function(done) {
      sassyTest.renderFixture('zen-layout/parameter-overrides-layout', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@mixin zen-breakpoint()', function() {
    it('should temporarily override global variables', function(done) {
      sassyTest.renderFixture('zen-breakpoint/override-globals', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should error if breakpoint() mixin does not exist', function(done) {
      sassyTest.renderFixture('zen-breakpoint/error', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('You need to @import the breakpoint mixin before using zen-breakpoint().');
        done();
      });
    });
  });

  describe('@mixin zen-mq()', function() {
    it('should temporarily override global variables', function(done) {
      sassyTest.renderFixture('zen-mq/override-globals', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should error if mq() mixin does not exist', function(done) {
      sassyTest.renderFixture('zen-mq/error', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('You need to @import the mq mixin before using zen-mq().');
        done();
      });
    });
  });

  describe('@mixin zen-respond-to()', function() {
    it('should temporarily override global variables', function(done) {
      sassyTest.renderFixture('zen-respond-to/override-globals', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should error if respond-to() mixin does not exist', function(done) {
      sassyTest.renderFixture('zen-respond-to/error', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('You need to @import the respond-to mixin before using zen-respond-to().');
        done();
      });
    });

    it('should use a layout named the same as the context', function(done) {
      sassyTest.renderFixture('zen-respond-to/layout-same-as-context', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
