(this.webpackJsonpbzs16=this.webpackJsonpbzs16||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),l=n.n(r),o=(n(22),n(1)),s=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home"},c.a.createElement("h3",null,"Hellu there, Welcome to the not so official website of Bogura Zilla School Batch 2016, also known as Fermion\u201916."),c.a.createElement("h4",null,"It is just a regular website where you can find almost everyone\u2019s info of our batch. Well, I said almost because as we all know that bzs has every kind of students including ghosts... As a result we do not know their info.")))},u=n(9),i=Object(a.createContext)(),m=function(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),r=n[0],l=n[1],o=Object(a.useState)(),s=Object(u.a)(o,2),m=s[0],f=s[1],h=Object(a.useState)(""),d=Object(u.a)(h,2),E=d[0],b=d[1];return Object(a.useEffect)((function(){fetch("https://abid-shahriar.github.io/JSON-files/data/bzs-16-student-info.json").then((function(e){return e.json()})).then((function(e){l(e),f(e)}))}),[]),c.a.createElement(i.Provider,{value:{fetchedData:r,setFetchedData:l,reset:m,SearchInput:E,setSearchInput:b}},e.children)},f=function(){var e=Object(a.useContext)(i),t=e.fetchedData,n=e.setFetchedData,r=e.reset,l=e.setSearchInput,o=e.SearchInput,s=function(e){var t=r.filter((function(t){return t.section===e}));n(t),l("")};return c.a.createElement("div",{className:"main-container"},c.a.createElement("div",{className:"buttons"},c.a.createElement("h5",null,"Sections:"),c.a.createElement("button",{onClick:function(){return n(r),void l("")}},"All"),c.a.createElement("button",{onClick:function(){return s("A")}},"A"),c.a.createElement("button",{onClick:function(){return s("B")}},"B"),c.a.createElement("button",{onClick:function(){return s("C")}},"C"),c.a.createElement("button",{onClick:function(){return s("D")}},"D")),c.a.createElement("div",{className:"search"},c.a.createElement("input",{type:"text",placeholder:"search by name",onChange:function(e){var t=e.target.value;l(t);var a=r.filter((function(e){return console.log(t),e.Name.toLowerCase().includes(o.toLowerCase())}));n(a)},value:o})),c.a.createElement("div",{className:"student-card-container"},t&&t.sort((function(e,t){return e.section>t.section})).map((function(e){return c.a.createElement("div",{className:"student-card",key:e.Timestamp},c.a.createElement("div",{className:"image"}),c.a.createElement("div",{className:"short-info"},c.a.createElement("h1",null,e.Name.toLowerCase()),c.a.createElement("h2",null,"Section: ",e.section),c.a.createElement("h2",null,"Class-10-Roll: ",e.class10Roll)))}))))};function h(){return c.a.createElement("div",{className:"student-info-container"},c.a.createElement(f,null))}var d=n(7),E=[{name:"home",to:"/"},{name:"student-info",to:"/student-info"}],b=function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",{className:"navbar__lists"},E.map((function(e){return c.a.createElement("li",{key:e.name},c.a.createElement(d.b,{to:e.to},e.name))}))))},v=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement(b,null)))};var p=function(){return c.a.createElement(m,null,c.a.createElement(v,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:s}),c.a.createElement(o.a,{path:"/student-info",component:h})))};l.a.render(c.a.createElement(d.a,null,c.a.createElement(p,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.63a2741e.chunk.js.map