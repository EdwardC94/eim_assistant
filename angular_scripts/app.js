(function () {
    var app = angular.module("EIM_Assistant", ['ngRoute', 'EIMCtrls', 'EIMServices']);
    
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl : 'partials/home.html',
            controller : 'MainCtrl',
            resolve : {
                data : ['getData', '$q', function (getData, $q) {
                    var deferred = $q.defer();
                    var success = function (result) {
                        deferred.resolve(result);
                    };
                    getData.getData({}, success, success);
                    console.log("OK")
                    return deferred.promise;
                }]
            }
        }).
        otherwise('/home');
    }]);
})();
