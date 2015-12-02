var mongoResults = require('../modules/goals');

module.exports = function(app) {

    var controller = {};

    controller.getGoals = function(req, res) {
        mongoResults(function(docs) {
            res.json(docs);
        });
    };

    return controller;
};