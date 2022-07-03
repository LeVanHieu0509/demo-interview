import styled from 'styled-components';
import Chart from '~/components/Chart';
import Header from './components/Header/Header';

import { useEffect, useRef, useState } from 'react';
import './App.css';
import Utils from './Utils';

const Wrapper = styled.div`
    text-align: center;

    @media (max-width: 375px) {
        padding: 0 20px;
    }
    @media (max-width: 800px) {
        padding: 0 20px;
    }
`;
const HeaderBox = styled.div`
    max-width: 1080px;
    margin: auto;
    margin-top: 75px;
    background: var(--white);
    @media (max-width: 450px) {
        margin-top: 63px;
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
    @media (max-width: 450px) {
        font-size: 2rem;
        line-height: 28px;
    }
`;
const P = styled.p`
    color:var(--dark-green);
    margin-top: 18px;
    width: 100%;
    font-size: 1.6rem;
    text-align: center;
    padding: 0px 11% 30px 11%;
    line-height: 24px;
    font-weight:400;
    @media (max-width: 450px) {
    
      margin-top: 15px;    
      padding: 0; 
      margin-bottom:24px;
      height: 74px;
      overflow: hidden;
    }
    @media (max-width: 800px) {
        margin-top: 15px;    
        padding: 0; 
        margin-bottom:24px;
`;

const WrapperContent = styled.div`
    border-radius: var(--border-radius);
    max-width: 1080px;

    margin: auto;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    @media (max-width: 800px) {
        background-color: var(--white);
    }
`;
const Content = styled.div`
    margin: 40px;
    @media (max-width: 800px) {
        margin: 0px;
    }
    @media (max-width: 376px) {
        margin: 0px;
    }
`;
const WrraperButton = styled.div`
    max-width: 1080px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
    @media (max-width: 376px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    @media (max-width: 800px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;
export const Button = styled('button')`
    width: 139px;
    height: 44px;
    background: #e87722;
    border-radius: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1em;
    color: var(--white);

    &:hover {
        cursor: pointer;
    }
    @media (max-width: 376px) {
        width: 100%;
        margin-bottom: 10px;
    }
    @media (max-width: 800px) {
        width: 100%;
        margin-bottom: 10px;
    }
`;

//Data charts
const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
const labels = Utils.months({ count: 5 });
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: '#E87722',
            backgroundColor: '#E87722',
        },
        {
            label: 'Dataset 2',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: '#6ECEB2',
            backgroundColor: '#6ECEB2',
        },
    ],
};
function App() {
    const [dataRandomize, setDataRandomize] = useState(data);

    // const dataRandomize = useSelector(SelectDataRandomize);
    // console.log(dataRandomize);
    //const dispatch = useDispatch();

    const handleRandommize = (dataRandomize) => {
        let newData = { ...dataRandomize };

        let newOK = newData.datasets.map((dataset) => {
            dataset.data = Utils.numbers({ count: newData.labels.length, min: -100, max: 100 });
            return dataset;
        });
        newData.datasets = newOK;
        setDataRandomize(newData);
        //dispatch(ChartActions.Randomize(newData));
    };

    const handleAddDataSet = (dataRandomize) => {
        let dataSet = { ...dataRandomize };
        const dsColor = Utils.namedColor(dataSet.datasets.length);
        const newDataset = {
            label: 'Dataset ' + (dataSet.datasets.length + 1),
            backgroundColor: dsColor,
            borderColor: dsColor,
            data: Utils.numbers({ count: dataSet.labels.length, min: -100, max: 100 }),
        };
        setDataRandomize({ ...dataSet, datasets: [...dataSet.datasets, newDataset] });
    };

    const handleRemoveDataSet = (dataRandomize) => {
        let newData = { ...dataRandomize };
        let distroyData = newData.datasets.pop();

        let arrayFilter = dataRandomize.datasets.filter((data) => data.datasets !== distroyData);
        setDataRandomize({ ...newData, datasets: arrayFilter });
    };

    const handleAddData = (dataAddData) => {
        let addData = { ...dataAddData };
        if (addData.datasets.length > 0) {
            addData.labels = Utils.months({ count: addData.labels.length + 1 });
        }

        for (let index = 0; index < addData.datasets.length; ++index) {
            addData.datasets[index].data.push(Utils.rand(-100, 100));
        }

        setDataRandomize({ ...addData });
    };

    const handleRemoveData = (dataRandomize) => {
        let newData = { ...dataRandomize };

        newData.labels.splice(-1, 1);

        const a = dataRandomize.datasets.map((dataset) => {
            return dataset.data.pop();
        });
        let b = newData.datasets.filter((data) => data.data.filter((data) => data !== a.map((a) => a)));

        setDataRandomize({ ...newData, datasets: b });
    };

    const desRef = useRef(null);
    const moreRef = useRef(null);
    const [desPhone, setDesPhone] = useState('');

    //handle string des home when screen < 450px
    useEffect(() => {
        let subStr = desRef.current.innerText;
        let string = subStr.slice(0, 121) + '...';
        let string360px = subStr.slice(0, 117) + '...';

        if (window.screen.width < 450) {
            setDesPhone(string);
        }
        if (window.screen.width <= 360) {
            setDesPhone(string360px);
        }
    }, []);

    return (
        <div className="App">
            <Wrapper>
                <HeaderBox>
                    <Title>Tra Cứu Giá Đơn Vị</Title>
                    {/* <GlobalStyled black /> */}
                    <P>
                        <span ref={desRef}>
                            {desPhone ? (
                                <>
                                    {desPhone}{' '}
                                    <span className="more" ref={moreRef}>
                                        Xem thêm
                                    </span>
                                </>
                            ) : (
                                <>
                                    Nhằm cung cấp cho bạn đầy đủ thông tin về giá trị quỹ trong cả hiện tại và quá khứ,
                                    bạn có thể tùy chọn thời điểm tra cứu theo khung thời gian bạn muốn
                                </>
                            )}
                        </span>
                    </P>
                </HeaderBox>

                <WrapperContent>
                    <Content>
                        <Header />
                        <Chart data={dataRandomize} />
                    </Content>
                </WrapperContent>
                <WrraperButton>
                    <Button onClick={() => handleRandommize(dataRandomize)}>Randomize</Button>
                    <Button onClick={() => handleAddDataSet(dataRandomize)}> Add Dataset</Button>
                    <Button onClick={() => handleAddData(dataRandomize)}>Add Data</Button>
                    <Button onClick={() => handleRemoveDataSet(dataRandomize)}>Remove Dataset</Button>
                    <Button onClick={() => handleRemoveData(dataRandomize)}>Remove Data</Button>
                </WrraperButton>
            </Wrapper>
        </div>
    );
}

export default App;
