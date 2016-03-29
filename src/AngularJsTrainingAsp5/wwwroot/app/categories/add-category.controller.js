(function () {

	ExpenseManager.app.controller("AddCategoryCtrl", AddCategoryController);

	AddCategoryController.$inject = ["$scope", "CategoryService"];

	function AddCategoryController($scope, CategoryService) {
		var vm = this;
		
		vm.clearText = function () {
			vm.categoryName = "";
			$scope.addCategoryForm.categoryName.$setPristine();
		};

		vm.save = function () {
			if ($scope.addCategoryForm.$valid) {
			    CategoryService.addCategory(vm.categoryName).then(function success(response) {
			        if (response.status == "SUCCESS") {
			            vm.clearText();
			        } else {
			            alert(response.errors.join("\n"));
			        }
			    }, function failure(response) {
			        alert(response.errors.join("\n"));
			    });
			} else {
			    $scope.addCategoryForm.categoryName.$setDirty();
			}
		};
	}

})();