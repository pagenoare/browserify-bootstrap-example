module.exports = function(grunt) {
    var shims = require("./shims"),
        sharedModules = Object.keys(shims).concat([]);

    grunt
    .initConfig({
        pkg : grunt.file.readJSON('package.json'),
        browserify: {
            bundleOptions: {
                debug: true
            },
            vendor: {
                src: [],
                dest: './public/vendor.js',
                options: {
                    require: sharedModules,
                    transform: ["browserify-shim"]
                }
            },
            client: {
                src: [
                    "src/app.js",
                ],
                dest: './public/app.js',
                options: {
                    external: sharedModules
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', [ 'browserify' ]);

};