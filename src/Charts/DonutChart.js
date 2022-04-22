import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Resolves charts dependancy
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const dataSource = {
    chart: {
        caption: "Android Distribution for our app",
        subcaption: "For all users in 2017",
        showpercentvalues: "1",
        defaultcenterlabel: "Android Distribution",
        aligncaptionwithcanvas: "0",
        captionpadding: "0",
        decimals: "1",
        plottooltext:
            "<b>$percentValue</b> of our Android users are on <b>$label</b>",
        centerlabel: "# Users: $value",
        theme: "fusion"
    },
    data: [
        {
            label: "Ice Cream Sandwich",
            value: "1000"
        },
        {
            label: "Jelly Bean",
            value: "5300"
        },
    ]
};

const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: "100%",
    dataFormat: "JSON",
    dataSource: dataSource
};

const DonutChart = () => {
    return <ReactFC {...chartConfigs} />;
}

export default DonutChart;
