import React, { Component } from 'react'

export default class Question extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var { submitAnswer, display } = this.props;
        return (
            <div>
                {
                    this.props.data.map((item, index)=>{
                        return (
                            <button type="button"
                                    key={index}
                                    onClick={()=>submitAnswer(display, item.type)}>{item.msg}
                                    </button>);
                    })  
                }
            </div>
        )
    }
}
