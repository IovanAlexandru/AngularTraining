var scopeApplyApp = angular.module("scopeApplyApp", []);

scopeApplyApp.controller("ScopeApplyTestCtrl", function ScopeApplyTestCtrl($scope, $interval) {
    $scope.insideCounter = 0;
    $scope.outsideCounter = 0;
    $scope.outsideCounter2 = 0;

    setInterval(function () {
        console.log("set interval fired");
        $scope.outsideCounter++;
    }, 1000);

    setInterval(function () {
        $scope.$apply(function () {
            $scope.outsideCounter2++;
        });
    }, 1000);

    $interval(function () {
        console.log("$interval fired");
        $scope.insideCounter++;
    }, 5000);
});