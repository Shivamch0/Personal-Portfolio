
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  Home,
  landing,
  canva,
  careerLens,
  optivio,
  taskflow,
  learnHub,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  // {
  //   id: "source-code",
  //   title: "Source Code",
  //   link: "http://www.github.com/sanidhyy/3d-portfolio",
  // },
] as const;

// Services
export const SERVICES = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "canva",
    icon: canva,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Java Developer",
    company_name: "Excellence Technology,Hamirpur",
    icon: backend,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Learned Core Java concepts including OOP principles, collections framework, exception handling, and file handling.",
      "Developed Java applications and mini projects to strengthen practical programming skills.",
      "Practiced problem-solving and logical programming using Java.",
      "Gained understanding of database connectivity (JDBC) and basic application development",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Excellence Technology,Hamirpur",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "June 2025 - August 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Udemy/Excellence Technology,Mohali",
    icon: nodejs,
    iconBg: "#383E56",
    date: "Jan 2026 - April 2026",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "LearnHub LMS",
    description:
      "A modern LMS with secure authentication, online course enrollment, Stripe payments, educator dashboards, lecture progress tracking, and course rating functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
    ],
    image: learnHub,
    source_code_link: "https://github.com/Shivamch0/Learning-Management-System",
    live_site_link: "https://lmsfrontend-sandy.vercel.app/",
  },
  {
    name: "CareerLens",
    description:
      " CareerLens AI is an intelligent career guidance platform that analyzes user skills, interests, and aptitude to recommend  career paths with actionable roadmaps.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: careerLens,
    source_code_link: "https://github.com/Shivamch0/CareerLens-AI",
    live_site_link: "https://career-lens-ai-beige.vercel.app/",
  },
  {
    name: "Optivio AI",
    description:
      "Developed Optivio AI, A SaaS platform that leverages AI to automate SEO analysis, competitor monitoring, keyword insights, and digital marketing content generation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "grok-AI",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: optivio,
    source_code_link: "https://github.com/Shivamch0/Optivio-AI",
    live_site_link: "https://optivio-ai.vercel.app/",
  },
  {
    name: "TaskFlow",
    description:
      "TaskFlow is a full-stack task management application designed to help teams and individuals organize projects, track tasks, and improve productivity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: taskflow,
    source_code_link: "https://github.com/Shivamch0/TaskFlow",
    live_site_link: "https://task-flow-mu-self.vercel.app/",
  },
  {
    name: "Sentrachat",
    description:
      "A real-time chat application with AI-powered emotion tracking (Positive/Neutral/Negative), secure authentication, and scalable cloud deployment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Home,
    source_code_link: "https://github.com/Shivamch0/SentraChat",
    live_site_link: "https://sentra-chat.vercel.app/",
  },
  {
    name: "CEMS",
    description:
      "A full-stack web application designed to manage campus events efficiently with role-based access, real-time updates, and data analytics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeMailer",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: landing,
    source_code_link: "https://github.com/Shivamch0/College-Management-System",
    live_site_link: "https://college-management-system-weld.vercel.app/",
  },
] as const;

export const SOCIALS = [
  // {
  //   name: "YouTube",
  //   icon: youtube,
  //   link: "https://www.youtube.com/@OPGAMER.",
  // },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/shivam-choudhary-28a019346",
  },
  // {
  //   name: "Twitter",
  //   icon: twitter,
  //   link: "https://x.com/_sanidhyy",
  // },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Shivamch0",
    
  },
] as const;
