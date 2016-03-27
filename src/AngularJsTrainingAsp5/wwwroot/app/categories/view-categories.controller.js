(function () {

    ExpenseManager.app.controller("ViewCategoriesCtrl", ViewCategoriesController);

    ViewCategoriesController.$inject = ['CategoryService'];

    function ViewCategoriesController(CategoryService) {
        var vm = this;
        vm.categories = CategoryService.getCategories();
    }

})();