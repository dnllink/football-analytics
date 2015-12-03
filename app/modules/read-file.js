var MongoClient = require('mongodb').MongoClient;
var results = require("./en.1.json");
var count = 0;

MongoClient.connect('mongodb://127.0.0.1:27017/test',
    function(erro, db) {

        if (erro) throw err;

        for (var c1 = 0; c1 < results.rounds.length; c1++) {
            for (var c2 = 0; c2 < results.rounds[c1].matches.length; c2++) {
                //if (results.rounds[c1].matches[c2].score1) {
                //console.log(results.rounds[c1].matches[c2]);
                results.rounds[c1].matches[c2].league = {
                    name: 'English Premier League',
                    code: 'EPL',
                    season: '2015/2016'
                };
                db.collection('resultados').insert(results.rounds[c1].matches[c2], function(erro, contato) {
                    if (erro) throw err;
                    console.log(contato);
                    count = count + 1;
                    console.log(count);
                });
                //}
            }
        }
    });