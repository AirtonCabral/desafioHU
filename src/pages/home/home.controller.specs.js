describe('Test homecontroller...', () => {
    beforeEach(module('app'));

    var homeController,
        offer,
        element,
        scope;

    beforeEach(inject(function($rootScope, $controller, $compile) {
        scope = $rootScope.$new();
        homeController = $controller('homeController', {
            $scope: scope
        });
        element = angular.element('<cardlocais offer="vm.offer.data"></cardlocais>');
        element = $compile(element)(scope);
    }));

    it('homeController foi definido...', () => {
        expect(homeController).toBeDefined();
        expect(homeController.offer).toBeDefined();
        expect(homeController.offer).toEqual([]);
    });


});