(this["webpackJsonplol-position"]=this["webpackJsonplol-position"]||[]).push([[0],{37:function(t,e,s){t.exports=s(65)},42:function(t,e,s){},43:function(t,e,s){},65:function(t,e,s){"use strict";s.r(e);var i=s(0),a=s.n(i),n=s(29),r=s.n(n),o=(s(42),s(2)),c=s(9),p=s(10),l=s(12),m=s(11),d=(s(43),s(6)),h=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(t){return Object(c.a)(this,s),e.call(this,t)}return Object(p.a)(s,[{key:"render",value:function(){var t=this.props,e=t.submitAnswer,s=t.display,i=t.preClick,n=t.answer;return a.a.createElement("div",null,this.props.data.map((function(t,i){return a.a.createElement(d.c,{key:i,sx:{cursor:"pointer",margin:"10px",backgroundColor:t.type===n?"tomato":"white"},onClick:function(){return e(s,t.type)}},t.msg)})),s>0?a.a.createElement(d.b,{style:{margin:"1rem",float:"left"},onClick:function(){return i(s,"disc")}}," \uc774\uc804 "):a.a.createElement("div",null))}}]),s}(i.Component),g=s(31),u=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(t){return Object(c.a)(this,s),e.call(this,t)}return Object(p.a)(s,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(g.a,{width:"500px",height:"300px",chartType:"BarChart",loader:a.a.createElement("div",null,"Loading Chart"),data:[["Position","Score"],[this.props.data[0].label,this.props.data[0].score],[this.props.data[1].label,this.props.data[1].score],[this.props.data[2].label,this.props.data[2].score],[this.props.data[3].label,this.props.data[3].score],[this.props.data[4].label,this.props.data[4].score]],options:{title:"POSITION \ubd84\uc11d \uacb0\uacfc",chartArea:{width:"50%"},hAxis:{title:"\ubd84\uc11d\uacb0\uacfc(%)",minValue:0},vAxis:{title:"POSITION"},legend:"none"}}))}}]),s}(i.Component),y=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(t){var i;Object(c.a)(this,s);var a=(i=e.call(this,t)).props.data,n=0,r=[];return a.map((function(t,e){n+=t.score})),a.map((function(t,e){r.push({position:t.position,score:t.score,ratio:Math.trunc(t.score/n*100),description:t.description,img:t.img,name:t.posNm})})),r.sort((function(t,e){return t.score==e.score?0:t.score<e.score?1:-1})),i.state={data:r},i}return Object(p.a)(s,[{key:"render",value:function(){var t;return t=this.state.data.map((function(t,e){return{label:t.name,score:t.ratio}})),a.a.createElement("div",null,a.a.createElement(d.c,{sx:{width:"90%",margin:"auto",border:"#0023 solid 5px"}},a.a.createElement(d.e,{src:this.state.data[0].img}),a.a.createElement(d.d,null,this.state.data[0].name),this.state.data[0].description.split("\n").map((function(t,e){return a.a.createElement(d.f,null," ",t," ")}))),a.a.createElement("hr",null),a.a.createElement(u,{width:"80%",data:t}))}}]),s}(i.Component),w=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(p.a)(s,[{key:"render",value:function(){var t=this.props,e=t.data,s=t.submitAnswer,i=t.display,n=t.preClick;return a.a.createElement("div",null,a.a.createElement("h4",null,e.qst),e.selection.map((function(t,n){return a.a.createElement("div",null,a.a.createElement(d.c,{key:n,sx:{cursor:"pointer",margin:"10px",backgroundColor:t.answer===e.answer?"tomato":"white"},onClick:function(){return s(i,t.answer)}},t.answer))})),a.a.createElement(d.b,{style:{margin:"1rem",float:"left"},onClick:function(){return n(i,"weight")}}," \uc774\uc804 "))}}]),s}(i.Component),b=s(13);function j(t,e){var s={};s=this.state.disc.questions.length-1===t?Object(o.a)(Object(o.a)({},this.state.disc),{},{discYn:!1,questions:[].concat(Object(b.a)(this.state.disc.questions.slice(0,t)),[Object(o.a)(Object(o.a)({},this.state.disc.questions[t]),{},{answer:e})],Object(b.a)(this.state.disc.questions.slice(t+1,this.state.disc.questions.length)))}):Object(o.a)(Object(o.a)({},this.state.disc),{},{display:t+1,questions:[].concat(Object(b.a)(this.state.disc.questions.slice(0,t)),[Object(o.a)(Object(o.a)({},this.state.disc.questions[t]),{},{answer:e})],Object(b.a)(this.state.disc.questions.slice(t+1,this.state.disc.questions.length)))}),this.setState({disc:s})}var q=[{position:"top",score:0,posNm:"TOP",img:"/img/top.png",description:"\n      \ub2f9\uc2e0\uc758 \ud3ec\uc9c0\uc158\uc740 \ube7c\ubc15 TOP!\n\n      \uc790\uae30\uc8fc\ub3c4\uc801\uc778 \uc131\ud5a5\uc774 \uac15\ud558\uace0 \ub3c4\uc804\uc744 \ub450\ub824\uc6cc\ud558\uc9c0 \uc54a\ub294 \ubd88\ub3c4\uc800.\n      \ub300\ub2f4\ud55c \uc131\uaca9\uc758 \uc18c\uc720\uc790\ub85c \ud56d\uc0c1 \uc790\uc2e0\uac10\uc774 \ub118\uccd0\ub098\ub294 \uc790\uc874\uac10\uc758 \ub05d\ud310\uc655!\n      \uc9c4\ucde8\uc801\uc778 \uc0dd\uac01\uacfc \uacb0\uc815\ub825, \uadf8\ub9ac\uace0 \ub0c9\ucca0\ud55c \ud310\ub2e8\ub825\uc73c\ub85c \ubaa9\ud45c \ub2ec\uc131\uc744 \uc704\ud574 \uac00\ub054\uc740 \ubb34\ubaa8\ud558\ub9ac\ub9cc\uce58 \uc774\uc131\uc801 \uc0ac\uace0\ub97c \ud558\ub294 \uac83\uc774 \ud2b9\uc9d5\uc785\ub2c8\ub2e4.\n      \n      "},{position:"jg",score:0,posNm:"JUNGLE",img:"./img/jg.png",description:"\n      \ub2f9\uc2e0\uc758 \ud3ec\uc9c0\uc158\uc740 \ud0b9\uba54\uc774\ucee4, Jungle!\n\n      \uc804\ub7b5\uc801 \uc0ac\uace0\uc5d0 \ub6f0\uc5b4\ub098\uba70 \uccb4\uc2a4\ub97c \ub450\ub294 \ub4ef\ud55c \uc815\ud655\ud558\uace0 \uacc4\uc0b0\ub41c \uc6c0\uc9c1\uc784\uc5d0 \ub2a5\ud569\ub2c8\ub2e4.\n      \uacb0\ub2e8\ub825\uc774 \uc788\uc73c\uba70, \uc57c\ub9dd\uc774 \uc788\uc9c0\ub9cc \ub300\uc678\uc801\uc73c\ub85c \ud45c\ud604\ud558\uc9c0 \uc54a\uc73c\uba70, \ub180\ub784 \ub9cc\ud07c \ud638\uae30\uc2ec\uc774 \ub9ce\uc9c0\ub9cc \uc4f8\ub370\uc5c6\ub294\ub370 \uc5d0\ub108\uc9c0\ub97c \ub0ad\ube44\ud558\ub294 \ubc95\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.\n      \ub9c8\uce58 \uccb4\uc2a4\ub97c \ub450\ub4ef \uc0c8\ub85c\uc6b4 \uacc4\ud68d\uc774\ub098 \uc804\uc220, \uadf8\ub9ac\uace0 \ub300\ucc45\uc744 \uc138\uc6cc\uac00\uba70 \uc0c1\ub300\ubc29 \uba38\ub9ac \uc704\uc5d0\uc11c \uc218\ub97c \ub450\uba70 \ud5c8\ub97c \ucc0c\ub974\ub294 \uae30\uc220\ub85c \uc0c1\ud669\uc744 \uc720\ub9ac\ud558\uac8c \ubab0\uace0 \uac00\ub294 \uac83\uc744 \uc990\uae41\ub2c8\ub2e4.\n      "},{position:"mid",score:0,posNm:"MID",img:"./img/mid.png",description:"\n    \ub2f9\uc2e0\uc758 \ud3ec\uc9c0\uc158\uc740 \ud300\uc758 \uc911\uc2ec\uc774\uc790 \ud575\uc2ec, Mid!\n\n    \ud0c0\uace0\ub09c \uc2b9\ubd80\uc695\uacfc \ucca0\ub450\ucca0\ubbf8\ud55c \uacc4\ud68d\uc744 \uc138\uc6b0\ub294 \uc644\ubcbd\uc8fc\uc758\uc790. \n    \uc804\ub7b5\uc801\uc778 \uc0ac\uace0\uc640 \uc7a5\uae30\uc801\uc778 \uc548\ubaa9\uacfc \ub354\ubd88\uc5b4 \ube60\ub978 \ud310\ub2e8\ub825\uacfc \uc815\ud655\uc131\uc73c\ub85c \uacc4\ud68d\uc744 \ub2e8\uacc4\ubcc4\ub85c \uc2e4\ud589\ud574 \ub098\uac10\uc73c\ub85c\uc368 \uc9c4\uc815\ud55c \ub9ac\ub354\uc758 \uc5ed\ud560\uc744 \uc218\ud589\ud569\ub2c8\ub2e4.\n    "},{position:"ad",score:0,posNm:"AD Carry",img:"./img/ad.png",description:"\n    \ub2f9\uc2e0\uc758 \ud3ec\uc9c0\uc158\uc740 \uce90\ub9ac\uc758 \uc911\uc2ec, AD Carry!\n    \n    \ub118\uce58\ub294 \uce74\ub9ac\uc2a4\ub9c8\uc640 \uc601\ud5a5\ub825\uc73c\ub85c \ub77c\uc778\uc744 \uc555\ub3c4\ud560 \uc218 \uc788\ub294 \uc7ac\ub2a5\uc744 \uac00\uc84c\uc2b5\ub2c8\ub2e4.\n    \ubaa9\ud45c\ub97c \ub2ec\uc131\ud558\uae30 \uc704\ud574 \uc2dc\uac04\uacfc \uc5d0\ub108\uc9c0\ub97c \ud5c8\ud22c\ub8e8 \uc4f0\uc9c0 \uc54a\uc73c\uba70, \uc774\uc5d0 \ud544\uc694\ud55c \uc5c5\ubb34\ub97c \uc815\ud655\ud558\uace0 \uc2e0\uc911\ud558\uac8c \ucc98\ub9ac\ud569\ub2c8\ub2e4.\n    "},{position:"sup",score:0,posNm:"Suppoter",img:"./img/sup.png",description:"\n    \ub2f9\uc2e0\uc758 \ud3ec\uc9c0\uc158\uc740 \uc0dd\uac01\ud558\ub294 \uc804\ub7b5\uac00, Support!\n    \n    \uba85\uc11d\ud55c \ub450\ub1cc\uc640 \uc5d0\ub108\uc9c0, \uadf8\ub9ac\uace0 \ub6f0\uc5b4\ub09c \uc9c1\uad00\ub825\uc744 \uac00\uc9c4 \uc804\ub7b5\uac00.\n    \uce5c\uadfc\ud558\uace0 \uc815\uc9c1\ud558\uba70 \uc720\uba38\ub7ec\uc2a4\ud55c \uc131\uaca9\uc758 \uc18c\uc720\uc790\uc778 \ub2f9\uc2e0\uc740 \uce68\ucc29\ud558\uace0 \ub0b4\uc131\uc801\uc774\uba70 \uc2ec\uc9c0\uc5b4\ub294 \uc218\uc90d\uc74c\uc774 \ub9ce\uc740 \uc0ac\ub78c\ucc98\ub7fc \ube44\ucd94\uc5b4\uc9c0\uae30\ub3c4 \ud558\uc9c0\ub9cc, \uc774\ub4e4 \uc548\uc5d0\ub294 \ubd88\ub9cc \uc9c0\ud53c\uba74 \ud65c\ud65c \ud0c0\uc624\ub97c \uc218 \uc788\ub294 \uc5f4\uc815\uc758 \ubd88\uaf43\uc774 \uc228\uc5b4\uc788\uc2b5\ub2c8\ub2e4\n    "}],f={apiKey:"AIzaSyBfMGHPqpq4hinSGfI-hL1SZmziAwKcimI",authDomain:"lol-position.firebaseapp.com",databaseURL:"https://lol-position.firebaseio.com",projectId:"lol-position",storageBucket:"lol-position.appspot.com",messagingSenderId:"385127973639",appId:"1:385127973639:web:6cd04d8c4a255bfcdcbba2"},O=s(20),C=s.n(O);function v(){if(null!=this.state.lolid){var t=[{id:"D",score:0},{id:"I",score:0},{id:"S",score:0},{id:"C",score:0}];this.state.disc.questions.map((function(e,s){t.map((function(t,s){e.answer===t.id&&t.score++}))})),t.sort((function(t,e){return t.score==e.score?0:t.score<e.score?1:-1}));var e=q,s=0,i=0;t.map((function(t,a){var n=0;n=0===a?10:1===a?5:1,s==t.score&&(n=i),s=t.score,i=n,"D"===t.id?(e[0].score+=n,e[2].score+=n,e[3].score+=n):"I"===t.id?(e[1].score+=n,e[4].score+=n):"S"===t.id?e[4].score+=n:"C"===t.id&&(e[0].score+=n,e[2].score+=n,e[3].score+=n)})),this.state.weight.questions.map((function(t,s){t.selection.map((function(s,i){s.answer==t.answer&&s.obj.map((function(t,s){e.map((function(s,i){t===s.position&&(e[i].score+=3)}))}))}))}));var a={posYn:!0,position:e};this.setState({position:a});(function(t){C.a.apps.length||C.a.initializeApp(f);var e=C.a.database().ref().child("users").push().key,s=t.disc.questions,i=t.weight.questions,a=[];t.position.position.map((function(t,e){var s={pos:t.position,score:t.score};a.push(s)}));var n={lolid:t.lolid,disc:s,weight:i,position:a},r={};r["/users/"+e]=n,C.a.database().ref().update(r)})(this.state)}else alert("\uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694")}function E(t,e){var s={};s=this.state.weight.questions.length-1===t?Object(o.a)(Object(o.a)({},this.state.weight),{},{weightYn:!1,questions:[].concat(Object(b.a)(this.state.weight.questions.slice(0,t)),[Object(o.a)(Object(o.a)({},this.state.weight.questions[t]),{},{answer:e})],Object(b.a)(this.state.weight.questions.slice(t+1,this.state.weight.questions.length)))}):Object(o.a)(Object(o.a)({},this.state.weight),{},{display:t+1,questions:[].concat(Object(b.a)(this.state.weight.questions.slice(0,t)),[Object(o.a)(Object(o.a)({},this.state.weight.questions[t]),{},{answer:e})],Object(b.a)(this.state.weight.questions.slice(t+1,this.state.weight.questions.length)))}),this.setState({weight:s})}var S=[{id:1,answer:"",qst:[{type:"D",msg:"\uc808\uc81c\ud558\ub294"},{type:"I",msg:"\uac15\ub825\ud55c"},{type:"S",msg:"\uaf3c\uaf3c\ud55c"},{type:"C",msg:"\ud45c\ud604\ub825\uc788\ub294"}]},{id:2,answer:"",qst:[{type:"D",msg:"\uac1c\ucc99\uc801\uc778"},{type:"I",msg:"\uc815\ud655\ud55c"},{type:"S",msg:"\ud765\ubbf8\uc9c4\uc9c4\ud55c"},{type:"C",msg:"\ub9cc\uc871\uc2a4\ub7ec\uc6b4"}]},{id:3,answer:"",qst:[{type:"D",msg:"\uae30\uaebc\uc774\ud558\ub294"},{type:"I",msg:"\ud65c\uae30\uc788\ub294"},{type:"S",msg:"\ub300\ub2f4\ud55c"},{type:"C",msg:"\uc815\uad50\ud55c"}]},{id:4,answer:"",qst:[{type:"D",msg:"\ub17c\uc7c1\uc744 \uc88b\uc544\ud558\ub294"},{type:"I",msg:"\ud68c\uc758\uc801\uc778"},{type:"S",msg:"\uc8fc\uc800\ud558\ub294"},{type:"C",msg:"\uc608\uce21\ud560\uc218\uc5c6\ub294"}]},{id:5,answer:"",qst:[{type:"D",msg:"\uacf5\uc190\ud55c"},{type:"I",msg:"\uc0ac\uad50\uc801\uc778"},{type:"S",msg:"\ucc38\uc744\uc131\uc774 \uc788\ub294"},{type:"C",msg:"\ubb34\uc11c\uc6c0\uc744\ubaa8\ub974\ub294"}]},{id:6,answer:"",qst:[{type:"D",msg:"\uc124\ub4dd\ub825 \uc788\ub294"},{type:"I",msg:"\ub3c5\ub9bd\uc2ec\uc774 \uac15\ud55c"},{type:"S",msg:"\ub17c\ub9ac\uc801\uc778"},{type:"C",msg:"\uc628\ud654\ud55c"}]},{id:7,answer:"",qst:[{type:"D",msg:"\uc2e0\uc911\ud55c"},{type:"I",msg:"\ucc28\ubd84\ud55c"},{type:"S",msg:"\uacfc\ub2e8\uc131 \uc788\ub294"},{type:"C",msg:"\ud30c\ud2f0\ub97c\uc88b\uc544\ud558\ub294"}]},{id:8,answer:"",qst:[{type:"D",msg:"\uc778\uae30 \uc788\ub294"},{type:"I",msg:"\uace0\uc9d1\uc774 \uc788\ub294"},{type:"S",msg:"\uc644\ubcbd\uc8fc\uc758\uc790"},{type:"C",msg:"\uc778\uc2ec\uc88b\uc740"}]},{id:9,answer:"",qst:[{type:"D",msg:"\ubcc0\ud654\uac00 \ub9ce\uc740"},{type:"I",msg:"\uc218\uc90d\uc74c\uc744 \ud0c0\ub294"},{type:"S",msg:"\ub290\uae0b\ud55c"},{type:"C",msg:"\uc644\uace0\ud55c"}]},{id:10,answer:"",qst:[{type:"D",msg:"\uccb4\uacc4\uc801\uc778"},{type:"I",msg:"\ub099\uad00\uc801\uc778"},{type:"S",msg:"\uc758\uc9c0\uac00 \uac15\ud55c"},{type:"C",msg:"\uce5c\uc808\ud55c"}]},{id:11,answer:"",qst:[{type:"D",msg:"\uc5c4\uaca9\ud55c"},{type:"I",msg:"\uacb8\uc190\ud55c"},{type:"S",msg:"\uc0c1\ub0e5\ud55c"},{type:"C",msg:"\ub9d0\uc8fc\ubcc0\uc774\uc88b\uc740"}]},{id:12,answer:"",qst:[{type:"D",msg:"\ud638\uc758\uc801\uc778"},{type:"I",msg:"\ube48\ud2c8\uc5c6\ub294"},{type:"S",msg:"\ub180\uae30 \uc88b\uc544\ud558\ub294"},{type:"C",msg:"\uc758\uc9c0\uac00\uac15\ud55c"}]},{id:13,answer:"",qst:[{type:"D",msg:"\ucc38\uc2e0\ud55c"},{type:"I",msg:"\ubaa8\ud5d8\uc801\uc778"},{type:"S",msg:"\uc808\uc81c\ub41c"},{type:"C",msg:"\uc2e0\uc911\ud55c"}]},{id:14,answer:"",qst:[{type:"D",msg:"\ucc38\ub294"},{type:"I",msg:"\uc131\uc2e4\ud55c"},{type:"S",msg:"\uacf5\uaca9\uc801\uc778"},{type:"C",msg:"\ub9e4\ub825\uc788\ub294"}]},{id:15,answer:"",qst:[{type:"D",msg:"\uc5f4\uc815\uc801\uc778"},{type:"I",msg:"\ubd84\uc11d\uc801\uc778"},{type:"S",msg:"\ub3d9\uc815\uc2ec\uc774 \ub9ce\uc740"},{type:"C",msg:"\ub2e8\ud638\ud55c"}]},{id:16,answer:"",qst:[{type:"D",msg:"\uc9c0\ub3c4\ub825\uc774 \uc788\ub294"},{type:"I",msg:"\ucda9\ub3d9\uc801\uc778"},{type:"S",msg:"\ub290\ub9b0"},{type:"C",msg:"\ube44\ud310\uc801\uc778"}]},{id:17,answer:"",qst:[{type:"D",msg:"\uc77c\uad00\uc131 \uc788\ub294"},{type:"I",msg:"\uc601\ud5a5\ub825 \uc788\ub294"},{type:"S",msg:"\uc0dd\uae30\uc788\ub294"},{type:"C",msg:"\ub290\uae0b\ud55c"}]},{id:18,answer:"",qst:[{type:"D",msg:"\uc720\ub825\ud55c"},{type:"I",msg:"\uce5c\uc808\ud55c"},{type:"S",msg:"\ub3c5\ub9bd\uc801\uc778"},{type:"C",msg:"\uc815\ub3c8\ub41c"}]},{id:19,answer:"",qst:[{type:"D",msg:"\uc774\uc0c1\uc8fc\uc758\uc801\uc778"},{type:"I",msg:"\ud3c9\ud310\uc774\uc88b\uc740"},{type:"S",msg:"\ucf8c\ud65c\ud55c"},{type:"C",msg:"\uc194\uc9c1\ud55c"}]},{id:20,answer:"",qst:[{type:"D",msg:"\ucc38\uc744\uc131 \uc5c6\ub294"},{type:"I",msg:"\uc9c4\uc9c0\ud55c"},{type:"S",msg:"\ubbf8\ub8e8\ub294"},{type:"C",msg:"\uac10\uc131\uc801\uc778"}]},{id:21,answer:"",qst:[{type:"D",msg:"\uacbd\uc7c1\uc2ec\uc774 \uc788\ub294"},{type:"I",msg:"\uc790\ubc1c\uc801\uc778"},{type:"S",msg:"\ucda9\uc131\uc2a4\ub7ec\uc6b4"},{type:"C",msg:"\uc0ac\ub824\uae4a\uc740"}]},{id:22,answer:"",qst:[{type:"D",msg:"\ud76c\uc0dd\uc801\uc778"},{type:"I",msg:"\uc774\ud574\uc2ec \ub9ce\uc740"},{type:"S",msg:"\uc124\ub4dd\ub825 \uc788\ub294"},{type:"C",msg:"\uc6a9\uae30\uc788\ub294"}]},{id:23,answer:"",qst:[{type:"D",msg:"\uc758\uc874\uc801\uc778"},{type:"I",msg:"\ubcc0\ub355\uc2a4\ub7ec\uc6b4"},{type:"S",msg:"\uc808\uc81c\ub825 \uc788\ub294"},{type:"C",msg:"\ubc00\uc5b4\ubd99\uc774\ub294"}]},{id:24,answer:"",qst:[{type:"D",msg:"\ud3ec\uc6a9\ub825 \uc788\ub294"},{type:"I",msg:"\uc804\ud1b5\uc801\uc778"},{type:"S",msg:"\uc0ac\ub78c\uc744 \ubd80\ucd94\uae30\ub294"},{type:"C",msg:"\uc774\ub04c\uc5b4\uac00\ub294"}]}],I=[{id:1,answer:"",qst:"\uc624\ub79c\uc2dc\uac04 \ud63c\uc790 \uc77c\ud558\ub2e4\ubcf4\uba74 \uc678\ub86d\uace0 \uc9c0\ub8e8\ud558\uace0 \ud798\ub4e4\ub2e4",selection:[{answer:"YES",obj:["ad","sup"]},{answer:"NO",obj:["top","mid","jg"]}]},{id:2,answer:"",qst:"\ub098\ub294 \ud55c \ubc88 \uac04 \uae38\ub3c4 \uc798 \uae30\uc5b5\ud558\ub294 \ud3b8\uc774\ub2e4.",selection:[{answer:"YES",obj:["jg","sup"]},{answer:"NO",obj:[]}]},{id:3,answer:"",qst:"\ubd80\uc2a4\ub7ec\uae30\uac00 \ub5a8\uc5b4\uc9c0\uac70\ub098 \uc18c\uc2a4\uac00 \ud750\ub974\ub294 \uac83\uc774 \uc2eb\uc740\ud3b8\uc774\ub2e4.",selection:[{answer:"YES",obj:["ad","mid"]},{answer:"NO",obj:[]}]},{id:4,answer:"",qst:"\ubaa9\uc18c\ub9ac\uac00 \uc791\uace0 \uc870\uc6a9\ud55c \ud3b8\uc774\ub2e4.",selection:[{answer:"YES",obj:[]},{answer:"NO",obj:["top","mid"]}]},{id:5,answer:"",qst:"\ub0b4\uac00 \uac16\uace0 \uc2f6\uc740 \ucc28\ub294?",selection:[{answer:"\uc624\ud504\ub85c\ub4dc\uce74",obj:["top"]},{answer:"\uc2a4\ud3ec\uce20\uce74",obj:["ad","mid"]},{answer:"SUV",obj:["jg"]},{answer:"RV(\ubc34)",obj:["sup"]}]}],k=s(33),D=s(36),Y=s.n(D),N=s(28),x=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(t){var i;return Object(c.a)(this,s),(i=e.call(this,t)).discClick=j,i.analyzeClick=v,i.weightClick=E,i.preClick=function(t,e){if("disc"===e){var s=Object(o.a)(Object(o.a)({},this.state.disc),{},{display:t-1});this.setState({disc:s})}else if("weight"===e)if(0==t){var i=Object(o.a)(Object(o.a)({},this.state),{},{disc:Object(o.a)(Object(o.a)({},this.state.disc),{},{discYn:!0})});this.setState({disc:i.disc})}else{var a=Object(o.a)(Object(o.a)({},this.state.weight),{},{display:t-1});this.setState({weight:a})}},i.state={lolid:null,startYn:!0,disc:{discYn:!0,display:0,questions:S},weight:{weightYn:!0,display:0,questions:I},position:{posYn:!1,position:q}},i}return Object(p.a)(s,[{key:"startClick",value:function(){this.setState({startYn:!1})}},{key:"render",value:function(){var t=this;return a.a.createElement(k.a,{theme:Y.a},a.a.createElement("div",{className:"App"},this.state.startYn?a.a.createElement("div",null,a.a.createElement("h2",null," \uc131\ud5a5\ubcc4 LOL \ud3ec\uc9c0\uc158 \ubd84\uc11d "),a.a.createElement("img",{src:"./img/lux.gif",style:{width:"85%",margin:"1rem"},width:"100%"}),a.a.createElement(d.b,{onClick:this.startClick.bind(this),width:"85%"},"\uc2dc\uc791\ud558\uae30")):a.a.createElement("div",null,this.state.disc.discYn||this.state.weight.weightYn?a.a.createElement("div",null,this.state.disc.discYn?a.a.createElement("h1",null,"\ub2e4\uc74c \uc911 \ub2f9\uc2e0\uc744 \uac00\uc7a5 \uc798 \ud45c\ud604\ud560 \uc218 \uc788\ub294 \ubb38\uad6c\ub97c \uace0\ub974\uc138\uc694."):a.a.createElement("div",null,this.state.weight.weightYn?a.a.createElement("h1",null,"\ub2e4\uc74c\uc758 \uc9c8\ubb38\uc5d0 \uac00\uc7a5 \uc801\uc808\ud55c \ub2f5\uc744 \uace0\ub974\uc138\uc694."):a.a.createElement("div",null)),a.a.createElement("p",null,"( ",this.state.disc.display+1+(this.state.disc.discYn?0:this.state.weight.display+1),"/ ",this.state.disc.questions.length+this.state.weight.questions.length,")")):a.a.createElement("div",null,this.state.position.posYn?a.a.createElement("div",null):a.a.createElement("div",null,a.a.createElement(d.a,{px:2,ml:"auto"},a.a.createElement(N.b,{htmlFor:"lolId"}," ",a.a.createElement("h1",null," \ub864 ID\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.")," "),a.a.createElement(N.a,{id:"lolId",onChange:function(e){t.setState({lolid:e.target.value})}})),a.a.createElement("h1",null," ",a.a.createElement(d.b,{onClick:this.analyzeClick.bind(this)}," \ubd84\uc11d\ud558\uae30 ")," "))),this.state.disc.discYn?a.a.createElement("div",null,a.a.createElement(h,{data:this.state.disc.questions[this.state.disc.display].qst,submitAnswer:this.discClick.bind(this),preClick:this.preClick.bind(this),display:this.state.disc.display,answer:this.state.disc.questions[this.state.disc.display].answer}," ")):this.state.weight.weightYn?a.a.createElement(w,{data:this.state.weight.questions[this.state.weight.display],submitAnswer:this.weightClick.bind(this),preClick:this.preClick.bind(this),display:this.state.weight.display}):a.a.createElement("div",null),this.state.position.posYn?a.a.createElement("div",null,a.a.createElement(y,{data:this.state.position.position})):a.a.createElement("h1",null))))}}]),s}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.b0f70e0e.chunk.js.map