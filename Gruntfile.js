module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      php: {
        files: ['*.html','style.css','script.js'],
        options: {
          livereload: 35729
        }
      }
    },
    php: {
      test: {
        options: {
          keepalive: true,
          open: true
        }
      }
    }
  });

  // Default task
  grunt.registerTask('default', ['watch']);

  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-php');
};