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
    },
    htmlmin: {
      compress: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          conservativeCollapse: true
        },
        files: [{
          expand: true,
          cwd: "html",
          src: "**/*.html",
          dest: "build",
          ext: ".html"
        }]
      }
    },
    uglify: {
      compress: {
        options: {
          compress: true
        },
        files: [{
            expand: true,
            cwd: 'js',
            src: '**/*.js',
            dest: 'build/js'
        }]
      },
      beautify: {
        options: {
          beautify: true
        },
        files: [{
            expand: true,
            cwd: 'js',
            src: '**/*.js',
            dest: 'build/js'
        }]
      }
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
      configObject.stylus[onlyName].files["build/css/styles.css"] = ["stylus/main.styl"];
      grunt.registerTask(onlyName, ["stylus:"+onlyName, "htmlmin", "uglify:compress"]);
    }
  }

  grunt.config.init(configObject);

  grunt.loadNpmTasks("grunt-contrib-stylus");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // grunt.registerTask("default", ["stylus:default", "htmlmin", "uglify:beautify"]);
  grunt.registerTask("build", ["stylus:default", "htmlmin", "uglify:beautify"]);
};
