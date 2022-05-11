import {Button} from 'antd';
import {useState} from "react";
import axios from "axios";

const testUrl = "https://lk-redback2.herokuapp.com";
// https://lk-redback2.herokuapp.com/activity/getActivityByUsername?username=Redback001
const ApiTest = ({user}) => {
    // const[]
    console.log(user);
    const [testResult, setTestResult] = useState(null);
    const handleTest = () => {
        axios({
            method: "GET",
            // url: `${testUrl}/activity/getEpochByAccessToken`,
            url:`https://apis.garmin.com/userPermissions`,
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
                console.log("res: ", res);
                setTestResult(res.data);
            })
            .catch((error) => {
                console.log("error: ", error)
                setTestResult(error)
            });

    }
    return (
        <>
        <Button type={'primary'} onClick={handleTest} shape={'round'}>Test</Button>
            <div>Test Result: {JSON.stringify(testResult)}</div>
        </>
    )
}

export default ApiTest;