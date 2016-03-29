(function () {

    ExpenseManager.app.factory('CategoryService', CategoryService);

    CategoryService.$inject = ['$http', '$q'];

    function CategoryService($http, $q) {
        var interface = {};
        var COMMUNICATION_FAILURE = 'Communication failure or smth...';
        interface.addCategory = function (category) {
            var deferred = $q.defer();
            var errors = [];
            if (category == undefined || category.length == 0) {
                errors.push('Invalid category');
                deferred.resolve(buildErrorResponse(errors));
                return deferred.promise;
            }

            var cat = capitalizeFirstLetter(category);

            var categoryToAdd = {
                id: -1,
                name: cat,
                color: getRandomColor()
            };

            $http({
                method: 'POST',
                url: '/api/category',
                data: categoryToAdd
            }).success(function (response, status, headers) {
                if (status == 200) {
                    categoryToAdd.id = response;
                    _categories.push(categoryToAdd);
                    deferred.resolve(buildSuccessResponse());
                } else {
                    deferred.resolve(buildErrorResponse(['Unable to save category.']));
                }
            }).error(function (response) {
                deferred.reject(buildErrorResponse([COMMUNICATION_FAILURE]));
            });

            return deferred.promise;
        };

        interface.getCategories = function () {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: '/api/category'
            }).success(function (response, status, headers) {
                if (status == 200) {
                    var categories = [];
                    for (var i = 0; i < response.length; i++) {
                        categories.push(response[i]);
                    }

                    deferred.resolve(buildSuccessResponse(categories));
                } else {
                    deferred.resolve(buildErrorResponse(['Failed to retrieve categories']));
                }
            }, function error(response) {
                deferred.resolve(buildErrorResponse(['Failed to retrieve categories']));
            });

            return deferred.promise;
        };

        return interface;

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