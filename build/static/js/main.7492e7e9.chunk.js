(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{313:function(e,t,a){},314:function(e,t,a){},315:function(e,t,a){},316:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a(9),i=a.n(c),r=a(73),n=a.n(r),l=a(39),o=a.n(l),d=!0,j=750,m=!0,b="Gurvinder",h="Snow",u="I'm 26 years old and I'm from Birmingham I was working as a software tester, but now I'm a web developer and this is my website I hope you like it!",p=[{name:"HTML5",faClass:"fab fa-html5"},{name:"CSS3",faClass:"fab fa-css3"},{name:"Javascript",faClass:"fab fa-js"},{name:"Node",faClass:"fab fa-node"},{name:"NPM",faClass:"fab fa-npm"},{name:"Heroku",faClass:"fas fa-h-square"}],f=[{id:"project1",name:"Project 1 - Mouldy Potatoes",skills:["HTML, CSS, JS"],url:"https://mouldy-potatoes.herokuapp.com/"},{id:"project2",name:"Project 2 - Popcornpedia",skills:["HTML, CSS, JS"],url:"https://ben-pauley.github.io/Popcornpedia-Project/"},{id:"project3",name:"Project 3 - Team Profile Generator",skills:["HTML, CSS, JS"],url:"https://github.com/gurvinderdehl/TeamProfile-Generator"},{id:"project4",name:"Project 4 - Weather Dashboard",skills:["HTML, CSS, JS"],url:"https://gurvinderdehl.github.io/Homework-6-Weather-Dashboard-/"},{id:"project5",name:"Project 5 - Workday Scheduler",skills:["HTML, CSS, JS"],url:"https://gurvinderdehl.github.io/Homework-5-Workday-Scheduler/"},{id:"project6",name:"Project 6 - Budget Tracker",skills:["HTML, CSS, JS"],url:"https://floating-headland-48587.herokuapp.com/"},{id:"project7",name:"Project 7 - Google Books Search App",skills:["HTML, CSS, JS and React"],url:"https://pacific-gorge-50141.herokuapp.com/"}],x="If you have any queries, please contact me below!",O="",g="",v="https://github.com/gurvinderdehl",k="https://facebook.com",N="https://www.linkedin.com/in/gurvinder-dehl/",y="https://instagram.com",S=function(){return Object(s.jsxs)("div",{className:"particle",children:["Snow"===h&&Object(s.jsx)(o.a,{height:"100vh",width:"100%",params:{particles:{number:{value:75,density:{enable:!1}},color:{value:"#000000"},size:{value:10,random:!0},move:{direction:"bottom",out_mode:"out"},line_linked:{enable:!1}},interactivity:{events:{onclick:{enable:!0,mode:"remove"}},modes:{remove:{particles_nb:5}}}}}),"Particle"===h&&Object(s.jsx)(o.a,{height:"100vh",width:"100vw",params:{particles:{collisions:{enable:!0},number:{value:100,density:{enable:!1}},color:"#000",size:{value:5,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!0,color:"#000"},move:{random:!0,speed:1,direction:"bottom",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"push"}},modes:{bubble:{distance:250,duration:2,size:6,opacity:.4},push:{particles_nb:5}},retina_detect:!0}}})]})},w=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"mx-auto",children:Object(s.jsx)("a",{href:"#about",children:Object(s.jsxs)("button",{className:"see",children:["Checkout Portfolio",Object(s.jsx)("i",{className:"fas fa-eye"})]})})})})},C=function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"Header",children:[Object(s.jsx)("h1",{children:"Hi I'm ".concat(b)}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"line-1 anim-typewriter",children:"and this is my portfolio... "}),Object(s.jsxs)("label",{className:"switch",children:[Object(s.jsx)("input",{id:"mode-switch",onClick:function(){document.documentElement.classList.toggle("dark-mode"),document.getElementById("not-dark").classList.toggle("inverse-dark"),document.getElementById("not").classList.toggle("inverse-dark");for(var e=document.getElementsByClassName("img-pro"),t=0;t<e.length;t+=1)e.item(t).classList.toggle("inverse-dark");document.documentElement.classList.contains("dark-mode")?localStorage.setItem("mode","Dark"):localStorage.setItem("mode","Light")},type:"checkbox"}),Object(s.jsx)("span",{className:"slider round"})]}),Object(s.jsx)(w,{})]}),Object(s.jsx)("img",{id:"not-dark",onClick:function(){window.scrollTo({top:1e5,left:0,behavior:"smooth"})},alt:"Contact Me",title:"Contact Me",className:"gtp",src:"profile.png"})]})},P=function(e){var t=e.label,a=(e.per,e.faClass);return Object(s.jsxs)("div",{"data-aos":"fade-up",className:"skill__square col-3 col-sm-2 my-3 mx-auto",style:{display:"inline",textAlign:"center"},children:[Object(s.jsx)("i",{className:"".concat(a," mx-auto my-auto")}),Object(s.jsx)("h6",{className:"mt-2",children:t})]})},M=function(){return Object(s.jsxs)("div",{id:"about",className:"effect2",children:[Object(s.jsxs)("div",{"data-aos":"zoom-in-up","data-aos-once":"true",className:"row",children:[Object(s.jsx)("div",{className:"col-12 d-none d-md-block offset-md-1 col-md-4 Photo",id:"not"}),Object(s.jsxs)("div",{className:"col-12 offset-md-1 col-md-6 about",children:[Object(s.jsx)("div",{className:"About-title-box",children:Object(s.jsx)("h1",{id:"About",className:"red-line",children:"About Me"})}),Object(s.jsx)("p",{className:"lead about-text",children:u})]})]}),Object(s.jsx)("div",{id:"Skills",children:Object(s.jsx)("div",{className:"row d-flex justify-content-center skills",children:p.map((function(e){return Object(s.jsx)(P,{faClass:e.faClass,label:e.name})}))})})]})},L=function(e){var t=e.id,a=e.name,c=e.url,i=e.skills;return Object(s.jsxs)("div",{"data-aos":"fade-up",className:" col-12 col-lg-4 project-card",children:[Object(s.jsx)("div",{className:"image-project",children:Object(s.jsx)("div",{className:"img-pro ".concat(t)})}),Object(s.jsx)("a",{title:c,className:"project-name",rel:"noopener noreferrer",target:"_blank",href:c,children:Object(s.jsx)("h2",{children:a})}),i&&Object(s.jsx)("h3",{children:i.map((function(e){return e}))})]})},T=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{"data-aos":"zoom-in-up","data-aos-once":"true",className:"third",children:[Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"pp-head-line mx-auto text-center",children:Object(s.jsx)("h1",{id:"Projects",className:"red-line pp-head",children:"Past Projects"})})}),Object(s.jsx)("div",{className:"row",children:f&&f.map((function(e){return Object(s.jsx)(L,{id:e.id,url:e.url,name:e.name,skills:e.skills})}))})]})})},_=function(){return Object(s.jsxs)("div",{className:"parallax",children:[Object(s.jsxs)("div",{"data-aos":"zoom-in-up","data-aos-once":"true",className:"git-form",children:[Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"git-head-div text-center mx-auto",children:Object(s.jsx)("h1",{id:"Contact",className:"git-head",children:"Get in Touch"})})}),Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"git-cont row",children:[Object(s.jsx)("div",{className:"col-12 col-sm-6 half",children:Object(s.jsxs)("form",{action:g||"https://formspree.io",method:g?"POST":"GET",children:[Object(s.jsx)("input",{type:"text",id:"fname",name:"firstname",placeholder:"Your name",required:!0}),Object(s.jsx)("input",{type:"mail",id:"mailid",name:"Email",placeholder:"Email Address",required:!0}),Object(s.jsx)("input",{type:"text",id:"sub",name:"Subject",placeholder:"Subject",required:!0}),Object(s.jsx)("textarea",{id:"msg",name:"message",placeholder:"Message",required:!0}),Object(s.jsx)("button",{style:{cursor:"pointer"},type:"submit",children:Object(s.jsx)("label",{style:{cursor:"pointer"},id:"not-dark",children:"Send Message"})})]})}),Object(s.jsxs)("div",{className:"col-12 col-sm-6 half",children:[Object(s.jsx)("p",{className:"lead",children:x}),Object(s.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-column",children:Object(s.jsxs)("div",{className:"inline-block",children:[N&&Object(s.jsx)("a",{title:"Visit Linkedin profile",rel:"noopener noreferrer",target:"_blank",href:N,children:Object(s.jsx)("i",{className:"fab fa-linkedin"})}),k&&Object(s.jsx)("a",{title:"Visit Facebok profile",rel:"noopener noreferrer",target:"_blank",href:k,children:Object(s.jsx)("i",{className:"fab fa-facebook"})}),y&&Object(s.jsx)("a",{title:"Visit Instagram profile",rel:"noopener noreferrer",target:"_blank",href:y,children:Object(s.jsx)("i",{className:"fab fa-instagram"})}),v&&Object(s.jsx)("a",{title:"Visit Github profile",rel:"noopener noreferrer",target:"_blank",href:v,children:Object(s.jsx)("i",{className:"fab fa-github"})}),Object(s.jsx)("br",{})]})})]})]})})]}),Object(s.jsxs)("p",{id:"not-dark",className:"Copy",children:["2020 \xa9 Copyright ",Object(s.jsx)("strong",{children:O}),". All Rights Reserved"]})]})},H=a(74),I=a.n(H);a(312);var E=function(){return Object(c.useEffect)((function(){I.a.init({duration:j,once:m,disable:!d})}),[]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(C,{}),Object(s.jsx)(S,{}),Object(s.jsx)(M,{}),Object(s.jsx)(T,{}),Object(s.jsx)(_,{})]})};a(313),a(314),a(315);n.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(E,{})}),document.getElementById("root"))}},[[316,1,2]]]);
//# sourceMappingURL=main.7492e7e9.chunk.js.map