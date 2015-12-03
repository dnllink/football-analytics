var MongoClient = require('mongodb').MongoClient;

module.exports = function (callback) {

    var gameList = [];

    MongoClient.connect('mongodb://127.0.0.1:27017/test',
        function (erro, db) {
            if (erro) throw err;
            db.collection('resultados').aggregate([{
                $match: {
                    score1: {
                        $ne: null
                    },
                    score2: {
                        $ne: null
                    }
                }
}, {
                $group: {
                    _id: '$team2.name',
                    GF: {
                        $sum: '$score2'
                    },
                    GA: {
                        $sum: '$score1'
                    },
                    GD: {
                        $sum: {
                            $subtract: ['$score2', '$score1']
                        }
                    },
                    PG: {
                        $sum: 1
                    }
                }
}, {
                $sort: {
                    GD: -1
                }
}], (function (err, docs) {
                if (erro) throw err;
                callback(docs);
                db.close();
            }));
        });

};