angular.module('futebol', ['ngRoute', 'ngResource', 'highcharts-ng']).config(function($routeProvider, $httpProvider) {

    $routeProvider.when('/league', {
        templateUrl: 'partials/league.html',
        controller: 'LeagueController'
    });

    $routeProvider.otherwise({redirectTo: '/league'});

});