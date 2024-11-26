import {
    backend,
    coding_ninjas,
    cogitate,
    creator,
    edge,
    figma,
    git,
    graphql,
    guildhub,
    javascript,
    jobit,
    mobile,
    mongodb,
    nextjs,
    nodejs,
    python,
    reactjs,
    redux,
    shopify,
    sinss,
    tailwind,
    threejs,
    tripguide,
    typescript,
    web,
} from "../assets";

export const navLinks = [{
    id: "about", title: "About",
}, {
    id: "work", title: "Work",
}, {
    id: "contact", title: "Contact",
},];

const services = [{
    title: "FrontEnd Developer", icon: web,
}, {
    title: "FullStack Developer", icon: mobile,
}, {
    title: "Webflow Developer", icon: backend,
}, {
    title: "Automator", icon: creator,
},];

const technologies = [{
    name: "React JS", icon: reactjs,
}, {
    name: "Next JS", icon: nextjs,
}, {
    name: "TypeScript", icon: typescript,
}, {
    name: "Redux Toolkit", icon: redux,
}, {
    name: "Tailwind CSS", icon: tailwind,
}, {
    name: "GraphQL", icon: graphql,
}, {
    name: "Three JS", icon: threejs,
}, {
    name: "Node JS", icon: nodejs,
}, {
    name: "MongoDB", icon: mongodb,
}, {
    name: "JavaScript", icon: javascript,
}, {
    name: "Python", icon: python,
}, {
    name: "Git", icon: git,
}, {
    name: "Figma", icon: figma,
}
//     name: "CSS 3", icon: css,
// }, {
//     name: "HTML 5", icon: html,
];

const experiences = [{
    title: "Full Stack Software Intern",
    company_name: "Herbs Magic",
    company_url: "https://herbsmagic.in/",
    icon: edge,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: ["Led the development of user-facing features, transforming complex designs into smooth, high-quality code.",
        "Worked closely with various teams, contributing to agile development cycles for efficient project completion.",
        "Conducted comprehensive code reviews, ensuring code quality and adherence to project standards.",
        "Translated intricate designs into functional code, ensuring seamless user experience and interface.",
        "Collaborated cross-functionally, fostering a team-oriented environment for efficient problem-solving and project progression.",],
},  {
    title: "Doubt Solver",
    company_name: "Vedantu",
    company_url: "https://www.vedantu.com/",
    icon: edge,
    iconBg: "#E6DEDD",
    date: "Sept 2020 - Dec 2020",
    points: ["Provided online doubt-solving support to students.",
    " Received 450+ 5-star reviews for exceptional service.",
    " Conducted multiple tutoring sessions to assist students.",
    " Facilitated self-learning and promoted logical thinking in students",],
},];

const testimonials = [
    {
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    }, {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    }, {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },];

const projects = [{
    name: "GuildHub",
    description: "A dynamic communication platform enabled with Real-time messaging, Multimedia sharing, Live streaming, Video Communications and diverse channels.",
    tags: [{
        name: "NextJS", color: "blue-text-gradient",
    }, {
        name: "MySQL", color: "green-text-gradient",
    }, {
        name: "Socket.io", color: "pink-text-gradient",
    },],
    image: guildhub,
    source_code_link: "",
    deployed_link: "",
}, {
    name: "Job IT",
    description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [{
        name: "react", color: "blue-text-gradient",
    }, {
        name: "restapi", color: "green-text-gradient",
    }, {
        name: "scss", color: "pink-text-gradient",
    },],
    image: jobit,
    source_code_link: "https://github.com/",
}, {
    name: "Trip Guide",
    description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [{
        name: "nextjs", color: "blue-text-gradient",
    }, {
        name: "supabase", color: "green-text-gradient",
    }, {
        name: "css", color: "pink-text-gradient",
    },],
    image: tripguide,
    source_code_link: "https://github.com/",
},];

export {services, technologies, experiences, testimonials, projects};
