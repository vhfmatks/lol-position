export default function weightClick(curDisplay, pAnswer){
  var newState = {}
  console.log(this.state.weight.questions.length, curDisplay, pAnswer);
  if( this.state.weight.questions.length-1 === curDisplay)
   newState =  {
      ...this.state.weight, weightYn : false
      , questions : [
        ...this.state.weight.questions.slice(0,curDisplay),
        {...this.state.weight.questions[curDisplay], answer:pAnswer},
        ...this.state.weight.questions.slice(curDisplay+1, this.state.weight.questions.length),
    ]
    }
  else {
    newState = {
      ...this.state.weight,
      display : curDisplay + 1,
      questions : [
        ...this.state.weight.questions.slice(0, curDisplay),
        {...this.state.weight.questions[curDisplay], answer:pAnswer},
        ...this.state.weight.questions.slice(curDisplay+1, this.state.weight.questions.length),
      ]
    };
  }
   this.setState({
    weight : newState
  });
}