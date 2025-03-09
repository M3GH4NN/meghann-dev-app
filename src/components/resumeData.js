let resumeData = {
  imagebaseurl: "https://ivy555.github.io/",
  name: "Meghann Cunningham",
  role: "DevOps Engineer | CI/CD, AWS, & Infrastructure Automation | Based in Saint Paul, MN",
  linkedinId: "",
  skypeid: "",
  roleDescription: "",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/meghann-cunningham-239b5a4b/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "https://github.com/M3GH4NN",
      className: "fa fa-github",
    },
  ],
  aboutme:
    "I am currently the DevOps Lead Engineer at Convo, where I manage and maintain CI/CD pipelines, infrastructure, and high-availability systems. I work across multiple teams to ensure that cloud architecture is optimized, scalable, and secure while providing infrastructure guidance for new projects. In my free time, I enjoy working on personal projects, spending time with my partner and our two dogs, and playing video games!",
  address: "Saint Paul, MN",
  email: "mc@meghann.dev",
  education: [
    {
      UniversityName: "SUNY Empire State College",
      specialization: "B.S., Computer Science",
      MonthOfPassing: "Graduated April",
      YearOfPassing: "2020",
    },
    {
      UniversityName: "University of Rochester",
      specialization: "B.A., American Sign Language",
      MonthOfPassing: "Graduated December",
      YearOfPassing: "2012",
    },
  ],
  work: [
    {
      CompanyName: "Convo Communications",
      specialization: "DevOps Lead",
      MonthOfLeaving: "June",
      YearOfLeaving: "2024 to Current",
      Achievements: [
        "Design and maintain scalable CI/CD pipelines using GitHub Actions, streamlining deployments and infrastructure automation.",
        "Manage cloud infrastructure with Terraform, ensuring high availability, scalability, and security for mission-critical services.",
        "Optimize ECS-based services, integrating geolocation-based emergency response capabilities to enhance accessibility and reliability.",
        "Collaborate with cross-functional teams, ensuring seamless DevOps support for applications serving the Deaf and Hard of Hearing community.",
        "Reduce infrastructure costs and downtime by optimizing cloud automation and task scheduling.",
      ],
    },
    {
      CompanyName: "EITR Technologies",
      specialization: "Platform Engineer",
      MonthOfLeaving: "December",
      YearOfLeaving: "2022 to May 2024",
      Achievements: [
        "Develop and implement scalable, reliable, and efficient platform solutions.",
        "Automate infrastructure provisioning, configuration, and deployment processes.",
        "Establish and maintain DevSecOps practices.",
        "Implement monitoring, logging, and alerting systems.",
        "Ensure platform security by implementing appropriate security measures.",
      ],
    },
    {
      CompanyName: "Applied Insight (formerly Stratus Solutions)",
      specialization: "Game Dev Team Lead & DevOps Engineer",
      MonthOfLeaving: "September",
      YearOfLeaving: "2019 to December 2022",
      Achievements: [
        "Promoted to Game Development Team Lead in 2022.",
        "Managed AWS infrastructure and website for a game development project.",
        "Ensured NSA security compliance for game and website.",
      ],
    },
    {
      CompanyName: "Stratus Solutions",
      specialization: "DevOps Engineer Intern",
      MonthOfLeaving: "June",
      YearOfLeaving: "2019 to August 2019",
      Achievements: [
        "Created networking automation tools within AWS.",
        "Presented internship project to the entire company.",
      ],
    },
    {
      CompanyName: "Sign Language Connection, Inc.",
      specialization: "Office Manager",
      MonthOfLeaving: "January",
      YearOfLeaving: "2013 to September 2019",
      Achievements: [
        "Handled interpreter requests and scheduling.",
        "Managed internal customer and interpreter database.",
        "Assisted with business development and compliance (ADA, HIPAA).",
      ],
    },
  ],
  skills: [
    {
      skillname:
        "Languages: React, JavaScript, Node, Python, Express, HTML, CSS, NoSQL, Bash",
    },
    {
      skillname:
        "AWS: Amplify, API Gateway, CLI, CloudFormation, CloudTrail, CloudWatch, Cognito, DynamoDB, EC2, ECR, ECS, ELB, IAM, Lambda, Pinpoint, Route53, S3, SNS, SQS, Transit Gateway, VPC",
    },
    {
      skillname:
        "Tools/Software: CMD, Confluence, GitLab, Jira, Kion/Cloudtamer, PowerShell, Terraform, Terragrunt",
    },
    {
      skillname: "Platforms: AWS, Azure, Docker, GCP, Linux, Windows",
    },
  ],
  portfolio: [
    {
      name: "HypeTrain",
      description:
        "I created a Python program that uses HTTP Requests and APIs to grab data from a public video game database in order to create a list of upcoming video game release dates. The user creates a list by searching for a game that they would like to keep track of and adding that game to their Watch List. The list can be modified at any time by the user. The user can also click an auto-update button that runs a function that will go through their watch list, remove any game whose release date has passed, and update any release dates that have changed. I am also working on transforming this program into a website (MERN Stack).",
      imgurl: "images/dualsense.jpg",
      url: "https://github.com/M3GH4NN/hypetrain",
    },
    {
      name: "Custom Smart Home Skills",
      description:
        "I have created several smart home skills to help deaf family members. One example is that I linked my Ring doorbell to my Echo devices and then added custom logic to flash the smart lights in the house if someone rings the doorbell. The flashing smart lights will alert my mother that someone is at the door.",
      imgurl: "images/smarthome.jpg",
    },
    {
      name: "Smart Monitor",
      description:
        "I created a smart monitor using my Raspberry Pi and a spare monitor. The monitor displays my calendar for the next four weeks, the current weather, the forecast for the rest of the week, and has a rotating background that uses images from a Google Photos smart album of my dogs.",
      imgurl: "images/20220418_090624.jpg",
    },
  ],
};

export default resumeData;
