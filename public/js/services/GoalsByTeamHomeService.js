angular.module('futebol').factory('GoalsByTeamHome', function ($resource) {

    return $resource('/goals-by-team-home/:idLeague');

});