// resultados exatos
db.resultados.aggregate([{
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
}]);

// gols por jogo
db.resultados.aggregate([{
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
        _id: {
            qtGoals: {
                $add: ['$score1', '$score2']
            }
        },
        count: {
            $sum: 1
        }
    }
}, {
    $sort: {
        count: -1
    }
}]);

// gols em casa 
db.resultados.aggregate([{
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
        _id: '$team1.name',
        GF: {
            $sum: '$score1'
        },
        GA: {
            $sum: '$score2'
        },
        GD: {
            $sum: {
                $subtract: ['$score1', '$score2']
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
}]);

// gols fora
db.resultados.aggregate([{
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
}]);

db.resultados.find({'team1.code': 'MUN', winner: {$ne: null}});

// Times
// Média de gols feitos em casa
db.resultados.aggregate([{
    $match: {
        'team1.code': 'MUN',
        winner: {$ne: null}
        }
}, {
    $group: {
        _id: null,
        avgGoals: {
            $avg: '$score1'
        }
    }
}]);

// Média de gols sofridos em casa
db.resultados.aggregate([{
    $match: {
        'team1.code': 'MUN',
        winner: {$ne: null}
        }
}, {
    $group: {
        _id: null,
        avgGoals: {
            $avg: '$score2'
        }
    }
}]);

// Ultimos 5 resultados em casa
db.resultados.find({'team1.code': 'MUN', winner: {$ne: null}}).sort({date: -1});

// Ultimos 5 resultados fora 
db.resultados.find({'team2.code': 'MUN', winner: {$ne: null}}).sort({date: -1});

// Ultimos 5 resultados gerais
db.resultados.find({$or: [{'team1.code': 'MUN'}, {'team2.code': 'MUN'}], winner: {$ne: null}}).sort({date: -1}).limit(5);

// Proximos 3 jogos
db.resultados.find({$or: [{'team1.code': 'MUN'}, {'team2.code': 'MUN'}], winner: {$eq: null}}).sort({date: 1}).limit(3);