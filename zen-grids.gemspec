# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name        = 'zen-grids'

  s.summary     = %q{A Compass plugin for Zen Grids, a fluid responsive grid system}
  s.description = %q{Zen Grids includes a fluid responsive grid system with an intuitive, flexible layout mechanism that leverages the natural source order of your content. With an easy-to-use Sass mixin set, the Zen Grids system can be applied to an infinite number of layouts, including adaptive and fixed-width layouts.}

  s.homepage    = 'http://zengrids.com'
  s.rubyforge_project =

  s.version     = '1.0.rc.1'
  s.date        = '2012-02-18'

  s.authors     = ['John Albin Wilkins']
  s.email       = 'virtually.johnalbin@gmail.com'

  s.add_runtime_dependency('sass', ">= 3.1")

  s.files       = %w[
    LICENSE.txt
    README.txt
    lib/zen-grids.rb
    stylesheets/_zen.scss
    stylesheets/zen/_background-grid.scss
    stylesheets/zen/_grids.scss
    templates/project/example.html
    templates/project/manifest.rb
    templates/project/common.scss
    templates/project/layout.scss
    templates/project/styles.scss
    zen-grids.gemspec
  ]
end
