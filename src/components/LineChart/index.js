import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function LineChart({ chartData, options, legend }) {
    return <Line legend={legend} options={options} data={chartData} />;
}

export default LineChart;
