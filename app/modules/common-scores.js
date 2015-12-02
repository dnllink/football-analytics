var MongoClient = require('mongodb').MongoClient;

module.exports = function(callback) {

    var gameList = [];

    MongoClient.connect('mongodb://127.0.0.1:27017/test',
        function(erro, db) {
            if (erro) throw err;
            db.collection('resultados').aggregate([{
                $group: {
                    _id: {
                        score1: '$score1',
                        score2: '$score2'
                    },
                    count: {
                        $sum: 1
                    }
                }
            }, {
                $sort: {
                    count: -1
                }
            }], (function(err, docs) {
                if (erro) throw err;
                callback(docs);
                db.close();
            }));
        });

};