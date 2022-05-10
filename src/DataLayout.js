import {Col, Layout, Row, Progress, Spin} from 'antd';
import './StyleSheet/dashboardStyle.css';
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import IntensityChart from "./Charts/IntensityChart";
import ActivityTypeChart from "./Charts/ActivityTypeChart";
import Calories from "./DataBoard/Calories";
import Steps from "./DataBoard/Steps";
import {useEffect, useState} from "react";
import axios from "axios";
import {dummyEpochData} from "./DummyData";

const {Header, Footer, Sider, Content} = Layout;

const topStyle = {height: '30rem'};
const midStyle = {height: '12rem'};
const botStyle = {height: '30rem'};

const activityUrl = "https://lk-redback2.herokuapp.com"
const DataLayout = ({user}) => {
    const [activityData, setActivityData] = useState([]);
    const [timeLineData, setTimeLineData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getActvityData = axios({
            method: "GET",
            url: `${activityUrl}/activity/getEpochByAccessToken`,
            headers: {
                // "Access-Control-Allow-Origin": "*",
                Accept: "application/json",
                // "Content-Type": "application/json",
                // "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
            },
            // data: bodyFormData,
            params: {
                accessToken: user.userAccessToken,
            },
        })
            .then((res) => {
                console.log("getEpochByAccessToken: ", res);
                return res.data
                // setActivityData(res.data);
                // setActivityData(dummyEpochData);
            })
            .catch((error) => {
                console.log("error: ", error)
            });

        const getTimeLineData = axios({
            method: "GET",
            url: `${activityUrl}/activity/getEpochTimeLineByAccessToken`,
            headers: {
                // "Access-Control-Allow-Origin": "*",
                Accept: "application/json",
                // "Content-Type": "application/json",
                // "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
            },
            // data: bodyFormData,
            params: {
                accessToken: user.userAccessToken,
            },
        })
            .then((res) => {
                console.log("getEpochTimeLineByAccessToken: ", res);
                return res.data
                // setTimeLineData(res.data)
            })
            .catch((error) => {
                console.log("error: ", error)
            });

        Promise.allSettled([getActvityData, getTimeLineData]).then(res=> {
            setActivityData(res[0].value);
            setTimeLineData(res[1].value);
            setIsLoading(true);
        });

    }, [])

    return (
        <>
            <Content style={{padding: '0.25rem'}}>
                <Row gutter={[20, 16]}>
                    {/*{top data dashboard}*/}
                    <Col span={6}>
                        <div className={'dataBoarder'} style={midStyle}>
                            {isLoading ? <Calories activityData={activityData}/> : <div className={'spin'}>
                                <Spin/>
                            </div>}
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={'dataBoarder'} style={midStyle}>
                            {isLoading ? <Steps activityData={activityData}/> : <div className={'spin'}>
                                <Spin/>
                            </div>}
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={'dataBoarder'} style={midStyle}>
                            {isLoading ? <div className={'dataText'}>
                                <Progress type="circle" percent={75}/>
                            </div> : <div className={'spin'}>
                                <Spin/>
                            </div>}
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={'dataBoarder'} style={midStyle}></div>
                    </Col>

                    {/*{middle data dashboard}*/}
                    <Col className="gutter-row" span={16}>
                        <div className={'dataBoarder'} style={topStyle}>
                            {isLoading ? <BarChart timeLineData={timeLineData}/> : <div className={'spin'}>
                                <Spin/>
                            </div>}
                        </div>
                    </Col>
                    <Col className="headerBoard" span={8}>
                        <div className={'dataBoarder'} style={topStyle}>
                            <div className={'dataBoarder'} style={topStyle}>
                                {isLoading ? <IntensityChart activityData={activityData}/> : <div className={'spin'}>
                                    <Spin/>
                                </div>}
                            </div>
                        </div>
                    </Col>

                    {/*{bottom data dashboard}*/}
                    <Col span={9}>
                        <div className={'dataBoarder'} style={botStyle}>
                            <div className={'dataBoarder'} style={topStyle}>
                                {isLoading ?  <ActivityTypeChart activityData={activityData}/> : <div className={'spin'}>
                                    <Spin/>
                                </div>}
                            </div>
                        </div>
                    </Col>
                    <Col span={15}>
                        <div className={'dataBoarder'} style={topStyle}>
                            <div className={'dataBoarder'} style={topStyle}>
                                {isLoading ?   <LineChart timeLineData={timeLineData}/> : <div className={'spin'}>
                                    <Spin/>
                                </div>}
                            </div>
                        </div>
                    </Col>

                </Row>
            </Content>
            {/*    </Layout>*/}
            {/*</Layout>*/}
        </>
    )
}

export default DataLayout;