module.exports = function(grunt){

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        jsdoc : {
            dist : {
                src : [
                    'src/magnet-sdk.js'
                ],
                options : {
                    destination : 'target/docs'
                }
            },
            docstrap : {
                src : [
                    'src/magnet-sdk.js'
                ],
                options : {
                    destination : 'docs',
                    template    : 'config/template',
                    configure   : 'config/docstrap_config.json'
                }
            }
        },
        jasmine : {
            src     : [
                'src/magnet-sdk.js',
                'src/controllers.js',
                'src/models.js'
            ],
            options : {
                specs    : [
                    'specs/*-spec.js'
                ],
                helpers  : [
                    'src/helpers.js'
                ],
                junit    : {
                    path : 'target/reports/junit-web/'
                },
                outfile  : 'target/reports/jasmine/_SpecRunner.html',
                '--web-security' : false,
                '--local-to-remote-url-access' : true,
                '--ignore-ssl-errors' : true,
                template : require('grunt-template-jasmine-istanbul'),
                templateOptions : {
                    coverage : 'target/reports/jasmine/coverage.json',
                    report   : 'target/reports/jasmine/lcov-report/'
                }
            }
        },
        jasmine_node : {
            coverage   : {
                savePath : 'target/reports/jasmine-node/'
            },
            useHelpers : true,
            options    : {
                forceExit       : true,
                match           : '.',
                matchall        : false,
                projectRoot     : '.',
                extensions      : 'js',
                specFolders     : [
                    'specs'
                ],
                specNameMatcher : '*',
                junitreport : {
                    report         : true,
                    savePath       : 'target/reports/junit-node/',
                    useDotNotation : true,
                    consolidate    : true
                }
            }
        },
        clean : [
            'target/**'
        ]
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-jasmine-node-coverage');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('docs', ['clean', 'jsdoc:docstrap']);
    grunt.registerTask('nodetests', ['clean', 'jasmine_node']);
    grunt.registerTask('webtests', ['clean', 'jasmine']);
    grunt.registerTask('tests', ['clean', 'jasmine', 'jasmine_node']);
    grunt.registerTask('default', ['clean', 'jasmine', 'jasmine_node', 'jsdoc:docstrap']);

};