import React, { Component } from 'react'

export default class SelectQuestion extends Component {
    
    render() {
        var { data, submitAnswer, display} = this.props;
        return (
            <div>
                {data.qst}
                {data.selection.map((item, index)=> {
                    return (
                        <div>
                            <button key={index} onClick={()=>submitAnswer(display, item.answer)}> {item.answer} </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
