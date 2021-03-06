module.exports = function(grunt) {

  grunt.registerTask('dgeni', 'Generate docs via dgeni.', function() {
    var dgeni = require('dgeni');
    var done = this.async();

    dgeni('docs/dgeni.conf.js')
      .generateDocs()
      .then(done);
  });

  grunt.registerTask('default', ['dgeni']);

};