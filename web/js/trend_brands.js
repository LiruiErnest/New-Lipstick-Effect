var chart0 = AmCharts.makeChart("trend_brands",
{
    "type": "serial",
    "theme": "light",
    "fontFamily": "PT Mono",
    "dataProvider": [{
        "name": "LANEIGE",
        "points": 103,
        "color": "#7F8DA9",
        "bullet": "web/images/K4.png"
    }, {
        "name": "Shu uemura",
        "points": 95,
        "color": "#FEC514",
        "bullet": "web/images/K3.png"
    }, {
        "name": "YSL",
        "points": 73,
        "color": "#DB4C3C",
        "bullet": "web/images/K2.png"
    }, {
        "name": "CLIO",
        "points": 68,
        "color": "#DAF0FD",
        "bullet": "web/images/K1.png"
    }, {
        "name": "Giorgio Armani",
        "points": 61,
        "color": "#cd82ad",
        "bullet": "web/images/K8.png"
    }],
    "valueAxes": [{
        "maximum": 120,
        "minimum": 0,
        "axisAlpha": 0,
        "dashLength": 4,
        "position": "left"
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
        "bulletOffset": 10,
        "bulletSize": 100,
        "colorField": "color",
        "cornerRadiusTop": 8,
        "customBulletField": "bullet",
        "fillAlphas": 0.8,
        "lineAlpha": 0,
        "type": "column",
        "valueField": "points"
    }],
    "marginTop": 0,
    "marginRight": 0,
    "marginLeft": 0,
    "marginBottom": 0,
    "autoMargins": false,
    "categoryField": "name",
    "categoryAxis": {
        "axisAlpha": 0,
        "gridAlpha": 0,
        "inside": true,
        "tickLength": 0
    },
    "export": {
    	"enabled": true
     }
});