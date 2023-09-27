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
  carrent,
  jobit,
  tripguide,
  threejs,
  ccfd,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: docker,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML Enthusiast",
    icon: mobile,
  },
];

const technologies = [
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
    {
    title: "Operational Executive",
    company_name: "StanPlus",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Apr 2021 - Mar 2022",
    points: [
      "Facilitated communication with individuals affected by COVID-19 or those with family members affected by the virus, assisting them in accessing healthcare and locating essential resources such as oxygen cylinders, ICU beds, and ventilators.",
      "Administered a comprehensive resources database and generated patient support reports, ensuring accurate maintenance of a dashboard to streamline information and aid in decision-making processes.",
      "Administered a comprehensive resources database and generated patient support reports, ensuring accurate maintenance of a dashboard to streamline information and aid in decision-making processes.",
    ],
  },
  {
    title: "DevOps Intern",
    company_name: "iServeU",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2023 - Aug 2023",
    points: [
      "Created scalable MongoDB replica sets and Cassandra Cluster on remote servers",
      "Created a monitoring dashboard for Production servers on Monit",
      "Participated in regular tasks of handling Tomcat deployments and clearing logs and root disk in VMs and creating scripts to automate day-to-day tasks",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "As a DevOps intern, their dedication to streamlining processes and enhancing efficiency was nothing short of remarkable, making a tangible impact on our development workflow.",
    name: "Nabaghan Sasamal",
    designation: "Sr. DevOps Engineer",
    company: "iServeU",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "A true full stack developer, their ability to seamlessly navigate both front-end and back-end challenges resulted in consistently robust and user-friendly applications.",
    name: "Atyasha Das",
    designation: "SDE-T",
    company: "CGI",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "During the challenging times of COVID-19, their leadership as an operational executive for our healthcare company was instrumental in ensuring the delivery of quality care and maintaining smooth operations. A true healthcare hero!",
    name: "Dr. Simran Kaur Sethi",
    designation: "Sr. Manager",
    company: "RED.health",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Krypt App",
    description:
      "Developed and deployed a decentralized application to share Goerli test ethereum.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ethereum",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Ashutosh968/krypt-app",
  },
  {
    name: "Wordle",
    description:
      "Developed a clone of popular New York Times word game - Wordle.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ashutosh968/wordle",
  },
  {
    name: "Credit Card Fraud Detection",
    description:
      "Model to recognize fraudulent credit card transactions.",
    tags: [
      {
        name: "machinelearning",
        color: "blue-text-gradient",
      },
      {
        name: "googlecolab",
        color: "pink-text-gradient",
      },
    ],
    image: ccfd,
    source_code_link: "https://github.com/Ashutosh968/coffee-live/blob/master/credit_card_fraud_detection.ipynb",
  },
    {
    name: "For the Love of Coffee",
    description:
      "Web app for coffee cup visualization that allows users to explore different coffee options by clicking on the available choices.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Ashutosh968/coffee-live/blob/master/credit_card_fraud_detection.ipynb",
  },
];

export { services, technologies, experiences, testimonials, projects };