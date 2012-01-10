# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name        = 'zen-grids'

  s.summary     = %q{A Compass plugin for Zen Grids, a fluid responsive grid system}
  s.description = %q{The Zen Grids system is a fluid responsive grid system that is immune to rounding errors and overflowing content. With an easy-to-use Sass mixin set, the Zen Grids system can be applied to an infinite number of layouts.}

  s.homepage    = 'http://zengrids.com'
  s.rubyforge_project =

  s.version     = '0.0.0'
  s.date        = '2012-01-10'

  s.authors     = ['John Albin Wilkins']
  s.email       = 'virtually.johnalbin@gmail.com'

  s.add_runtime_dependency('sass', ">= 3.1")

  s.files       = %w[
    LICENSE.txt
    README.txt
    lib/zen-grids.rb
    stylesheets/_zen.scss
    stylesheets/zen/_columns.scss
    stylesheets/zen/_grids.scss
    templates/project/manifest.rb
    zen-grids.gemspec
  ]
end
