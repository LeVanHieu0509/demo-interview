import styled from 'styled-components';
import Chart from '~/components/Chart';
import Header from './components/Header/Header';

import { useEffect, useRef, useState } from 'react';
import './App.css';
import Utils from './Utils';
import moment from 'moment';

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
const DATA_COUNT = 40;
const NUMBER_CFG = { count: DATA_COUNT, min: 0.9, max: 1.0, decimals: 8 };
let labels = [];

for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(moment(Utils.newDate(i)).format('DD/MM'));
    if (i === 0) {
    }
}

let dateMax = moment(labels[labels.length - 1], 'DD/MM')
    .add(1, 'days')
    .format('DD/MM');
let dateMin = moment(labels[0], 'DD/MMM').format('DD/MM');
let dateStep = moment(labels[9], 'DD').format('DD');

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Qũy A',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: '#E87722',
            backgroundColor: '#E87722',
        },
        // {
        //     data: Utils.numbers(NUMBER_CFG),
        //     label: 'Qũy B',
        //     borderColor: '#6ECEB2',
        //     backgroundColor: '#6ECEB2',
        // },
    ],
};

function Test() {
    const [dataRandomize, setDataRandomize] = useState(data);
    const [legendPossition, setLegendPossition] = useState('top');
    const [legendAlign, setLegendAlign] = useState('end');
    const [legendReverse, setLegendReverse] = useState(false);
    const [paddingTick, setPaddingTick] = useState(15);
    const [tickMax, setTickMax] = useState(1.02);
    console.log(dateMax, dateStep);
    let options = {
        spanGaps: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    title: function (context) {
                        return `Ngày: ${context[0].label}/2020`;
                    },
                },

                // backgroundColor: 'black',
                mode: 'nearest',
                boxPadding: 0,
                boxWidth: 0,
                boxHeight: 0,
                titleColor: '#0A3B32',
                titleFont: {
                    size: 16,
                    family: 'FWDCircularWeb',
                },
                titleSpacing: 5,
                titleMarginBottom: 10,
                titleAlign: 'center',

                padding: 10,
                backgroundColor: '#fff',
                bodyColor: '#0A3B32',
                borderColor: '#E87722',
                borderWidth: 1,
                bodyFont: {
                    size: 16,
                    family: 'FWDCircularWeb',
                },

                bodyAlign: 'center',
                xAlign: 'none',
                yAlign: 'none',
            },
            legend: {
                maxHeight: 85,
                textDirection: 'ltr',
                reverse: legendReverse,
                align: legendAlign,
                position: legendPossition,
                labels: {
                    boxWidth: 14,
                    boxHeight: 14,
                    color: 'var(--dark-green)',
                    padding: 25,
                    font: {
                        family: 'FWDCircularWeb',
                        size: '16px',
                        weight: 400,
                        lineHeight: '22px',
                    },
                },
            },
        },
        scales: {
            responsive: true,
            maintainAspectRatio: true,
            x: {
                grid: {
                    borderColor: 'rgba(0, 0, 0, 0.4)',
                    borderWidth: 1,
                    color: 'rgba(0, 0, 0,0.1)',
                    tickLength: 10,
                    lineWidth: 1,
                    tickWidth: 1,

                    tickColor: 'rgba(0, 0, 0, 0.4)',
                },

                ticks: {
                    padding: 20,
                    maxRotation: 0,
                    crossAlign: 'top',
                    maxTicksLimit: 4,
                    alignToPixels: true,
                    color: 'var(--dark-green)',
                    font: {
                        size: 16,
                        family: 'FWDCircularWeb',
                    },
                },
            },
            y: {
                grid: {
                    borderWidth: 1,
                    color: 'rgba(0, 0, 0, 0.1)',
                    tickLength: 0,
                    lineWidth: 1,
                    tickWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.4)',
                },
                max: tickMax,
                min: 0.9,
                ticks: {
                    crossAlign: 'far',
                    color: 'var(--dark-green)',
                    stepSize: 0.02,
                    font: {
                        size: 16,
                        family: 'FWDCircularWeb',
                    },
                    padding: paddingTick,
                },
            },
            y2: {
                position: 'right',
                grid: {
                    borderWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.4)',
                    color: 'rgba(0, 0, 0, 0.1)',
                    tickLength: 0,
                    lineWidth: 1,
                    tickWidth: 1,
                    tickColor: 'rgba(0, 0, 0, 0.4)',
                },
                max: tickMax,
                min: 0.9,
                ticks: {
                    stepSize: 0.02,
                    display: false,
                },
            },
        },
        elements: {
            line: {
                borderWidth: 2,
                color: '#fff',
            },
            point: {
                radius: 3,
                pointStyle: 'cricle',
                hoverRadius: 8,
                hitRadius: 3,
            },
        },
    };
    // const dataRandomize = useSelector(SelectDataRandomize);
    // console.log(dataRandomize);
    //const dispatch = useDispatch();

    const handleRandommize = (dataRandomize) => {
        let newData = { ...dataRandomize };

        let newOK = newData.datasets.map((dataset) => {
            dataset.data = Utils.numbers({ count: newData.labels.length, min: 0.9, max: 1.0 });
            return dataset;
        });
        newData.datasets = newOK;
        setDataRandomize(newData);
        //dispatch(ChartActions.Randomize(newData));
    };

    const handleAddDataSet = (dataRandomize) => {
        let dataSet = { ...dataRandomize };
        const dsColor = Utils.namedColor(dataSet.datasets.length);
        let character = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
        ];

        const newDataset = {
            label: 'Qũy ' + character[dataSet.datasets.length],
            backgroundColor: dsColor,
            borderColor: dsColor,
            data: Utils.numbers({ count: dataSet.labels.length, min: 0.9, max: 1.0 }),
        };
        setDataRandomize({ ...dataSet, datasets: [...dataSet.datasets, newDataset] });
    };

    const handleRemoveDataSet = (dataRandomize) => {
        let newData = { ...dataRandomize };
        if (newData.datasets.length > 0) {
            let distroyData = newData.datasets.pop();
            let arrayFilter = dataRandomize.datasets.filter((data) => data.datasets !== distroyData);
            setDataRandomize({ ...newData, datasets: arrayFilter });
        }
    };

    const handleAddData = (dataAddData) => {
        let addData = { ...dataAddData };
        let dem = 1;

        var new_date;
        for (let i = 1; i <= 10; ++i) {
            if (addData.labels.length === 0) {
                new_date = '01/07';
            } else {
                new_date = moment(labels[labels.length - 1], 'DD/MM')
                    .add(dem, 'days')
                    .format('DD/MM');
            }
            if (addData.datasets.length > 0) {
                addData.labels.push(new_date);
            }
            for (let index = 0; index < addData.datasets.length; ++index) {
                addData.datasets[index].data.push(Utils.rand(0.9, 1.0));
            }
        }

        let arrs = addData.datasets.map((arr) => arr);

        setDataRandomize({ ...addData, datasets: arrs });
    };

    const handleRemoveData = (dataRandomize) => {
        let newData = { ...dataRandomize };
        let b;

        for (var i = 0; i < 10; ++i) {
            newData.labels.splice(-1, 1);
            const a = dataRandomize.datasets.map((dataset) => {
                return dataset.data.pop();
            });
            b = newData.datasets.filter((data) => data.data.filter((data) => data !== a.map((a) => a)));
            setDataRandomize({ ...newData, datasets: b });
        }
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
            setLegendAlign('start');
            setLegendPossition('bottom');
            setLegendReverse(false);
            setPaddingTick(5);
            setTickMax(1.0);
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
                        <Chart data={dataRandomize} options={options} />
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

export default Test;
