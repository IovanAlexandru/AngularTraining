var builtinFiltersApp = angular.module("builtinFiltersApp", []);

builtinFiltersApp.controller("BuiltinFiltersCtrl", function BuiltinFiltersCtrl($scope) {
	$scope.orderOption = 'name'
	$scope.orderDirection = 'asc';
	$scope.records = [];
	var years = [2010, 2009, 2012];
	for (var i = 0; i < 10; i++) {
		$scope.records.push({
			name: 'Book ' + (i + 1),
			year: years[Math.floor((Math.random() * 10)) % 3]
		});
	}

	$scope.buildOrderOption = function (orderOption, orderDirection) {
		var prefix = "";
		if (orderDirection == 'desc') {
			prefix = "-";
		}

		return prefix + orderOption;
	}
});