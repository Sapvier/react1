(this.webpackJsonpreact1=this.webpackJsonpreact1||[]).push([[0],{47:function(n,e,t){"use strict";t.r(e);var r,i,o,c,a,l,d,s=t(0),u=t.n(s),b=t(26),p=t.n(b),j=t(12),x=t(2),h=t(10),m=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];localStorage.setItem("isAuth",""+n)},g=function(){return localStorage.getItem("isAuth")},f=t(5),O=t(6),y=O.b.div(r||(r=Object(f.a)(["\n  min-height: 200px;\n  min-width: 350px;\n\n  background-color: ",";\n  opacity: 80%;\n  border-radius: 5px;\n  padding: 20px;\n  border: ",";\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  & form {\n    width: 100%;\n    padding: 20px 20px 10px 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  & input {\n    width: 100%;\n    height: 30px;\n    border: none;\n    border-radius: 5px;\n    margin-bottom: 20px;\n    outline: none;\n    padding: 8px;\n    background-color: ",";\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n  }\n\n  & label {\n    align-self: flex-start;\n    font-size: 12px;\n    color: black;\n    margin-bottom: 3px;\n    margin-top: -10px;\n  }\n  \n  & span {\n    height: 13px;\n    font-size: 11px;\n    color: crimson;\n    margin-top: -15px;\n    align-self: flex-start;\n    margin-bottom: 5px;\n  }\n  \n  & a {\n    color: #7c1ddc;\n    font-size: 12px;\n    text-decoration: none;\n  }\n  \n  & h1 {\n    margin: 0;\n  }\n  \n  & div {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n"])),"rgba(255, 255, 255, 0.15)","1px solid rgba(255, 255, 255, 0.2)","rgba(255, 255, 255, 0.3)"),v="#7c1ddc",w=O.b.button(i||(i=Object(f.a)(["\n  min-width: 120px;\n  height: 30px;\n  cursor: pointer;\n  background-color: ",";\n  box-shadow: 0 5px 10px 5px rgba(124,29,220, 0.15);\n  border: none;\n  border-radius: 5px;\n  color: white;\n  align-self: ",";\n\n  @media (max-width: 800px) {\n    & {\n      min-width: 90px;\n    }\n  }\n  \n  &:hover {\n    background-color: rgba(255,255,255, 0.3);\n    border: 1px #7c1ddc solid;\n    color: ",";\n    transition: all .5s ease;\n  }\n  &:disabled {\n    box-shadow: 0 5px 10px rgba(0,0,0, 0.15);\n    background-color: #888888;\n    border: none;\n    cursor: not-allowed;\n  }\n  &:disabled:hover {\n    color: white\n  }\n  "])),v,(function(n){return n.align}),v),k=t(1),S=function(){var n=Object(s.useState)(""),e=Object(h.a)(n,2),t=e[0],r=e[1],i=Object(s.useState)(""),o=Object(h.a)(i,2),c=o[0],a=o[1],l=Object(x.g)();Object(s.useEffect)((function(){m()}),[]);return Object(k.jsxs)(y,{children:[Object(k.jsx)("h1",{children:"Hello there"}),Object(k.jsxs)("form",{children:[Object(k.jsx)("label",{htmlFor:"username",children:"Username"}),Object(k.jsx)("input",{type:"text",id:"username",onChange:function(n){return a(function(n){return n.target.parentElement.lastElementChild.previousElementSibling.innerHTML="",n.target.value}(n))}}),Object(k.jsx)("label",{htmlFor:"password",children:"Password"}),Object(k.jsx)("input",{type:"password",id:"password",onChange:function(n){return r(function(n){return n.target.parentElement.lastElementChild.previousElementSibling.innerHTML="",n.target.value}(n))}}),Object(k.jsx)("span",{}),Object(k.jsxs)("div",{children:[Object(k.jsx)(w,{onClick:function(n){n.preventDefault(),"user"===c.toString()&&"1234"===t.toString()?(m(!0),l.push("/react1/home")):n.target.parentElement.previousElementSibling.innerHTML="Wrong credentials"},align:"flex-start",children:"Sign in"}),Object(k.jsx)("a",{href:"https://google.com/",target:"_blank",rel:"noreferrer",children:"Need help?"})]})]})]})},C=t(3),E=O.b.nav(o||(o=Object(f.a)(["\n  position: absolute;\n  width: 100%;\n  height: 90px;\n  top: 0;\n  background-color: rgba(255,255,255, 0.1);\n  border: 1px solid rgba( 255, 255, 255, 0.2 );\n  z-index: 100;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 30px;\n"]))),z=function(){var n=Object(x.g)(),e=function(){g()?(m(!1),n.push("/react1")):n.push("/react1")};return Object(k.jsx)(E,{children:"true"===g()?Object(k.jsx)(w,{onClick:e,children:"Sign out"}):Object(k.jsx)(w,{onClick:e,children:"Sign in"})})},F=function(n){return function(e){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(z,{}),Object(k.jsx)(n,Object(C.a)({},e))]})}},T=O.b.div(c||(c=Object(f.a)(["\n  max-width: 100%;\n  min-height: 100vh;\n  margin: 0 auto;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(45deg, #e66465, #9198e5);  \n  "]))),N=F((function(){return Object(k.jsx)(T,{children:Object(k.jsx)(S,{})})})),L=t(18),A=t(24),H=t.n(A),M=t(30),U=function(){var n=Object(M.a)(H.a.mark((function n(e){return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://jsonplaceholder.typicode.com"+e.url,{method:e.method,body:e.body,headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),V=t(31),B=function(n){0===n.target.value.trim().length?(n.target.previousElementSibling.innerText="Field is empty",n.target.previousElementSibling.style.color="#B22222",n.target.style.border="1px solid #B22222"):(n.target.previousElementSibling.removeAttribute("style"),n.target.previousElementSibling.innerText="".concat(n.target.placeholder),n.target.removeAttribute("style"))},I=O.b.div(a||(a=Object(f.a)(["\n  width: 90%;  \n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: rgba(255,255,255, 0.15);\n  border: 1px solid rgba(255,255,255, 0.2);\n  border-radius: 5px;\n\n  @media (max-width: 800px) {\n    & {\n      padding: 10px;\n      width: 95%;\n    }\n  }\n  \n  & div:first-child {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px grey solid;\n    color: rgba(0,0,0, 0.65);\n  }\n   \n  & p:hover {\n    cursor: pointer;\n    color: black;\n  }\n  \n  & p:not(:first-child) {\n    width: 30%;\n  }\n  \n  & p:first-child {\n    text-align: center;\n    width: 10%;\n  }\n  "]))),J=O.b.div(l||(l=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: rgba(0,0,0, 0.65);\n  \n  &:hover {\n    background-color: rgba(255,255,255, 0.1);\n    color: black\n  }\n"]))),D=O.b.div(d||(d=Object(f.a)(["\n  padding: 20px;\n  opacity: 80%;\n  border-radius: 5px;\n  min-width: 320px;\n  width: 30%;\n  background-color: rgba(255,255,255, 0.15);\n  border: 1px solid rgba( 255, 255, 255, 0.2 );\n  \n  & h1 {\n    text-align: center;\n    margin: 0;\n    color: rgba(0,0,0, 0.8)\n  }\n  \n  & form {\n    padding: 20px 20px 5px 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  & input {\n    width: 100%;\n    height: 30px;\n    border: none;\n    border-radius: 5px;\n    margin-bottom: 20px;\n    outline: none;\n    padding: 8px;\n    background-color: rgba(255,255,255, 0.3);\n    box-shadow: 0 5px 10px rgba(0,0,0, 0.15);\n  }\n\n  & input:disabled {\n    cursor: not-allowed;\n  }\n\n  & label {\n    align-self: flex-start;\n    font-size: 12px;\n    color: rgba(0,0,0, 0.8);\n    margin-bottom: 3px;\n    margin-top: -10px;\n  }\n  "]))),G=function(n){var e=n.user,t=Object(x.g)();return Object(k.jsxs)(J,{onClick:function(){t.push("/react1/users/".concat(e.id))},children:[Object(k.jsx)("p",{children:e.id}),Object(k.jsx)("p",{children:e.name}),Object(k.jsx)("p",{children:e.address.city}),Object(k.jsx)("p",{children:e.company.name})]})},P=function(){var n=Object(s.useState)([]),e=Object(h.a)(n,2),t=e[0],r=e[1],i=Object(s.useState)({id:!0,name:!1,city:!1,company:!1}),o=Object(h.a)(i,2),c=o[0],a=o[1];Object(s.useEffect)((function(){U({url:"/users",method:"GET",body:null}).then((function(n){return n.json()})).then((function(n){return r(n)}))}),[]);var l=function(n){c[n]?r(t.reverse()):r(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id",e=arguments.length>1?arguments[1]:void 0;return Object(V.a)(e).sort((function(e,t){return"id"===n?e[n]-t[n]:"name"===n?e[n]>t[n]?1:t[n]>e[n]?-1:0:"city"===n?e.address[n]>t.address[n]?1:t.address[n]>e.address[n]?-1:0:e[n].name>t[n].name?1:t[n].name>e[n].name?-1:0}))}(n,t)),a(Object(C.a)(Object(C.a)({},c),{},Object(L.a)({},n,!c[n])))};return t.length>0?Object(k.jsxs)(I,{children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{onClick:function(){return l("id")},children:"#"}),Object(k.jsx)("p",{onClick:function(){return l("name")},children:"Name"}),Object(k.jsx)("p",{onClick:function(){return l("city")},children:"City"}),Object(k.jsx)("p",{onClick:function(){return l("company")},children:"Company"})]}),t.map((function(n){return Object(k.jsx)(G,{user:n},n.id)}))]}):Object(k.jsx)("h2",{children:"Loading ..."})},R=F((function(){return Object(k.jsx)(T,{children:Object(k.jsx)(P,{})})})),W=function(){var n,e,t=Object(s.useState)({}),r=Object(h.a)(t,2),i=r[0],o=r[1],c="true"==g(),a=window.location.pathname.slice(7);Object(s.useEffect)((function(){U({url:a,method:"GET",body:null}).then((function(n){return n.json()})).then((function(n){return o(n)}))}),[]);return 0!==Object.keys(i).length?Object(k.jsxs)(D,{children:[g()?Object(k.jsxs)("h1",{children:["User #",null===i||void 0===i?void 0:i.id]}):Object(k.jsxs)("h1",{className:"disabled",children:["User #",null===i||void 0===i?void 0:i.id]}),Object(k.jsxs)("form",{action:"",onSubmit:function(n){n.preventDefault(),U({url:"/users",method:"POST",body:JSON.stringify(i)}).then((function(n){return null}))},children:[Object(k.jsx)("label",{htmlFor:"user-name",children:"Name"}),Object(k.jsx)("input",{type:"text",id:"user-name",defaultValue:null===i||void 0===i?void 0:i.name,onChange:function(n){return o(function(n,e){return B(n),Object(C.a)(Object(C.a)({},e),{},{name:n.target.value})}(n,i))},disabled:!c,placeholder:"Name"}),Object(k.jsx)("label",{htmlFor:"user-email",children:"Email"}),Object(k.jsx)("input",{type:"email",id:"user-email",defaultValue:null===i||void 0===i?void 0:i.email,onChange:function(n){return o(function(n,e){return B(n),Object(C.a)(Object(C.a)({},e),{},{email:n.target.value})}(n,i))},disabled:!c,placeholder:"Email"}),Object(k.jsx)("label",{htmlFor:"user-city",children:"City"}),Object(k.jsx)("input",{type:"text",id:"user-city",defaultValue:null===i||void 0===i||null===(n=i.address)||void 0===n?void 0:n.city,onChange:function(n){return o(function(n,e){return B(n),Object(C.a)(Object(C.a)({},e),{},{address:Object(C.a)(Object(C.a)({},e.address),{},{city:n.target.value})})}(n,i))},disabled:!c,placeholder:"City"}),Object(k.jsx)("label",{htmlFor:"user-company",children:"Company"}),Object(k.jsx)("input",{type:"text",id:"user-company",defaultValue:null===i||void 0===i||null===(e=i.company)||void 0===e?void 0:e.name,onChange:function(n){return o(function(n,e){return B(n),Object(C.a)(Object(C.a)({},e),{},{company:Object(C.a)(Object(C.a)({},e.company),{},{name:n.target.value})})}(n,i))},disabled:!c,placeholder:"Company"}),Object(k.jsx)(w,{type:"submit",disabled:!c||(0===i.name.length||(0===i.email.length||(0===i.address.city.length||0===i.company.name.length))),children:"Save"})]})]}):Object(k.jsx)("h2",{children:"Loading..."})},_=F((function(){return Object(k.jsx)(T,{children:Object(k.jsx)(W,{})})})),q=t(32);var K,Q=function(n){var e=n.children,t=Object(q.a)(n,["children"]);return Object(k.jsx)(x.b,Object(C.a)(Object(C.a)({},t),{},{render:function(n){var t=n.location;return g()?e:Object(k.jsx)(x.a,{to:{pathname:"/",state:{from:t}}})}}))},X=Object(O.a)(K||(K=Object(f.a)(["\n  * {\n    box-sizing: border-box;\n    font-family: 'Rubik', sans-serif;\n  }\n  html {\n    font-size: 62.5%;\n  }\n  body {\n    margin: 0;\n  }\n  p {\n    font-size: 1.6rem;\n  }\n  h2 {\n    font-size: 2.2rem;\n  }\n  h1 {\n    font-size: 2.5rem;\n  }\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus,\n  textarea:-webkit-autofill,\n  textarea:-webkit-autofill:hover,\n  textarea:-webkit-autofill:focus {    \n    -webkit-text-fill-color: black;\n    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15), \n                        0 0 0 1000px rgba(255,255,255,0.01) inset;    \n    transition: background-color 5000s ease-in-out 0s;\n  }\n  @media (max-width: 800px) {\n    html {\n      font-size: 40%;\n    }\n  }\n"]))),Y=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(X,{}),Object(k.jsx)(j.a,{children:Object(k.jsxs)(x.d,{children:[Object(k.jsx)(x.b,{path:"/react1",component:N,exact:!0}),Object(k.jsx)(Q,{path:"/react1/home",children:Object(k.jsx)(R,{})}),Object(k.jsx)(x.b,{path:"/react1/:id",component:_})]})})]})};t(44).config(),p.a.render(Object(k.jsx)(u.a.StrictMode,{children:Object(k.jsx)(Y,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.83ca0377.chunk.js.map