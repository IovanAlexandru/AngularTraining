(function () {

    ExpenseManager.app.controller("ViewCategoriesCtrl", ['CategoryService', ViewCategoriesController]);

    function ViewCategoriesController(CategoryService) {
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
    }

})();