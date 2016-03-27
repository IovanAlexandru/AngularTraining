(function () {

    ExpenseManager.app.controller('ViewAllExpensesCtrl', ViewAllExpensesCtrl);

    ViewAllExpensesCtrl.$inject = ['ExpenseService', 'CategoryService'];

    function ViewAllExpensesCtrl(ExpenseService, CategoryService) {
        var vm = this;
        vm.categoryColors = {};
        vm.expenses = ExpenseService.getExpenses();
        vm.categories = CategoryService.getCategories();
        vm.viewBy = 'category';

        for (var i = 0; i < vm.categories.length; i++) {
            vm.categoryColors[vm.categories[i].id] = vm.categories[i].color;
        }

        vm.setView = function (viewBy) {
            vm.viewBy = viewBy;
        };
    }

})();