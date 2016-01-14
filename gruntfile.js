module.exports = function(grunt) {

  var configObject = {
    stylus: {},
    watch: {
      options: {
        dateFormat: function(time) {
          grunt.log.writeln("The watch finished in " + time + "ms.");
          grunt.log.writeln("Waiting...");
        }
      },
      stylus: {
        files: "stylus/**/*.styl",
        tasks: "stylus"
      },
    }
  };

  var themesFiles = grunt.file.expand("themes/*.json");

  for (var i = 0; i < themesFiles.length; i++) {
    var file = themesFiles[i];
    if (grunt.file.isFile(file)) {
      var theFile = file.match(/\/([^/]*)$/)[1];
      var onlyName = theFile.substr(0, theFile.lastIndexOf('.')) || theFile;
      configObject.stylus[onlyName] = {
        options: {
          compress: true,
          define: {"$config": "../"+file}
        },
        files: {}
      };
      configObject.stylus[onlyName].files["css/"+onlyName+".css"] = ["stylus/main.styl"];
    }
  }

  grunt.config.init(configObject);

  grunt.loadNpmTasks("grunt-contrib-stylus");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["stylus"]);
};
