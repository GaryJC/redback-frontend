import {Layout, Menu} from "antd";
import {DatabaseOutlined, PieChartOutlined, UserOutlined} from "@ant-design/icons";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout;

const MySider = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const onCollapse = (collapsed) => {
        // console.log(collapsed);
        setIsCollapsed(collapsed)
    };
    const navigate = useNavigate();
    return (
        <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse}>
            <div className="logo"/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                    {/*<Icon type="pie-chart" />*/}
                    <UserOutlined/>
                    <span>User</span>
                </Menu.Item>
                <Menu.Item key="2">
                    {/*<Icon type="desktop" />*/}
                    <PieChartOutlined/>
                    <a onClick={() => navigate('/dashboard')}>  Dashboard</a>
                </Menu.Item>
                <Menu.Item key="3">
                    {/*<Icon type="desktop" />*/}
                    <DatabaseOutlined />
                    <a onClick={() => navigate('/activitydetails')}>  Activity Details</a>
                </Menu.Item>
                <Menu.Item key="9">
                    {/*<Icon type="file" />*/}
                    <a onClick={() => navigate('/apitest')}>API TEST</a>
                </Menu.Item>
            </Menu>
        </Sider>)
}

export default MySider;