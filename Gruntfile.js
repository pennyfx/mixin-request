module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    concat: {
      options: {
        separator: '\n',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  
};