import React, { Component } from 'react';
import {Button, Box, Card, Heading} from 'rebass';

export default class Question extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var { submitAnswer, display, preClick, answer } = this.props;
        return (
            <div>
                {
                    this.props.data.map((item, index)=>{
                        return (
                            <Card //type="button"
                                    key={index}
                                    sx={{
                                            cursor:'pointer',
                                            margin:'10px',
                                            backgroundColor : item.type === answer ? "tomato" : "white"
                                        }}                      
                                    onClick={()=>submitAnswer(display, item.type)}>
                                        {/* <Heading> {item.msg} </Heading> */}
                                        {item.msg}
                            </Card>);
                    })  
                }
                {
                   display > 0 ? <Button style={{margin:'1rem', float:"left"}} onClick={()=>preClick(display,'disc')}> 이전 </Button>
                   : <div></div>
                }
            </div>
        )
    }
}
