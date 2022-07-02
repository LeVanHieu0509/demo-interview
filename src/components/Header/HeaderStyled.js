import styled from 'styled-components';

export const DropDownContainer = styled('div')`
    width: 236px;
    text-align: left;
    z-index: 2;
    position: relative;
    @media (max-width: 375px) {
        margin-right: 0px;
        min-width: 100%;
    }
`;
export const DropDownListContainer = styled('div')`
    position: absolute;
    width: 100%;
`;
export const DropDownHeader = styled('div')`
    position: relative;
    padding: 10px 20px 10px 20px;
    background: #ffffff;
    border: 1px solid #ccc;
    border-radius: var(--border-radius);
    &::before {
        height: 10px;
        width: 10px;
        z-index: 100;
        position: absolute;
        top: 40%;
        right: 25px;
        content: ' ';
        background: black;
    }

    @media (max-width: 375px) {
        margin-bottom: 14px;
    }
`;

export const Title = styled('span')`
    color: var(--main-color);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 24px;
`;
export const Icon = styled('span')``;

export const DropDownList = styled('ul')`
    padding: 10px 20px 10px 20px;
    margin: 0;
    background: #ffffff;
    box-sizing: border-box;
    color: var(--main-color);
    font-size: 1.6rem;
    font-weight: 400;
    border-radius: var(--border-radius);
`;

export const ListItem = styled('li')`
    list-style: none;
`;

export const Button = styled('button')`
    width: 139px;
    height: 44px;
    background: #e87722;
    border-radius: 4px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--white);
    @media (max-width: 375px) {
        width: 100%;
    }
`;
