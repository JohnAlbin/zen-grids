# About Zen Grids

Zen Grids is an intuitive, flexible grid system that leverages the natural source order of your content to make it easier to create fluid responsive designs. With an easy-to-use Sass mixin set, the Zen Grids system can be applied to an infinite number of layouts, including responsive, adaptive, fluid and fixed-width layouts.

More information can be found at http://zengrids.com

## USAGE

Here's a simple example: a content column with a sidebar on each side, aligned to a 12 column grid.

```scss
  @import "zen-grids";

  $zen-gutters: 40px;  // Set the gutter size. A half-gutter is used on
                       // each side of each column.

  .container {
    @include zen-grid-container();  // Define the container for your grid items.
  }

  $zen-columns: 12;  // Set the number of grid columns to use in this media
                     // query. You'll likely want a different grid for
                     // different screen sizes.

  @media all and (min-width: 50em) {
    .sidebar1 {
      @include zen-grid-item(3, 1);   // Span 3 columns starting in 1st column.
    }
    .content {
      @include zen-grid-item(6, 4);   // Span 6 columns starting in 4th column.
    }
    .sidebar2 {
      @include zen-grid-item(3, 10);  // Span 3 columns starting in 10th column.
    }
  }
```

Within the `.container` element, the `.sidebar1`, `.sidebar2` and `.content` elements can be in any order.

## INSTALLATION

Install using one of the following methods:

* Install with [npm](http://npmjs.org/): `npm install --save-dev zen-grids`
* Install with [Bower](http://bower.io/): `bower install --save-dev zen-grids`
* Install with [Ruby Gem](https://rubygems.org/gems/zen-grids): `gem install zen-grids`<br>
  and, if using Compass, add `require "zen-grids"` to your config.rb file.
* Install with [Bundler](http://bundler.io/) and Ruby Gem: `bundle inject zen-grids '~> 2.0'`

You can then start using Zen Grids in your Sass files. Just add this line to one of your .sass or .scss files and start creating!

```scss
@import "zen-grids";
```

## REQUIREMENTS

Now works with **libSass** or Ruby Sass!

* LibSass 3.2.5 or later
* _or_ Ruby Sass 3.4.0 or later

## LICENSE

Available under the GPL v2 license. See [LICENSE.txt](https://github.com/JohnAlbin/zen-grids/blob/master/LICENSE.txt).

[![Build Status](https://travis-ci.org/JohnAlbin/zen-grids.png?branch=master)](https://travis-ci.org/JohnAlbin/zen-grids)
