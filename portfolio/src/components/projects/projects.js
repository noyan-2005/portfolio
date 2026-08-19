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
    category: { en: "Web Application", fa: "اپلیکیشن وب" },
    description: {
      en: "A modern calorie-tracking web application designed around a clean interface and a simple daily experience.",
      fa: "یک اپلیکیشن مدرن برای شمارش کالری که با تمرکز بر رابط کاربری تمیز و تجربه روزانه ساده طراحی شده است.",
    },
    technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    images: [alma1, alma2, alma3],
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
    images: [portfolio1, portfolio2, portfolio3],
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
    images: [Tree1, Tree2, Tree3],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/noyan-2005",
    featured: false,
  },
  {
    id: 4,
    title: "Project Four",
    category: { en: "Web Design", fa: "طراحی وب" },
    description: {
      en: "A responsive web experience built around a simple and elegant interface.",
      fa: "یک تجربه وب واکنش‌گرا با تمرکز بر رابطی ساده و ظریف.",
    },
    technologies: ["React", "Tailwind CSS"],
    images: [Four1, Four2, Four3],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/noyan-2005",
    featured: false,
  },
];
