(this.webpackJsonpmawmawmaw=this.webpackJsonpmawmawmaw||[]).push([[6],{22:function(e,t,a){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return s}))},43:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a(1),i={_origin:"https://api.emailjs.com"},c=function(e,t,a){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},r=a(22),o=function e(t){Object(r.a)(this,e),this.status=t.status,this.text=t.responseText},u=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(s,n){var c=new XMLHttpRequest;c.addEventListener("load",(function(e){var t=e.target,a=new o(t);200===a.status||"OK"===a.text?s(a):n(a)})),c.addEventListener("error",(function(e){var t=e.target;n(new o(t))})),c.open("POST",i._origin+e,!0),Object.keys(a).forEach((function(e){c.setRequestHeader(e,a[e])})),c.send(t)}))},l=function(e,t,a,s){var n=s||i._userID,r=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(a);c(n,e,t);var o=new FormData(r);return o.append("lib_version","3.6.2"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",n),u("/api/v1.0/email/send-form",o)},d=a(8),m=a(5),j=(a(43),a(0));t.default=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(""),r=Object(s.a)(c,2),o=r[0],u=r[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),f=h[0],p=h[1],O=Object(n.useState)(!1),v=Object(s.a)(O,2),g=v[0],x=v[1],w=Object(n.useState)(!1),y=Object(s.a)(w,2),S=y[0],N=y[1],_=Object(n.useState)(!1),T=Object(s.a)(_,2),q=T[0],I=T[1],C=Object(n.useState)(""),D=Object(s.a)(C,2),k=D[0],E=D[1],F=Object(n.useRef)(),L=function(e){e.preventDefault(),x(!0),l("service_q3stgbj","template_hb21y1x",F.current,"ez1gnij5WiOdzyc5t").then((function(e){console.log(e.text),x(!1),N(!0)}),(function(e){console.log(e.text),I(!0),E(e.text)}))};return Object(j.jsxs)("div",{id:"contact",children:[Object(j.jsx)("h1",{children:"Contact"}),g?Object(j.jsx)("div",{id:"sending-mail",children:Object(j.jsx)("i",{className:"spinner icon"})}):!S||q||g?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"Feel free to leave a message."}),!q||Object(j.jsx)("div",{className:"ui negative message",children:Object(j.jsx)("div",{className:"header",children:k})}),Object(j.jsxs)("form",{className:"ui form",id:"contact-form",ref:F,onSubmit:L,children:[Object(j.jsx)("div",{className:"field",children:Object(j.jsx)("input",{id:"name",name:"name",type:"text",placeholder:"Your name goes here",value:a,onChange:function(e){i(e.target.value)},style:{borderImageSource:"url(".concat(d.a,")")}})}),Object(j.jsx)("div",{className:"field",children:Object(j.jsx)("input",{id:"email",name:"email",type:"email",placeholder:"Your email goes here",value:o,onChange:function(e){u(e.target.value)},style:{borderImageSource:"url(".concat(d.a,")")}})}),Object(j.jsx)("div",{className:"field",children:Object(j.jsx)("textarea",{id:"message",name:"message",placeholder:"And your message here",value:f,onChange:function(e){p(e.target.value)},style:{borderImageSource:"url(".concat(d.a,")")}})}),Object(j.jsx)("button",{className:"ui blue button",type:"submit",style:{borderImageSource:"url(".concat(m.a,")")},children:"Submit"})]})]}):Object(j.jsx)("div",{className:"ui positive message",children:Object(j.jsx)("div",{className:"header",children:"Message sent succesfully."})})]})}}}]);
//# sourceMappingURL=6.c9bc0554.chunk.js.map