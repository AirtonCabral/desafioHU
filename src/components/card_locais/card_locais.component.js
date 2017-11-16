(function() {
    'use strict';
    angular
        .module('app')
        .component('cardlocais', {
            templateUrl: 'components/card_locais/card_locais.html',
            controller: CardLocaisController,
            controllerAs: 'vm',
            bindings: {
                offer: '<',
            }
        });

    CardLocaisController.$inject = ['$location'];

    function CardLocaisController($location) {
        var vm = this;
        vm.selected = selected;
        vm.borderOn = '';
        vm.itens = '';
        vm.iten = '';
        vm.from = [];
        vm.locais = [];
        vm.uniqueFrom = [];
        vm.findFrom = findFrom;
        vm.orderbyPrice = orderbyPrice;
        vm.increaselimit = increaselimit;
        vm.resetLimit = resetLimit;
        vm.limit = 5;
        ////////////////

        function selected(value) {
            vm.borderOn = value;
        }

        function findFrom() {
            angular.forEach(vm.offer, function(itens) {
                itens = vm.offer;
                angular.forEach(itens, function(iten) {
                    var ite = iten.options;
                    angular.forEach(ite, function(it) {
                        vm.locais.push(it);
                        var i = it.from;
                        angular.forEach(i, function(x) {
                            vm.from.push(x);
                        });
                    });
                });
            });
            vm.uniqueFrom = vm.from.filter(function(elem, index, self) {
                return index === self.indexOf(elem);
            });
        }

        function orderbyPrice() {
            vm.locais.sort(function(a, b) {
                return parseFloat(a.price) - parseFloat(b.price);
            });
        }

        function increaselimit() {
            vm.limit = vm.limit + 10;
        }

        function resetLimit() {
            vm.limit = 5;
            console.log(vm.limit);
        }

        function activate() {

        }
        vm.$onChanges = function(changesObj) {
            findFrom();
            orderbyPrice();
        };
        vm.$onDestroy = function() {};
    }
})();
(function() {
    'use strict';
    angular
        .module('components.cardlocais', [])
        .controller('CardLocaisController', function() {
            var vm = this;
        })
        .config(function($stateProvider) {
            $stateProvider
                .state('cardlocais', {
                    url: '/cardlocais',
                    templateUrl: 'components/card_locais/card_locais.html',
                    controller: 'CardLocaisController',
                    controllerAs: 'vm'
                });
        });
})();