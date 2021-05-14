(this.webpackJsonpreact1=this.webpackJsonpreact1||[]).push([[0],{47:function(n,e,t){"use strict";t.r(e);var r,i,o,a,c,s,l,d=t(0),b=t.n(d),u=t(26),p=t.n(u),j=t(11),x=t(3),h=t(13),m=t(2),f=t(10),g=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];localStorage.setItem("isAuth",""+n)},O=function(){return localStorage.getItem("isAuth")},y=t(5),w=t(6),v=w.b.div(r||(r=Object(y.a)(["\n  min-height: 200px;\n  min-width: 350px;\n\n  background-color: ",";\n  opacity: 80%;\n  border-radius: 5px;\n  padding: 20px;\n  border: ",";\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  & form {\n    width: 100%;\n    padding: 20px 20px 10px 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  & input {\n    width: 100%;\n    height: 30px;\n    border: none;\n    border-radius: 5px;\n    margin-bottom: 20px;\n    outline: none;\n    padding: 8px;\n    background-color: ",";\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n  }\n\n  & label {\n    align-self: flex-start;\n    font-size: 12px;\n    color: black;\n    margin-bottom: 3px;\n    margin-top: -10px;\n  }\n  \n  & span {\n    height: 13px;\n    font-size: 11px;\n    color: crimson;\n    margin-top: -15px;\n    align-self: flex-start;\n    margin-bottom: 5px;\n  }\n  \n  & a {\n    color: #7c1ddc;\n    font-size: 12px;\n    text-decoration: none;\n  }\n  \n  & h1 {\n    margin: 0;\n  }\n  \n  & div {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n"])),"rgba(255, 255, 255, 0.15)","1px solid rgba(255, 255, 255, 0.2)","rgba(255, 255, 255, 0.3)"),k="#7c1ddc",C=w.b.button(i||(i=Object(y.a)(["\n  min-width: 120px;\n  height: 30px;\n  cursor: pointer;\n  background-color: ",";\n  box-shadow: 0 5px 10px 5px rgba(124,29,220, 0.15);\n  border: none;\n  border-radius: 5px;\n  color: white;\n  align-self: ",";\n\n  @media (max-width: 800px) {\n    & {\n      min-width: 90px;\n    }\n  }\n  \n  &:hover {\n    background-color: rgba(255,255,255, 0.3);\n    border: 1px #7c1ddc solid;\n    color: ",";\n    transition: all .5s ease;\n  }\n  &:disabled {\n    box-shadow: 0 5px 10px rgba(0,0,0, 0.15);\n    background-color: #888888;\n    border: none;\n    cursor: not-allowed;\n  }  \n  "])),k,(function(n){return n.align}),(function(n){return n.disabled?"white":k})),S=t(1),z=function(){var n=Object(d.useState)({username:"",password:""}),e=Object(f.a)(n,2),t=e[0],r=e[1],i=Object(d.useState)(!1),o=Object(f.a)(i,2),a=o[0],c=o[1],s=Object(x.g)();Object(d.useEffect)((function(){g()}),[]);var l=function(n){c(!1),r(Object(m.a)(Object(m.a)({},t),{},Object(h.a)({},n.target.id,n.target.value)))};return Object(S.jsxs)(v,{children:[Object(S.jsx)("h1",{children:"Hello there"}),Object(S.jsxs)("form",{children:[Object(S.jsx)("label",{htmlFor:"username",children:"Username"}),Object(S.jsx)("input",{type:"text",id:"username",onChange:function(n){return l(n)}}),Object(S.jsx)("label",{htmlFor:"password",children:"Password"}),Object(S.jsx)("input",{type:"password",id:"password",onChange:function(n){return l(n)}}),Object(S.jsx)("span",{children:a?"Wrong credentials":""}),Object(S.jsxs)("div",{children:[Object(S.jsx)(C,{onClick:function(n){n.preventDefault(),"user"===t.username.toString()&&"1234"===t.password.toString()?(g(!0),s.push("/home")):c(!0)},align:"flex-start",children:"Sign in"}),Object(S.jsx)("a",{href:"https://google.com/",target:"_blank",rel:"noreferrer",children:"Need help?"})]})]})]})},L=w.b.nav(o||(o=Object(y.a)(["\n  position: absolute;\n  width: 100%;\n  height: 98px;\n  top: 0;\n  background-color: rgba(255,255,255, 0.1);\n  border: 1px solid rgba( 255, 255, 255, 0.2 );\n  z-index: 100;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px;\n  \n  & span {\n    color: white;\n    align-self: flex-start;\n    font-size: 30px; \n    opacity: 0.3;  \n    cursor: pointer;\n  }\n  & span:hover {\n    opacity: 0.55;\n  }\n"]))),E=function(){var n=Object(x.g)(),e=function(){O()?(g(!1),n.push("/")):n.push("/")};return Object(S.jsxs)(L,{children:["/"===n.location.pathname?Object(S.jsx)("span",{children:" "}):Object(S.jsx)("span",{onClick:function(){n.goBack()},children:"\u2039"}),"true"===O()?Object(S.jsx)(C,{onClick:e,children:"Sign out"}):Object(S.jsx)(C,{onClick:e,children:"Sign in"})]})},F=function(n){return function(e){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(E,{}),Object(S.jsx)(n,Object(m.a)({},e))]})}},N=w.b.div(a||(a=Object(y.a)(["\n  max-width: 100%;\n  min-height: 100vh;\n  margin: 0 auto;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(45deg, #e66465, #9198e5);  \n  "]))),T=F((function(){return Object(S.jsx)(N,{children:Object(S.jsx)(z,{})})})),A=t(24),B=t.n(A),U=t(30),V=function(){var n=Object(U.a)(B.a.mark((function n(e){return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://jsonplaceholder.typicode.com"+e.url,{method:e.method,body:e.body,headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),I=t(31),J=function(n){0===n.target.value.trim().length?(n.target.previousElementSibling.innerText="Field is empty",n.target.previousElementSibling.style.color="#B22222",n.target.style.border="1px solid #B22222"):(n.target.previousElementSibling.removeAttribute("style"),n.target.previousElementSibling.innerText="".concat(n.target.placeholder),n.target.removeAttribute("style"))},D=w.b.div(c||(c=Object(y.a)(["\n  width: 90%;  \n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: rgba(255,255,255, 0.15);\n  border: 1px solid rgba(255,255,255, 0.2);\n  border-radius: 5px;\n\n  @media (max-width: 800px) {\n    & {\n      padding: 10px;\n      width: 95%;\n    }\n  }\n  \n  & div:first-child {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px grey solid;\n    color: rgba(0,0,0, 0.65);\n  }\n   \n  & p:hover {\n    cursor: pointer;\n    color: black;\n  }\n  \n  & p:not(:first-child) {\n    width: 30%;\n  }\n  \n  & p:first-child {\n    text-align: center;\n    width: 10%;\n  }\n  "]))),G=w.b.div(s||(s=Object(y.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: rgba(0,0,0, 0.65);\n  \n  &:hover {\n    background-color: rgba(255,255,255, 0.1);\n    color: black\n  }\n"]))),P=w.b.div(l||(l=Object(y.a)(["\n  padding: 20px;\n  opacity: 80%;\n  border-radius: 5px;\n  min-width: 320px;\n  width: 30%;\n  background-color: rgba(255,255,255, 0.15);\n  border: 1px solid rgba( 255, 255, 255, 0.2 );\n  \n  & h1 {\n    text-align: center;\n    margin: 0;\n    color: rgba(0,0,0, 0.8)\n  }\n  \n  & form {\n    padding: 20px 20px 5px 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  & input {\n    width: 100%;\n    height: 30px;\n    border: none;\n    border-radius: 5px;\n    margin-bottom: 20px;\n    outline: none;\n    padding: 8px;\n    background-color: rgba(255,255,255, 0.3);\n    box-shadow: 0 5px 10px rgba(0,0,0, 0.15);\n  }\n\n  & input:disabled {\n    cursor: not-allowed;\n  }\n\n  & label {\n    align-self: flex-start;\n    font-size: 12px;\n    color: rgba(0,0,0, 0.8);\n    margin-bottom: 3px;\n    margin-top: -10px;\n  }\n  "]))),H=function(n){var e=n.user,t=Object(x.g)();return Object(S.jsxs)(G,{onClick:function(){t.push("/users/".concat(e.id))},children:[Object(S.jsx)("p",{children:e.id}),Object(S.jsx)("p",{children:e.name}),Object(S.jsx)("p",{children:e.address.city}),Object(S.jsx)("p",{children:e.company.name})]})},M=function(){var n=Object(d.useState)([]),e=Object(f.a)(n,2),t=e[0],r=e[1],i=Object(d.useState)({id:!0,name:!1,city:!1,company:!1}),o=Object(f.a)(i,2),a=o[0],c=o[1],s={id:!1,name:!1,city:!1,company:!1};Object(d.useEffect)((function(){V({url:"/users",method:"GET",body:null}).then((function(n){return n.json()})).then((function(n){return r(n)}))}),[]);var l=function(n){a[n]?(r(t.reverse()),c(Object(m.a)({},s))):(r(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id",e=arguments.length>1?arguments[1]:void 0;return Object(I.a)(e).sort((function(e,t){return"id"===n?e[n]-t[n]:"name"===n?e[n].toLowerCase()>t[n].toLowerCase()?1:t[n].toLowerCase()>e[n].toLowerCase()?-1:0:"city"===n?e.address[n].toLowerCase()>t.address[n].toLowerCase()?1:t.address[n].toLowerCase()>e.address[n].toLowerCase()?-1:0:"company"===n?e[n].name.toLowerCase()>t[n].name.toLowerCase()?1:t[n].name.toLowerCase()>e[n].name.toLowerCase()?-1:0:void 0}))}(n,t)),c(Object(m.a)(Object(m.a)({},s),{},Object(h.a)({},n,!0))))};return t.length>0?Object(S.jsxs)(D,{children:[Object(S.jsxs)("div",{children:[Object(S.jsxs)("p",{onClick:function(){return l("id")},children:["# ",a.id?"\u21e7":"\u21e9"]}),Object(S.jsxs)("p",{onClick:function(){return l("name")},children:["Name ",a.name?"\u21e7":"\u21e9"]}),Object(S.jsxs)("p",{onClick:function(){return l("city")},children:["City ",a.city?"\u21e7":"\u21e9"]}),Object(S.jsxs)("p",{onClick:function(){return l("company")},children:["Company ",a.company?"\u21e7":"\u21e9"]})]}),t.map((function(n){return Object(S.jsx)(H,{user:n},n.id)}))]}):Object(S.jsx)("h2",{children:"Loading ..."})},R=F((function(){return Object(S.jsx)(N,{children:Object(S.jsx)(M,{})})})),W=function(){var n,e,t=Object(d.useState)({}),r=Object(f.a)(t,2),i=r[0],o=r[1],a="true"==O(),c=Object(x.g)();Object(d.useEffect)((function(){V({url:c.location.pathname,method:"GET",body:null}).then((function(n){return n.json()})).then((function(n){return o(n)}))}),[]);return 0!==Object.keys(i).length?Object(S.jsxs)(P,{children:[O()?Object(S.jsxs)("h1",{children:["User #",null===i||void 0===i?void 0:i.id]}):Object(S.jsxs)("h1",{className:"disabled",children:["User #",null===i||void 0===i?void 0:i.id]}),Object(S.jsxs)("form",{action:"",onSubmit:function(n){n.preventDefault(),V({url:"/users",method:"POST",body:JSON.stringify(i)}).then((function(n){return null}))},children:[Object(S.jsx)("label",{htmlFor:"user-name",children:"Name"}),Object(S.jsx)("input",{type:"text",id:"user-name",defaultValue:null===i||void 0===i?void 0:i.name,onChange:function(n){return o(function(n,e){return J(n),Object(m.a)(Object(m.a)({},e),{},{name:n.target.value})}(n,i))},disabled:!a,placeholder:"Name"}),Object(S.jsx)("label",{htmlFor:"user-email",children:"Email"}),Object(S.jsx)("input",{type:"email",id:"user-email",defaultValue:null===i||void 0===i?void 0:i.email,onChange:function(n){return o(function(n,e){return J(n),Object(m.a)(Object(m.a)({},e),{},{email:n.target.value})}(n,i))},disabled:!a,placeholder:"Email"}),Object(S.jsx)("label",{htmlFor:"user-city",children:"City"}),Object(S.jsx)("input",{type:"text",id:"user-city",defaultValue:null===i||void 0===i||null===(n=i.address)||void 0===n?void 0:n.city,onChange:function(n){return o(function(n,e){return J(n),Object(m.a)(Object(m.a)({},e),{},{address:Object(m.a)(Object(m.a)({},e.address),{},{city:n.target.value})})}(n,i))},disabled:!a,placeholder:"City"}),Object(S.jsx)("label",{htmlFor:"user-company",children:"Company"}),Object(S.jsx)("input",{type:"text",id:"user-company",defaultValue:null===i||void 0===i||null===(e=i.company)||void 0===e?void 0:e.name,onChange:function(n){return o(function(n,e){return J(n),Object(m.a)(Object(m.a)({},e),{},{company:Object(m.a)(Object(m.a)({},e.company),{},{name:n.target.value})})}(n,i))},disabled:!a,placeholder:"Company"}),Object(S.jsx)(C,{type:"submit",disabled:!a||(0===i.name.length||(0===i.email.length||(0===i.address.city.length||0===i.company.name.length))),children:"Save"})]})]}):Object(S.jsx)("h2",{children:"Loading..."})},_=F((function(){return Object(S.jsx)(N,{children:Object(S.jsx)(W,{})})})),q=t(32);var K,Q=function(n){var e=n.children,t=Object(q.a)(n,["children"]);return Object(S.jsx)(x.b,Object(m.a)(Object(m.a)({},t),{},{render:function(n){var t=n.location;return O()?e:Object(S.jsx)(x.a,{to:{pathname:"/",state:{from:t}}})}}))},X=Object(w.a)(K||(K=Object(y.a)(["\n  * {\n    box-sizing: border-box;\n    font-family: 'Rubik', sans-serif;\n  }\n  html {\n    font-size: 100%;\n  }\n  body {\n    margin: 0;\n  }\n  p {\n    font-size: 1rem;\n  }\n  input {\n    font-size: 1rem;\n  }\n  h2 {\n    font-size: 1.6rem;\n  }\n  h1 {\n    font-size: 2rem;\n  }\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus,\n  textarea:-webkit-autofill,\n  textarea:-webkit-autofill:hover,\n  textarea:-webkit-autofill:focus {    \n    -webkit-text-fill-color: black;\n    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15), \n                        0 0 0 1000px rgba(255,255,255,0.01) inset;    \n    transition: background-color 5000s ease-in-out 0s;\n  }\n  @media (max-width: 800px) {\n    html {\n      font-size: 60%;\n    }\n    input {\n      font-size: 1.7rem;\n    }\n  }\n"]))),Y=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(X,{}),Object(S.jsx)(j.a,{children:Object(S.jsxs)(x.d,{children:[Object(S.jsx)(x.b,{path:"/",component:T,exact:!0}),Object(S.jsx)(Q,{path:"/home",children:Object(S.jsx)(R,{})}),Object(S.jsx)(x.b,{path:"/:id",component:_})]})})]})};t(44).config(),p.a.render(Object(S.jsx)(b.a.StrictMode,{children:Object(S.jsx)(Y,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.81b27485.chunk.js.map