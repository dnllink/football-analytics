db.resultados.aggregate([{
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

db.resultados.aggregate([{
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
        }

    }
}, {
    $sort: {
        GD: -1
    }
}]);

// gols fora
db.resultados.aggregate([{
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
        }

    }
}, {
    $sort: {
        GD: -1
    }
}]);