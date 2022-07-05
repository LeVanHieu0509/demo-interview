import React, { Component } from 'react';
import CanvasJSReact from '../../lib/react-canvasjs-chart-samples/src/assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Canvas() {
    const data = [
        {
            showInLegend: true,
            legendText: 'Quý 1',
            name: 'Quý 1',
            type: 'line',
            xValueType: 'dateTime',
            xValueFormatString: 'DD MMM',
            color: '#E87722',
            //độ to nhỏ của dấu chấm
            markerSize: 6,
            //dấu chấm

            markerType: 'circle',
            labelFontColor: '#0A3B32',
            //độ đậm

            lineThickness: 2,
            dataPoints: [
                { x: new Date(2017, 6, 1), y: 0.9 },
                { x: new Date(2017, 6, 2), y: 0.92 },
                { x: new Date(2017, 6, 3), y: 0.94 },
                { x: new Date(2017, 6, 4), y: 0.94 },
                { x: new Date(2017, 6, 5), y: 0.96 },
                { x: new Date(2017, 6, 6), y: 0.98 },
                { x: new Date(2017, 6, 7), y: 1.0 },
                { x: new Date(2017, 6, 8), y: 0.9 },
                { x: new Date(2017, 6, 9), y: 0.92 },
                { x: new Date(2017, 6, 10), y: 0.94 },
                { x: new Date(2017, 6, 11), y: 0.94 },
                { x: new Date(2017, 6, 12), y: 0.96 },
                { x: new Date(2017, 6, 13), y: 0.98 },
                { x: new Date(2017, 6, 14), y: 1.0 },
                { x: new Date(2017, 6, 15), y: 1.0 },
                { x: new Date(2017, 6, 16), y: 1.0 },
                { x: new Date(2017, 6, 17), y: 0.98 },
                { x: new Date(2017, 6, 18), y: 1.0 },
                { x: new Date(2017, 6, 19), y: 1.0 },
                { x: new Date(2017, 6, 20), y: 0.98 },
                { x: new Date(2017, 6, 21), y: 1.0 },
                { x: new Date(2017, 6, 22), y: 0.92 },
                { x: new Date(2017, 6, 23), y: 0.92 },
                { x: new Date(2017, 6, 24), y: 1.0 },
                { x: new Date(2017, 6, 25), y: 0.98 },
                { x: new Date(2017, 6, 26), y: 1.0 },
                { x: new Date(2017, 6, 27), y: 1.0 },
                { x: new Date(2017, 6, 28), y: 1.0 },
                { x: new Date(2017, 6, 29), y: 0.98 },
                { x: new Date(2017, 6, 30), y: 1.0 },
                { x: new Date(2017, 6, 31), y: 0.92 },
                { x: new Date(2017, 7, 1), y: 1.0 },
                { x: new Date(2017, 7, 2), y: 0.92 },
                { x: new Date(2017, 7, 3), y: 1.0 },
                { x: new Date(2017, 7, 4), y: 0.98 },
                { x: new Date(2017, 7, 5), y: 0.98 },
                { x: new Date(2017, 7, 6), y: 1.0 },
                { x: new Date(2017, 7, 7), y: 0.92 },
                { x: new Date(2017, 7, 8), y: 0.98 },
                { x: new Date(2017, 7, 9), y: 0.98 },
                { x: new Date(2017, 7, 10), y: 0.91 },
            ],
        },
    ];
    const options = {
        theme: 'light2',
        animationEnabled: true,
        zoomEnabled: true,
        title: {
            text: 'Website Traffic',
        },

        axisX: {
            tickLength: 8,
            interval: 10,
            intervalType: 'day',
            // minimum: new Date(2017, 6, 0),
            // maximum: new Date(2017, 7, 10),
            valueFormatString: 'DD MMM',
            title: 'X',
            lineColor: 'rgba(0, 0, 0, 0.4)',
            tickColor: 'rgba(0, 0, 0, 0.4)',
            lineThickness: 1,
            labelFontFamily: 'tahoma',
            labelMaxWidth: 100,
            labelWrap: true,
            labelFormatter: function (e) {
                return CanvasJS.formatDate(e.value, 'DD/MM');
            },

            labelFontWeight: '400',
            // viewportMinimum: new Date(2017, 6, 1),
            // viewportMaximum: new Date(2017, 7, 10),
        },
        axisY: {
            tickLength: 0,
            lineColor: 'rgba(0, 0, 0, 0.4)',
            tickColor: '#0A3B32',
            labelFontColor: '#0A3B32',
            labelFontSize: '16px',
            lineThickness: 1,
        },

        toolTip: {
            shared: true,
        },
        legend: {
            maxHeight: 150,
            fontSize: 20,
            fontFamily: 'tamoha',
            fontColor: 'Sienna',
            horizontalAlign: 'right', // left, center ,right
            verticalAlign: 'top',
        },

        data: data,
    };
    return (
        <div>
            <CanvasJSChart
                options={options}
                /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
}
