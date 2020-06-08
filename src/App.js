import React, { Component } from 'react';
import './App.css';

import Question from './components/Question';
import Result from './components/Result';
import SelectQuestion from './components/SelectQuestion';

import discClick from './module/disc-controller';
import analyzeClick from './module/position-controller';
import weightClick from './module/weight-controller';

import discQst from './data/discData';
import posData from './data/posData';
import weightQst from './data/weightData';

import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import { Button, Box } from 'rebass';
import { Label, Input } from '@rebass/forms';
class App extends Component {
  constructor(props) {
    super(props);

    const searchParams = new URLSearchParams(document.location.search);
    if(searchParams.get('top') != null ){
      this.state = {
        lolid : null ,
        startYn : false,
        disc: { discYn: false, display: 0, questions: discQst },
        weight: { weightYn: false, display: 0, questions: weightQst },
        position: { posYn: true, position: [
          { ...posData[0], score : parseInt(searchParams.get('top')) },
          { ...posData[1], score : parseInt(searchParams.get('jg')) },
          { ...posData[2], score : parseInt(searchParams.get('mid')) },
          { ...posData[3], score : parseInt(searchParams.get('ad')) },
          { ...posData[4], score : parseInt(searchParams.get('sup')) },
        ] }
      }
    }else {
      this.state = {
        lolid : null,
        startYn : true,
        disc: { discYn: true, display: 0, questions: discQst },
        weight: { weightYn: true, display: 0, questions: weightQst },
        position: { posYn: false, position: posData }
      };  
    }
  }
  discClick = discClick;
  analyzeClick = analyzeClick;
  weightClick = weightClick;
  startClick() {
    this.setState({
      startYn : false
    })
  }
  preClick= function(display, type) {
    if(type === 'disc'){
      var newDisc = {
          ...this.state.disc,
          display : display-1        
      }
      this.setState({
        disc : newDisc
      })
    }else if(type==='weight'){
      
      // 처음인경우 disc 로 넘겨야하고,
      if(display==0){
        var newState = {
          ...this.state,
          disc : {
            ...this.state.disc,
            discYn : true
          }
        };
        this.setState({
          disc : newState.disc
        })
      }
      // 2번째 이상인 경우 weight display -1
      else {
        var newWeight = {
          ...this.state.weight,
          display : display-1        
        }
        this.setState({
          weight : newWeight
        })
      }
      
    }
  }
  render() {

    return (
      <ThemeProvider theme={theme} >
        {/* <Header></Header> */}
       
        <div className="App">
          
          {this.state.startYn ? 
            <div> 
              <h2> 성향별 LOL 포지션 분석 </h2>
              <img src="./img/lux.gif" style={{ width:"85%", margin:"1rem"}} width="100%"></img> 
              <Button onClick={this.startClick.bind(this)} width="85%">
                시작하기
              </Button>
            </div> 
            :
            <div className='poll'>
            {
              !this.state.disc.discYn && !this.state.weight.weightYn ?
                <div>
                  {this.state.position.posYn ? <div></div>
                    :
                    <div>
                      <Box px={2} ml='auto'>
                        <Label htmlFor='lolId'> <h1> 롤 ID를 입력해주세요.</h1> </Label>
                        <Input id='lolId' onChange={(e)=>{
                          this.setState({
                            lolid : e.target.value
                          })
                        }} />
                      </Box>
                      <h1> <Button onClick={this.analyzeClick.bind(this)}> 분석하기 </Button> </h1>
                    </div>
                  }
                </div>
                :
                <div>
                  {this.state.disc.discYn ? <h1>다음 중 당신을 가장 잘 표현할 수 있는 문구를 고르세요.</h1>
                    : <div>{this.state.weight.weightYn ? <h1>다음의 질문에 가장 적절한 답을 고르세요.</h1> : <div></div>}</div>}
                  <p>( {this.state.disc.display + 1 + (!this.state.disc.discYn ? this.state.weight.display + 1 : 0)}
                / {this.state.disc.questions.length + this.state.weight.questions.length})</p>
                </div>
            }
            {/* 설문1 */}
            {this.state.disc.discYn ?
              <div>

                {/* <h1> {this.state.disc.display+1} / {this.state.disc.questions.length}</h1> */}
                <Question data={this.state.disc.questions[this.state.disc.display].qst}
                  submitAnswer={this.discClick.bind(this)}
                  preClick={this.preClick.bind(this)}
                  display={this.state.disc.display}
                  answer={this.state.disc.questions[this.state.disc.display].answer}> </Question>
              </div>
              :
              this.state.weight.weightYn ?
                <SelectQuestion data={this.state.weight.questions[this.state.weight.display]}
                  submitAnswer={this.weightClick.bind(this)}
                  preClick={this.preClick.bind(this)}
                  display={this.state.weight.display}
                ></SelectQuestion>
                : <div></div>
            }

            {/* 결과 */}
            {
              this.state.position.posYn ?
                <div>
                  <Result data={this.state.position.position}></Result>
                  
                  </div>
                
                : <h1></h1>
            }
            </div>
          }
          <ins className="kakao_ad_area" style={{marginTop:'1rem', display:"none", width:"100%"}}
            data-ad-unit    = "DAN-s12uklxyfza9" 
            data-ad-width   = "320" 
            data-ad-height  = "100"></ins> 
            
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
