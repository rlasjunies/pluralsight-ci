// Karma configuration
// Generated on Tue Dec 30 2014 17:07:58 GMT+0100 (Romance Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
        
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','chai', 'commonjs'],

        // You can define custom application root directory, by default is 'app'
        commonRequirePreprocessor: {
            appDir: 'spa'
        },

    // list of files / patterns to load in the browser
        files: [
            //3rd parties libraries
            'Scripts/angular.js',
            'Scripts/angular-mocks.js',
            'scripts/angular-resource.js',
                        
            //test specific 3rd party code
            'node_modules/ng-midway-tester/src/ngMidwayTester.js',
            'node_modules\chai\lib',

            //app code
            'spa/**/*.js',

            //Tests scpecifications
            'spa-test/**/*-specs.js'
    ],


    // list of files to exclude
        exclude: [
        //'spa/app.js'
    ],
        
    proxies : {
            '/':'http://localhost:3000/'
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'spa/**/*.js' : ['commonjs'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9595,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
