module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      php: {
        files: ['index.html','style.css'],
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