(this["webpackJsonprandom-quotes"]=this["webpackJsonprandom-quotes"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),u=n(5),s=n.n(u),r=(n(10),n(4)),a=n(2),i=(n(11),n(0));var b=function(){var t=Object(a.useState)(),e=Object(r.a)(t,2),n=e[0],o=e[1],u=Object(a.useState)({quote:"",author:""}),s=Object(r.a)(u,2),b=s[0],f=s[1],h=function(){return Math.floor(Math.random()*n.length)},j=Object(c.useRef)(),l=j.current;Object(a.useEffect)((function(){j.current=b})),Object(a.useEffect)((function(){!function(){if(n){var t=n[h()];f(t)}}()}),[n]);var d="https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";return Object(a.useEffect)((function(){fetch(d).then((function(t){return t.json()})).then((function(t){return o(t)})).catch((function(t){t&&alert(t)}))}),[d]),Object(i.jsxs)("main",{className:"App",children:[Object(i.jsx)("h1",{children:"quotations"}),Object(i.jsxs)("section",{children:[Object(i.jsxs)("h2",{className:"quote",children:['Quote: "',b.quote,'"']}),Object(i.jsxs)("h3",{className:"author",children:["Author: ",b.author]}),l&&""!==l.author&&Object(i.jsx)("button",{className:"button",onClick:function(){return f(l)},children:"Previous"}),Object(i.jsx)("button",{className:"button",onClick:function(){var t=n[h()];f(t)},children:"Next"})]})]})};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a043b1bb.chunk.js.map