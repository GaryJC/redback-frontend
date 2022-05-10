import {Col, Layout, Row, Progress} from 'antd';
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
    useEffect(() => {
        axios({
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
                setActivityData(res.data);
                // setActivityData(dummyEpochData);
            })
            .catch((error) => {
                console.log("error: ", error)
            });

        axios({
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
                // setActivityData(res.data);
                setTimeLineData(res.data)
            })
            .catch((error) => {
                console.log("error: ", error)
            });

    }, [])

    return (
        <>
            <Content style={{padding: '0.25rem'}}>
                <Row gutter={[20, 16]}>
                    {/*{top data dashboard}*/}
                    <Col span={6}>
                        <div className={'dataBoarder'} style={midStyle}>
                            <Calories activityData={activityData}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={'dataBoarder'} style={midStyle}>
                            <Steps activityData={activityData}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={'dataBoarder'} style={midStyle}>
                            <div className={'dataText'}>
                                <Progress type="circle" percent={75}/>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={'dataBoarder'} style={midStyle}></div>
                    </Col>

                    {/*{middle data dashboard}*/}
                    <Col className="gutter-row" span={16}>
                        <div className={'dataBoarder'} style={topStyle}>
                            <BarChart timeLineData={timeLineData}/>
                        </div>
                    </Col>
                    <Col className="headerBoard" span={8}>
                        <div className={'dataBoarder'} style={topStyle}>
                            <IntensityChart activityData={activityData}/>
                        </div>
                    </Col>

                    {/*{bottom data dashboard}*/}
                    <Col span={9}>
                        <div className={'dataBoarder'} style={botStyle}>
                            <ActivityTypeChart activityData={activityData}/>
                        </div>
                    </Col>
                    <Col span={15}>
                        <div className={'dataBoarder'} style={topStyle}>
                            <LineChart timeLineData={timeLineData}/>
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