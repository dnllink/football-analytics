angular.module('futebol').controller('LeagueController', function ($scope, Scores, Goals, GoalsByTeamHome, GoalsByTeamAway) {

    $scope.scores = [];
    $scope.scoresChartConfig = generateGraphic([], 'Placares - Premier League 2015/2016');

    $scope.goals = [];
    $scope.goalsChartConfig = generateGraphic([], 'Gols por jogo - Premier League 2015/2016');

    $scope.goalsHome = [];
    $scope.goalsAway = [];

    Scores.query(function (docs) {
        $scope.scores = docs;
        $scope.scoresChartConfig.generateScoresSeries(docs);
    }, function (erro) {
        console.log('[ERRO] Não foi possível obter a lista de resultados');
        console.log('[STATUSTEXT] ' + erro);
    });

    Goals.query(function (docs) {
        $scope.goals = docs;
        $scope.goalsChartConfig.generateGoalsSeries(docs);
    }, function (erro) {
        console.log('[ERRO] Não foi possível obter a lista de resultados');
        console.log('[STATUSTEXT] ' + erro);
    });

    GoalsByTeamHome.query(function (docs) {
        $scope.goalsHome = docs;
    }, function (erro) {
        console.log('[ERRO] Não foi possível obter a lista de resultados');
        console.log('[STATUSTEXT] ' + erro);
    });

    GoalsByTeamAway.query(function (docs) {
        $scope.goalsAway = docs;
    }, function (erro) {
        console.log('[ERRO] Não foi possível obter a lista de resultados');
        console.log('[STATUSTEXT] ' + erro);
    });

});