import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        var { data } = this.props;
        return (
            <div>
                {
                    data.map((item, index)=>{
                        return (
                            <h3 key={index}>{item.position} , SCORE : {item.score}</h3>
                        )
                    })
                }
            </div>
        )
    }
}
