"use strict";(self.webpackChunkbzs16=self.webpackChunkbzs16||[]).push([[369],{369:function(e,n,s){s.r(n),s.d(n,{default:function(){return r}});var i=s(791),l=s(846),t=s(711),c=s(184);var a=function(){var e=(0,i.useContext)(t.u),n=e.SingleStudentInfo,s=e.ModalState,l=e.setModalState;return(0,c.jsx)("div",{className:s?"detailed-info show-hide":"detailed-info",children:n&&(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"inner-container",children:[(0,c.jsx)("div",{className:s?"single-img img-loading":"single-img",children:(0,c.jsx)("img",{src:s?"".concat(n.photo):"",alt:"bzs 16",onLoad:function(e){var n=e.target.parentElement;n.classList.contains("img-loading")&&n.classList.remove("img-loading")}})}),(0,c.jsx)("h1",{children:n.Name}),(0,c.jsxs)("div",{className:"details",children:[(0,c.jsxs)("p",{children:["Section:",(0,c.jsx)("span",{children:n.section})]}),(0,c.jsxs)("p",{children:["Class-10-Roll:",(0,c.jsx)("span",{children:n.class10Roll})]}),(0,c.jsxs)("p",{children:["Phone:",(0,c.jsx)("span",{children:n.phone})]}),(0,c.jsxs)("p",{children:["Email:",(0,c.jsx)("span",{children:n.email})]}),(0,c.jsxs)("p",{children:["University:",(0,c.jsx)("span",{children:n.university})]}),(0,c.jsxs)("p",{children:["Subject:",(0,c.jsx)("span",{children:n.subject})]}),(0,c.jsxs)("p",{children:["Blood Group:",(0,c.jsx)("span",{children:n.bloodGroup})]}),(0,c.jsxs)("p",{children:["Passion:",(0,c.jsx)("span",{children:n.passion})]})]}),(0,c.jsx)("div",{className:"close-modal-btn",onClick:function(){return l(!1)},children:"Back \u2192"})]})})})},o=function(){var e=(0,i.useContext)(t.u),n=e.fetchedData,s=e.setFetchedData,o=e.reset,r=e.setSearchInput,d=e.SearchInput,u=e.setSingleStudentInfo,h=e.setModalState,x=e.SelectedSection,j=e.setSelectedSection,p=e.setSelectedBloodGroup,m=e.SelectedBloodGroup,f=function(e){var n=o.filter((function(n){return n.section===e}));s(n),r(""),p("")};return(0,i.useEffect)((function(){!function(e){if(""===e)s(o);else{var n=o.filter((function(n){return n.bloodGroup.toUpperCase()===e}));s(n)}}(m),function(e){if(e){var n=o.filter((function(e){return e.Name.toLowerCase().includes(d.toLowerCase())}));s(n),j("all"),p("")}}(d)}),[m,d]),(0,c.jsxs)("div",{className:"main-container",children:[(0,c.jsx)("div",{className:"img",children:(0,c.jsx)("img",{src:l,alt:"bzs logo"})}),(0,c.jsxs)("div",{className:"buttons",children:[(0,c.jsx)("h5",{children:"Sections:"}),(0,c.jsx)("button",{className:"all"===x?"button-bg":"",onClick:function(){s(o),r(""),p(""),j("all")},children:"All"}),(0,c.jsx)("button",{className:"a"===x?"button-bg":"",onClick:function(){f("A"),j("a")},children:"A"}),(0,c.jsx)("button",{className:"b"===x?"button-bg":"",onClick:function(){f("B"),j("b")},children:"B"}),(0,c.jsx)("button",{className:"c"===x?"button-bg":"",onClick:function(){f("C"),j("c")},children:"C"}),(0,c.jsx)("button",{className:"d"===x?"button-bg":"",onClick:function(){f("D"),j("d")},children:"D"})]}),(0,c.jsxs)("div",{className:"search",children:[(0,c.jsx)("label",{htmlFor:"search",children:"Search"}),(0,c.jsx)("input",{name:"search",type:"text",placeholder:"search by name",onChange:function(e){return r(e.target.value)},value:d})]}),(0,c.jsx)("div",{className:"search-by-blood",children:(0,c.jsxs)("select",{value:m,onChange:function(e){return p(e.target.value)},children:[(0,c.jsx)("option",{value:"",disabled:!0,hidden:!0,children:"Search by Bloog-group"}),(0,c.jsx)("option",{value:"",children:"All"}),(0,c.jsx)("option",{value:"A+",children:"A+"}),(0,c.jsx)("option",{value:"A-",children:"A-"}),(0,c.jsx)("option",{value:"B+",children:"B+"}),(0,c.jsx)("option",{value:"B-",children:"B-"}),(0,c.jsx)("option",{value:"O+",children:"O+"}),(0,c.jsx)("option",{value:"O-",children:"O-"}),(0,c.jsx)("option",{value:"AB+",children:"AB+"}),(0,c.jsx)("option",{value:"AB-",children:"AB-"})]})}),(0,c.jsx)("div",{className:"student-card-container",children:n&&n.map((function(e){return(0,c.jsxs)("div",{className:"student-card",children:[(0,c.jsx)("div",{className:"image",children:(0,c.jsx)("img",{src:l,loading:"lazy",alt:"student bzs",height:"100px",width:"100px"})}),(0,c.jsxs)("div",{className:"short-info",children:[(0,c.jsx)("h1",{children:e.Name.toLowerCase()}),(0,c.jsxs)("h2",{children:["Section: ",e.section]}),(0,c.jsxs)("h2",{children:["Class-10-Roll: ",e.class10Roll]}),(0,c.jsxs)("h2",{children:["Blood-Group: ",e.bloodGroup]})]}),(0,c.jsx)("div",{className:"more-info-btn",children:(0,c.jsx)("button",{onClick:function(){u(e),h(!0)},children:"Detailed Info \u2192"})})]},e.Name)}))}),(0,c.jsx)(a,{})]})};function r(){return(0,c.jsx)("div",{className:"student-info-container",children:(0,c.jsx)(o,{})})}},846:function(e,n,s){e.exports=s.p+"static/media/bzs-logo.1702d18a52972853f77b.png"}}]);
//# sourceMappingURL=369.f3ddbbf3.chunk.js.map