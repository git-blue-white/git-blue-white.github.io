(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t.n(r),c=(t(13),t(1)),i=t(2),m=t(4),o=t(3),u=t(5),d=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"}," ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"A ",e.role,".",l.a.createElement("br",null),e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing," (graduated)")),l.a.createElement("p",null,e.Achievements)),l.a.createElement("img",{alt:"University Mark",src:"".concat(e.imageurl),className:"item-img"}))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work1&&e.work1.map(function(e){return l.a.createElement("div",{className:"row item treestones",style:{backgroundImage:'url("images/treecompanyimage.png")'}},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.YearOfLeaving)),e.Achievements&&e.Achievements.map(function(e){return l.a.createElement("p",null,"- ",e.context)})))})),l.a.createElement("div",{className:"nine columns main-col seconddiv"},l.a.createElement("br",null),e.work2&&e.work2.map(function(e){return l.a.createElement("div",{className:"row item imaginarycloud",style:{backgroundImage:'url("images/cloudcompanyimage.png")'}},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.YearOfLeaving)),e.Achievements&&e.Achievements.map(function(e){return l.a.createElement("p",null,"- ",e.context)})))})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("br",null),e.work3&&e.work3.map(function(e){return l.a.createElement("div",{className:"row item sintrabusiness"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.YearOfLeaving)),e.Achievements&&e.Achievements.map(function(e){return l.a.createElement("p",null,"- ",e.context)})))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{style:{display:"flex"},id:"skillrowid"},l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skillsforfront&&e.skillsforfront.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skillsforback&&e.skillsforback.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))})))))))}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-01"},l.a.createElement("img",{alt:"Portfolio Mark",src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),h=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,e.linkedinId)))))}}]),a}(n.Component),g=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),f={imagebaseurl:"",name:"karlo Stern",role:"Full-stack developer",linkedinId:"",skypeid:"",roleDescription:"I am a Full Stack Developer with over 7 years of experience in PHP, JavaScript, MERN, etc. I've got a lot of experience in developing comfortable and useful Web Applications, using above skills. I am a quick learner with incisive eyes and so I am able to adapt quickly to challenging situations.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com",className:"fa fa-linkedin"},{name:"github",url:"http://github.com",className:"fa fa-github"},{name:"skype",url:"http://twitter.com",className:"fa fa-twitter"}],aboutme:"I am 24 years old and I graduated the university few days ago. And I am working for my company <Tree Stones> in Switzerland. I studied AI, Cryptography and Algorithms in the university.",address:"Basel, Switzerland",website:"",education:[{imageurl:"images/universitymark.png",UniversityName:"University of Zurich",specialization:"The University of Zurich (UZH, German: Universit\xe4t Z\xfcrich) is a public research university located in the city of Z\xfcrich, Switzerland. It is the largest university in Switzerland, with its 28,000 enrolled students.",MonthOfPassing:"June",YearOfPassing:"2014",Achievements:"B.Sc Informatics"}],work1:[{markurl:"images/logo-gray.svg",CompanyName:"Tree Stones",specialization:"Tree stones is a e-commerce development company and they focus on web development, digital strategy, etc.",YearOfLeaving:"2014/07 - 2016/03",Achievements:[{context:"Created front-end pages using HTML, CSS, etc."},{context:"Designed and created database using MySQL and MongoDB."},{context:"Developed advanced functional pages using JS."},{context:"Created back-end using APIs with Node and Express."}]}],work2:[{markurl:"images/logo-gray.svg",CompanyName:"Imaginary Cloud",specialization:"ImaginaryCloud is a software development and UX/UI Design Company. Their product developments are Web development, Mobile development and Data Science/Artificial Intelligence. ",YearOfLeaving:"2016/04 - 2019/08",Achievements:[{context:"Designed and Developed reusable UX/UI components using jQuery."},{context:"Designed and Created Databases using MongoDB."},{context:"Developed front-end pages using HTML, CSS and based on React/Redux."},{context:"Developed MVC back-end server using API, Node and Express. "}]}],work3:[{CompanyName:"Sintra Digital Business ",specialization:"ISintra Digital Business is a company for e-commerce development, UX/UI design, custom software development, and web development services. ",YearOfLeaving:"2019/09 - 2021/02",Achievements:[{context:"Designed and created Web service front-end pages using ReactJS/Redux and Typescript."},{context:"Created indexed database using MongoDB."},{context:"Developed MVC back-end with API."}]}],skillsDescription:"Your skills here",skillsforfront:[{skillname:"HTML5"},{skillname:"Css"},{skillname:"Javascript"},{skillname:"Reactjs"},{skillname:"Typescript"},{skillname:"Sass"},{skillname:"Ajax"},{skillname:"Bootstrap"}],skillsforback:[{skillname:"Php"},{skillname:"Nodejs"},{skillname:"Json"},{skillname:"Expressjs"},{skillname:"Mongodb"},{skillname:"MySQL"},{skillname:"Laravel"}],portfolio:[{name:"radiologie",description:"I developed this project in Tree Stones company.",imgurl:"images/port1.jpg"},{name:"techtudo",description:"mobileapp",imgurl:"images/port2.png"},{name:"project3",description:"mobileapp",imgurl:"images/port3.png"},{name:"project4",description:"mobileapp",imgurl:"images/port4.png"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},b=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:f}),l.a.createElement(p,{resumeData:f}),l.a.createElement(E,{resumeData:f}),l.a.createElement(v,{resumeData:f}),l.a.createElement(h,{resumeData:f}),l.a.createElement(g,{resumeData:f}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.f732b2b7.chunk.js.map