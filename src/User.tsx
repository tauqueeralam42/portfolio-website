import { IconBrandGithub, IconMail, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Tauqueer Alam",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Technology Enthusiast"],
    bio: "I'm a passionate software developer specializing in the MERN stack. With expertise in C, C++, and Java, I excel in building efficient, scalable web applications. I have solved 650+ problems on LeetCode and developed real-time chat and e-commerce applications. Let's connect and create something amazing together!"
}



const ProjectInfo = [
    {
        title: "Connectly - Chat Application",
        desc: "Connectly is a real-time chat application built with the MERN stack using Vite, React.js, and Tailwind CSS. It features secure JWT-based authentication for user login, real-time messaging via Socket.IO, media sharing (images and videos) through Cloudinary.",
        image: `${process.env.PUBLIC_URL}/connectly.png`,
        live: true,
        technologies: ["React.js", "Tailwind", "Node.js", "MongoDB", "JWT"],
        link: "https://tauqueer-connectly-chat-app.netlify.app/",
        github: "https://github.com/tauqueeralam42/mern-real-time-chat-app"
    },
    {
        title: "Pizza Shop Web Application",
        desc: "Implemented a full-stack web application focusing on user and admin portals, integrating payment gateway, database, and backend functionalities. Admin features include managing orders, adding, deleting, and editing pizza items, while users can place orders seamlessly. Technologies: React.js, Node.js, Express.js, MongoDB.",
        image: `${process.env.PUBLIC_URL}/pizzaShop.png`,
        live: true,
        technologies:  ["React.js", "MongoDB", "Tailwind", "Node.js",  "JWT"],
        link: "https://pizza-virus.netlify.app/",
        github: "https://github.com/tauqueeralam42/pizza-shop-mern-app"
    },
    {
        title: "File Sharing Web Application",
        desc: "File Sharing Web Application is a modern tool built with Vite, React, Node.js, Express, Multer, and MongoDB that allows users to upload files of any type and receive unique links for secure sharing. The application features a user-friendly interface for file uploads, ensures files are only accessible through their unique links, and stores both file data and metadata in MongoDB for reliable persistence. Its responsive design ensures compatibility across various devices, offering a seamless user experience.",
        image: `${process.env.PUBLIC_URL}/filesharing.png`,
        live: true,
        technologies: ["Express.js", "React.js", "MongoDB", "Node.js"],
        link: "https://tauqueer-file-sharing-app.netlify.app",
        github: "https://github.com/tauqueeralam42/file-sharing-mern"
    },
    {
        title: "Weather Application",
        desc: "A simple and user-friendly web application that provides real-time weather information based on the user's current location or any city name. The app displays detailed weather data including current temperature, feels-like temperature, sunrise and sunset times, wind speed, cloudiness, and humidity.",
        image: `${process.env.PUBLIC_URL}/weather.png`,
        live: true,
        technologies: ["JavaScript", "API", "HTML","CSS"],
        link: "https://tauqueer-weather-app.netlify.app/",
        github: "https://github.com/tauqueeralam42/weather-web-app"
    },
    {
        title: "OS Scheduling Algorithms",
        desc: "The OS Scheduling Algorithms project provides a comprehensive platform for simulating various CPU scheduling techniques, including FCFS, SJF, Round Robin, LJF, Priority Scheduling, LRTF, and SRTF. Users can input arrival and burst times for processes, and the application generates a scheduling table that displays detailed process information such as Arrival Time, Burst Time, Priority, Response Time, Turnaround Time, Completion Time, Waiting Time, and color coding. The project also calculates and displays average Completion Time and Turnaround Time, offering a clear insight into the performance of each scheduling algorithm.",
        image: `${process.env.PUBLIC_URL}/scheduling.png`,
        live: true,
        technologies: ["JavaScript", "HTML", "CSS"],
        link: "https://tauqueeralam42.github.io/os-scheduling-algorithms/",
        github: "https://github.com/tauqueeralam42/os-scheduling-algorithms"
    },
    {
        title: "Random Password Generator",
        desc: "The Random Password Generator is a simple web application that allows users to generate secure, random passwords. The application offers customizable options to include numbers, uppercase letters, lowercase letters, and symbols. Additionally, users can specify the length of the password and easily copy the generated password to the clipboard.",
        image: `${process.env.PUBLIC_URL}/random.png`,
        live: true,
        technologies: ["JavaScript", "HTML", "CSS"],
        link: "https://tauqueer-random-password-generator.netlify.app/",
        github: "https://github.com/tauqueeralam42/random-password-generator"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite"]
    }
]
const socialLinks = [
    { link: "https://github.com/tauqueeralam42", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/tauqueer--alam/", icon: IconBrandLinkedin },
    { link: "https://leetcode.com/u/tauqueeralam42/", icon: IconBrandLeetcode },
    { link: "mailto:tauqueeralam42@gmail.com", icon: IconMail },
    { link: "", icon: IconBrandYoutube }
    
];


const ExperienceInfo = [
    {
        role: "Specialist Programmer",
        company: "Infosys",
        date: "Oct 2023 - Present",
        desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
    {
        role: "System Engineer",
        company: "Infosys",
        date: "Nov 2022 - Sep 2023",
        desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
        skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };