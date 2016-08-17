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
                    './styles/style.css': './styles/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['./styles/**/*.scss'],
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