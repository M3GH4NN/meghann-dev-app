(this["webpackJsonpmeghann-dev-app"]=this["webpackJsonpmeghann-dev-app"]||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),i=t(7),c=t.n(i),r=(t(12),t(2)),l=t(3),o=t(5),m=t(4),j=t(0),d=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsx)(s.a.Fragment,{children:Object(j.jsxs)("header",{id:"home",children:[Object(j.jsxs)("nav",{id:"nav-wrap",children:[Object(j.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(j.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(j.jsxs)("ul",{id:"nav",className:"nav",children:[Object(j.jsx)("li",{className:"current",children:Object(j.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(j.jsx)("div",{className:"row banner",children:Object(j.jsxs)("div",{className:"banner-text",children:[Object(j.jsx)("h1",{className:"responsive-headline",children:e.name}),Object(j.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:[e.role,".",e.roleDescription]}),Object(j.jsx)("hr",{}),Object(j.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.url,target:"_blank",children:Object(j.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(j.jsx)("p",{className:"scrolldown",children:Object(j.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(j.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),t}(n.Component),h=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsx)("div",{children:Object(j.jsx)("section",{id:"about",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"three columns",children:[Object(j.jsx)("img",{className:"profile-pic",src:"images/Snapchat-887043582.jpg",alt:"Meghann Cunningham"}),Object(j.jsx)("img",{className:"dog-pic",src:"images/dogs2.jpg",alt:"Tan mini poodle and black cockapoo"})]}),Object(j.jsxs)("div",{className:"nine columns main-col",children:[Object(j.jsx)("h2",{children:"About Me"}),Object(j.jsx)("p",{children:e.aboutme}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"columns contact-details",children:[Object(j.jsx)("h2",{children:"Contact Details"}),Object(j.jsxs)("p",{className:"address",children:[Object(j.jsx)("span",{children:e.name}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:e.address}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"mailto:"+e.email,children:e.email})]})]})})]})]})})})}}]),t}(n.Component),u=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsxs)("section",{id:"resume",children:[Object(j.jsxs)("div",{className:"row education",children:[Object(j.jsx)("div",{className:"three columns header-col",children:Object(j.jsx)("h1",{children:Object(j.jsx)("span",{children:"Education"})})}),Object(j.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(j.jsx)("div",{className:"row item",children:Object(j.jsxs)("div",{className:"twelve columns",children:[Object(j.jsx)("h3",{children:e.UniversityName}),Object(j.jsxs)("p",{className:"info",children:[e.specialization,Object(j.jsx)("span",{children:"\u2022"})," ",Object(j.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(j.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(j.jsxs)("div",{className:"row work",children:[Object(j.jsx)("div",{className:"three columns header-col",children:Object(j.jsx)("h1",{children:Object(j.jsx)("span",{children:"Work"})})}),Object(j.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return console.log(e.Achievements[0]),Object(j.jsx)("div",{className:"row item",children:Object(j.jsxs)("div",{className:"twelve columns",children:[Object(j.jsx)("h3",{children:e.CompanyName}),Object(j.jsxs)("p",{className:"info",children:[e.specialization,Object(j.jsx)("span",{children:"\u2022"})," ",Object(j.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(j.jsxs)("p",{children:[Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"\u2022"})," ",e.Achievements[0]]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"\u2022"})," ",e.Achievements[1]]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"\u2022"})," ",e.Achievements[2]]})]}),Object(j.jsx)("ul",{})]})]})})}))})]}),Object(j.jsxs)("div",{className:"row skill",children:[Object(j.jsx)("div",{className:"three columns header-col",children:Object(j.jsx)("h1",{children:Object(j.jsx)("span",{children:"Skills"})})}),Object(j.jsxs)("div",{className:"nine columns main-col",children:[Object(j.jsx)("p",{children:e.skillsDescription}),Object(j.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("em",{children:e.skillname})})}))})]})]})]})}}]),t}(n.Component),b=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsx)("section",{id:"portfolio",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"twelve columns collapsed",children:[Object(j.jsx)("h1",{children:"Check Out Some of My Personal Projects"}),Object(j.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",alt:"",children:e.portfolio&&e.portfolio.map((function(e){return Object(j.jsx)("div",{className:"columns portfolio-item",children:Object(j.jsx)("div",{className:"item-wrap",children:Object(j.jsxs)("a",{href:e.url,target:"_blank",children:[Object(j.jsx)("img",{src:"".concat(e.imgurl)}),Object(j.jsx)("div",{className:"overlay",children:Object(j.jsxs)("div",{className:"portfolio-item-meta",children:[Object(j.jsx)("h5",{children:e.name}),Object(j.jsx)("p",{children:e.description})]})})]})})})}))})]})})})}}]),t}(n.Component),p=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsxs)("section",{id:"contact",children:[Object(j.jsx)("div",{className:"row section-head",children:Object(j.jsx)("div",{className:"ten columns",children:Object(j.jsxs)("p",{className:"lead",children:["Feel free to contact me at"," ",Object(j.jsx)("a",{href:"mailto:"+e.email,children:e.email})]})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(j.jsx)("div",{className:"widget",children:Object(j.jsx)("h4",{children:e.linkedinId})})})})]})}}]),t}(n.Component),O=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(j.jsx)("footer",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"twelve columns",children:Object(j.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:e.url,target:"_blank",children:Object(j.jsx)("i",{className:e.className})})})}))})}),Object(j.jsx)("div",{id:"go-top",children:Object(j.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(j.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(n.Component),x={imagebaseurl:"https://ivy555.github.io/",name:"Meghann Cunningham",role:"Team Lead & DevOps Engineer in the Fulton, MD area",linkedinId:"",skypeid:"",roleDescription:"",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/meghann-cunningham-239b5a4b/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/M3GH4NN",className:"fa fa-github"}],aboutme:"I am currently a DevOps engineer for a Cloud Service Provider in Fulton, MD. On my current project I am the Team Lead and sole DevOps engineer for a small team working on a video game that will soon be ready for public launch. My current duties include: my team lead responsibilities, maintaining the GitLab pipelines, creating and maintaining the game's web application, maintaining all of our AWS infrastructure, maintaining any and all compliance, regulation, and security requirements for the game and website, and helping out with game design/development. In my free time, I enjoy working on personal projects at home, spending time with my two dogs Sophie and Henry, and playing video games!",address:"Columbia, MD",email:"mc@meghann.dev",education:[{UniversityName:"SUNY Empire State College",specialization:"B.S., Computer Science",MonthOfPassing:"Graduated April",YearOfPassing:"2020"},{UniversityName:"University of Rochester",specialization:"B.A., American Sign Language",MonthOfPassing:"Graduated December",YearOfPassing:"2012"}],work:[{CompanyName:"Applied Insight/Stratus Solutions",specialization:"Team Lead & DevOps Engineer",MonthOfLeaving:"September",YearOfLeaving:"2019 to Current",Achievements:["Promoted to Team Lead in March 2022.","DevOps Duties: Software development, Web development (Full Stack), Cloud (AWS) Infrastructure, and other IT Operations.","Tools and languages utilized: React, Javascript, Node, Express, CSS, HTML, Python, Golang, JSON, YAML, Terraform, GitLab CI/CD, AWS CLI, AWS Amplify, AWS Cognito, AWS PinPoint, AWS Kinesis, AWS S3, AWS EC2, AWS VPC, AWS API, AWS DynamoDB, AWS Route53, AWS Certificate Manager, AWS Cost Explorer, AWS CloudFront, AWS CloudFormation, AWS Lambda, AWS CloudWatch, AWS SQS, AWS SMS, AWS ECS, AWS ECR, AWS GuardDuty"]},{CompanyName:"Applied Insight/Stratus Solutions",specialization:"DevOps Engineer Intern",MonthOfLeaving:"June",YearOfLeaving:"2019 to August 2019",Achievements:["Worked on a project to create networking automation tools within AWS.","Gave a presentation to the entire company on the project. The tools we made were put into production immediately.","Tools and languages utilized: Python, Golang, JSON, YAML, AWS CLI, AWS CloudFormation, AWS Lambda, AWS EC2, AWS VPC, AWS API Gateway, AWS DynamoDB, AWS Transit Gateway, AWS S3, AWS CloudWatch, AWS SQS, AWS SMS, "]},{CompanyName:"Sign Language Connection, Inc.",specialization:"Office Manager",MonthOfLeaving:"January",YearOfLeaving:"2013 to September 2019",Achievements:["Made a career change in 2019.","Intake, assessment, and fulfillment of sign language interpreter requests","Knowledgable in the ADA and HIPAA."]}],skillsDescription:"",skills:[{skillname:"AWS"},{skillname:"Python"},{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"},{skillname:"Golang"},{skillname:"Terraform"},{skillname:"Javascript"}],portfolio:[{name:"HypeTrain",description:"game release tracker",imgurl:"images/portfolio/project.jpg",url:"https://github.com/M3GH4NN/hypetrain"},{name:"Smart Monitor",description:"I created a smart monitor using my Raspberry Pi and a spare monitor. The monitor displays my calendar for the next four weeks, the current weather, the forecast for the rest of the week, and has a rotating background that uses images from a smart album of my dogs that I made. The smart album automatically pulls any pictures that I take of my dogs to it. ",imgurl:"TODO"},{name:"Expense Tracker",description:"I created an program that logs into my Wegmans account, scrapes the receipts that are saved to my account from a specified date range, and then exports that data as an itemized receipt to a CSV file. I can then import the CSV into the Splitwise app for expense tracking",imgurl:"TODO"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{resumeData:x}),Object(j.jsx)(h,{resumeData:x}),Object(j.jsx)(u,{resumeData:x}),Object(j.jsx)(b,{resumeData:x}),Object(j.jsx)(p,{resumeData:x}),Object(j.jsx)(O,{resumeData:x})]})}}]),t}(n.Component),f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,i=a.getLCP,c=a.getTTFB;t(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),f()}},[[14,1,2]]]);
//# sourceMappingURL=main.64dcfa48.chunk.js.map