import posData from '../data/posData';
import weightQst from '../data/weightData';
export default function  analyzeClick() {
    function customSort(a, b) { if(a.score == b.totval){ return 0} return a.score < b.score ? 1 : -1; }
    var discScore  = [
      {id:"D", score:0},{id:"I", score:0},{id:"S", score:0},{id:"C", score:0},
    ]
    this.state.disc.questions.map( (item, index ) => {
      discScore.map( (dItem, dIndex) => {
        if(item.answer === dItem.id) dItem.score ++;
      })
    })
    discScore.sort(customSort);
    var posRslt = posData;
    var preTotal = 0, preScore = 0;
    discScore.map((item, index) => {
      var addScore=0;
      if(index === 0)     { addScore = 10 }
      else if(index === 1){ addScore = 5}
      else                { addScore = 1}
      
      /* 이전 상태의 건수와 동일하면, 이전스코어와 동일하게 */
      if(preTotal == item.score ) addScore = preScore;
          
      preTotal = item.score;
      preScore = addScore;

      if(item.id === 'D') {
        posRslt[0].score += addScore;
        posRslt[2].score += addScore;
        posRslt[3].score += addScore;
      }else if(item.id === 'I') {
        posRslt[1].score += addScore;
        posRslt[4].score += addScore;
      }else if(item.id === 'S') {
        posRslt[4].score += addScore;
      }else if(item.id === 'C') {
        posRslt[0].score += addScore;
        posRslt[2].score += addScore;
        posRslt[3].score += addScore;
      }
    });
    console.log("pre",posRslt);
    this.state.weight.questions.map( (item, index)=>{
      item.selection.map((sItem,sIndex)=>{
        if(sItem.answer == item.answer) {
          sItem.obj.map( (oItem, oIndex) => {
            posRslt.map( (pItem, pIndex)=>{
              if(oItem=== pItem.position ){
                console.log(oItem, pItem, pIndex)
                posRslt[pIndex].score += 3;
              }
            });
          });
        }
      });
    });
    console.log("post",posRslt);
    var newState = {
      posYn:true, position : posRslt
    };
    this.setState({
      position : newState
    });
    console.log(discScore, posRslt);
  }