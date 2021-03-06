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
const dataPoints = [
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
];
const option = {
    plugins: {
        title: {
            display: true,
        },
        legend: {
            display: true,
            position: 'top',
        },
        scale: {
            x: {
                maxTicksLimit: 10,
            },
        },
    },
};
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Qu?? 1',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: '#E87722',
            backgroundColor: '#E87722',
        },
        {
            label: 'Qu?? 2',
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
            label: 'Qu?? ' + (dataSet.datasets.length + 1),
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
                    <Title>Tra C???u Gi?? ????n V???</Title>
                    {/* <GlobalStyled black /> */}
                    <P>
                        <span ref={desRef}>
                            {desPhone ? (
                                <>
                                    {desPhone}{' '}
                                    <span className="more" ref={moreRef}>
                                        Xem th??m
                                    </span>
                                </>
                            ) : (
                                <>
                                    Nh???m cung c???p cho b???n ?????y ????? th??ng tin v??? gi?? tr??? qu??? trong c??? hi???n t???i v?? qu?? kh???,
                                    b???n c?? th??? t??y ch???n th???i ??i???m tra c???u theo khung th???i gian b???n mu???n
                                </>
                            )}
                        </span>
                    </P>
                </HeaderBox>

                <WrapperContent>
                    <Content>
                        <Header />
                        <Chart data={dataRandomize} options={option} />
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
