function generateGraphic(seriesArray, titleText) {

    var chartConfig = {
        options: {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.name}: <b>{point.y:.0f}</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            }
        },

        series: seriesArray,
        title: {
            text: titleText
        },
        func: function(chart) {
            //setup some logic for the chart
        },
        generateScoresSeries: function(data) {
            var serie = {
                name: 'Resultados mais comuns',
                colorByPoint: true,
                data: []
            };
            for (var i = 0; i < data.length; i++) {
                var value = {
                    name: data[i]._id.score1 + 'x' + data[i]._id.score2,
                    y: data[i].count
                };
                serie.data.push(value);
            };
            var series = [];
            series.push(serie);
            this.series = series;
        },
        generateGoalsSeries: function(data) {
            var serie = {
                name: 'Quantidade de gols',
                colorByPoint: true,
                data: []
            };
            for (var i = 0; i < data.length; i++) {
                var value = {
                    name: data[i]._id.qtGoals,
                    y: data[i].count
                };
                serie.data.push(value);
            };
            var series = [];
            series.push(serie);
            this.series = series;
        }
    };

    return chartConfig;

};