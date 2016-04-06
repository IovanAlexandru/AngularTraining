var builtinDirectivesApp = angular.module("builtinDirectivesApp", []);

builtinDirectivesApp.controller("BuiltinDirectivesCtrl", function BuiltinDirectivesCtrl($scope) {
    $scope.doClickAlert = function () {
        alert("click alert");
    };
});