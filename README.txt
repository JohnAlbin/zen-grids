ABOUT compass-zen-plugin
------------------------

The Zen Grids system is a fluid responsive grid system that is immune to
rounding errors and overflowing content. With an easy-to-use Sass mixin set, the
Zen Grids system can be applied to an infinite number of layouts.


USAGE
-----

A simple example: a content column with a sidebar on each side, aligned to a 12
column grid.

  $zen-column-count: 12;    // Set the total number of columns in the grid.
  $zen-gutter-width: 30px;  // Set the gutter size. A half-gutter is used on each side of each column.

  .container {
    @include zen-grid-container();
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


REQUIREMENTS
------------

- Sass 3.1 or later
- Compass 0.11 or later


LICENSE
-------

Available under the GPL v2 license. See LICENSE.txt.
