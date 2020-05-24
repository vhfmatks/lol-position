export default function discClick(curDisplay, pAnswer){
    var newState = {}
    console.log(this.state.disc.questions.length, curDisplay, pAnswer);
    if( this.state.disc.questions.length-1 === curDisplay)
      newState =  {
        ...this.state.disc, discYn : false
        , questions : [
          ...this.state.disc.questions.slice(0,curDisplay),
          {...this.state.disc.questions[curDisplay], answer:pAnswer},
          ...this.state.disc.questions.slice(curDisplay+1, this.state.disc.questions.length),
      ]
      }
    else
      newState =  {
        ...this.state.disc
        , display : curDisplay +1
        , questions : [
            ...this.state.disc.questions.slice(0,curDisplay),
            {...this.state.disc.questions[curDisplay], answer:pAnswer},
            ...this.state.disc.questions.slice(curDisplay+1, this.state.disc.questions.length),
        ]
      }
    this.setState({
      disc : newState
    })
}