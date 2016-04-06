var watchersApp = angular.module("watchersApp", []);

watchersApp.controller("WatchersCtrl", function WatchersCtrl($scope) {
    $scope.watchCalls = 0;
    $scope.$watch("inputModel", function (newValue, oldValue) {
        console.log("Value changed. Old value: " + oldValue + ", new value: " + newValue);
        $scope.watchCalls++;
    });

    $scope.$watch(function () {
        // Highlight dirty checking by uncommenting the line below.
        // console.log("Watch function was called");
        return $scope.watchCalls % 5 == 0;
    }, function (oldValue, newValue) {
        console.log("Function's value changed. Old value: " + oldValue + ", new value: " + newValue);
    });
});