(function () {

    ExpenseManager.app.factory("ExpenseService", ExpenseService);

    ExpenseService.$inject = [];

    function ExpenseService() {
        var interface = {};
        
        var _expenses = getExpenses();

        function getExpenses() {
            var rawExpenses = window.localStorage.getItem("expenses");
            if (rawExpenses == undefined) {
                return [];
            }

            return angular.fromJson(rawExpenses);
        }

        interface.addExpense = function (amount, categoryId, notes) {
            _expenses.push({
                amount: amount,
                category: categoryId,
                notes: notes,
                date: new Date()
            });
            window.localStorage.setItem("expenses", angular.toJson(_expenses));
        };

        interface.getExpenses = function () {
            return _expenses;
        };

        return interface;
    }

})();