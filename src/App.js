import React, { Component } from 'react';
import './App.css';

import Question from './components/Question';
import Result from './components/Result';

import discQst from './data/discData';
import discClick from './module/disc-controller';
import analyzeClick from './module/position-controller';
import posData from './data/posData';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      disc: { discYn:true, display:0 , questions:discQst },
      position : { posYn:false , position:posData} 
    };
  }
  discClick = discClick;
  analyzeClick = analyzeClick;
  render(){
    return (
      <div className="App">
        { this.state.disc.discYn ? 
          <Question data={this.state.disc.questions[this.state.disc.display].qst}
                    submitAnswer={this.discClick.bind(this)}
                    display={this.state.disc.display}> </Question>
          :
           this.state.position.posYn ? <div></div>
            :  <h1> <button onClick={this.analyzeClick.bind(this)}>  분석 </button> </h1> }
        {
          this.state.position.posYn ?
            <h1> 
              <Result data={this.state.position.position}></Result>
            </h1>
            : <h1></h1>
        }
      </div>
    );
  }
}

export default App;
