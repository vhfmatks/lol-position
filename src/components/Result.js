import React, { Component } from 'react'
import {Image, Card, Heading,Text, Link, Button} from 'rebass';
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
        console.log(this.state)
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
                                <Text key={index}> {item} </Text>
                            )
                        })
                    }
                </Card>
                <div style={{margin:'1rem'}}>
                    <LoadScript url="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ed746b735134eec"></LoadScript>
                    <div className="addthis_inline_share_toolbox"
                         data-url={'https://lol-position.netlify.app/?'+ this.state.data[0].position + '=' + this.state.data[0].score + '&'
                         + this.state.data[1].position + '=' + this.state.data[1].score + '&'
                         + this.state.data[2].position + '=' + this.state.data[2].score + '&'
                         + this.state.data[3].position + '=' + this.state.data[3].score + '&'
                         + this.state.data[4].position + '=' + this.state.data[4].score }></div>
                </div>
                
                
                <Graph width="80%" data={data} />       
                <Button style={{margin:'1rem'}} width='80%' onClick={() => document.location.href='./'}> 새로 분석하기 </Button>

                <hr></hr>
               
                <iframe src="https://coupa.ng/bDAat8" width="120" height="240" frameborder="0" scrolling="no"></iframe>  
                <iframe src="https://coupa.ng/bDAaeU" width="120" height="240" frameborder="0" scrolling="no"></iframe>
                <iframe src="https://coupa.ng/bDz9Vw" width="120" height="240" frameborder="0" scrolling="no"></iframe>

            </div>
        )
    }
}
