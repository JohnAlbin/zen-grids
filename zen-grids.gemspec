# -*- encoding: utf-8 -*-

Gem::Specification.new do |spec|
  spec.name         = 'zen-grids'

  spec.summary      = %q{A Compass plugin for Zen Grids, a fluid responsive grid system}
  spec.description  = %q{Zen Grids is an intuitive, flexible grid system that leverages the natural source order of your content to make it easier to create fluid responsive designs. With an easy-to-use Sass mixin set, the Zen Grids system can be applied to an infinite number of layouts, including responsive, adaptive, fluid and fixed-width layouts.}

  spec.homepage     = 'http://zengrids.com'
  spec.rubyforge_project =

  spec.version      = '2.0.0.beta.3'
  spec.date         = '2014-09-03'
  spec.licenses     = ['GPL-2']

  spec.authors      = ['John Albin Wilkins']
  spec.email        = 'virtually.johnalbin@gmail.com'

  spec.add_runtime_dependency('sass', "~> 3.3")

  spec.files        = `git ls-files`.split($/).select {|f| File.exist?(f) && f =~ %r{^(lib|stylesheets|templates)/} }
  spec.files        += %w(
    LICENSE.txt
    README.md
    zen-grids.gemspec
  )
end
