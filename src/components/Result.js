import React, { Component } from 'react'
import CanvasJSReact from '../canvas/canvasjs.react';
import {Image, Card, Heading,Text} from 'rebass';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
        var { data } = this.state;
        const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "LOL 포지션 분석 결과"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: data[0].ratio , label: data[0].position },
					{ y: data[1].ratio, label: data[1].position },
					{ y: data[2].ratio, label: data[2].position },
					{ y: data[3].ratio, label: data[3].position},
					{ y: data[4].ratio, label: data[4].position }
				]
			}]
		}
        return (
            <div>
                <Card sx={{
                    width:'90%',
                    margin:'auto',
                    border:'#0023 solid 5px'
                }}>
                    <Image src={data[0].img}></Image>
                    <Heading>{data[0].name}</Heading>
                    {
                        data[0].description.split('\n').map((item, index)=>{
                            return(
                                <Text> {item} </Text>
                            )
                        })
                    }
                    {/* <Text>{data[0].description.replace(/\n/g,'<br>')}</Text> */}
                </Card>
           
                <hr></hr>
                <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
            </div>
        )
    }
    componentDidMount(){

    }
}
