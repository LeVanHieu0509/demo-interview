import React, { useState } from 'react';
import styled from 'styled-components';
import { BookIcon, UpIcon } from '../Icon/Icon';
import {
    Title,
    Icon,
    DropDownContainer,
    DropDownHeader,
    DropDownListContainer,
    DropDownList,
    ListItem,
    Button,
} from './HeaderStyled';

const HeaderWrapper = styled.div`
    width: 100%;
    background-color: var(--white);
    padding: 12px 24px 12px 24px;
    border-radius: var(--border-radius);

    @media (max-width: 375px) {
        padding: 0;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 375px) {
        display: flex;
        flex-direction: column;
    }
    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`;

const WrapperLeft = styled.div`
    display: flex;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
    @media (max-width: 375px) {
        width: 100%;
    }
`;

const WrraperItem = styled.div`
    margin-right: 24px;
    max-width: 236px;
    @media (max-width: 375px) {
        margin-right: 0px;
        min-width: 100%;
    }
`;
const WrapperRight = styled.div`
    @media (max-width: 375px) {
    }
`;

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTimeDay, setIsTimeDay] = useState(false);

    return (
        <HeaderWrapper>
            <Wrapper>
                <WrapperLeft>
                    <WrraperItem>
                        <DropDownContainer>
                            <DropDownHeader>
                                <Title>Tất cả các quý</Title>
                                <Icon></Icon>
                            </DropDownHeader>
                            {isOpen && (
                                <DropDownListContainer>
                                    <DropDownList>
                                        <ListItem>Mangoes</ListItem>
                                        <ListItem>Apples</ListItem>
                                        <ListItem>Oranges</ListItem>
                                        <ListItem>Oranges</ListItem>
                                        <ListItem>Oranges</ListItem>
                                    </DropDownList>
                                </DropDownListContainer>
                            )}
                        </DropDownContainer>
                    </WrraperItem>

                    <WrraperItem>
                        <DropDownContainer>
                            <DropDownHeader>
                                <Title>01/07/2020 - 10/08/2020</Title>
                                <Icon></Icon>
                            </DropDownHeader>
                            {isTimeDay && (
                                <DropDownListContainer>
                                    <DropDownList>
                                        <ListItem>Mangoes</ListItem>
                                        <ListItem>Apples</ListItem>
                                        <ListItem>Oranges</ListItem>
                                        <ListItem>Oranges</ListItem>
                                        <ListItem>Oranges</ListItem>
                                    </DropDownList>
                                </DropDownListContainer>
                            )}
                        </DropDownContainer>
                    </WrraperItem>

                    <Button>Tra Cứu</Button>
                </WrapperLeft>
                <WrapperRight>
                    <UpIcon />
                    <BookIcon />
                </WrapperRight>
            </Wrapper>
        </HeaderWrapper>
    );
}
