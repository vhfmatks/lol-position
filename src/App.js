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

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      disc: { discYn:true, display:0 , questions:discQst },
      weight : { weightYn:true, display:0, questions:weightQst},
      position : { posYn:false , position:posData} 
    };
  }
  discClick = discClick;
  analyzeClick = analyzeClick;
  weightClick=weightClick;
  
  render(){
    return (
      <div className="App">
        
        {/* 설문1 */}
        { this.state.disc.discYn ? 
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
            :<div></div>
        }
        {
          !this.state.disc.discYn && !this.state.weight.weightYn ?
            <div>
              {this.state.position.posYn ? <div></div>
                :  <h1> <button onClick={this.analyzeClick.bind(this)}> 분석하기 </button> </h1> 
              }
            </div> 
          : 
          <div>
            <h1> {this.state.disc.display + this.state.weight.display + 1} 
              / {this.state.disc.questions.length + this.state.weight.questions.length}</h1>
          </div>
        }
        {/* 결과 */}
        {
          this.state.position.posYn ?
            <Result data={this.state.position.position}></Result>
            : <h1></h1>
        }
      </div>
    );
  }
}

export default App;
