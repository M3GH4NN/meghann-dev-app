let resumeData = {
  imagebaseurl: "https://ivy555.github.io/",
  name: "Meghann Cunningham",
  role: "DevOps Engineer passionate about cloud technologies and automation 😎",
  linkedinId: "",
  skypeid: "",
  roleDescription: "",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/meghann-dev/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "https://github.com/M3GH4NN",
      className: "fa fa-github",
    },
  ],
  aboutme:
    "When I am not immersed in my work, you can find me spending time with my partner and two dogs, playing Pickleball, checking out a local brewery, or catching up on my video game backlog!",
  // address: "Saint Paul, MN",
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
      CompanyName: "EITR Technolgies",
      specialization: "Platform Engineer",
      MonthOfLeaving: "December",
      YearOfLeaving: "2022 to May 2024",
      Achievements: [
        "Develop and implement scalable, reliable, and efficient platform solutions based on business requirements and industry best practices",
        "Automate infrastructure provisioning, configuration, and deployment processes to ensure consistency and repeatability",
        "Establish and maintain DevSecOps practices",
        "Implement monitoring, logging, and alerting systems to proactively identify and resolve performance bottlenecks, scalability issues, and security vulnerabilities",
        "Ensure platform security by implementing appropriate security measures, adhering to industry standards, and conducting regular security audits and asseessments",
        "Tools and languages utilized: Python, Terraform, Terragrunt, Salt Stack, Docker, Golang, GitLab CI/CD, AWS CLI, AWS IAM, AWS S3, AWS EC2, AWS VPC, AWS DynamoDB, AWS Route53, AWS Certificate Manager, AWS Lambda, AWS CloudWatch, AWS ECS, AWS ECR, GCP, Azure",
      ],
    },

    {
      CompanyName: "Applied Insight (formerly Stratus Solutions)",
      specialization: "Game Dev Team Lead & DevOps Engineer",
      MonthOfLeaving: "September",
      YearOfLeaving: "2019 to December 2022",
      Achievements: [
        "Promoted to Game Development Team Lead in 2022",
        "Moved to a Game Development project in 2021 as the sole DevOps engineer in charge of the game's AWS infrastructure and website",
        "Responsible for making sure the website and game were compliant with NSA security standards and policies",
        "Built custom front-end and back-end components for game and website integration",
        "Made sure network security was compliant",
        "Ensured documentation for the game and website were accurate, detailed, and up to date",
        "Maintained, automated, and improved the GitLab pipelines",
        "Helped with game design and development",
        "Worked on a development team responsible for developing AWS automation tools for a classified, deployable infrastructure platform",
        "Created tools for our team to help with governance of our customers’ cloud accounts",
        "Account management, budget enforcement, and compliance automation",
        "Tools and languages utilized: React, Javascript, Node, Express, CSS, HTML, Python, Golang, JSON, YAML, Terraform, GitLab CI/CD, AWS CLI, AWS Amplify, AWS Cognito, AWS PinPoint, AWS Kinesis, AWS S3, AWS EC2, AWS VPC, AWS API, AWS DynamoDB, AWS Route53, AWS Certificate Manager, AWS Cost Explorer, AWS CloudFront, AWS CloudFormation, AWS Lambda, AWS CloudWatch, AWS SQS, AWS SMS, AWS ECS, AWS ECR, AWS GuardDuty",
      ],
    },

    {
      CompanyName: "Stratus Solutions",
      specialization: "DevOps Engineer Intern",
      MonthOfLeaving: "June",
      YearOfLeaving: "2019 to August 2019",
      Achievements: [
        "Created networking automation tools within AWS for a classified, deployable infrastructure platform",
        "The tools were immediately deployed into the project’s classified production environment",
        "Gave a presentation to the entire company on the internship project",
        "Tools and languages utilized: Python, Golang, JSON, YAML, AWS CLI, AWS CloudFormation, AWS Lambda, AWS EC2, AWS VPC, AWS API Gateway, AWS DynamoDB, AWS Transit Gateway, AWS S3, AWS CloudWatch, AWS SQS, AWS SMS, ",
      ],
    },
    {
      CompanyName: "Sign Language Connection, Inc.",
      specialization: "Office Manager",
      MonthOfLeaving: "January",
      YearOfLeaving: "2013 to September 2019",
      Achievements: [
        "Intake, assessment, and fulfillment of sign language interpreter requests",
        "Maintained and improved internal customer and interpreter database",
        "Assisted with business development",
        "Knowledgeable in the ADA and HIPAA",
      ],
    },
  ],
  skillsDescription: "",
  skills: [
    {
      skillname:
        "Languages: React, JavaScript, Node, Python, Express, HTML, CSS, NoSQL, Bash",
    },
    {
      skillname:
        "AWS: Amplify, API Gateway, CLI, CloudFormation, CloudTrail, CloudWatch, Cognito, DynamoDB, EC2, ECR, ECS, ELB, IAM, Lambda, Pinpoint, Route53, S3, SNS, SQS, Transit Gateway, VPC   ",
    },
    {
      skillname:
        "Tools/Software: CMD, Confluence, GitLab, Jira, Kion/Cloudtamer, PowerShell, Terraform, Terragrunt",
    },
    {
      skillname: "Platforms: AWS, Azure, Docker, GCP, Linux, Windows",
    },
  ],
  //   TODO: add pictures of personal projects so that the box isn't empty...
  // update hypetrain picture and gitlab to show current version of the site
  // make site live????
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
  testimonials: [
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
  ],
};
export default resumeData;
