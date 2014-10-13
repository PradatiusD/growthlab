module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      php: {
        files: ['*.html','style.css','script.js'],
        options: {
          livereload: 35729
        }
      },
      sass: {
        files: ['style.sass'],
        tasks: ['sass']
      }
    },
    php: {
      test: {
        options: {
          keepalive: true,
          open: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'style.css': 'style.sass'
        }
      }
    }
  });

  // Default task
  grunt.registerTask('default', ['watch']);

  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-php');
};