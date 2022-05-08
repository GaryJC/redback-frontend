import '../StyleSheet/dashboardStyle.css'
import {useEffect, useState} from "react";

const Steps = ({epochData}) => {
    const [totalSteps, setTotalSteps] = useState([])

    useEffect(() => {
        setTotalSteps(epochData.reduce((pre, cur) =>
            pre + cur.steps, 0
        ))
    }, [epochData])

    console.log(totalSteps)
    return (
        <>
            <h1 className={'dataHeader'}>Steps</h1>
            <span className={'dataText'}>{totalSteps}</span>
        </>
    )
}

export default Steps;