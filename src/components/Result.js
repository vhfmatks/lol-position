import React, { Component } from 'react'
import {Image, Card, Heading,Text} from 'rebass';
import Graph from './Graph';
import LoadScript from 'react-load-script';

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
            <div style={{margin:'1rem'}}>
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
           
                <div style={{margin:'1rem'}}>
                    <LoadScript url="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ed746b735134eec"></LoadScript>
                    <div className="addthis_inline_share_toolbox"></div>
                </div>
                
                
                <Graph width="80%" data={data} />       
                
               
                <iframe src="https://coupa.ng/bDAat8" width="120" height="240" frameborder="0" scrolling="no"></iframe>  
                <iframe src="https://coupa.ng/bDAaeU" width="120" height="240" frameborder="0" scrolling="no"></iframe>
                <iframe src="https://coupa.ng/bDz9Vw" width="120" height="240" frameborder="0" scrolling="no"></iframe>

            </div>
        )
    }
}
