(this["webpackJsonplol-position"]=this["webpackJsonplol-position"]||[]).push([[0],{14:function(t,e,s){},15:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var i=s(0),n=s.n(i),a=s(8),o=s.n(a),c=(s(14),s(3)),r=s(4),p=s(6),g=s(5),m=(s(15),function(t){Object(p.a)(s,t);var e=Object(g.a)(s);function s(t){return Object(c.a)(this,s),e.call(this,t)}return Object(r.a)(s,[{key:"render",value:function(){var t=this.props,e=t.submitAnswer,s=t.display;return n.a.createElement("div",null,this.props.data.map((function(t,i){return n.a.createElement("button",{type:"button",key:i,onClick:function(){return e(s,t.type)}},t.msg)})))}}]),s}(i.Component)),l=function(t){Object(p.a)(s,t);var e=Object(g.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var t=this.props.data;return n.a.createElement("div",null,t.map((function(t,e){return n.a.createElement("h3",{key:e},t.position," , SCORE : ",t.score)})))}}]),s}(i.Component),y=function(t){Object(p.a)(s,t);var e=Object(g.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var t=this.props,e=t.data,s=t.submitAnswer,i=t.display;return n.a.createElement("div",null,e.qst,e.selection.map((function(t,e){return n.a.createElement("div",null,n.a.createElement("button",{key:e,onClick:function(){return s(i,t.answer)}}," ",t.answer," "))})))}}]),s}(i.Component),d=s(2),u=s(1);function h(t,e){var s={};console.log(this.state.disc.questions.length,t,e),s=this.state.disc.questions.length-1===t?Object(u.a)(Object(u.a)({},this.state.disc),{},{discYn:!1,questions:[].concat(Object(d.a)(this.state.disc.questions.slice(0,t)),[Object(u.a)(Object(u.a)({},this.state.disc.questions[t]),{},{answer:e})],Object(d.a)(this.state.disc.questions.slice(t+1,this.state.disc.questions.length)))}):Object(u.a)(Object(u.a)({},this.state.disc),{},{display:t+1,questions:[].concat(Object(d.a)(this.state.disc.questions.slice(0,t)),[Object(u.a)(Object(u.a)({},this.state.disc.questions[t]),{},{answer:e})],Object(d.a)(this.state.disc.questions.slice(t+1,this.state.disc.questions.length)))}),this.setState({disc:s})}var w=[{position:"top",score:0},{position:"jg",score:0},{position:"mid",score:0},{position:"ad",score:0},{position:"sup",score:0}],b=[{id:1,answer:"",qst:"\uc624\ub79c\uc2dc\uac04 \ud63c\uc790 \uc77c\ud558\ub2e4\ubcf4\uba74 \uc678\ub86d\uace0 \uc9c0\ub8e8\ud558\uace0 \ud798\ub4e4\ub2e4",selection:[{answer:"YES",obj:["ad","sup"]},{answer:"NO",obj:["top","mid","jg"]}]},{id:2,answer:"",qst:"\ub098\ub294 \ud55c \ubc88 \uac04 \uae38\ub3c4 \uc798 \uae30\uc5b5\ud558\ub294 \ud3b8\uc774\ub2e4.",selection:[{answer:"YES",obj:["jg","sup"]},{answer:"NO",obj:[]}]},{id:3,answer:"",qst:"\ubd80\uc2a4\ub7ec\uae30\uac00 \ub5a8\uc5b4\uc9c0\uac70\ub098 \uc18c\uc2a4\uac00 \ud750\ub974\ub294 \uac83\uc774 \uc2eb\uc740\ud3b8\uc774\ub2e4.",selection:[{answer:"YES",obj:["ad","mid"]},{answer:"NO",obj:[]}]},{id:4,answer:"",qst:"\ubaa9\uc18c\ub9ac\uac00 \uc791\uace0 \uc870\uc6a9\ud55c \ud3b8\uc774\ub2e4.",selection:[{answer:"YES",obj:[]},{answer:"NO",obj:["top","mid"]}]},{id:5,answer:"",qst:"\ub0b4\uac00 \uac16\uace0 \uc2f6\uc740 \ucc28\ub294?",selection:[{answer:"\uc624\ud504\ub85c\ub4dc\uce74",obj:["top"]},{answer:"\uc2a4\ud3ec\uce20\uce74",obj:["ad","mid"]},{answer:"SUV",obj:["jg"]},{answer:"RV(\ubc34)",obj:["sup"]}]}];function q(){var t=[{id:"D",score:0},{id:"I",score:0},{id:"S",score:0},{id:"C",score:0}];this.state.disc.questions.map((function(e,s){t.map((function(t,s){e.answer===t.id&&t.score++}))})),t.sort((function(t,e){return t.score==e.totval?0:t.score<e.score?1:-1}));var e=w,s=0,i=0;t.map((function(t,n){var a=0;a=0===n?10:1===n?5:1,s==t.score&&(a=i),s=t.score,i=a,"D"===t.id?(e[0].score+=a,e[2].score+=a,e[3].score+=a):"I"===t.id?(e[1].score+=a,e[4].score+=a):"S"===t.id?e[4].score+=a:"C"===t.id&&(e[0].score+=a,e[2].score+=a,e[3].score+=a)})),console.log("pre",e),this.state.weight.questions.map((function(t,s){t.selection.map((function(s,i){s.answer==t.answer&&s.obj.map((function(t,s){e.map((function(s,i){t===s.position&&(console.log(t,s,i),e[i].score+=3)}))}))}))})),console.log("post",e);var n={posYn:!0,position:e};this.setState({position:n}),console.log(t,e)}function j(t,e){var s={};console.log(this.state.weight.questions.length,t,e),s=this.state.weight.questions.length-1===t?Object(u.a)(Object(u.a)({},this.state.weight),{},{weightYn:!1,questions:[].concat(Object(d.a)(this.state.weight.questions.slice(0,t)),[Object(u.a)(Object(u.a)({},this.state.weight.questions[t]),{},{answer:e})],Object(d.a)(this.state.weight.questions.slice(t+1,this.state.weight.questions.length)))}):Object(u.a)(Object(u.a)({},this.state.weight),{},{display:t+1,questions:[].concat(Object(d.a)(this.state.weight.questions.slice(0,t)),[Object(u.a)(Object(u.a)({},this.state.weight.questions[t]),{},{answer:e})],Object(d.a)(this.state.weight.questions.slice(t+1,this.state.weight.questions.length)))}),this.setState({weight:s})}var O=[{id:1,answer:"",qst:[{type:"D",msg:"\uc808\uc81c\ud558\ub294"},{type:"I",msg:"\uac15\ub825\ud55c"},{type:"S",msg:"\uaf3c\uaf3c\ud55c"},{type:"C",msg:"\ud45c\ud604\ub825\uc788\ub294"}]},{id:2,answer:"",qst:[{type:"D",msg:"\uac1c\ucc99\uc801\uc778"},{type:"I",msg:"\uc815\ud655\ud55c"},{type:"S",msg:"\ud765\ubbf8\uc9c4\uc9c4\ud55c"},{type:"C",msg:"\ub9cc\uc871\uc2a4\ub7ec\uc6b4"}]},{id:3,answer:"",qst:[{type:"D",msg:"\uae30\uaebc\uc774\ud558\ub294"},{type:"I",msg:"\ud65c\uae30\uc788\ub294"},{type:"S",msg:"\ub300\ub2f4\ud55c"},{type:"C",msg:"\uc815\uad50\ud55c"}]},{id:4,answer:"",qst:[{type:"D",msg:"\ub17c\uc7c1\uc744\uc88b\uc544\ud558\ub294"},{type:"I",msg:"\ud68c\uc758\uc801\uc778"},{type:"S",msg:"\uc8fc\uc800\ud558\ub294"},{type:"C",msg:"\uc608\uce21\ud560\uc218\uc5c6\ub294"}]},{id:5,answer:"",qst:[{type:"D",msg:"\uacf5\uc190\ud55c"},{type:"I",msg:"\uc0ac\uad50\uc801\uc778"},{type:"S",msg:"\ucc38\uc744\uc131\uc774\uc788\ub294"},{type:"C",msg:"\ubb34\uc11c\uc6c0\uc744\ubaa8\ub974\ub294"}]},{id:6,answer:"",qst:[{type:"D",msg:"\uc124\ub4dd\ub825\uc788\ub294"},{type:"I",msg:"\ub3c5\ub9bd\uc2ec\uc774\uac15\ud55c"},{type:"S",msg:"\ub17c\ub9ac\uc801\uc778"},{type:"C",msg:"\uc628\ud654\ud55c"}]},{id:7,answer:"",qst:[{type:"D",msg:"\uc2e0\uc911\ud55c"},{type:"I",msg:"\ucc28\ubd84\ud55c"},{type:"S",msg:"\uacfc\ub2e8\uc131\uc788\ub294"},{type:"C",msg:"\ud30c\ud2f0\ub97c\uc88b\uc544\ud558\ub294"}]},{id:8,answer:"",qst:[{type:"D",msg:"\uc778\uae30\uc788\ub294"},{type:"I",msg:"\uace0\uc9d1\uc774\uc788\ub294"},{type:"S",msg:"\uc644\ubcbd\uc8fc\uc758\uc790"},{type:"C",msg:"\uc778\uc2ec\uc88b\uc740"}]},{id:9,answer:"",qst:[{type:"D",msg:"\ubcc0\ud654\uac00\ub9ce\uc740"},{type:"I",msg:"\uc218\uc90d\uc74c\uc744\ud0c0\ub294"},{type:"S",msg:"\ub290\uae0b\ud55c"},{type:"C",msg:"\uc644\uace0\ud55c"}]},{id:10,answer:"",qst:[{type:"D",msg:"\uccb4\uacc4\uc801\uc778"},{type:"I",msg:"\ub099\uad00\uc801\uc778"},{type:"S",msg:"\uc758\uc9c0\uac00\uac15\ud55c"},{type:"C",msg:"\uce5c\uc808\ud55c"}]},{id:11,answer:"",qst:[{type:"D",msg:"\uc5c4\uaca9\ud55c"},{type:"I",msg:"\uacb8\uc190\ud55c"},{type:"S",msg:"\uc0c1\ub0e5\ud55c"},{type:"C",msg:"\ub9d0\uc8fc\ubcc0\uc774\uc88b\uc740"}]},{id:12,answer:"",qst:[{type:"D",msg:"\ud638\uc758\uc801\uc778"},{type:"I",msg:"\ube48\ud2c8\uc5c6\ub294"},{type:"S",msg:"\ub180\uae30\uc88b\uc544\ud558\ub294"},{type:"C",msg:"\uc758\uc9c0\uac00\uac15\ud55c"}]},{id:13,answer:"",qst:[{type:"D",msg:"\ucc38\uc2e0\ud55c"},{type:"I",msg:"\ubaa8\ud5d8\uc801\uc778"},{type:"S",msg:"\uc808\uc81c\ub41c"},{type:"C",msg:"\uc2e0\uc911\ud55c"}]},{id:14,answer:"",qst:[{type:"D",msg:"\ucc38\ub294"},{type:"I",msg:"\uc131\uc2e4\ud55c"},{type:"S",msg:"\uacf5\uaca9\uc801\uc778"},{type:"C",msg:"\ub9e4\ub825\uc788\ub294"}]},{id:15,answer:"",qst:[{type:"D",msg:"\uc5f4\uc815\uc801\uc778"},{type:"I",msg:"\ubd84\uc11d\uc801\uc778"},{type:"S",msg:"\ub3d9\uc815\uc2ec\uc774\ub9ce\uc740"},{type:"C",msg:"\ub2e8\ud638\ud55c"}]},{id:16,answer:"",qst:[{type:"D",msg:"\uc9c0\ub3c4\ub825\uc774\uc788\ub294"},{type:"I",msg:"\ucda9\ub3d9\uc801\uc778"},{type:"S",msg:"\ub290\ub9b0"},{type:"C",msg:"\ube44\ud310\uc801\uc778"}]},{id:17,answer:"",qst:[{type:"D",msg:"\uc77c\uad00\uc131\uc788\ub294"},{type:"I",msg:"\uc601\ud5a5\ub825\uc788\ub294"},{type:"S",msg:"\uc0dd\uae30\uc788\ub294"},{type:"C",msg:"\ub290\uae0b\ud55c"}]},{id:18,answer:"",qst:[{type:"D",msg:"\uc720\ub825\ud55c"},{type:"I",msg:"\uce5c\uc808\ud55c"},{type:"S",msg:"\ub3c5\ub9bd\uc801\uc778"},{type:"C",msg:"\uc815\ub3c8\ub41c"}]},{id:19,answer:"",qst:[{type:"D",msg:"\uc774\uc0c1\uc8fc\uc758\uc801\uc778"},{type:"I",msg:"\ud3c9\ud310\uc774\uc88b\uc740"},{type:"S",msg:"\ucf8c\ud65c\ud55c"},{type:"C",msg:"\uc194\uc9c1\ud55c"}]},{id:20,answer:"",qst:[{type:"D",msg:"\ucc38\uc744\uc131\uc5c6\ub294"},{type:"I",msg:"\uc9c4\uc9c0\ud55c"},{type:"S",msg:"\ubbf8\ub8e8\ub294"},{type:"C",msg:"\uac10\uc131\uc801\uc778"}]},{id:21,answer:"",qst:[{type:"D",msg:"\uacbd\uc7c1\uc2ec\uc774\uc788\ub294"},{type:"I",msg:"\uc790\ubc1c\uc801\uc778"},{type:"S",msg:"\ucda9\uc131\uc2a4\ub7ec\uc6b4"},{type:"C",msg:"\uc0ac\ub824\uae4a\uc740"}]},{id:22,answer:"",qst:[{type:"D",msg:"\ud76c\uc0dd\uc801\uc778"},{type:"I",msg:"\uc774\ud574\uc2ec\ub9ce\uc740"},{type:"S",msg:"\uc124\ub4dd\ub825\uc788\ub294"},{type:"C",msg:"\uc6a9\uae30\uc788\ub294"}]},{id:23,answer:"",qst:[{type:"D",msg:"\uc758\uc874\uc801\uc778"},{type:"I",msg:"\ubcc0\ub355\uc2a4\ub7ec\uc6b4"},{type:"S",msg:"\uc808\uc81c\ub825\uc788\ub294"},{type:"C",msg:"\ubc00\uc5b4\ubd99\uc774\ub294"}]},{id:24,answer:"",qst:[{type:"D",msg:"\ud3ec\uc6a9\ub825\uc788\ub294"},{type:"I",msg:"\uc804\ud1b5\uc801\uc778"},{type:"S",msg:"\uc0ac\ub78c\uc744\ubd80\ucd94\uae30\ub294"},{type:"C",msg:"\uc774\ub04c\uc5b4\uac00\ub294"}]}],C=function(t){Object(p.a)(s,t);var e=Object(g.a)(s);function s(t){var i;return Object(c.a)(this,s),(i=e.call(this,t)).discClick=h,i.analyzeClick=q,i.weightClick=j,i.state={disc:{discYn:!0,display:0,questions:O},weight:{weightYn:!0,display:0,questions:b},position:{posYn:!1,position:w}},i}return Object(r.a)(s,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},this.state.disc.discYn?n.a.createElement("div",null,n.a.createElement(m,{data:this.state.disc.questions[this.state.disc.display].qst,submitAnswer:this.discClick.bind(this),display:this.state.disc.display}," ")):this.state.weight.weightYn?n.a.createElement(y,{data:this.state.weight.questions[this.state.weight.display],submitAnswer:this.weightClick.bind(this),display:this.state.weight.display}):n.a.createElement("div",null),this.state.disc.discYn||this.state.weight.weightYn?n.a.createElement("div",null,n.a.createElement("h1",null," ",this.state.disc.display+this.state.weight.display+1,"/ ",this.state.disc.questions.length+this.state.weight.questions.length)):n.a.createElement("div",null,this.state.position.posYn?n.a.createElement("div",null):n.a.createElement("h1",null," ",n.a.createElement("button",{onClick:this.analyzeClick.bind(this)}," \ubd84\uc11d\ud558\uae30 ")," ")),this.state.position.posYn?n.a.createElement(l,{data:this.state.position.position}):n.a.createElement("h1",null))}}]),s}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,s){t.exports=s(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.77a79087.chunk.js.map