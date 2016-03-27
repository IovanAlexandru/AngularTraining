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
				var response = CategoryService.addCategory(vm.categoryName);
				if (response.status == "SUCCESS") {
					vm.clearText();
				} else {
					var msg = response.errors.join("\n");
					alert(msg);
				}
			}
		};
	}

})();