var servicesApp = angular.module("servicesApp", []);

servicesApp.controller("ServicesCtrl", function ServicesCtrl($scope, AdditionService, SubstractionService) {
    $scope.input1 = 0;
    $scope.input2 = 0;
    $scope.sum = 0;
    $scope.diff = 0;

    function parseNumber(nr) {
        var result = parseInt(nr);
        if (isNaN(result)) {
            return 0;
        }

        return result;
    }

    function compute() {
        var a = parseNumber($scope.input1);
        var b = parseNumber($scope.input2);
        
        $scope.sum = AdditionService.compute(a, b);
        $scope.diff = SubstractionService.compute(a, b);
    }

    $scope.$watch("input1", compute);
    $scope.$watch("input2", compute);
});