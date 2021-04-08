module.exports = function (grunt) {
  grunt.initConfig({
    cssmin: {
      target: {
        files: [{
          expand: true,
          //cwd: 'release/css',
          src: ['*.css', '!*.min.css'],  // !*.min.css中!表示排除，不对min.css进行压缩
          dest: 'dist',
          ext: '.min.css'
        }]
      }
    }    
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']);
};
