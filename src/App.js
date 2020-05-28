import React, { Component } from 'react';
import './App.css';

import Question from './components/Question';
import Result from './components/Result';
import SelectQuestion from './components/SelectQuestion';
import Header from './components/Header';

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
    this.state = {
      lolid : null,
      disc: { discYn: true, display: 0, questions: discQst },
      weight: { weightYn: true, display: 0, questions: weightQst },
      position: { posYn: false, position: posData }
    };

    // var database = firebase.database();
    // console.log('database' ,firebase.database().ref('users'));
    // firebase.database().ref('users').once('value',(s)=>{
    //   console.log('ss', s.val());
    // }, (error)=>{
    //   console.log(error);
    // })
  }
  discClick = discClick;
  analyzeClick = analyzeClick;
  weightClick = weightClick;
  
  getFireDb() {
    return this.database.ref('/').once('value');
  }

  render() {
    // console.log(this.getFireDb());
    return (
      <ThemeProvider theme={theme} >
        {/* <Header></Header> */}
        <div className="App">
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
                <h3>( {this.state.disc.display + 1 + (!this.state.disc.discYn ? this.state.weight.display + 1 : 0)}
              / {this.state.disc.questions.length + this.state.weight.questions.length})</h3>
              </div>
          }
          {/* 설문1 */}
          {this.state.disc.discYn ?
            <div>

              {/* <h1> {this.state.disc.display+1} / {this.state.disc.questions.length}</h1> */}
              <Question data={this.state.disc.questions[this.state.disc.display].qst}
                submitAnswer={this.discClick.bind(this)}
                display={this.state.disc.display}> </Question>
            </div>
            :
            this.state.weight.weightYn ?
              <SelectQuestion data={this.state.weight.questions[this.state.weight.display]}
                submitAnswer={this.weightClick.bind(this)}
                display={this.state.weight.display}
              ></SelectQuestion>
              : <div></div>
          }

          {/* 결과 */}
          {
            this.state.position.posYn ?
              <Result data={this.state.position.position}></Result>
              : <h1></h1>
          }
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
