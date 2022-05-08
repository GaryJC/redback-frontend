import {useContext, useEffect, useState} from "react";
import {UserContext} from "../App";

const Calories = ({epochData}) => {
    const [totalCalories, setTotalCalories] = useState([])

    useEffect(() => {
        setTotalCalories(epochData.reduce((pre, cur) =>
            pre + cur.activeKilocalories, 0
        ))
    }, [epochData])

    console.log(totalCalories)
    return (
        <>
            <h1 className={'dataHeader'}>Calories</h1>
            <span className={'dataText'}>{totalCalories}</span>
        </>
    )
}

export default Calories;