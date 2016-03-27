var ExpenseManager = {};
ExpenseManager.app = angular.module("ExpenseManager", ["ui.router"]);
ExpenseManager.app.config(routeConfig);

routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/expenses');
    $stateProvider
        .state("expenses", {
            templateUrl: "app/layout/expense-layout.html",
            controller: "AddExpenseCtrl",
            controllerAs: "addExpenseVM",
            abstract: true
        })
            .state("expenses.list", {
                url: "/expenses",
                templateUrl: "app/expenses/view-all-expenses.html",
                controller: "ViewAllExpensesCtrl",
                controllerAs: "allExpensesVM"
            })
        .state("expense-categories", {
            templateUrl: "app/categories/categories-layout.html",
            abstract: true
        })
            .state("expense-categories.list", {
                url: "/categories",
                views: {
                    'add-category': {
                        templateUrl: "app/categories/add-category.html",
                        controller: "AddCategoryCtrl",
                        controllerAs: "addCategoryVM"
                    },
                    'view-categories': {
                        templateUrl: "app/categories/view-categories.html",
                        controller: "ViewCategoriesCtrl",
                        controllerAs: "viewCategoriesVM"
                    }
                }
            });
}