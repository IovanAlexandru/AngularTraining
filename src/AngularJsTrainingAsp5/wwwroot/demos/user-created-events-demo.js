var userCreatedEventsApp = angular.module("userCreatedEventsApp", []);

userCreatedEventsApp.controller("EventsCtrl", function EventCtrl($scope) {
    $scope.logs = [];

    function log(text) {
        $scope.logs.unshift({
            text: text
        });
    }

    $scope.inputFocus = function () {
        log("inputFocus");
    }

    $scope.inputFocusOut = function () {
        log("inputFocusOut or blur");
    }

    $scope.inputKeyPress = function ($event) {
        log("inputKeyPress: " + String.fromCharCode($event.which));
    };

    $scope.pressButton = function () {
        log("you've clicked the button");
    };

    $scope.doubleClickButton = function () {
        log("you've double clicked me");
    };

    $scope.mouseEnter = function () {
        log("mouse enter");
    };

    $scope.mouseLeave = function () {
        log("mouse leave");
    };
});