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
        caption: "Countries With Most Oil Reserves [2017-18]",
        subcaption: "In MMbbl = One Million barrels",
        xaxisname: "Country",
        yaxisname: "Reserves (MMbbl)",
        numbersuffix: "K",
        theme: "fusion",
        palettecolors: "#66c0ff",
        usePlotGradientColor: "1",
        plotGradientColor: "#45a6dc",
        // showBorder: "1",
    },
    data: [
        {
            label: "Venezuela",
            value: "290"
        },
        {
            label: "Saudi",
            value: "260"
        },
        {
            label: "Canada",
            value: "180"
        },
        {
            label: "Iran",
            value: "140"
        },
        {
            label: "Russia",
            value: "115"
        },
        {
            label: "UAE",
            value: "100"
        },
        {
            label: "US",
            value: "30"
        },
        {
            label: "China",
            value: "30"
        }
    ]
};

const chartConfigs = {
    type: 'column2d',
    width: '100%',
    height: '95%',
    dataFormat: 'json',
    dataSource: dataSource,
};

const BarChart = () => {
    return (
        <div style={{display:'block', margin:'auto', width:'95%'}}>
                <ReactFC {...chartConfigs} />
        </div>
    )
}

export default BarChart;

