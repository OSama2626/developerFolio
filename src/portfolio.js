/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Oussama Abouhafs",
  title: "Hi, I'm Oussama Abouhafs",
  subTitle: emoji(
    "Recently graduated Full-Stack Software Engineer focused on building secure, maintainable web applications with Java, Spring Boot, Angular, React, Next.js, TypeScript, and PostgreSQL."
  ),
  resumeLink: "src/containers/greeting/resume.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/OSama2626",
  linkedin: "https://www.linkedin.com/in/abouhafs-oussama-5539692b7/",
  gmail: "oussama.abouhafs04@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle:
    "Full-stack engineering with a strong Java/Spring Boot backend foundation and modern React, Angular, and Next.js frontends.",
  skills: [
    emoji(
      "Build REST APIs, authentication flows, role management, schedulers, and dashboards using Java, Spring Boot, Spring Security, JPA/Hibernate, and SQL databases."
    ),
    emoji(
      "Develop responsive frontends with Angular, React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML, and CSS."
    ),
    emoji(
      "Work with PostgreSQL, SQL Server, MySQL, MongoDB, Docker, Git/GitHub, CI/CD, Linux, UML, Agile/Scrum, and Jira."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "SQL Server",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git/GitHub",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "AWS/Azure",
      fontAwesomeClassname: "fas fa-cloud"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "National School of Mines of Rabat - ENSMR",
      logo: require(
        "./assets/images/LOGO_MINES-RABAT_vectoriel_2017_vectorise-909x1024.png"
      ),
      subHeader: "Engineering Program - Computer Science, Data Engineering track",
      duration: "2023 - 2026",
      desc: "Rabat, Morocco"
    },
    {
      schoolName: "Preparatory Classes for Engineering Schools - CPGE",
      logo: null,
      subHeader: "Mathematics and Physics track",
      duration: "2021 - 2023"
    },
    {
      schoolName: "Baccalaureate, Mathematical Sciences - Option A",
      logo: null,
      subHeader: "With Highest Honors",
      duration: "2021"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend: Java, Spring Boot, REST APIs, Security",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend: Angular, React, Next.js, TypeScript",
      progressPercentage: "85%"
    },
    {
      Stack: "Databases & DevOps: PostgreSQL, SQL Server, Docker, CI/CD",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Final Year Project - Ticketing Management System",
      company: "Barid Cash, Information Systems Department",
      companylogo: require("./assets/images/barid-cash-logo.png"),
      companyLogoAlt: "Barid Cash logo",
      date: "February - June 2026 | 5 months",
      desc: "Built an internal ticketing platform based on ERM HUB workflows.",
      descBullets: [
        "Modeled 6 user roles and a 12-state ticket lifecycle.",
        "Built JWT access, routing, SLA tracking, notifications, and dashboards.",
        "Led delivery across 5 Scrum sprints with the Product Owner."
      ]
    },
    {
      role: "Year-End Project - Railway Safety Inspection Management",
      company: "ONCF, Information Systems Department",
      companylogo: require("./assets/images/oncf-logo.png"),
      companyLogoAlt: "ONCF logo",
      date: "July - September 2025 | 3 months",
      desc: "Built a KN1 railway safety inspection application for ONCF.",
      descBullets: [
        "Modeled workflows and implemented the SAMI scoring engine.",
        "Added certification alerts and KPI reporting dashboards."
      ]
    },
    {
      role: "Introductory Internship",
      company: "ONCF, General Management",
      companylogo: require("./assets/images/oncf-logo.png"),
      companyLogoAlt: "ONCF logo",
      date: "August 2024 | 1 month",
      desc: "Created a web platform introducing ONCF IT services.",
      descBullets: [
        "Built service pages and an interactive department map.",
        "Added a careers page with resume submissions."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Selected projects

const bigProjects = {
  title: "Selected Projects",
  subtitle:
    "Academic and engineering projects focused on secure platforms, automation, and full-stack product development.",
  projects: [
    {
      image: require("./assets/images/baridcash-logo.png"),
      projectName: "Barid Cash Ticketing Management Platform",
      projectValue: "Internal Ticketing Workflow Platform",
      projectDesc:
        "Internal ticketing platform with ERM HUB workflows, JWT access, role-based dashboards, automated routing, SLA tracking, and notifications.",
      highlights: [
        "ERM HUB workflows and role-based dashboards",
        "SLA monitoring, automatic routing, and ticket closure",
        "JWT authentication with Spring Security"
      ],
      technologies: [
        "Java 17",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "SQL Server",
        "Angular 15",
        "TypeScript"
      ],
      footerLink: [],
      featured: true
    },
    {
      image: require("./assets/images/frauddetect-logo.png"),
      projectName: "FraudDetect",
      projectValue: "Automated Check Fraud Detection Platform",
      projectDesc:
        "Check fraud detection platform combining AI analysis with secure multi-actor management.",
      highlights: [
        "CNN, OCR, and signature verification",
        "Secure multi-actor management",
        "2FA/JWT authentication"
      ],
      technologies: [
        "React.js",
        "FastAPI",
        "PostgreSQL",
        "CNN",
        "OCR",
        "Siamese Network",
        "2FA/JWT"
      ],
      footerLink: []
    },
    {
      image: require("./assets/images/SentinelAI-logo.png"),
      projectName: "SentinelAI",
      projectValue: "AI Security Audit SaaS",
      projectDesc:
        "Full-stack SaaS platform automating website security audits for XSS, SQL Injection, and CSRF through REST APIs and OWASP ZAP, with report generation and Docker deployment.",
      highlights: [
        "OWASP ZAP automated auditing",
        "XSS, SQL Injection, and CSRF checks",
        "Report generation and Docker deployment"
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OWASP ZAP",
        "Docker"
      ],
      footerLink: []
    },
    {
      image: require("./assets/images/enimsports-logo.png"),
      projectName: "ENIMSPORTS",
      projectValue: "Integrated Sports Platform",
      projectDesc:
        "Tournament management and field booking platform with automatic match scheduling, notifications, and continuous deployment via Vercel and GitHub Actions.",
      highlights: [
        "Tournament management and field booking",
        "Automatic match scheduling and notifications",
        "Continuous deployment with Vercel and GitHub Actions"
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Next.js",
        "MongoDB",
        "Tailwind CSS",
        "Vercel",
        "GitHub Actions"
      ],
      footerLink: []
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle: "",
  achievementsCards: [],
  display: false
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my latest resume.",
  display: true
};

const contactInfo = {
  title: emoji("Contact"),
  subtitle:
    "I am open to full-stack software engineering opportunities, internships, and early-career roles.",
  number: "+212 666 36 71 41",
  email_address: "oussama.abouhafs04@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
