
module.exports = function(grunt) {

    // CONFIGURE GRUNT 
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        sass: {
            development: {
                options:{
                    style: 'compressed',
                    compass: true,
                    sourcemap: false
                },
                files: {
                    'style/style.css': [ 'style/scss/style.scss' ]
                }
            }
        },
        concat: {
            basic: {
                src: ['js/jquery.min.js', 'js/bootstrap.min.js'],
                dest: 'js/script.min.js',
            },
        },
        watch: {
            sass: {
                files: 'style/scss/*.scss',
                tasks: ['sass'],
                option: {
                    livereload: true,
                }
            },
            concat: {
                files: ['js/jquery.min.js', 'js/bootstrap.min.js'],
                tasks: ['concat'],
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

};
