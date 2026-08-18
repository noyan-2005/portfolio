import alma1 from "../../assets/projects/alma/1.png";
import alma2 from "../../assets/projects/alma/2.png";
import alma3 from "../../assets/projects/alma/3.png";

import portfolio1 from "../../assets/projects/Portfolio/1.png";
import portfolio2 from "../../assets/projects/Portfolio/2.png";
import portfolio3 from "../../assets/projects/Portfolio/3.jpg";

import Four1 from "../../assets/projects/Four/1.jpg";
import Four2 from "../../assets/projects/Four/2.jpg";
import Four3 from "../../assets/projects/Four/3.jpg";

import Tree1 from "../../assets/projects/Tree/1.jpg";
import Tree2 from "../../assets/projects/Tree/2.png";
import Tree3 from "../../assets/projects/Tree/3.png";


export const projects = [
  {
    id: 1,
    title: "Alma",
    category: "Web Application",
    description:
      "A modern web application designed with a clean and interactive user experience.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
    ],

    images: [
      alma1,
      alma2,
      alma3,
    ],

    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/alma",

    featured: true,
  },

  {
    id: 2,
    title: "Portfolio",
    category: "Personal Website",
    description:
      "A modern personal portfolio focused on minimal design, smooth animations and strong visual presentation.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],

    images: [
      portfolio1,
      portfolio2,
      portfolio3
    ],

    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/portfolio",

    featured: true,
  },

  {
    id: 3,
    title: "Project Three",
    category: "Frontend",
    description:
      "A frontend project with a modern interface and responsive architecture.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],

    images: [
      Tree1,
      Tree2,
      Tree3,
    ],

    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project3",

    featured: false,
  },

  {
    id: 4,
    title: "Project Four",
    category: "Web Design",
    description:
      "A responsive web experience built around a simple and elegant interface.",

    technologies: [
      "React",
      "Tailwind CSS",
    ],

    images: [
      Four1,
      Four2,
      Four3,
    ],

    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project4",

    featured: false,
  },
];