import React, { Component } from 'react'
import {Image, Card, Heading,Text} from 'rebass';
import Graph from './Graph';

export default class Result extends Component {
    constructor(props){
        super(props);

        var { data } = this.props;
        var total = 0;
        var position = [];
        data.map((item, index)=> {
            total += item.score
        });
        data.map((item, index)=>{
            position.push(
                {"position" : item.position, 
                 "score" : item.score , 
                "ratio": Math.trunc(item.score/total*100),
                "description" : item.description,
                "img" : item.img,
                "name" : item.posNm
                });
        })
        function customSort(a, b) { if(a.score == b.score){ return 0} return a.score < b.score ? 1 : -1; }
        position.sort(customSort);

        this.state = {
            data : position
        };
    }
    render() {
        //var { data } = this.state;
        var data = [];
        data = this.state.data.map( (item, index) => {
            return { "label":item.name, "score":item.ratio }
        })
        return (
            <div>
                <Card sx={{
                    width:'90%',
                    margin:'auto',
                    border:'#0023 solid 5px'
                }}>
                    <Image src={this.state.data[0].img}></Image>
                    <Heading>{this.state.data[0].name}</Heading>
                    {
                        this.state.data[0].description.split('\n').map((item, index)=>{
                            return(
                                <Text> {item} </Text>
                            )
                        })
                    }
                </Card>
           
                <hr></hr>

                <Graph width="80%" data={data} />         
            </div>
        )
    }
}
