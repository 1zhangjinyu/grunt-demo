module.exports = function (grunt) {
  grunt.initConfig({
    imagemin: {                
      files: {
        expand: true,                
        src: ['images/*.{png,jpg}'],
        dest: 'dist/'
      }        
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['imagemin']);
};
