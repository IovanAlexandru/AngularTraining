(function () {

    ExpenseManager.app.factory("CategoryService", CategoryService);

    CategoryService.$inject = [];

    function CategoryService() {
        var interface = {};
        var _categories = getCategories();

        interface.addCategory = function (category) {
            var errors = [];
            if (category == undefined || category.length == 0) {
                errors.push("Invalid category");
                return buildErrorResponse(errors);
            }

            var cat = capitalizeFirstLetter(category);
            if (_categories.indexOf(cat) != -1) {
                errors.push("Category already exists");
                return buildErrorResponse(errors);
            }

            _categories.push({
                id: _categories.length + 1,
                name: cat,
                color: getRandomColor()
            });

            window.localStorage.setItem("categories", angular.toJson(_categories));

            return buildSuccessResponse();
        };

        interface.getCategories = function () {
            return _categories;
        };

        return interface;

        function getCategories() {
            var rawCategories = window.localStorage.getItem("categories");
            if (rawCategories == undefined) {
                return [];
            }

            return angular.fromJson(rawCategories);
        }

        function capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        function buildErrorResponse(errors) {
            return {
                status: "ERROR",
                errors: errors
            };
        }

        function buildSuccessResponse(data) {
            return {
                status: "SUCCESS",
                data: data
            };
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    }

})();