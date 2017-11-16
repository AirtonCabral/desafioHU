(function() {
    'use strict';

    angular
        .module('app')
        .controller('CoreController', CoreController);

    CoreController.$inject=['$location']

    function CoreController($location) {
        var vm = this;
        vm.tittle = 'CoreController';

        vm.offer = [];

        activate();

        function activate() {

        }
    }
})();