module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: {
                expand: true,
                src: ['public/js/source/*.js']
            },
            options: {
                jshintrc: '.jshintrc'
            }
        },
        concat: {
            'public/js/dest/ab.concat.js': ['public/js/source/a.js', 'public/js/source/b.js'],
            'public/js/dest/bc.concat.js': ['public/js/source/b.js', 'public/js/source/c.js'],
            'public/js/dest/ac.concat.js': ['public/js/source/a.js', 'public/js/source/c.js']
        },
        uglify: {
            build: {
                files: [
                    {
                        expand: true,
                        src: 'public/js/dest/*.concat.js',
                        dest: '',
                        ext: '.min.js'
                    }
                ]
            }
        },
        less: {
            build: {
                files: [
                    {
                        expand: true,
                        src: 'public/css/*.less',
                        dest: '',
                        ext: '.css'
                    }
                ],
                compress: true
            }
        },
        watch: {
            files: ['public/js/source/*.js', 'public/css/*.less'],
            tasks: ['jshint', 'concat', 'uglify', 'less']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('test', ['watch']);

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'less']);

};