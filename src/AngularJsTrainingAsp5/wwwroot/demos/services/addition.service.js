servicesApp.factory("AdditionService", function () {
    var service = {};
    service.compute = function (a, b) {
        return a + b;
    };

    return service;
});