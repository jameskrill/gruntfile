module.exports = function(grunt) {

  // time
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        // If you can't get source maps to work, run the following command in your terminal:
        // $ sass scss/foundation.scss:css/foundation.css --sourcemap
        // (see this link for details: http://thesassway.com/intermediate/using-source-maps-with-sass )
        sourceMap: true
      },

      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },

    concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: [

          // Include your own custom scripts (located in the custom folder)
          'js/custom/*.js'

          ],
          // Finally, concatinate all the files above into one single file
          dest: 'js/app.js',
        },
      },

    uglify: {
      dist: {
        files: {
          // Shrink the file size by removing spaces
          'js/app.min.js': ['js/app.js']
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass'],
        options: {
              livereload:true,
            }
      },

      js: {
        files: 'js/custom/**/*.js',
        tasks: ['concat', 'uglify'],
        options: {
          livereload: true,
        }
      },

       all: {
        files: '**/*.php',
        options: {
            livereload:true,
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('build', ['sass', 'concat', 'uglify']);
  grunt.registerTask('default', ['watch']);

};
