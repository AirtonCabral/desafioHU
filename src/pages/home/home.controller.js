(function() {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

    homeController.$inject = ['CoreService','$location'];

    function homeController(CoreService, $location) {
        var vm = this;
        vm.offer = [];

        activate();

        function activate() {
            return getOffer().then(function() {
                console.log('getOffer works');
            });
        }

        function getOffer() {
            return CoreService.getOffer()
                .then(function(data) {
                    vm.offer = data;
                    return vm.offer;
                });
        }
    }
})();