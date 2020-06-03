import React, { Component } from 'react'
import {Card, Button} from 'rebass';
export default class SelectQuestion extends Component {
    
    render() {
        var { data, submitAnswer, display, preClick } = this.props;
        return (
            <div>
                <h4>{data.qst}</h4>
                {data.selection.map((item, index)=> {
                    return (
                        <div>
                            <Card key={index} 
                                  sx={
                                      {cursor:'pointer',
                                      margin:'10px',
                                      backgroundColor: item.answer === data.answer ? 'tomato' : 'white'
                                    }
                                  }
                                  onClick={()=>submitAnswer(display, item.answer)}
                                  >
                                 {item.answer}
                            </Card>
                        </div>
                    )
                })}
                <Button style={{margin:'1rem', float:"left"}} onClick={()=>preClick(display,'weight')}> 이전 </Button>
            </div>
        )
    }
}
