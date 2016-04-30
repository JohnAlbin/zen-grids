'use strict';

var sassyTest = new SassyTest({
  // Path to Zen Grids and optional dependencies.
  includePaths: [
    path.join(__dirname, '../sass'),
    path.join(__dirname, '../node_modules/support-for/sass')
  ],
  // Path to this suite's fixtures.
  fixtures: path.join(__dirname, 'fixtures/layout')
});


describe('@import "zen-grids/layout";', function() {
  describe('@mixin zen-layout()', function() {
    it('should temporarily override global variables', function() {
      return sassyTest.renderFixture('zen-layout/override-globals');
    });

    it('should use overrides from a named layout', function() {
      return sassyTest.renderFixture('zen-layout/use-layout');
    });

    it('should have parameters that override a named layout', function() {
      return sassyTest.renderFixture('zen-layout/parameter-overrides-layout');
    });
  });

  describe('@mixin zen-breakpoint()', function() {
    it('should temporarily override global variables', function() {
      return sassyTest.renderFixture('zen-breakpoint/override-globals');
    });

    it('should error if breakpoint() mixin does not exist', function() {
      return sassyTest.renderFixture('zen-breakpoint/error').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('You need to @import the breakpoint mixin before using zen-breakpoint().');
      });
    });
  });

  describe('@mixin zen-mq()', function() {
    it('should temporarily override global variables', function() {
      return sassyTest.renderFixture('zen-mq/override-globals');
    });

    it('should error if mq() mixin does not exist', function() {
      return sassyTest.renderFixture('zen-mq/error').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('You need to @import the mq mixin before using zen-mq().');
      });
    });
  });

  describe('@mixin zen-respond-to()', function() {
    it('should temporarily override global variables', function() {
      return sassyTest.renderFixture('zen-respond-to/override-globals');
    });

    it('should error if respond-to() mixin does not exist', function() {
      return sassyTest.renderFixture('zen-respond-to/error').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('You need to @import the respond-to mixin before using zen-respond-to().');
      });
    });

    it('should use a layout named the same as the context', function() {
      return sassyTest.renderFixture('zen-respond-to/layout-same-as-context');
    });
  });
});
