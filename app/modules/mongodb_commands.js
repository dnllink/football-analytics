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