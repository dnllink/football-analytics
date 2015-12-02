angular.module('futebol').factory('Scores', function ($resource) {

    return $resource('/scores/:idLeague');

});