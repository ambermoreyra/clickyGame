(window.webpackJsonpclickgame=window.webpackJsonpclickgame||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Brewers","image":"https://seeklogo.com/images/M/milwaukee-brewers-logo-05E7BB4FD2-seeklogo.com.png","count":0},{"id":2,"name":"Cubs","image":"https://seeklogo.com/images/C/chicago-cubs-logo-CE29653727-seeklogo.com.png","count":0},{"id":3,"name":"Rockies","image":"https://seeklogo.com/images/C/colorado-rockies-logo-C7AEB8D8E9-seeklogo.com.png","count":0},{"id":4,"name":"Dodgers","image":"https://seeklogo.com/images/L/los-angeles-dodgers-logo-A81D6D57DF-seeklogo.com.png","count":0},{"id":5,"name":"Yankees","image":"https://seeklogo.com/images/N/new-york-yankees-logo-766DC138B6-seeklogo.com.png","count":0},{"id":6,"name":"Phillies","image":"https://seeklogo.com/images/P/philadelphia-phillies-logo-93769EEB2E-seeklogo.com.png","count":0},{"id":7,"name":"Cardinals","image":"https://seeklogo.com/images/S/st-louis-cardinals-logo-ED3B1E2E0E-seeklogo.com.png","count":0},{"id":8,"name":"Pirates","image":"https://seeklogo.com/images/P/pittsburgh-pirates-logo-90AA2CABDC-seeklogo.com.png","count":0},{"id":9,"name":"Reds","image":"https://seeklogo.com/images/C/cincinnati-reds-logo-BA9EF9E155-seeklogo.com.png","count":0},{"id":10,"name":"Twins","image":"https://seeklogo.com/images/M/minnesota-twins-logo-645594FD90-seeklogo.com.png","count":0},{"id":11,"name":"White Sox","image":"https://seeklogo.com/images/C/chicago-white-sox-logo-A06D41EC73-seeklogo.com.png","count":0},{"id":12,"name":"Red Sox","image":"https://seeklogo.com/images/B/boston-red-sox-logo-E1746C18A1-seeklogo.com.png","count":0}]')},,,,,,,,function(e,o,t){e.exports=t(19)},,,,,function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){"use strict";t.r(o);var n=t(0),a=t.n(n),c=t(3),s=t.n(c),i=(t(14),t(4)),r=t(5),l=t(7),m=t(6),g=t(8),u=(t(15),function(e){return a.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{alt:e.name,src:e.image})))}),h=(t(16),function(e){return a.a.createElement("div",{className:"wrapper"},e.children)}),d=(t(17),function(e){return a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"title"},e.children),a.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",{className:"description"},"Click on an image to earn points, but don't click on any more than once!"))}),k=t(1),p=(t(18),function(e){function o(){var e,t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(o)).call.apply(e,[this].concat(a)))).state={cards:k,score:0,highscore:0},t.gameOver=function(){return t.state.score>t.state.highscore&&t.setState({highscore:t.state.score},(function(){console.log(this.state.highscore)})),t.state.cards.forEach((function(e){e.count=0})),alert("Game Over:( \nscore: ".concat(t.state.score)),t.setState({score:0}),!0},t.clickCount=function(e){t.state.cards.find((function(o,n){if(o.id===e){if(0===k[n].count)return k[n].count=k[n].count+1,t.setState({score:t.state.score+1},(function(){console.log(this.state.score)})),t.state.cards.sort((function(){return Math.random()-.5})),!0;t.gameOver()}}))},t}return Object(g.a)(o,e),Object(r.a)(o,[{key:"render",value:function(){var e=this;return a.a.createElement(h,null,a.a.createElement(d,{score:this.state.score,highscore:this.state.highscore},"Clicky Game"),this.state.cards.map((function(o){return a.a.createElement(u,{clickCount:e.clickCount,id:o.id,key:o.id,image:o.image})})))}}]),o}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.6ec63f2c.chunk.js.map