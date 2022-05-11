import {Layout} from 'antd';
import 'antd/dist/antd.less'
import DataLayout from "./DataLayout";
import './StyleSheet/dashboardStyle.css';
import MySider from "./MySider";
// import {UserContext} from "./App";
const {Header, Content, Footer, Sider} = Layout;

const Dashboard = ({user}) => {
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
                    >
                        Dashboard
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
                            <DataLayout user={user}/>
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Garmin Dashboard ©2022 Created by Redback
                    </Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default Dashboard;