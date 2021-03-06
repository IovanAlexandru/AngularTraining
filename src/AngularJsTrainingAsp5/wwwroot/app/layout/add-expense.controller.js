﻿(function () {

    ExpenseManager.app.controller('AddExpenseCtrl', AddExpenseController);

    AddExpenseController.$inject = ['$scope', 'CategoryService', 'ExpenseService'];

    function AddExpenseController($scope, CategoryService, ExpenseService) {
        var vm = this;
        vm.categories = [];
        CategoryService.getCategories().then(function success(response) {
            if (response.status == "SUCCESS") {
                vm.categories = response.data;
            } else {
                alert(response.errors.join("\n"));
            }
        }, function error(response) {
            alert(response.errors.join("\n"));
        });

        vm.clearInput = function () {
            vm.selectedCategory = undefined;
            vm.amount = "";
            vm.notes = "";
            $scope.addExpense.expenseAmount.$setPristine();
        };

        vm.addExpense = function () {
            if (!$scope.addExpense.$valid) {
                $scope.addExpense.expenseAmount.$setDirty();
                return;
            }

            if (vm.selectedCategory == undefined) {
                alert("Please select a category.");
                return;
            }

            ExpenseService.addExpense(vm.amount, vm.selectedCategory.id, vm.notes);
            vm.clearInput();
        };
    }

})();