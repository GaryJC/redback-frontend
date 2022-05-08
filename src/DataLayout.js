import {Row, Col, Divider, Layout, Card} from 'antd';
import './StyleSheet/dashboardStyle.css';
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import DonutChart from "./Charts/DonutChart";
import Calories from "./DataBoard/Calories";
import Steps from "./DataBoard/Steps";
import {useEffect, useState} from "react";
import axios from "axios";
import {dummyEpochData} from "./DummyData";

const {Header, Footer, Sider, Content} = Layout;

const topStyle = {height: '30rem', position: 'relative'};
const midStyle = {height: '12rem', position: 'relative'};
const botStyle = {height: '30rem', position: 'relative'};

const activityUrl = "https://lk-redback2.herokuapp.com"
const DataLayout = ({user}) => {
    const [epochData, setEpochData] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: `${activityUrl}/activity/getActivityByUsername`,
            headers: {
                // "Access-Control-Allow-Origin": "*",
                Accept: "application/json",
                // "Content-Type": "application/json",
                // "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
            },
            // data: bodyFormData,
            params: {
                username: user.username,
            },
        })
            .then((res) => {
                console.log("res: ", res);
                // setepochData(res.data);
                setEpochData(dummyEpochData);
            })
            .catch((error) => {
                console.log("error: ", error)
            });
    }, [])
    console.log(epochData)
    return (
        <>
            {/*<Layout>*/}
            {/*    <Sider>Sider</Sider>*/}
            {/*    <Layout>*/}
            {/*        <Header>Header</Header>*/}
            <Content style={{padding: '0.25rem'}}>
                <Row gutter={[20, 16]}>
                    {/*{top data dashboard}*/}
                    <Col className="gutter-row" span={16}>
                        <div className={'dataBoarder'} style={topStyle}>
                            <BarChart/>
                        </div>
                    </Col>
                    <Col className="headerBoard" span={8}>
                        <div className={'dataBoarder'} style={topStyle}>
                            <DonutChart epochData={epochData}/>
                        </div>
                    </Col>
                    {/*{middle data dashboard}*/}
                    <Col span={6}>
                        <div className={'dataBoarder'} style={midStyle}>
                            <Calories epochData={epochData}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={'dataBoarder'} style={midStyle}>
                            <Steps epochData={epochData}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={'dataBoarder'} style={midStyle}></div>
                    </Col>
                    <Col span={6}>
                        <div className={'dataBoarder'} style={midStyle}></div>
                    </Col>
                    {/*{bottom data dashboard}*/}
                    <Col span={18}>
                        <div className={'dataBoarder'} style={topStyle}>
                            <LineChart/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={'dataBoarder'} style={botStyle}></div>
                    </Col>
                </Row>
            </Content>
            {/*    </Layout>*/}
            {/*</Layout>*/}
        </>
    )
}

export default DataLayout;