(function(t){function a(a){for(var e,l,n=a[0],o=a[1],c=a[2],u=0,v=[];u<n.length;u++)l=n[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&v.push(i[l][0]),i[l]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);d&&d(a);while(v.length)v.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,a=0;a<r.length;a++){for(var s=r[a],e=!0,n=1;n<s.length;n++){var o=s[n];0!==i[o]&&(e=!1)}e&&(r.splice(a--,1),t=l(l.s=s[0]))}return t}var e={},i={index:0},r=[];function l(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=e,l.d=function(t,a,s){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)l.d(s,e,function(a){return t[a]}.bind(null,e));return s},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var d=o;r.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";s("9085")},"14ea":function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}}),s("home")],1)},r=[],l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[t._m(0),s("left-menu"),s("main",{attrs:{id:"main"}},[s("about"),s("facts"),s("skills"),s("resume"),s("contacts")],1)],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"mobile-nav-toggle d-xl-none",attrs:{type:"button"}},[s("i",{staticClass:"icofont-navigation-menu"})])}],o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._m(0),s("section",{staticClass:"d-flex flex-column justify-content-center align-items-center",attrs:{id:"hero"}},[s("div",{staticClass:"hero-container",attrs:{"data-aos":"fade-in"}},[s("h1",[t._v("Ozan ISIK")]),s("vue-typed-js",{attrs:{strings:["Front-End Developer","Back-End Developer","Musician"],"fade-out":!0,loop:!0,cursorChar:"_",fadeOutDelay:1e3,typeSpeed:100}},[s("p",[t._v("I'm "),s("span",{staticClass:"typing"})])])],1)])])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{attrs:{id:"header"}},[e("div",{staticClass:"d-flex flex-column"},[e("div",{staticClass:"profile"},[e("img",{staticClass:"img-fluid rounded-circle",attrs:{src:s("9f4c"),alt:""}}),e("h1",{staticClass:"text-light"},[e("a",{attrs:{href:"index.html"}},[t._v("Ozan ISIK")])]),e("div",{staticClass:"social-links mt-3 text-center"},[e("a",{staticClass:"linkedin",attrs:{href:"https://www.linkedin.com/in/ozanisik/",target:"_blank"}},[e("i",{staticClass:"bx bxl-linkedin"})]),e("a",{staticClass:"instagram",attrs:{href:"https://www.instagram.com/i.ozan/",target:"_blank"}},[e("i",{staticClass:"bx bxl-instagram"})]),e("a",{staticClass:"twitter",attrs:{href:"#"}},[e("i",{staticClass:"bx bxl-twitter"})]),e("a",{staticClass:"facebook",attrs:{href:"#"}},[e("i",{staticClass:"bx bxl-facebook"})]),e("a",{staticClass:"google-plus",attrs:{href:"#"}},[e("i",{staticClass:"bx bxl-skype"})])])]),e("nav",{staticClass:"nav-menu"},[e("ul",[e("li",{staticClass:"active"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"bx bx-home"}),t._v(" "),e("span",[t._v("Home")])])]),e("li",[e("a",{attrs:{href:"#about"}},[e("i",{staticClass:"bx bx-user"}),t._v(" "),e("span",[t._v("About")])])]),e("li",[e("a",{attrs:{href:"#resume"}},[e("i",{staticClass:"bx bx-file-blank"}),t._v(" "),e("span",[t._v("Resume")])])]),e("li",[e("a",{attrs:{href:"#contact"}},[e("i",{staticClass:"bx bx-envelope"}),t._v(" Contact")])])])]),e("button",{staticClass:"mobile-nav-toggle d-xl-none",attrs:{type:"button"}},[e("i",{staticClass:"icofont-navigation-menu"})])])])}],d={name:"left-menu"},u=d,v=s("2877"),m=Object(v["a"])(u,o,c,!1,null,null,null),p=m.exports,f=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("section",{staticClass:"skills section-bg",attrs:{id:"skills"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"section-title"},[s("h2",[t._v("Skills")]),s("p")]),s("div",{staticClass:"row skills-content"},[s("div",{staticClass:"col-lg-6",attrs:{"data-aos":"fade-up"}},[s("div",{staticClass:"progress"},[s("span",{staticClass:"skill"},[t._v("Javascript "),s("i",{staticClass:"val"},[t._v("90%")])]),s("div",{staticClass:"progress-bar-wrap"},[s("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"90%"},attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("90%")])])]),s("div",{staticClass:"progress"},[s("span",{staticClass:"skill"},[t._v("Vue "),s("i",{staticClass:"val"},[t._v("90%")])]),s("div",{staticClass:"progress-bar-wrap"},[s("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"90%"},attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("90%")])])]),s("div",{staticClass:"progress"},[s("span",{staticClass:"skill"},[t._v("Node.js "),s("i",{staticClass:"val"},[t._v("80%")])]),s("div",{staticClass:"progress-bar-wrap"},[s("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("80%")])])])]),s("div",{staticClass:"col-lg-6",attrs:{"data-aos":"fade-up","data-aos-delay":"100"}},[s("div",{staticClass:"progress"},[s("span",{staticClass:"skill"},[t._v("TypeScript "),s("i",{staticClass:"val"},[t._v("90%")])]),s("div",{staticClass:"progress-bar-wrap"},[s("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"90%"},attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("90%")])])]),s("div",{staticClass:"progress"},[s("span",{staticClass:"skill"},[t._v("Html&Css "),s("i",{staticClass:"val"},[t._v("75%")])]),s("div",{staticClass:"progress-bar-wrap"},[s("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"75%"},attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("75%")])])]),s("div",{staticClass:"progress"},[s("span",{staticClass:"skill"},[t._v("C#"),s("i",{staticClass:"val"},[t._v("75%")])]),s("div",{staticClass:"progress-bar-wrap"},[s("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"75%"},attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("75%")])])])])])])])])}],_={name:"skills",components:{}},C=_,b=Object(v["a"])(C,f,g,!1,null,null,null),h=b.exports,w=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("section",{staticClass:"facts",attrs:{id:"facts"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"section-title"},[s("h2",[t._v("Facts")]),s("p")]),s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-lg-3 col-md-6 d-md-flex align-items-md-stretch",attrs:{"data-aos":"fade-up"}},[s("div",{staticClass:"count-box"},[s("i",{staticClass:"icofont-simple-smile"}),s("span",{attrs:{"data-toggle":"counter-up"}},[t._v("10000+")]),s("p",[s("strong",[t._v("Lines of code")])])])]),s("div",{staticClass:"col-lg-3 col-md-6 d-md-flex align-items-md-stretch",attrs:{"data-aos":"fade-up","data-aos-delay":"100"}},[s("div",{staticClass:"count-box"},[s("i",{staticClass:"icofont-document-folder"}),s("span",{attrs:{"data-toggle":"counter-up"}},[t._v("44")]),s("p",[s("strong",[t._v("Projects worked on")])])])]),s("div",{staticClass:"col-lg-3 col-md-6 d-md-flex align-items-md-stretch",attrs:{"data-aos":"fade-up","data-aos-delay":"200"}},[s("div",{staticClass:"count-box"},[s("i",{staticClass:"icofont-coffee-mug"}),s("span",{attrs:{"data-toggle":"counter-up"}},[t._v("1000+")]),s("p",[s("strong",[t._v("Cupe of Coffee")])])])]),s("div",{staticClass:"col-lg-3 col-md-6 d-md-flex align-items-md-stretch",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[s("div",{staticClass:"count-box"},[s("i",{staticClass:"icofont-song-notes"}),s("span",{attrs:{"data-toggle":"counter-up"}},[t._v("4")]),s("p",[s("strong",[t._v("Enstrumants Can Play")])])])])])])])])}],x={name:"facts"},k=x,S=Object(v["a"])(k,w,y,!1,null,null,null),E=S.exports,j=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section",{staticClass:"about",attrs:{id:"about"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-title"},[e("h2",[t._v("About")]),e("p",[t._v(" Hello there, My name is Ozan Isik. I'm web developer from Turkey. I gratuted from Kocaeli University Computer Engineering. I've worked harder than I should have on many projects. This is because I am moving forward with passion and a desire to learn more. For the rest of the time, I'm mostly interested in music and games. You can access my personal information below.")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4",attrs:{"data-aos":"fade-right"}},[e("img",{staticClass:"img-fluid",attrs:{src:s("9f4c"),alt:""}})]),e("div",{staticClass:"col-lg-8 pt-4 pt-lg-0 content",attrs:{"data-aos":"fade-left"}},[e("h3",[t._v("Full Stack Developer ")]),e("p",{staticClass:"font-italic"}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("ul",[e("li",[e("i",{staticClass:"icofont-rounded-right"}),t._v(" "),e("strong",[t._v("Birthday:")]),t._v(" 9 May 1994")]),e("li",[e("i",{staticClass:"icofont-rounded-right"}),t._v(" "),e("strong",[t._v("Website:")]),t._v(" www.example.com")]),e("li",[e("i",{staticClass:"icofont-rounded-right"}),t._v(" "),e("strong",[t._v("Phone:")]),t._v(" +90 535 736 7742")]),e("li",[e("i",{staticClass:"icofont-rounded-right"}),t._v(" "),e("strong",[t._v("City:")]),t._v(" Istanbul, Turkey")])])]),e("div",{staticClass:"col-lg-6"},[e("ul",[e("li",[e("i",{staticClass:"icofont-rounded-right"}),t._v(" "),e("strong",[t._v("Age:")]),t._v(" 26")]),e("li",[e("i",{staticClass:"icofont-rounded-right"}),t._v(" "),e("strong",[t._v("Degree:")]),t._v(" Master")]),e("li",[e("i",{staticClass:"icofont-rounded-right"}),t._v(" "),e("strong",[t._v("Mail:")]),t._v(" isik.ozan@icloud.com")]),e("li",[e("i",{staticClass:"icofont-rounded-right"}),t._v(" "),e("strong",[t._v("Freelance:")]),t._v(" Available")])])])]),e("p")])])])])])}],I={name:"about"},P=I,O=Object(v["a"])(P,j,T,!1,null,null,null),A=O.exports,M=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("section",{staticClass:"contact",attrs:{id:"contact"}},[s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"row",attrs:{"data-aos":"fade-in"}},[t._m(1),s("div",{staticClass:"col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"},[s("form",{staticClass:"submitForm"},[t._m(2),t._m(3),t._m(4),s("div",{staticClass:"mb-3"}),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(a){return t.sendMessage()}}},[t._v("Send Message")])])])])])])])])},D=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section-title"},[s("h2",[t._v("Contact")]),s("p")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-5 d-flex align-items-stretch"},[s("div",{staticClass:"info"},[s("div",{staticClass:"address"},[s("i",{staticClass:"icofont-google-map"}),s("h4",[t._v("Location:")]),s("p",[t._v("Istanbul, Turkey")])]),s("div",{staticClass:"email"},[s("i",{staticClass:"icofont-envelope"}),s("h4",[t._v("Email:")]),s("p",[t._v("isik.ozan@icloud.com")])]),s("div",{staticClass:"phone"},[s("i",{staticClass:"icofont-phone"}),s("h4",[t._v("Call:")]),s("p",[t._v("+90 5357367742")])]),s("iframe",{staticStyle:{border:"0",width:"100%",height:"290px"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12024.011316170145!2d29.007334782331384!3d41.11262928367892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5bf15c34913%3A0x19571e96a2eaf2f6!2zTWFzbGFrLCBTYXLEsXllci_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1611408772817!5m2!1str!2str",frameborder:"0",allowfullscreen:""}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-md-6"},[s("label",{attrs:{for:"name"}},[t._v("Your Name")]),s("input",{staticClass:"form-control",attrs:{type:"text",name:"name",id:"name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars",required:""}}),s("div",{staticClass:"validate"})]),s("div",{staticClass:"form-group col-md-6"},[s("label",{attrs:{for:"name"}},[t._v("Your Email")]),s("input",{staticClass:"form-control",attrs:{type:"email",name:"email",id:"email","data-rule":"email","data-msg":"Please enter a valid email",required:""}}),s("div",{staticClass:"validate"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[t._v("Subject")]),s("input",{staticClass:"form-control",attrs:{type:"text",name:"subject",id:"subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject",required:""}}),s("div",{staticClass:"validate"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[t._v("Message")]),s("textarea",{staticClass:"form-control",attrs:{name:"message",rows:"10","data-rule":"required","data-msg":"Please write something for us",required:""}}),s("div",{staticClass:"validate"})])}],F={name:"contacts",data(){},methods:{sendMessage(){form.modalShow(),!1!==form.checkValidity()&&alert("Thanks for your attention!")}}},$=F,N=(s("90e8"),Object(v["a"])($,M,D,!1,null,null,null)),H=N.exports,B=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("section",{staticClass:"resume",attrs:{id:"resume"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"section-title"},[s("h2",[t._v("Resume")]),s("p",[t._v("I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success for the team.")]),s("br"),s("a",{attrs:{href:"../assets/OzanISIKCV.pdf",download:""}},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[s("i",{staticClass:"icofont-download"}),t._v(" Download CV")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6",attrs:{"data-aos":"fade-up"}},[s("h3",{staticClass:"resume-title"},[t._v("Professional Experience")]),s("div",{staticClass:"resume-item"},[s("h4",[t._v("Senior Full Stack Developer")]),s("h5",[t._v("2016 - Present")]),s("p",[s("em",[t._v("Softtech Software Technologies Research Development and Marketing Trade Inc., Istanbul, Turkey ")])]),s("li",[t._v("Model based low code platform developing with Vue.js and TypeScript. ")]),s("li",[t._v("Worked on Face Recognition, Push Notificatin etc.. projects for ISBANK with .NET")]),s("br"),s("strong",[t._v("Job Experiences :")]),t._v(" Vue.js, TypeScript, C#, SQL Server, TOAD, Web Services, Windows Services, Design Patterns, Asp.net, JQuery,AJAX Html, CSS, Agile Methodology(KANBAN), GIT, TFS, Jenkins, Gitlab, Github, Nuxt.js, Vuetify, Element-ui, Jest, Test Driven Development. ")]),s("div",{staticClass:"resume-item"},[s("h4",[t._v("Part Time Developer")]),s("h5",[t._v("2015 - 2016")]),s("p",[s("em",[t._v("IBTECH International Information and Communication Technologies, Kocaeli, Turkey")])]),s("ul",[s("li",[t._v("IBTECH is a subsidiary of a QNB Finansbank. An additional project was developed with ASP.Net technology in a developing for corporate project. ")]),s("strong",[t._v("Job Experiences :")]),t._v(" Bootstrap, jQuery / UI,HTML5, CSS3, Javascript,MS-SQL, LINQ ,Entity Framework, DevExpress, Stored Procedure, Visual Studio TFS, Repository Pattern. ")])]),s("div",{staticClass:"resume-item"},[s("h4",[t._v("Part Time Developer")]),s("h5",[t._v("2014 - 2015")]),s("p",[s("em",[t._v("+Smarte, Istanbul, TURKEY")])]),s("ul",[s("li",[t._v("Worked on smart home technologies for backend side.")]),s("strong",[t._v("Job Experiences :")]),t._v(" Net WCF , Windows Forms Desktop Applications, SOAP Services, LINQ, Entity Framework. ")])])]),s("div",{staticClass:"col-lg-6",attrs:{"data-aos":"fade-up","data-aos-delay":"100"}},[s("h3",{staticClass:"resume-title"},[t._v("Education")]),s("div",{staticClass:"resume-item"},[s("h4",[t._v("e-MBA")]),s("h5",[t._v("2018 - 2020")]),s("p",[s("em",[t._v("Okan University, Istanbul, TR")])]),s("p",[t._v("Master Degree")])]),s("div",{staticClass:"resume-item"},[s("h4",[t._v("Computer Engineering")]),s("h5",[t._v("2012 - 2016")]),s("p",[s("em",[t._v("Kocaeli University, Kocaeli, TR")])]),s("p",[t._v("Bachelor Degree")])]),s("h3",{staticClass:"resume-title"},[t._v("Personal Projects")]),s("div",{staticClass:"resume-item pb-0"},[s("h4",[t._v("NeKirada.com (not active)")]),s("p",[s("em",[t._v("As a rental platform nekirada.com was selected by Ministry of Youth and Sports. ")])]),s("strong",[t._v("Experiences:")]),t._v(" RESTFul Services, ASP.NET, MD5 Hash Algorithm and RSA Cryptography algorithm. ")]),s("div",{staticClass:"resume-item pb-0"},[s("br"),s("h4",[t._v("Wi-fi Detection (Final Project)")]),s("p",[s("em")])])])])])])])}],K={name:"resume"},R=K,W=Object(v["a"])(R,B,J,!1,null,null,null),z=W.exports,L={name:"Home",components:{LeftMenu:p,About:A,Facts:E,Skills:h,Contacts:H,Resume:z},data(){return{}},created(){}},V=L,q=Object(v["a"])(V,l,n,!1,null,null,null),Q=q.exports,Y={name:"Home",components:{home:Q}},U=Y,G=(s("034f"),Object(v["a"])(U,i,r,!1,null,null,null)),X=G.exports,Z=s("8c4f");e["default"].use(Z["a"]);const tt=[{path:"/",name:"HomePage",component:Q}],at=new Z["a"]({mode:"history",base:"",routes:tt});var st=at,et=s("f5af"),it=s.n(et),rt=s("5f5b"),lt=s("b1e0"),nt=(s("e829"),s("8cb8"));s("f9e3"),s("2dd8");e["default"].use(rt["a"]),e["default"].use(lt["a"]),e["default"].use(nt["default"]),e["default"].config.productionTip=!1,it.a.init(),new e["default"]({router:st,render:function(t){return t(X)}}).$mount("#app")},9085:function(t,a,s){},"90e8":function(t,a,s){"use strict";s("14ea")},"9f4c":function(t,a,s){t.exports=s.p+"img/profile-img.1b77beff.jpg"}});
//# sourceMappingURL=index.5d30eae9.js.map