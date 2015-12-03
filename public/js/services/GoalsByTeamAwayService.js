angular.module('futebol').factory('GoalsByTeamAway', function ($resource) {

    return $resource('/goals-by-team-away/:idLeague');

});