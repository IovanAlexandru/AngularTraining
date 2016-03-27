(function () {

    ExpenseManager.app.filter("dateFormatter", function () {
        return function (input) {
            return moment(input).calendar();
        }
    });

})();