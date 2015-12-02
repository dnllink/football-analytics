angular.module('futebol').factory('Goals', function ($resource) {

    return $resource('/goals/:idLeague');

});