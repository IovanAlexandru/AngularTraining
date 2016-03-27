(function () {

    ExpenseManager.app.directive("expenseCategoryChooser", [ExpenseCategoryChooserSetup]);

    function ExpenseCategoryChooserSetup() {
        return {
            restrict: "E",
            templateUrl: "app/components/expense-category-chooser.html",
            scope: {
                categories: '=',
                selectedCategory: '='
            },
            link: function (scope, element, attrs) {
                scope.selectCategory = function (category) {
                    scope.selectedCategory = category;
                };
            }
        };
    }

})();