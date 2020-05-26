import React, { Component } from 'react';
import {Button, Box, Card, Heading} from 'rebass';

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
                            <Card //type="button"
                                    key={index}
                                    sx={{
                                            cursor:'pointer',
                                            ':hover' :{
                                                backgroundColor : 'tomato',
                                        }}}                      
                                    onClick={()=>submitAnswer(display, item.type)}>
                                        <Heading> {item.msg} </Heading>
                            </Card>);
                    })  
                }
            </div>
        )
    }
}
