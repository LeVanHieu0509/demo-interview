import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Utils from '~/Utils';
//import Utils from '~/Utils';
import BarChart from './BarChart';
import LineChart from './LineChart';
const HeaderWrapper = styled.div`
    margin-top: 20px;
    background-color: var(--white);
    border-radius: var(--border-radius);
    @media (max-width: 375px) {
        margin-top: 0px;
        padding-top: 50px;
    }
`;

var chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                boxWidth: 50,
                usePointStyle: true,
                pointStyle: 'line',
            },
        },
    },
    scales: {
        x: {
            grid: {
                display: true,
            },
            title: {
                display: true,
                text: 'Time in Seconds',
                color: 'red',
                font: {
                    size: 24,
                    weight: 'bold',
                },
            },
        },
        y: {
            stepped: true,
            grid: {
                color: 'black',
                borderDash: [5, 2],
                borderColor: 'black',
                tickColor: 'red',
                tickWidth: 1,
            },
            ticks: {
                color: 'red',
                font: {
                    weight: 'bold',
                },
            },
            time: {
                unit: 'day',
                stepSize: 3,
                tooltipFormat: 'đd',
                displayFormats: {
                    minute: 'hh:mm a',
                },
            },
            title: {
                display: true,
                text: 'Speed in Miles per Hour',
                color: 'green',
                font: {
                    size: 18,
                    weight: 'bold',
                },
            },
        },
    },
};

const legend = {
    display: true,
    position: 'bottom',
    labels: {
        fontColor: '#323130',
        fontSize: 14,
    },
};

export default function Chart({ data }) {
    useEffect(() => {
        console.log('Chart', data);
    }, [data]);
    return (
        <HeaderWrapper>
            <div style={{ width: '100%' }}>
                <LineChart legend={legend} chartData={data} />
            </div>
        </HeaderWrapper>
    );
}
