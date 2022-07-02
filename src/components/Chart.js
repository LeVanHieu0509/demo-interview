import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    margin-top: 20px;

    background-color: var(--white);
    border-radius: var(--border-radius);
    @media (max-width: 375px) {
    }
`;

export default function Chart() {
    return <HeaderWrapper>Chart</HeaderWrapper>;
}
