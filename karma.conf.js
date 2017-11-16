module.exports = function(config) {
    config.set({

        basePath: './src',

        frameworks: ['jasmine'],

        files: [
            '../node_modules/angular/angular.js',
            '../node_modules/angular-mocks/angular-mocks.js',
            '../node_modules/angular-ui-router/release/angular-ui-router.js',
            'core.module.js',
            'core.controller.js',
            'core.service.js',
            'core.spec.js',
            'pages/home/home.controller.js',
            'pages/home/home.controller.specs.js',
            'components/card_locais/card_locais.component.js',
            'components/card_locais/card_locais.spec.js',
            'components/carousel/carousel.component.js',
            'components/carousel/carousel.spec.js'
        ],

        exclude: [],

        preprocessors: {},

        reporters: ['spec'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['Chrome'],

        singleRun: false,

        concurrency: Infinity
    })
}