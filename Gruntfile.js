
module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      php: {
        files: ['*.php','style.css','script.js'],
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
    },
    'sftp-deploy': {
      build: {
        auth: {
          host: '50.116.51.79',
          port: 22,
          authKey: 'growthlab'
        },
        cache: 'sftpCache.json',
        src: '.',
        dest: 'wp-content/growthlab-grid',
        exclusions: grunt.file.read('.gitignore').split('\n').concat(['img','.git']),
        progress: true
      }
    }
  });

  // Default task
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('deploy', ['sftp-deploy']);

  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sftp-deploy');
  grunt.loadNpmTasks('grunt-php');
};