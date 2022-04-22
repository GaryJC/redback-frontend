import {Row, Col, Divider, Layout, Card} from 'antd';
import './dataVisual.css';
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import DonutChart from "./Charts/DonutChart";

const {Header, Footer, Sider, Content} = Layout;

const topStyle = {background: '#0092ff', padding: '8px 0', height: '50vh'};
const midStyle = {background: '#0092ff', padding: '8px 0', height: '20vh'};
const botStyle = {background: '#0092ff', padding: '8px 0', height: '50vh'};
const DataLayout = () => {
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
                        {/*<div style={topStyle}>col-6</div>*/}
                        <div className={'dataBoarder'} style={{height: '50vh'}}>
                            <BarChart />
                        </div>
                    </Col>
                    <Col className="headerBoard" span={8}>
                        {/*<div style={topStyle}>col-6</div>*/}
                        <DonutChart style={{height: '50vh'}}/>
                    </Col>
                    {/*{middle data dashboard}*/}
                    <Col span={6}>
                        <div style={midStyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div style={midStyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div style={midStyle}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div style={midStyle}>col-6</div>
                    </Col>
                    {/*{bottom data dashboard}*/}
                    <Col span={18}>
                        {/*<div style={botStyle}>col-6</div>*/}
                       <LineChart style={{height: '50vh'}}/>
                    </Col>
                    <Col span={6}>
                        <div style={botStyle}>col-6</div>
                    </Col>
                </Row>
            </Content>
            {/*    </Layout>*/}
            {/*</Layout>*/}
        </>
    )
}

export default DataLayout;