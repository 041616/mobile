module.exports = function(grunt) {

  grunt.initConfig({
    stylus: {
      compile: {
        options: {
          compress: true
        },
        files: [{
            expand: true,
            cwd: "stylus/themes/",
            src: "*.styl",
            dest: "css",
            ext: ".css"
        }]
      }
    },
    watch: {
      options: {
        dateFormat: function(time) {
          grunt.log.writeln("The watch finished in " + time + "ms.");
          grunt.log.writeln("Waiting...");
        },
      },
      stylus: {
        files: "stylus/**/*.styl",
        tasks: "stylus",
      },
    }
  });

  grunt.loadNpmTasks("grunt-contrib-stylus");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["stylus"]);
};
