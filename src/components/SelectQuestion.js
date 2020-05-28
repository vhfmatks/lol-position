import React, { Component } from 'react'
import {Card, Heading} from 'rebass';
export default class SelectQuestion extends Component {
    
    render() {
        var { data, submitAnswer, display} = this.props;
        return (
            <div>
                <h1>{data.qst}</h1>
                {data.selection.map((item, index)=> {
                    return (
                        <div>
                            <Card key={index} 
                                  sx={
                                      {cursor:'pointer',}
                                  }
                                  onClick={()=>submitAnswer(display, item.answer)}
                                  >
                                <Heading>
                                      {item.answer}
                                </Heading>  
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}
