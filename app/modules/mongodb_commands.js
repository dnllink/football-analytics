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