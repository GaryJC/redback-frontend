import {Layout} from 'antd';
import 'antd/dist/antd.less'
import './StyleSheet/dashboardStyle.css'
import MySider from "./MySider";
import SwimTable from "./SwimTable";
import RunTable from "./RunTable";
import BikeTable from "./StyleSheet/BikeTable";
// import {UserContext} from "./App";
const {Header, Content, Footer} = Layout;

const ActivityDetails = ({user}) => {
    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <MySider/>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            background: '#fff',
                            fontSize: '2rem',
                            fontWeight: "bold",
                            paddingLeft: '3rem'
                        }}
                    >Activity Details
                    </Header>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <div
                            className="site-layout-background"
                            style={{
                                margin: '16px 0',
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                            <span className={'tableHeader'}>Swim Activity Details</span>
                            <SwimTable/>
                            <span className={'tableHeader'}>Bike Activity Details</span>
                            <BikeTable/>
                            <span className={'tableHeader'}>Run Activity Details</span>
                            <RunTable/>
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Garmin ActivityDetails ©2022 Created by Redback
                    </Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default ActivityDetails;