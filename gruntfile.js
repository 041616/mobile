module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    stylus: {
      compile: {
        options: {
          compress: true,
          paths: ['path/to/import', 'another/to/import'],
          relativeDest: '../out', //path to be joined and resolved with each file dest to get new one.
                                  //mostly useful for files specified using wildcards
          urlfunc: 'embedurl', // use embedurl('test.png') in our code to trigger Data URI embedding
          use: [
            function () {
              return testPlugin('yep'); // plugin with options
            },
            require('fluidity') // use stylus plugin at compile time
          ],
          import: [      //  @import 'foo', 'bar/moo', etc. into every .styl file
            'foo',       //  that is compiled. These might be findable based on values you gave
            'bar/moo'    //  to `paths`, or a plugin you added under `use`
          ]
        },
        files: {
          'path/to/result.css': 'path/to/source.styl', // 1:1 compile
          'path/to/another.css': ['path/to/sources/*.styl', 'path/to/more/*.styl'] // compile and concat into single file
        }
      }
    }

    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};