# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name        = 'zen-grids'

  s.summary     = %q{A Compass plugin for Zen Grids, a fluid responsive grid system}
  s.description = %q{Zen Grids includes a fluid responsive grid system with an intuitive, flexible layout mechanism that leverages the natural source order of your content. With an easy-to-use Sass mixin set, the Zen Grids system can be applied to an infinite number of layouts, including adaptive and fixed-width layouts.}

  s.homepage    = 'http://zengrids.com'
  s.rubyforge_project =

  s.version     = '1.0.rc.2'
  s.date        = '2012-04-03'

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
    templates/unit-tests/manifest.rb
    templates/unit-tests/README.txt
    templates/unit-tests/sass/function-zen-direction-flip.scss
    templates/unit-tests/sass/function-zen-half-gutter.scss
    templates/unit-tests/sass/zen-clear.scss
    templates/unit-tests/sass/zen-grid-container.scss
    templates/unit-tests/sass/zen-grid-flow-item.scss
    templates/unit-tests/sass/zen-grid-item-base.scss
    templates/unit-tests/sass/zen-grid-item.scss
    templates/unit-tests/sass/zen-nested-container.scss
    templates/unit-tests/test-results/function-zen-direction-flip.css
    templates/unit-tests/test-results/function-zen-half-gutter.css
    templates/unit-tests/test-results/zen-clear.css
    templates/unit-tests/test-results/zen-grid-container.css
    templates/unit-tests/test-results/zen-grid-flow-item.css
    templates/unit-tests/test-results/zen-grid-item-base.css
    templates/unit-tests/test-results/zen-grid-item.css
    templates/unit-tests/test-results/zen-nested-container.css
    zen-grids.gemspec
  ]
end
