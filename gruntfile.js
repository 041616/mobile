module.exports = function(grunt) {

  var configObject = {
    stylus: {},
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
  };

  grunt.file.recurse("themes/", function(abspath, rootdir, subdir, filename){
    if (grunt.file.isFile(abspath)){
      settings = grunt.file.readJSON(abspath);
      grunt.log.writeln(abspath);
      grunt.log.writeln(rootdir);
      grunt.log.writeln(subdir);
      grunt.log.writeln(filename);
    }
  });

  //for (var prop in config.themes) {
  //  configObject.stylus[themeFilename] = {
  //    options: {
  //      compress: true,
  //      define: ""
  //    },
  //    files: [{
  //        expand: true,
  //        cwd: "stylus/",
  //        src: "main.styl",
  //        dest: "css",
  //        ext: ".css"
  //    }]
  //  };
  //  grunt.log.writeln(prop+": "+config.themes[prop]);
  //}


  grunt.config.init(configObject);
  //grunt.initConfig({
  //  stylus: {
  //    compile: {
  //      options: {
  //        compress: true
  //      },
  //      files: [{
  //          expand: true,
  //          cwd: "stylus/themes/",
  //          src: "*.styl",
  //          dest: "css",
  //          ext: ".css"
  //      }]
  //    }
  //  }
  //});

  grunt.loadNpmTasks("grunt-contrib-stylus");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["stylus"]);
};
