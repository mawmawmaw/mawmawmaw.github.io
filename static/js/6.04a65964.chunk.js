(this.webpackJsonpmawmawmaw=this.webpackJsonpmawmawmaw||[]).push([[6],{38:function(t,e,o){},39:function(t,e,o){},53:function(t,e,o){"use strict";o.r(e);var n=o(22),a=o.n(n),i=o(23),c=o(2),r=o(1),s=o(37),u=o(24),l=o(25),b=o(32),m=o(31),g=function(){function t(e){Object(u.a)(this,t),this.time=e,this.timeout=null,this.close=null}return Object(l.a)(t,[{key:"getPromise",value:function(){var t=this;return new Promise((function(e,o){t.close=o,t.timeout=setTimeout((function(){e()}),t.time)}))}},{key:"cancel",value:function(){return this.timeout&&clearTimeout(this.timeout),this.close&&this.close("unmounted"),{isCanceled:!0}}}]),t}(),j=(o(38),o(0)),h=function(t){Object(b.a)(o,t);var e=Object(m.a)(o);function o(){var t;Object(u.a)(this,o);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={text:"",blink:!1,hideCursor:!0,animate:!1,typeSpeedDelay:null,looping:!1},t.runAnimation=function(){var e=Object(i.a)(a.a.mark((function e(o){var n,i,c,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n="string"==typeof o&&o.trim().split(""))){e.next=14;break}t.setState({blink:!1}),i="",c=new g(t.props.typeSpeed||15),t.setState({typeSpeedDelay:c}),r=0;case 7:if(!(r<n.length)){e.next=14;break}return e.next=10,c.getPromise();case 10:o!==t.state.text?(document.querySelector("#typingSound").play(),i+=n[r],t.setState({text:i})):!0!==t.state&&(document.querySelector("#typingSound").pause(),t.setState({blink:!0}));case 11:r++,e.next=7;break;case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.animateText=Object(i.a)(a.a.mark((function e(){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.state.animate||(t.setState({animate:!0}),o=!t.props.loop||t.props.loop,t.setState({hideCursor:!1,looping:o},Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.runAnimation(t.props.text);case 2:if(t.state.looping){e.next=0;break}case 3:t.props.hideCursorAfterText&&t.setState({hideCursor:!0});case 4:case"end":return e.stop()}}),e)})))))}catch(n){}case 1:case"end":return e.stop()}}),e)}))),t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){this.animateText()}},{key:"componentWillUnmount",value:function(){this.setState({looping:!1}),this.state.typeSpeedDelay&&this.state.typeSpeedDelay.cancel()}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"dialog-box-wrap",children:Object(j.jsxs)("div",{style:Object(s.a)({},this.props.textStyle),className:"dialog-box-text",children:[Object(j.jsx)("p",{children:this.state.text}),Object(j.jsx)("div",{className:"dialog-box-pointer ".concat(this.state.blink&&"animate-pointer"," ").concat(this.state.hideCursor?"hide-pointer":""),style:{backgroundColor:"rgba(0,0,0,.87)"}})]})})}}]),o}(r.Component),A=(o(39),o(7)),d=o.p+"static/media/maw_walking.8ed401cf.gif",p=o.p+"static/media/maw_waving.c1f9aef7.gif",y=o.p+"static/media/maw_standing.b737e7eb.gif",O=o(9),f=o.p+"static/media/maw_poked.91d8a70a.gif",v="data:image/gif;base64,R0lGODlh3gDeALMNAPRxAOlXANlADPCJAEwTFvB3MfeHIeVsSCYGA3lNT/9tSUkwJ/OYAP///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI5MEFERDQzOTE0NTExRUI5MjhEOUMzMEMzNjREMTg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI5MEFERDQ0OTE0NTExRUI5MjhEOUMzMEMzNjREMTg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjkwQURENDE5MTQ1MTFFQjkyOEQ5QzMwQzM2NEQxODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjkwQURENDI5MTQ1MTFFQjkyOEQ5QzMwQzM2NEQxODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr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",k="data:image/gif;base64,R0lGODlh3gDeALMNAPRxAOlXANlADPCJAEwTFvB3MfeHIeVsSCYGA3lNT/9tSUkwJ/OYAP///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE0REIyQjkzOTE0NTExRUI4RTdDQ0EyNjg1OTMyNUE2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE0REIyQjk0OTE0NTExRUI4RTdDQ0EyNjg1OTMyNUE2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTREQjJCOTE5MTQ1MTFFQjhFN0NDQTI2ODU5MzI1QTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTREQjJCOTI5MTQ1MTFFQjhFN0NDQTI2ODU5MzI1QTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr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";e.default=function(t){var e=t.visitor,o=t.dialogText,n=t.setDialogText,s=t.currentAction,u=t.setCurrentAction,l=Object(r.useRef)(),b=Object(r.useRef)(),m=Object(r.useRef)(),g=Object(r.useRef)(),w=Object(r.useState)(!1),I=Object(c.a)(w,2),C=I[0],N=I[1],T=Object(r.useState)("talking"),x=Object(c.a)(T,2),M=x[0],D=x[1],K=Object(r.useState)(0),G=Object(c.a)(K,2),S=G[0],Y=G[1],Q=Object(r.useState)(0),q=Object(c.a)(Q,2),J=q[0],E=q[1],H=function(t){switch(document.querySelector("#clickSound").volume=.4,document.querySelector("#clickSound").play(),t.target.id){case"action-say-hi":u("say-hi"),N(!0),n("How are you doing today".concat(e&&", "+e,"? Can I help you with anything?"));break;case"action-say-bye":u("say-bye"),n("Well... Goodbye!"),setTimeout((function(){window.location.replace(document.referrer)}),2e3);break;case"action-say-meow":u("say-meow"),N(!0),n("So, you like cats? These are Ralph and Atreyu"),R();break;case"action-chatter":u("chatter"),n("I'm really glad you're doing fine. :~<");break;case"action-goTo-fact":u("goTo-fact");break;case"action-goTo-joke":u("goTo-joke"),n("Hmmmmm... let me see...");break;case"action-goTo-about":u("goTo-about"),n("Sure, you can read more about me on that board! :~");break;case"action-goTo-work":u("goTo-work"),n("Sure, take a look at the board over there.");break;case"action-goTo-contact":u("goTo-contact"),n("You can reach me through any of the links at the top. Or you can also drop me a line in the contact form on that board!");break;case"action-goTo-portfolio":u("goTo-portfolio"),n("These are some of the projects I've worked on recently.");break;default:return}};Object(r.useEffect)((function(){var t=function(){var t=Object(i.a)(a.a.mark((function t(){var e,o,i,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Math.floor(Math.random()*Math.floor(2))){t.next=10;break}return t.next=3,fetch("https://api.icndb.com/jokes/random");case 3:return e=t.sent,t.next=6,e.json();case 6:o=t.sent,n(o.value.joke),t.next=17;break;case 10:return t.next=12,fetch("https://icanhazdadjoke.com/",{headers:{Accept:"application/json","User-Agent":"MAWMAWMAW (https://github.com/mawmawmaw/mawmawmaw.github.io) https://mawmawmaw.github.io/"}});case 12:return i=t.sent,t.next=15,i.json();case 15:c=t.sent,n(c.joke);case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e=function(){var t=Object(i.a)(a.a.mark((function t(){var e,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://uselessfacts.jsph.pl/random.json?language=en");case 2:return e=t.sent,t.next=5,e.json();case 5:o=t.sent,n(o.text);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();"goTo-joke"===s&&t(),"goTo-fact"===s&&e()}),[s,n]),Object(r.useEffect)((function(){setTimeout((function(){"talking"!==M||C||(l.current.src=p,D("waving")),"waving"===M&&C&&(l.current.src=y,D("standing"))}),1e3)}),[M,C]),Object(r.useEffect)((function(){!function(){var t,e=function(){window.location.replace(document.referrer)},o=function(){clearTimeout(t),t=setTimeout(e,3e5)};window.onload=o,document.onmousemove=o,document.onkeypress=o}()}),[]);var R=function(){b.current.animate([{transform:"translateX(600px)"},{transform:"translateX(10px)"}],{duration:2e3,fill:"forwards"}),b.current.src=k,m.current.animate([{transform:"translateX(800px)"},{transform:"translateX(-40px)"}],{duration:2200,fill:"forwards"}),m.current.src=k};return document.addEventListener("keydown",(function(t){38===t.keyCode&&S>0&&Y(S-1),40===t.keyCode&&S<g.current.children.length-1&&Y(S+1)})),Object(r.useEffect)((function(){g.current.children[S].focus()}),[S]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"avatar-container",children:[Object(j.jsx)("img",{ref:l,id:"avatar",src:O.a,alt:"Maw",onClick:function(){J<=4?(document.querySelector("#pokeSound").volume=.1,document.querySelector("#pokeSound").play(),l.current.src=f,n("Please don't poke me".concat(e&&", "+e,"!")),E(J+1),setTimeout((function(){l.current.src=y,D("standing")}),1e3)):(n("Ok, this is not fun, I'm leaving."),document.querySelector("#bgMusic").pause(),document.querySelector("#lostSound").volume=.1,document.querySelector("#lostSound").play(),document.querySelector("#player-controls").style.display="none",document.querySelector("#actions-wrapper").style.display="none",document.querySelector(".right-side-wrapper").style.display="none",setTimeout((function(){l.current.src=d,document.querySelector("#dialog-box-container").style.display="none",document.querySelector(".avatar-shadow").style.display="none",l.current.animate([{transform:"translateX(0px)"},{transform:"translateX(3000px)"}],{duration:5e3})}),2e3),setTimeout((function(){window.location.replace(document.referrer)}),5e3))}}),Object(j.jsxs)("div",{id:"cats",children:[Object(j.jsx)("img",{ref:b,id:"ralph",src:v,alt:"Ralph"}),Object(j.jsx)("img",{ref:m,id:"atreyu",src:v,alt:"Atreyu"})]}),Object(j.jsx)("div",{className:"avatar-shadow"})]}),Object(j.jsx)("div",{id:"dialog-box-container",children:Object(j.jsx)("div",{id:"dialog-box",style:{borderImageSource:"url(".concat(A.a,")")},children:function(t){return document.querySelector("#typingSound").volume=.4,Object(j.jsx)(h,{text:t})}(o)})}),Object(j.jsxs)("div",{id:"actions-wrapper",style:{borderImageSource:"url(".concat(A.a,")")},children:[Object(j.jsx)("div",{id:"action-suggestion",children:Object(j.jsx)("p",{children:"Choose an option"})}),Object(j.jsx)("div",{id:"actions",ref:g,children:C?"say-hi"===s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{id:"action-chatter",className:"visitor-action",onClick:H,children:"I'm doing fine, thanks."}),Object(j.jsx)("button",{id:"action-goTo-work",className:"visitor-action",onClick:H,children:"Let's talk about work!"}),Object(j.jsx)("button",{id:"action-goTo-about",className:"visitor-action",onClick:H,children:"Tell me more about yourself"}),Object(j.jsx)("button",{id:"action-goTo-contact",className:"visitor-action",onClick:H,children:"How can I contact you?"})]}):"say-meow"===s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{id:"action-goTo-work",className:"visitor-action",onClick:H,children:"Let's talk about work!"}),Object(j.jsx)("button",{id:"action-goTo-about",className:"visitor-action",onClick:H,children:"Tell me more about yourself"}),Object(j.jsx)("button",{id:"action-goTo-contact",className:"visitor-action",onClick:H,children:"How can I contact you?"})]}):"chatter"===s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{id:"action-goTo-joke",className:"visitor-action",onClick:H,children:"I wanna hear a joke!"}),Object(j.jsx)("button",{id:"action-goTo-fact",className:"visitor-action",onClick:H,children:"Gimme a random fact!"}),Object(j.jsx)("button",{id:"action-goTo-about",className:"visitor-action",onClick:H,children:"Tell me more about yourself"}),Object(j.jsx)("button",{id:"action-goTo-work",className:"visitor-action",onClick:H,children:"Let's talk about work!"})]}):"goTo-joke"===s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{id:"action-goTo-fact",className:"visitor-action",onClick:H,children:"Gimme a random fact!"}),Object(j.jsx)("button",{id:"action-goTo-about",className:"visitor-action",onClick:H,children:"Tell me more about yourself"}),Object(j.jsx)("button",{id:"action-goTo-work",className:"visitor-action",onClick:H,children:"Let's talk about work!"}),Object(j.jsx)("button",{id:"action-goTo-contact",className:"visitor-action",onClick:H,children:"How can I contact you?"})]}):"goTo-fact"===s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{id:"action-goTo-joke",className:"visitor-action",onClick:H,children:"I wanna hear a joke!"}),Object(j.jsx)("button",{id:"action-goTo-about",className:"visitor-action",onClick:H,children:"Tell me more about yourself"}),Object(j.jsx)("button",{id:"action-goTo-work",className:"visitor-action",onClick:H,children:"Let's talk about work!"}),Object(j.jsx)("button",{id:"action-goTo-contact",className:"visitor-action",onClick:H,children:"How can I contact you?"})]}):"goTo-work"===s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{id:"action-goTo-portfolio",className:"visitor-action",onClick:H,children:"Can I see your portfolio?"}),Object(j.jsx)("button",{id:"action-goTo-about",className:"visitor-action",onClick:H,children:"Tell me more about yourself"}),Object(j.jsx)("button",{id:"action-goTo-contact",className:"visitor-action",onClick:H,children:"How can I contact you?"}),Object(j.jsx)("button",{id:"action-goTo-fact",className:"visitor-action",onClick:H,children:"Tell me something interesting!"})]}):"goTo-about"===s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{id:"action-goTo-work",className:"visitor-action",onClick:H,children:"Let's talk about work!"}),Object(j.jsx)("button",{id:"action-goTo-contact",className:"visitor-action",onClick:H,children:"How can I contact you?"}),Object(j.jsx)("button",{id:"action-goTo-fact",className:"visitor-action",onClick:H,children:"Tell me something interesting!"}),Object(j.jsx)("button",{id:"action-goTo-joke",className:"visitor-action",onClick:H,children:"I wanna hear a joke!"})]}):"goTo-contact"===s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{id:"action-goTo-about",className:"visitor-action",onClick:H,children:"Tell me more about yourself"}),Object(j.jsx)("button",{id:"action-goTo-work",className:"visitor-action",onClick:H,children:"Let's talk about work!"}),Object(j.jsx)("button",{id:"action-goTo-joke",className:"visitor-action",onClick:H,children:"I wanna hear a joke!"}),Object(j.jsx)("button",{id:"action-goTo-fact",className:"visitor-action",onClick:H,children:"Tell me something interesting!"})]}):"goTo-portfolio"===s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{id:"action-goTo-work",className:"visitor-action",onClick:H,children:"Let's talk about work!"}),Object(j.jsx)("button",{id:"action-goTo-about",className:"visitor-action",onClick:H,children:"Tell me more about yourself"}),Object(j.jsx)("button",{id:"action-goTo-contact",className:"visitor-action",onClick:H,children:"How can I contact you?"}),Object(j.jsx)("button",{id:"action-goTo-fact",className:"visitor-action",onClick:H,children:"Tell me something interesting!"})]}):void 0:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{id:"action-say-hi",className:"visitor-action",onClick:H,children:"Say Hi"}),Object(j.jsx)("button",{id:"action-say-meow",className:"visitor-action",onClick:H,children:"Meow!"}),Object(j.jsx)("button",{id:"action-say-bye",className:"visitor-action",onClick:H,children:"Leave"})]})})]})]})}}}]);
//# sourceMappingURL=6.04a65964.chunk.js.map