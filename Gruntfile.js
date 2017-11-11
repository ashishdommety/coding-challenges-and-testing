module.exports = function(grunt) {
  //loading grunt tasks
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false)
          clearCacheFilter: (key) => true, // Optionally defines which files should keep in cache
          noFail: false // Optionally set to not fail on failed tests (will still fail on other errors)
        },
        // NOTE: this is how it should actually be done. this will allow different tests in different files.
        // src: ['test/**/*.js']
        src: ['test.js']
      }
    },
    watch: {
      js: {
        files: ['function.js'],
        tasks: ['mochaTest'],
      },
    },
  });

  grunt.registerTask("greet", function() {
    console.log("Hey there, how are you?");
  });

  grunt.registerTask('test', 'mochaTest');

  grunt.registerTask('default',['mochaTest', 'watch'])

};