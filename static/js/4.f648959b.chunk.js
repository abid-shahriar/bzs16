(this.webpackJsonpbzs16=this.webpackJsonpbzs16||[]).push([[4],{30:function(e,t,a){e.exports=a.p+"static/media/bzs-logo.531f8cc7.png"},32:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(0),l=a.n(n),c=a(30),o=a.n(c),r=a(13);var s=function(){var e=Object(n.useContext)(r.a),t=e.SingleStudentInfo,a=e.ModalState,c=e.setModalState;return l.a.createElement("div",{className:a?"detailed-info show-hide":"detailed-info"},t&&l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"inner-container"},l.a.createElement("div",{className:a?"single-img img-loading":"single-img"},l.a.createElement("img",{src:a?"".concat(t.photo):"",alt:"bzs 16",onLoad:function(e){var t=e.target.parentElement;t.classList.contains("img-loading")&&t.classList.remove("img-loading")}})),l.a.createElement("h1",null,t.Name),l.a.createElement("div",{className:"details"},l.a.createElement("p",null,"Section:",l.a.createElement("span",null,t.section)),l.a.createElement("p",null,"Class-10-Roll:",l.a.createElement("span",null,t.class10Roll)),l.a.createElement("p",null,"Phone:",l.a.createElement("span",null,t.phone)),l.a.createElement("p",null,"Email:",l.a.createElement("span",null,t.email)),l.a.createElement("p",null,"University:",l.a.createElement("span",null,t.university)),l.a.createElement("p",null,"Subject:",l.a.createElement("span",null,t.subject)),l.a.createElement("p",null,"Blood Group:",l.a.createElement("span",null,t.bloodGroup)),l.a.createElement("p",null,"Passion:",l.a.createElement("span",null,t.passion))),l.a.createElement("div",{className:"close-modal-btn",onClick:function(){return c(!1)}},"Back \u2192"))))},i=function(){var e=Object(n.useContext)(r.a),t=e.fetchedData,a=e.setFetchedData,c=e.reset,i=e.setSearchInput,m=e.SearchInput,u=e.setSingleStudentInfo,E=e.setModalState,d=e.SelectedSection,p=e.setSelectedSection,v=function(e){var t=c.filter((function(t){return t.section===e}));a(t),i("")};return l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:o.a,alt:"bzs logo"})),l.a.createElement("div",{className:"buttons"},l.a.createElement("h5",null,"Sections:"),l.a.createElement("button",{className:"all"===d?"button-bg":"",onClick:function(){a(c),i(""),p("all")}},"All"),l.a.createElement("button",{className:"a"===d?"button-bg":"",onClick:function(){v("A"),p("a")}},"A"),l.a.createElement("button",{className:"b"===d?"button-bg":"",onClick:function(){v("B"),p("b")}},"B"),l.a.createElement("button",{className:"c"===d?"button-bg":"",onClick:function(){v("C"),p("c")}},"C"),l.a.createElement("button",{className:"d"===d?"button-bg":"",onClick:function(){v("D"),p("d")}},"D")),l.a.createElement("div",{className:"search"},l.a.createElement("label",{htmlFor:"search"},"Search"),l.a.createElement("input",{name:"search",type:"text",placeholder:"search by name",onChange:function(e){var t=e.target.value;i(t);var n=c.filter((function(e){return e.Name.toLowerCase().includes(m.toLowerCase())}));a(n),p("all")},value:m})),l.a.createElement("div",{className:"search-by-blood"},l.a.createElement("select",{defaultValue:"all",onChange:function(e){if("all"===e.target.value)a(c);else{var t=c.filter((function(t){return t.bloodGroup.toUpperCase()===e.target.value}));a(t)}}},l.a.createElement("option",{value:"all"},"All"),l.a.createElement("option",{value:"A+"},"A+"),l.a.createElement("option",{value:"A-"},"A-"),l.a.createElement("option",{value:"B+"},"B+"),l.a.createElement("option",{value:"B-"},"B-"),l.a.createElement("option",{value:"O+"},"O+"),l.a.createElement("option",{value:"O-"},"O-"),l.a.createElement("option",{value:"AB+"},"AB+"),l.a.createElement("option",{value:"AB-"},"AB-"))),l.a.createElement("div",{className:"student-card-container"},t&&t.map((function(e){return l.a.createElement("div",{className:"student-card",key:e.Name},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:o.a,loading:"lazy",alt:"student bzs",height:"100px",width:"100px"})),l.a.createElement("div",{className:"short-info"},l.a.createElement("h1",null,e.Name.toLowerCase()),l.a.createElement("h2",null,"Section: ",e.section),l.a.createElement("h2",null,"Class-10-Roll: ",e.class10Roll),l.a.createElement("h2",null,"Blood-Group: ",e.bloodGroup)),l.a.createElement("div",{className:"more-info-btn"},l.a.createElement("button",{onClick:function(){u(e),E(!0)}},"Detailed Info \u2192")))}))),l.a.createElement(s,null))};function m(){return l.a.createElement("div",{className:"student-info-container"},l.a.createElement(i,null))}}}]);
//# sourceMappingURL=4.f648959b.chunk.js.map