(this["webpackJsonpmeghann-dev-app"]=this["webpackJsonpmeghann-dev-app"]||[]).push([[0],{12:function(e,s,n){},14:function(e,s,n){"use strict";n.r(s);var c=n(1),t=n.n(c),a=n(7),i=n.n(a),r=(n(12),n(2)),l=n(3),o=n(5),j=n(4),m=n(0),h=function(e){Object(o.a)(n,e);var s=Object(j.a)(n);function n(){return Object(r.a)(this,n),s.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)(t.a.Fragment,{children:Object(m.jsxs)("header",{id:"home",children:[Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsx)("h1",{className:"responsive-headline",children:e.name}),Object(m.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:[e.role,".",e.roleDescription]}),Object(m.jsx)("hr",{}),Object(m.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,target:"",children:Object(m.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),n}(c.Component),d=function(e){Object(o.a)(n,e);var s=Object(j.a)(n);function n(){return Object(r.a)(this,n),s.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("div",{children:Object(m.jsx)("section",{id:"about",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:"images/Snapchat-435441263.jpg",alt:"Meghann Cunningham"})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:e.aboutme}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e.name}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.address}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:"mailto:"+e.email,children:e.email})]})]})})]})]})})})}}]),n}(c.Component),b=function(e){Object(o.a)(n,e);var s=Object(j.a)(n);function n(){return Object(r.a)(this,n),s.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(m.jsx)("div",{className:"row item",children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("h3",{children:e.UniversityName}),Object(m.jsxs)("p",{className:"info",children:[e.specialization,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(m.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Work"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(m.jsx)("div",{className:"row item",children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("h3",{children:e.CompanyName}),Object(m.jsxs)("p",{className:"info",children:[e.specialization,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(m.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Skills"})})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("p",{children:e.skillsDescription}),Object(m.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("em",{children:e.skillname})})}))})]})]})]})}}]),n}(c.Component),O=function(e){Object(o.a)(n,e);var s=Object(j.a)(n);function n(){return Object(r.a)(this,n),s.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Check Out Some of My Work"}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",alt:"",children:e.portfolio&&e.portfolio.map((function(e){return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsx)("div",{className:"item-wrap",children:Object(m.jsxs)("a",{href:"https://github.com/M3GH4NN/hypetrain",children:[Object(m.jsx)("img",{src:"".concat(e.imgurl),className:"item-img"}),Object(m.jsx)("div",{className:"overlay",children:Object(m.jsxs)("div",{className:"portfolio-item-meta",children:[Object(m.jsx)("h5",{children:e.name}),Object(m.jsx)("p",{children:e.description})]})})]})})})}))})]})})})}}]),n}(c.Component),u=function(e){Object(o.a)(n,e);var s=Object(j.a)(n);function n(){return Object(r.a)(this,n),s.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsx)("div",{className:"row section-head",children:Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsxs)("p",{className:"lead",children:["Feel free to contact me at ",Object(m.jsx)("a",{href:"mailto:"+e.email,children:e.email})]})})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(m.jsx)("div",{className:"widget",children:Object(m.jsx)("h4",{children:e.linkedinId})})})})]})}}]),n}(c.Component),p=function(e){Object(o.a)(n,e);var s=Object(j.a)(n);function n(){return Object(r.a)(this,n),s.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"twelve columns",children:Object(m.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})})}))})}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),n}(c.Component),x={imagebaseurl:"https://ivy555.github.io/",name:"Meghann Cunningham",role:"DevOps Engineer in the Fulton, MD area",linkedinId:"",skypeid:"",roleDescription:" ",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/meghann-cunningham-239b5a4b/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/M3GH4NN",className:"fa fa-github"}],aboutme:"I am currently a DevOps engineer for a Cloud Service Provider in Fulton, MD. On my current contract, I am the sole DevOps engineer for a small team working on a video game. My duties include: maintaining the GitLab pipelines, creating the game's web application, maintaining all game-related infrastructure, and helping out with game design/development.",address:"Columbia, MD",email:"mc@meghann.dev",education:[{UniversityName:"SUNY Empire State College",specialization:"B.S., Computer Science",MonthOfPassing:"Graduated April",YearOfPassing:"2020"},{UniversityName:"University of Rochester",specialization:"B.A., American Sign Language",MonthOfPassing:"Graduated December",YearOfPassing:"2012"}],work:[{CompanyName:"Applied Insight/Stratus Solutions",specialization:"DevOps Engineer",MonthOfLeaving:"September",YearOfLeaving:"2019 to Current",Achievements:"Software development, Web development (Full Stack)"},{CompanyName:"Applied Insight/Stratus Solutions",specialization:"DevOps Engineer Intern",MonthOfLeaving:"June",YearOfLeaving:"2019 to August 2019",Achievements:"Worked on a project to create networking automation tools within AWS."},{CompanyName:"Sign Language Connection, Inc.",specialization:"Office Manager",MonthOfLeaving:"January",YearOfLeaving:"2013 to September 2019",Achievements:""}],skillsDescription:"",skills:[{skillname:"AWS"},{skillname:"Python"},{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"},{skillname:"Golang"},{skillname:"Terraform"}],portfolio:[{name:"HypeTrain",description:"game release tracker",imgurl:"images/portfolio/project.jpg"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},v=function(e){Object(o.a)(n,e);var s=Object(j.a)(n);function n(){return Object(r.a)(this,n),s.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(h,{resumeData:x}),Object(m.jsx)(d,{resumeData:x}),Object(m.jsx)(b,{resumeData:x}),Object(m.jsx)(O,{resumeData:x}),Object(m.jsx)(u,{resumeData:x}),Object(m.jsx)(p,{resumeData:x})]})}}]),n}(c.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(s){var n=s.getCLS,c=s.getFID,t=s.getFCP,a=s.getLCP,i=s.getTTFB;n(e),c(e),t(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(t.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),f()}},[[14,1,2]]]);
//# sourceMappingURL=main.766c6105.chunk.js.map