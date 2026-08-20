import alma1 from "../../assets/projects/Alma/1.webp";
import alma2 from "../../assets/projects/alma/2.webp";
import alma3 from "../../assets/projects/alma/3.webp";
import alma4 from "../../assets/projects/alma/4.webp";

import portfolio1 from "../../assets/projects/Portfolio/1.webp";
import portfolio2 from "../../assets/projects/Portfolio/2.webp";
import portfolio3 from "../../assets/projects/Portfolio/3.webp";
import portfolio4 from "../../assets/projects/Portfolio/3.webp";

import Example1 from "../../assets/projects/Example/1.webp";
import Example2 from "../../assets/projects/Example/2.webp";
import Example3 from "../../assets/projects/Example/3.webp";

export const projects = [
  {
    id: 1,
    title: "Alma",
    category: { en: "Web Application", fa: "اپلیکیشن وب" },
    description: {
      en: "A modern calorie-tracking web application designed around a clean interface and a simple daily experience.",
      fa: "یک اپلیکیشن مدرن برای شمارش کالری که با تمرکز بر رابط کاربری تمیز و تجربه روزانه ساده طراحی شده است.",
    },
    technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    images: [alma1, alma2, alma3, alma4],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/noyan-2005/Alma",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio",
    category: { en: "Personal Website", fa: "وب‌سایت شخصی" },
    description: {
      en: "A modern personal portfolio focused on minimal design, smooth animations and strong visual presentation.",
      fa: "یک پورتفولیوی شخصی مدرن با تمرکز بر طراحی مینیمال، انیمیشن‌های نرم و ارائه بصری حرفه‌ای.",
    },
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    images: [portfolio1, portfolio2, portfolio3, portfolio4],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/noyan-2005",
    featured: true,
  },
  {
    id: 3,
    title: "Project Three",
    category: { en: "Frontend", fa: "فرانت‌اند" },
    description: {
      en: "A frontend project with a modern interface and responsive architecture.",
      fa: "یک پروژه فرانت‌اند با رابط مدرن و معماری واکنش‌گرا.",
    },
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    images: [   Example1,    Example2,   Example3],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/noyan-2005",
    featured: false,
  },
  
];
