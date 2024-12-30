import { GoHome, GoHomeFill, GoArrowUpRight } from "react-icons/go";
import {
  RiUser3Line,
  RiUser3Fill,
  RiStackFill,
  RiStackLine,
  RiBloggerFill,
  RiBloggerLine,
} from "react-icons/ri";
import { MdWork, MdWorkOutline } from "react-icons/md";
import { HiMail, HiOutlineMail } from "react-icons/hi";
import { IoIosList, IoIosListBox } from "react-icons/io";
import {
  PiLinkedinLogoLight,
  PiInstagramLogoLight,
  PiTelegramLogoLight,
  PiTwitterLogoLight,
  PiGithubLogoLight,
} from "react-icons/pi";

export const NavLinks = [
  {
    name: "Home",
    path: "/",
    icon: <GoHome size={20} />,
    iconFilled: <GoHomeFill size={20} />,
  },
  {
    name: "About",
    path: "/about",
    icon: <RiUser3Line size={20} color="#666666" />,
    iconFilled: <RiUser3Fill size={20} />,
  },

  {
    name: "Experience",
    path: "/experience",
    icon: <MdWorkOutline size={20} color="#666666" />,
    iconFilled: <MdWork size={20} />,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <IoIosList size={20} color="#666666" />,
    iconFilled: <IoIosListBox size={20} />,
  },
  {
    name: "Stack",
    path: "/stack",
    icon: <RiStackLine size={20} color="#666666" />,
    iconFilled: <RiStackFill size={20} />,
  },
  // {
  //   name: "Blogs",
  //   path: "/blogs",
  //   icon: <RiBloggerLine size={20} color="#666666"/>,
  //   iconFilled: <RiBloggerFill size={20} />,
  // },
  {
    name: "Contact",
    path: "/contact",
    icon: <HiOutlineMail size={20} color="#666666" />,
    iconFilled: <HiMail size={20} />,
  },
  {
    name: "Resume",
    path: "https://drive.google.com/file/d/1iATQB_lAUQRZV-Q1h0BOFlmAc2m67aKD/view",
    icon: <GoArrowUpRight size={20} color="#666666" />,
    iconFilled: <GoArrowUpRight size={20} />,
  },
];

export const Socials = [
  { name: "Linkedin", link: "https://www.linkedin.com/in/suryansh-sharma-776563226/", icon: <PiLinkedinLogoLight size={22} /> },
  { name: "Instagram", link: "/", icon: <PiInstagramLogoLight size={22} /> },
  { name: "Telegram", link: "/", icon: <PiTelegramLogoLight size={22} /> },
  { name: "Twitter", link: "https://twitter.com/Suryanshhsharma", icon: <PiTwitterLogoLight size={22} /> },
  { name: "Github", link: "https://github.com/suryansh9315", icon: <PiGithubLogoLight size={22} /> },
];

export const Projects = [
  {
    name: "All Swap",
    image: "/images/1.png",
    link: "https://all-swap-flax.vercel.app",
    color: "#07DAC0",
  },
  {
    name: "Fuzzie",
    image: "/images/auto_resize.png",
    link: "https://autosaas.vercel.app/",
    color: "#07DAC0",
  },
  {
    name: "Night Flinch Media",
    image: "/images/3.png",
    link: "https://www.nightfinchmedia.in/",
    color: "#CE2380",
  },
  {
    name: "3D Viewer",
    image: "/images/5.png",
    link: "https://3d-viewer-three.vercel.app",
    color: "#CE2380",
  },
  {
    name: "SS Store",
    image: "/images/6.png",
    link: "https://ecom-sanity-stripe.vercel.app",
    color: "#171810",
  },
  {
    name: "CrowdFunding",
    image: "/images/4.png",
    link: "https://crowd-funding-seven.vercel.app",
    color: "#07DAC0",
  },
];

export const Stack = [
  {
    name: "HTML5",
    purpose: "Web",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    description:
      "HTML5 is the latest version of the HyperText Markup Language used to structure content on the web.",
  },
  {
    name: "CSS3",
    purpose: "Web",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    description:
      "CSS3 is the latest version of Cascading Style Sheets used for styling web pages. It introduces features like transitions, animations, and flexbox for responsive design.",
  },
  {
    name: "Javascript",
    purpose: "Web",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    description:
      "JavaScript is a versatile programming language essential for dynamic web content. It enables interactive features like animations, form validation, and real-time updates.",
  },
  {
    name: "React",
    purpose: "Web",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    description:
      "A JavaScript library for building user interfaces, particularly single-page applications. React uses a component-based architecture and virtual DOM to optimize rendering, enabling fast, dynamic UIs that improve user experience.",
  },
  {
    name: "React Native",
    purpose: "Cross-Platform",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    description:
      "A framework for building mobile applications using JavaScript and React. It allows developers to write native apps for iOS and Android with a shared codebase, leveraging native components for performance.",
  },
  {
    name: "Django",
    purpose: "Web",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    description:
      "A high-level Python web framework that encourages rapid development and clean, pragmatic design. It includes built-in tools for handling databases, authentication, and routing, making it ideal for building secure, scalable web applications.",
  },
  {
    name: "Figma",
    purpose: "Design",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    description:
      "Figma is a cloud-based design tool used for creating user interfaces and prototypes. It enables collaboration among teams in real time.",
  },
  {
    name: "Canva",
    purpose: "Design",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
    description:
      "Canva is a user-friendly graphic design tool that enables individuals to create professional designs without prior experience.",
  },
  {
    name: "Java",
    purpose: "Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    description:
      "Java is a high-level programming language used for building cross-platform applications. Known for its 'write once, run anywhere' philosophy.",
  },
  {
    name: "Next.js",
    purpose: "Web",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    description:
      "A React-based framework for building server-side rendered (SSR) web applications. It supports static site generation, dynamic routing, API routes, and automatic code splitting.",
  },
  {
    name: "Redux",
    purpose: "State Management",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    description:
      "A predictable state container for JavaScript applications, commonly used with React. Redux manages the global state of an app, ensuring consistent data flow and simplifying debugging and testing by maintaining a central store.",
  },
  {
    name: "TailwindCSS",
    purpose: "CSS framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    description:
      "A utility-first CSS framework for rapid UI development. It provides low-level utility classes for styling, allowing developers to build custom designs without writing custom CSS, improving efficiency and maintainability.",
  },
  {
    name: "Material UI",
    purpose: "CSS framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    description:
      "A popular React UI framework that implements Google's Material Design principles. It offers a set of pre-designed, customizable components like buttons, modals, and icons, speeding up the development of responsive, modern user interfaces.",
  },
  {
    name: "Python",
    purpose: "Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    description:
      "A versatile, high-level programming language known for its readability and ease of use. Python is widely used in web development, data science, machine learning, automation, and scripting, with a large ecosystem of libraries and frameworks.",
  },
  {
    name: "FastAPI",
    purpose: "Web",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    description:
      "A modern, fast (high-performance) web framework for building APIs with Python. It is built on standard Python type hints, supporting asynchronous programming and offering automatic generation of OpenAPI documentation for easy API interaction.",
  },
  {
    name: "Streamlit",
    purpose: "Web",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
    description:
      "A framework for creating data-driven web applications with Python. It allows developers to build interactive apps for machine learning and data analysis quickly, using minimal code, ideal for prototyping and sharing data visualizations.",
  },
  {
    name: "Ethers.js",
    purpose: "Blockchain Library",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
    description:
      "A lightweight JavaScript library that simplifies interaction with the Ethereum blockchain. Ethers.js allows developers to interact with smart contracts, handle wallets, and send transactions with minimal setup and high security, often used in decentralized applications.",
  },
  {
    name: "Node.js",
    purpose: "Server",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    description:
      "A JavaScript runtime environment that allows developers to run JavaScript on the server side. Node.js is known for its asynchronous, event-driven architecture, making it suitable for scalable, high-performance web applications, including real-time applications.",
  },
  {
    name: "Express.js",
    purpose: "Server",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    description:
      "A minimal and flexible Node.js web application framework that simplifies routing, middleware integration, and request handling. Express is widely used for building RESTful APIs and web servers, enhancing development speed and flexibility.",
  },
  {
    name: "MongoDB",
    purpose: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    description:
      "A NoSQL, document-oriented database that stores data in flexible, JSON-like formats. MongoDB is ideal for applications that require scalability and flexible schema, providing high performance for read and write operations in large datasets.",
  },
  {
    name: "PostgreSQL",
    purpose: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    description:
      "An open-source, object-relational database management system known for its robustness and support for complex queries, transactions, and data integrity.",
  },
  {
    name: "Solidity",
    purpose: "Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
    description:
      "A statically-typed programming language used for writing smart contracts on the Ethereum blockchain. Solidity allows developers to build decentralized applications (dApps) by defining rules for smart contract execution on the blockchain.",
  },
  {
    name: "Hardhat",
    purpose: "Blockchain Library",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hardhat/hardhat-original.svg",
    description:
      "A development environment for building, testing, and deploying smart contracts on the Ethereum network. Hardhat provides a local Ethereum network, Solidity debugging, and other tools.",
  },
  {
    name: "Git",
    purpose: "Version Control",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    description:
      "A distributed version control system that tracks changes in source code during software development. Git allows multiple developers to collaborate, manage project versions, and handle branching and merging, ensuring a smooth development process.",
  },
  {
    name: "Github",
    purpose: "Version Control",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    description:
      "A cloud-based platform for hosting Git repositories, enabling collaboration on software development projects. GitHub offers version control, issue tracking, code reviews, and CI/CD integrations.",
  },
  {
    name: "Firebase",
    purpose: "SaaS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    description:
      "A platform for building and managing mobile and web applications, providing tools for real-time databases, authentication, hosting, analytics, and cloud functions. Firebase helps developers create scalable apps with easy-to-integrate services.",
  },
  {
    name: "AWS",
    purpose: "Cloud",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    description:
      "A cloud computing platform offering a wide range of services, including computing power, storage, databases, machine learning, and serverless functions.",
  },
];

export const Experience = [
  {
    company: "FixHealth",
    start_date: "2024",
    end_date: "present",
    designation: "FrontEnd Developer",
    summary: [
      "Improved and implemented interactive video features using 100ms API for seamless real-time video conferencing and communication between therapists and patients.",
      "Incorporated React components to build dynamic, responsive user interfaces, resulting in a 25% increase in user engagement.",
      "Utilized Airtable as the backend database to store and manage patient data, appointment schedules, and therapist availability,  which led to a 40% improvement in data retrieval speed and a 25% reduction in scheduling conflicts.",
    ],
    image: "/images/FH.png"
  },
  {
    company: "ONEV",
    start_date: "2023",
    end_date: "2024",
    designation: "Software Developer Intern",
    summary: [
      "Implemented an OTP architecture for secure and efficient driver authentication during onboarding and login processes, reducing unauthorized access attempts by 30%.",
      "Integrated Razorpay payment gateway to facilitate daily payments for drivers, resulting in a 20% reduction in payment processing time and a 15% increase in payment success rate.",
      "Firebase push notifications to keep drivers informed about important updates, payment confirmations, and attendance records, leading to a 25% improvement in driver engagement",
    ],
    image: "/images/2.png"
  },
];
