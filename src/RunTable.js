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
        title: 'Pace in time per km',
        dataIndex: 'pace',
        sorter: (a, b) => a.pace - b.pace,
    },
    {
        title: 'Ave Cadence',
        dataIndex: 'cadence',
        sorter: (a, b) => a.cadence - b.cadence,
    },
    {
        title: 'Heart Rate Ave',
        dataIndex: 'heartRate',
        sorter: (a, b) => a.heartRate - b.heartRate,
    },
    {
        title: 'Elevation',
        dataIndex: 'elevation',
        sorter: (a, b) => a.elevation - b.elevation
    },
    // {
    //     title: '',
    //     dataIndex: '',
    //     defaultSortOrder: 'descend',
    //     sorter: (a, b) => a. - b.,
    // },
];

const data = [
    // {
    //     key: '1',
    //     time: 23,
    //     distance: 32,
    //     avgSpeed: 88,
    //     calories:123,
    //     pace:55
    // },
    // {
    //     key: '2',
    //     time: 55,
    //     distance: 43,
    //     avgSpeed: 75,
    //     calories:188,
    //     pace:43
    // },
];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

const RunTable = () => {
    return (
        <Table columns={columns} dataSource={data} onChange={onChange}/>
    )
}

export default RunTable;