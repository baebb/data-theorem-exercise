module.exports = function (grunt) {

    var compass = require('compass-importer');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed',
                importer: compass
            },
            dist: {
                files: {
                    'app/styles/style.css': 'app/styles/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['app/styles/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    [
        'grunt-contrib-watch',
        'grunt-sass'
    ].forEach(grunt.loadNpmTasks);

    // Default task(s).
    grunt.registerTask('default', ['sass']);

};