var mongoResultsHome = require('../modules/goals-by-team-home');
var mongoResultsAway = require('../modules/goals-by-team-away');

module.exports = function (app) {

    var controller = {};

    controller.getGoalsByTeamHome = function (req, res) {
        mongoResultsHome(function (docs) {
            res.json(docs);
        });
    };

    controller.getGoalsByTeamAway = function (req, res) {
        mongoResultsAway(function (docs) {
            res.json(docs);
        });
    };

    return controller;
};