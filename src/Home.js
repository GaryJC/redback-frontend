import React from "react";
import {Button} from 'antd';
import axios from "axios";

const authUrl = "http://localhost:8080/auth/requestToken";
const Home = ({user}) => {
    console.log("user: ", user)

    if (!user) {
        return (
            <>
                <h1>Please Login at first!</h1>
            </>
        )
    } else {
        const {email, fullname, username, userId, userAccessToken} = user;

        const handlePermission = () => {
            axios({
                method: "POST",
                url: `${authUrl}`,
                headers: {
                    // "Access-Control-Allow-Origin": "*",
                    Accept: "*/*",
                    // "Content-Type": "application/json",
                    // "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
                },
                // data: bodyFormData,
                params: {
                    username: username,
                },
            })
                .then((res) => {
                    // console.log(res.headers)
                    // console.log("username is", bodyFormData);
                    console.log("res: ", res);
                    // console.log("data", res.data.url);
                    // redirect = res.data.url
                    // redirect.push.apply(redirect, res.data.url)
                    // setRediret(res.data.url);
                    window.open(res.data.url);
                    // console.log("redirect", redirect);
                })
                .catch((error) => console.log("error: ", error));
        }
        if (userAccessToken) {
            return (
                <>
                    <h1>Dashboard</h1>
                    <h2>You have already connected to Garmin!</h2>
                    <h3>{username} Welcome!</h3>
                </>
            )
        } else {
            return (
                <>
                    <h2>You have not connected to Garmin yet!</h2>
                    <Button type="primary" onClick={handlePermission}>Connect</Button>
                    {/*<Button type="primary" onClick={handleTest}>Test</Button>*/}
                </>
            )
        }

    }

}

export default Home;