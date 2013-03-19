module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    concat: {
      options: {
        separator: '\n',
      },
      'x-tag-js': {
        src: [
          'components/document.register/src/document.register.js', 
          'components/x-tag-core/src/core.js',
        ],
        dest: 'demo/x-tag-components.js'
      }
    }, 
    bumpup: ['component.json', 'package.json', 'xtag.json'],
    tagrelease: {
      file: 'package.json',
      prefix: 'xtag-v',
      commit: true
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-tagrelease');

  grunt.registerTask('build', ['concat:x-tag-js']);
  grunt.registerTask('bump:patch', ['bumpup:patch', 'tagrelease']);


};