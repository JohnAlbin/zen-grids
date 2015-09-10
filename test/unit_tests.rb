# Navigator | Copyright 2013 Team Sass | MIT License | https://github.com/Team-Sass/navigator

require 'compass'
require 'compass/exec'
require 'minitest/autorun'
require 'diffy'
require 'colorize'
require 'pathname'

class TestCompassOutput < Minitest::Test

  Compass.add_configuration 'config.rb'
  Compass.configuration.project_path = Dir.pwd

  # Remove all current Diff files
  Dir.glob("#{Dir.pwd}/output/**/*.css.diff").each { |f| File.delete(f) }

  Compass.compiler.sass_files.each do |sass_file|
    test_name = File.basename(sass_file, '.*')

    define_method "test_#{test_name}_compile " do
      # Compiled CSS file path
      css_file = Compass.compiler.corresponding_css_file(sass_file)

      # Relative path of compiled CSS file from Tests directory
      css_file_relative = Pathname.new(css_file).relative_path_from(Pathname.new("#{Dir.pwd}/output")).to_s

      # Control files path
      control_file = "#{Dir.pwd}/controls/" + css_file_relative

      # The base path of the sub folders, making the folders if needed
      base_dir = File.dirname(css_file_relative)
      FileUtils.mkdir_p "#{Dir.pwd}/output/#{base_dir}"

      # Compiles Sass file
      Compass.compiler.compile sass_file, css_file  # Raises exception upon error

      begin
        # Assert that our test output matches our control output
        passed = assert FileUtils.compare_file(css_file, control_file), "Compiled output for #{File.basename(sass_file)} does not match control output!".red
      ensure
        # If there is a failure, generate a diff of the files and put it with the compiled file
        if !passed
          test_file = File.open(css_file).read;
          control_file = File.open(control_file).read;
          diff_file = "#{css_file}.diff"
          diff_content = Diffy::Diff.new(control_file, test_file, :include_diff_info => true)

          File.open(diff_file, 'w') { |f| f.write(diff_content.to_s(:text)) }

          puts "Control->Compiled diff output to ".yellow + "output/#{css_file_relative}.diff".blue
        end
      end
    end
  end
end
