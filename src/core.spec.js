describe('Testes do Corecontroller...', () => {
    beforeEach(module('app'));

    var CoreController,
        scope;

    beforeEach(inject(($rootScope, $controller) => {
        scope = $rootScope.$new();
        CoreController = $controller('CoreController', {
            $scope: scope
        });
    }));

    it('CoreController test...', () => {
        expect(CoreController).toBeDefined();
        expect(CoreController.tittle).toEqual('CoreController');
        expect(CoreController.offer).toBeDefined();
    });

});

describe('Testes do CoreService...', () => {
    var CoreService, httpBackend;
    beforeEach(module('app'));
    beforeEach(inject(function($httpBackend, _CoreService_) {
        CoreService = _CoreService_;
        httpBackend = $httpBackend;
    }));

    // 5. make sure no expectations were missed in your tests.
    afterEach(() => {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    //6.
    it('Teste de returno do CoreService...', () => {
        var returnData = {};
        httpBackend.expectGET('http://localhost:8080/api/offer').respond(returnData);

        var returnedPromise = CoreService.getOffer(1);

        var result;
        returnedPromise.then(function(response) {
            result = response.data;
        });

        httpBackend.flush();
        expect(result).toEqual(returnData);
    });


});