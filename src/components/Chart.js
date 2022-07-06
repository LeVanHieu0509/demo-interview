import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Utils from '~/Utils';
//import Utils from '~/Utils';
import BarChart from './BarChart';

import Canvas from './Canvas';
import LineChart from './LineChart';

const HeaderWrapper = styled.div`
    margin-top: 20px;
    padding: 0px 20px 0px 20px;
    background-color: var(--white);
    border-radius: var(--border-radius);
    @media (max-width: 450px) {
        margin-top: 0px;
        padding: 30px 0px 0px 0;
    }
`;

export default function Chart({ options, data }) {
    useEffect(() => {}, [data]);
    return (
        <HeaderWrapper>
            <div className="chartBox" style={{ width: '100%', minHeight: '360px' }}>
                <LineChart options={options} chartData={data} />
            </div>
        </HeaderWrapper>
    );
}
