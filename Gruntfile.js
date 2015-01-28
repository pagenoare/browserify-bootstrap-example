module.exports = function(grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        browserify: {
            bundleOptions: {
                debug: true
            },
            client: {
                src: [
                    "src/app.js",
                ],
                dest: './public/app.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', [ 'browserify' ]);

};