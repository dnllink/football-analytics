var MongoClient = require('mongodb').MongoClient;
var results = require("./en.1.json");
var count = 0;

MongoClient.connect('mongodb://127.0.0.1:27017/test',
    function(erro, db) {

        if (erro) throw err;

        for (var c1 = 0; c1 < results.rounds.length; c1++) {
            for (var c2 = 0; c2 < results.rounds[c1].matches.length; c2++) {
                results.rounds[c1].matches[c2].league = {
                    name: 'English Premier League',
                    code: 'EPL', //
                    season: '2015/2016'
                };
                var winner;
                if (results.rounds[c1].matches[c2].score1 != null) {
                    if (results.rounds[c1].matches[c2].score1 > results.rounds[c1].matches[c2].score2) {
                        winner = 'H';
                    } else if (results.rounds[c1].matches[c2].score2 > results.rounds[c1].matches[c2].score1) {
                        winner = 'A';
                    } else {
                        winner = 'D';
                    };
                } else {
                    winner = null;
                };
                results.rounds[c1].matches[c2].winner = winner;
                db.collection('resultados').insert(results.rounds[c1].matches[c2], function(erro, contato) {
                    if (erro) throw err;
                    console.log(contato);
                    count = count + 1;
                    console.log(count);
                });
            }
        }
    });