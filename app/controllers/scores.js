var mongoResults = require('../modules/common-scores');

module.exports = function(app) {

    var controller = {};

    controller.getScores = function(req, res) {
        mongoResults(function(docs) {
            res.json(docs);
        });
    };

    return controller;
};