import {Form, Input, Button, Checkbox} from 'antd';
import {Row, Col} from 'antd';
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const loginUrl = "http://localhost:8080/login";
const Login = ({setUser}) => {
        const navigate = useNavigate();
        const onFinish = (values) => {
            console.log('Success:', values);
            axios({
                method: "post",
                url: `${loginUrl}`,
                // url: "http://localhost:8080/login",
                //https://coaching-mate0121.herokuapp.com/login
                headers: {
                    Accept: "*/*",
                    // "Content-Type": "application/json",
                    // "Access-Control-Allow-Origin": "*",
                    // "Access-Control-Allow-Credentials": "true",
                },
                params: {
                    username: values.username,
                    password: values.password
                },
                //data: bodyFormData
                //mode: "no-cors",
            })
                .then((res) => {
                    console.log("response", res);
                    // this.setState({user: res.data})
                    // console.log('user is ',this.state.user)
                    // redirect to home page
                    setUser(res.data);
                    navigate('/dashboard');
                })
                .catch((error) => {
                    // this.setState({ isShow: true });
                    console.log("error: ", error);
                });
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        return (
            <>
                <Row style={{height: "100vh"}} justify="center" align="middle">
                    <Col span={8}>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </>
        );
    }
;

export default Login;