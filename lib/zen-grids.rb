require 'compass'

project_path     = File.join(File.dirname(__FILE__), '..')
stylesheets_path = File.join(project_path)
templates_path   = File.join(project_path, 'templates')

Compass::Frameworks.register(
  'zen-grids',
  :path => project_path,
  :stylesheets_directory => stylesheets_path,
  :templates_directory => templates_path
)
