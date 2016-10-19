(function (){
    var services = angular.module('EIMServices', ['ngResource']).
    factory('getData', ['$resource', function ($resource) {
        console.log("OK")
        return $resource('database/eim_data.json', {}, {
            getData : { method : 'GET', params : {}, isArray : false }
        })
    }])
})();
