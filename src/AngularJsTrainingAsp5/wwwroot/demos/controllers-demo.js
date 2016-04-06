var controllersApp = angular.module("controllersApp", []);

controllersApp.controller("HelloCtrl", function HelloCtrl($scope) {
    $scope.testText = "Welcome to angular js";
    $scope.getControllerName = function () {
        return "HelloCtrl";
    };

    $scope.inputText = "hello";
});

controllersApp.controller("ChildCtrl", function ChildCtrl($scope) {
    $scope.getChildControllerName = function () {
        return "ChildCtrl";
    };
});

controllersApp.controller("Child2Ctrl", function ChildCtrl($scope) {
    $scope.getChildControllerName = function () {
        return "Child2Ctrl";
    };
});