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

export default function Chart({ data }) {
    useEffect(() => {}, [data]);
    return (
        <HeaderWrapper>
            <div style={{ width: '100%' }}>
                <LineChart chartData={data} />
            </div>
        </HeaderWrapper>
    );
}
