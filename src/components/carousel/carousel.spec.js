describe('carouselController', function() {
    var $controller, CardLocaisController;

    // Load ui.router and our components.users module which we'll create next
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.carousel'));

    // Inject the $controller service to create instances of the controller (UsersController) we want to test
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
        carouselController = $controller('carouselController', {});
    }));
    // Verify our controller exists
    it('carouselController definido...', function() {
        expect(carouselController).toBeDefined();
    });
});