(function() {
    'use strict';
    angular
        .module('app')
        .component('carousel', {
            templateUrl: 'components/carousel/carousel.html',
            controller: carouselController,
            controllerAs: 'vm',
            bindings: {
                item: '<',
                slides: '<',
            },
        });

    carouselController.$inject = ['$location'];

    function carouselController($location) {
        var vm = this;
        vm.tittle = 'carousel funcionando!';
        vm.trocaIndex = trocaIndex;
        vm.tabindex = 0;

        function trocaIndex(value) {
            alert('clicado!' + value);
        }

        vm.$onInit = function() {

        };
        vm.$onChanges = function(changesObj) {

        };
        vm.$onDestroy = function() {};
    }
})();

(function() {
    'use strict';
    angular
        .module('components.carousel', [])
        .controller('carouselController', function() {
            var vm = this;
        })
        .config(function($stateProvider) {
            $stateProvider
                .state('carouel', {
                    url: '/carousel',
                    templateUrl: 'components/carousel/carousel.html',
                    controller: 'carouselController',
                    controllerAs: 'vm'
                });
        });
})();