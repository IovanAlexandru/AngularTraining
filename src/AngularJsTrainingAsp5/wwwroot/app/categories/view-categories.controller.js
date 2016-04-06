(function () {

    ExpenseManager.app.controller("ViewCategoriesCtrl", ['$scope', 'CategoryService', ViewCategoriesController]);

    function ViewCategoriesController($scope, CategoryService) {
        var vm = this;
        vm.categories = [];
        $scope.$on("CATEGORIES_UPDATED", function () {
            getCategories();
        });

        function getCategories() {
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

        getCategories();
    }

})();