module.exports = function(app) {

    var controller = app.controllers.scores;

    app.route('/scores').get(controller.getScores);

    app.route('/scores/:idLeague').get(controller.getScores);

};