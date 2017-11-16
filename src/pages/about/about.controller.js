(function() {
    'use strict';

    angular
        .module('app')
        .controller('aboutController', aboutController);

    aboutController.$inject = ['$location'];

    function aboutController($location) {
        var vm = this;

        activate();

        ////////////////

        function activate() {}
    }
})();