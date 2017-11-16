(function() {
    'use strict';

    angular
        .module('app')
        .service('CoreService', CoreService);

    CoreService.$inject = ['$http'];

    function CoreService($http) {
        return {
            getOffer: getOffer
        };

        ////////////////

        function getOffer() {
            return $http.get('http://localhost:8080/api/offer')
                .then(offerComplete)
                .catch(offerFail);

            function offerComplete(response) {
                //console.log(response);
                return response
            }

            function offerFail(error) {
                //console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
    }
})();