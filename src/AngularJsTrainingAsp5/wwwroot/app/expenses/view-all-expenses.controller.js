(function () {

    ExpenseManager.app.controller('ViewAllExpensesCtrl', ViewAllExpensesCtrl);

    ViewAllExpensesCtrl.$inject = ['ExpenseService', 'CategoryService'];

    function ViewAllExpensesCtrl(ExpenseService, CategoryService) {
        var vm = this;
        vm.categoryColors = {};
        vm.expenses = ExpenseService.getExpenses();
        vm.categories = [];
        vm.viewBy = 'category';

        CategoryService.getCategories().then(function success(response) {
            if (response.status == "SUCCESS") {
                vm.categories = response.data;
                for (var i = 0; i < vm.categories.length; i++) {
                    vm.categoryColors[vm.categories[i].id] = vm.categories[i].color;
                }
            } else {
                alert(response.errors.join("\n"));
            }
        }, function error(response) {
            alert(response.errors.join("\n"));
        });

        vm.setView = function (viewBy) {
            vm.viewBy = viewBy;
        };
    }

})();