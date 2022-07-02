import Header from '~/components/Header';
import Chart from '~/components/Chart';
import styled from 'styled-components';

import './App.css';
import GlobalStyled from './components/GlobalStyled/GlobalStyled';
const Wrapper = styled.div`
    text-align: center;
    @media (max-width: 375px) {
    }
`;
const HeaderBox = styled.div`
    max-width: 1080px;
    margin: auto;
    margin-top: 63px;
    background: var(--white);
    @media (max-width: 375px) {
    }
`;
const Title = styled.h1`
    width: 100%;
    font-size: 2.6rem;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    color: var(--main-color);
    line-height: 30px;
    text-transform: uppercase;
    @media (max-width: 375px) {
        font-size: 2rem;
        line-height: 28px;
    }
`;
const P = styled.p`
    margin-top: 18px;
    width: 100%;
    font-size: 1.6rem;
    text-align: center;
    padding: 0px 10% 30px 10%;
    line-height: 24px;
    @media (max-width: 375px) {
      margin-top: 15px;
      padding: 0px 20px 24px 20px;  
`;

const WrapperContent = styled.div`
    max-width: 1080px;
    height: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    @media (max-width: 375px) {
    }
`;
const HeaderContent = styled.div`
    @media (max-width: 375px) {
    }
`;
const ChartContent = styled.div`
    @media (max-width: 375px) {
    }
`;
function App() {
    return (
        <div className="App">
            <Wrapper>
                <HeaderBox>
                    <Title>Tra Cứu Giá Đơn Vị</Title>
                    {/* <GlobalStyled black /> */}
                    <P>
                        Nhằm cung cấp cho bạn đầy đủ thông tin về giá trị quỹ trong cả hiện tại và quá khứ, bạn có thể
                        tùy chọn thời điểm tra cứu theo khung thời gian bạn muốn
                    </P>
                </HeaderBox>

                <WrapperContent>
                    <HeaderContent />
                    <ChartContent />
                </WrapperContent>
            </Wrapper>
        </div>
    );
}

export default App;
