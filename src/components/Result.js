import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        var { data } = this.props;
        return (
            <div>
                {
                    data.map((item, index)=>{
                        return (
                            <h3>{item.position} , SCORE : {item.score}</h3>
                        )
                    })
                }
            </div>
        )
    }
}
