(function () {
    var app = angular.module("EIM_Assistant", ['ngRoute', 'EIMCtrls', 'EIMServices']);
    
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl : 'partials/home.html',
            controller : 'MainCtrl',
            resolve : {
                selectData : ['getData', '$q', function (getData, $q) {
                    var deferred = $q.defer();
                    var success = function (result) {
                        deferred.resolve(result);
                    };
                    getData.getData({}, success, success);
                    return deferred.promise;
                }]
            }
        }).
        otherwise("/home")
    }])    

    
})();
