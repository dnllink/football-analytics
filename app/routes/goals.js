module.exports = function(app) {

    var controller = app.controllers.goals;

    app.route('/goals').get(controller.getGoals);

    app.route('/goals/:idLeague').get(controller.getGoals);

};