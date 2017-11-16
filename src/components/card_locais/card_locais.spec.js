describe('CardLocaisController', function() {
    var $controller, CardLocaisController;

    // Load ui.router and our components.users module which we'll create next
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.cardlocais'));

    // Inject the $controller service to create instances of the controller (UsersController) we want to test
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
        CardLocaisController = $controller('CardLocaisController', {});
    }));
    // Verify our controller exists
    it('CardLocaisController be defined', function() {
        expect(CardLocaisController).toBeDefined();
    });
});