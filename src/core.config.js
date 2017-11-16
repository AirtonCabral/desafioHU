(function() {
    'use strict';

    angular.module('app')
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'pages/home/home.html',
                    controllerAs: 'homeController as vm'
                })

            .state('about', {
                url: '/about',
                templateUrl: 'pages/about/about.html',
                controllerAs: 'aboutController as vm'
            })

        });
})();