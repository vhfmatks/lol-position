import React, { Component } from 'react'
import {Chart}  from 'react-google-charts';


export default class Graph extends Component {
    // data = [
    //     {label : "탑", score : 10 },
    //     {label : "정글", score : 20 },
    //     {label : "미드", score : 25 },
    //     {label : "원딜", score : 91 },
    //     {label : "서폿", score : 10 },
    // ]
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Chart
                    width={'100%'}
                    height={'300px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Position', 'Score'],
                        [this.props.data[0].label, this.props.data[0].score],
                        [this.props.data[1].label, this.props.data[1].score],
                        [this.props.data[2].label, this.props.data[2].score],
                        [this.props.data[3].label, this.props.data[3].score],
                        [this.props.data[4].label, this.props.data[4].score],
                    ]}
                    options={{
                        title: 'POSITION 분석 결과',
                        chartArea: { width: '50%' },
                        hAxis: {
                        title: '분석결과(%)',
                        minValue: 0,
                        },
                        vAxis: {
                        title: 'POSITION',
                        },
                        legend: 'none'
                    }}
                    />
            </div>
        )
    }
}
