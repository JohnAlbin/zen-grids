ABOUT zen-grids
---------------

The Zen Grids system is a fluid responsive grid system that is immune to
rounding errors and overflowing content. With an easy-to-use Sass mixin set, the
Zen Grids system can be applied to an infinite number of layouts.


USAGE
-----

Here's a simple example: a content column with a sidebar on each side, aligned
to a 12 column grid.

  @import "zen";

  $zen-column-count: 12;    // Set the total number of columns in the grid.
  $zen-gutter-width: 40px;  // Set the gutter size. A half-gutter is used on
                            // each side of each column.

  .container {
    @include zen-grid-container;
  }
  .sidebar1 {
    @include zen-grid(1, 3);  // 3 col. wide sidebar starting in the 1st column
  }
  .content {
    @include zen-grid(4, 6);  // 6 col. wide element starting in the 4th column
  }
  .sidebar2 {
    @include zen-grid(10, 3); // 3 col. wide sidebar starting in the 10th column
  }

Within the .container element, the .sidebar1, .sidebar2 and .content elements
can be in any order.

Zen Grids has built-in support for the Box-sizing Polyfill which adds
"box-sizing: border-box" support to IE7 and earlier.

- Download the polyfill at https://github.com/Schepp/box-sizing-polyfill
- Place the boxsizing.htc file in your website.
- Set Zen Grids' $box-sizing-polyfill-path variable to the absolute path to the
  boxsizing.htc file on your website. For example:
    $box-sizing-polyfill-path: "/scripts/polyfills/boxsizing.htc";


INSTALLATION
------------

Zen grids is distributed as a Ruby Gem. On your computer, simply run:

  sudo gem install zen-grids

If you are using Compass (and you should!) then you can add it to an existing
project by editing the project's configuration file, config.rb, and adding this
line:

  require 'zen-grids'

For Rails projects, from the project's root directory, run:

  compass install zen-grids

You can then start using Zen Grids in your Sass files. Just add this line to one
of your .sass or .scss files and start creating!

  @import "zen";


REQUIREMENTS
------------

- Sass 3.1 or later
- Compass 0.11 or later


LICENSE
-------

Available under the GPL v2 license. See LICENSE.txt.
