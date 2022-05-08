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
        caption: "Average Fastball Velocity",
        yaxisname: "Velocity (in mph)",
        subcaption: "[2005-2016]",
        numbersuffix: " mph",
        rotatelabels: "1",
        setadaptiveymin: "1",
        theme: "fusion"
    },
    data: [
        {
            label: "2005",
            value: "89.45"
        },
        {
            label: "2006",
            value: "89.87"
        },
        {
            label: "2007",
            value: "89.64"
        },
        {
            label: "2008",
            value: "90.13"
        },
        {
            label: "2009",
            value: "90.67"
        },
        {
            label: "2010",
            value: "90.54"
        },
        {
            label: "2011",
            value: "90.75"
        },
        {
            label: "2012",
            value: "90.8"
        },
        {
            label: "2013",
            value: "91.16"
        },
        {
            label: "2014",
            value: "91.37"
        },
        {
            label: "2015",
            value: "91.66"
        },
        {
            label: "2016",
            value: "91.8"
        }
    ]
};

const chartConfigs = {
    type: "line",
    width: "100%",
    height: "95%",
    dataFormat: "JSON",
    dataSource: dataSource
};

const LineChart = () => {
    return (
        <div style={{display:'block', margin:'auto', width:'95%'}}>
            <ReactFC {...chartConfigs} />
        </div>
    )
}

export default LineChart;