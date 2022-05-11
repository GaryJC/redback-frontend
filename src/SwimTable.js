import {Table} from 'antd';

const columns = [
    {
        title: 'Time',
        dataIndex: 'time',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.time - b.time,
    },
    {
        title: 'Distance',
        dataIndex: 'distance',
        sorter: (a, b) => a.distance - b.distance,
    },
    {
        title: 'Avg Speed',
        dataIndex: 'avgSpeed',
        sorter: (a, b) => a.avgSpeed - b.avgSpeed,
    },
    {
        title: 'Calories',
        dataIndex: 'calories',
        sorter: (a, b) => a.calories - b.calories,
    },
    {
        title: 'Pace in time per 100m',
        dataIndex: 'pace',
        sorter: (a, b) => a.pace - b.pace,
    },
    // {
    //     title: '',
    //     dataIndex: '',
    //     defaultSortOrder: 'descend',
    //     sorter: (a, b) => a. - b.,
    // },
];

const data = [
    {
        key: '1',
        time: 23,
        distance: 32,
        avgSpeed: 88,
        calories:123,
        pace:55
    },
    {
        key: '2',
        time: 55,
        distance: 43,
        avgSpeed: 75,
        calories:188,
        pace:43
    },
];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

const SwimTable = () => {
    return (
        <Table columns={columns} dataSource={data} onChange={onChange}/>
    )
}

export default SwimTable;