module.exports = function (app) {

    var controller = app.controllers.goalsByTeam;

    app.route('/goals-by-team-home').get(controller.getGoalsByTeamHome);

    app.route('/goals-by-team-home/:idLeague').get(controller.getGoalsByTeamHome);

    app.route('/goals-by-team-away').get(controller.getGoalsByTeamAway);

    app.route('/goals-by-team-away/:idLeague').get(controller.getGoalsByTeamAway);

};