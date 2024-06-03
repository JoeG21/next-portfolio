// data/projects.ts
export interface Project {
    title: string;
    description: string;
    iframeSrc: string;
    githubLink: string;
    techStack: string[];
}

export const projects: Project[] = [
    {
        title: "Astrascapes, LCC",
        description: "Created with JavaScript and React, utilizing hooks and Email.js to establish communication through the contact form for customers. Designed with CSS and Material-UI, and implemented media queries for responsiveness to all screen sizes. Hosted on Netlify.",
        iframeSrc: "https://youtube.com/embed/oBZM17t8B1A",
        githubLink: "https://github.com/Tneebs/astrascapes_website",
        techStack: ["React", "JavaScript", "Netlify"],
    },
    {
        title: "Valath",
        description: "If you want to help your community by volunteering at a local shelter, then Valath is perfect for you. It’s a volunteering website that gathers all opportunities from shelters around the Houston area and puts them in one place.",
        iframeSrc: "https://www.youtube.com/embed/tDWL4dkzYEI",
        githubLink: "https://github.com/JoeG21/valath",
        techStack: ["React", "Ruby on Rails", "JavaScript"],
    },
    {
        title: "List Keeper",
        description: "List Keeper makes tracking all of your notes convenient and allows you to delete them with a simple click. A search bar feature makes it easy to navigate through all of your notes. Simply search for the title of the note, and it will filter out and give you the most relevant findings.",
        iframeSrc: "https://www.youtube.com/embed/LLfWE3RWT3Q",
        githubLink: "https://github.com/JoeG21/mod4-project",
        techStack: ["React", "Ruby on Rails", "JavaScript"],
    },
    {
        title: "Quest and Key",
        description: "Quest and Key is a game that tests your math skills while a timer ticks away. Answering questions correctly will add time, but answering incorrectly will deduct time. See how long you can last to beat your high score.",
        iframeSrc: "https://www.youtube.com/embed/pWJkXkajmmk",
        githubLink: "https://github.com/JoeG21/Quest-Key",
        techStack: ["Ruby on Rails", "jQuery", "JavaScript"],
    },
    {
        title: "Jmakon Prime",
        description: "Jmakon Prime is an e-commerce website that allows you to browse through items and add them to your cart without logging in. However, if you want to check out without being logged in, you will be redirected to the Sign Up/Log In page.",
        iframeSrc: "https://www.youtube.com/embed/wI97XXtrkwA",
        githubLink: "https://github.com/JoeG21/Jmakon-Prime",
        techStack: ["Ruby", "Ruby on Rails", "Bootstrap"],
    },
];
