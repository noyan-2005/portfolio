import EducationItem from "./EducationItem";
import { useLanguage } from "../../context/LanguageContext";
import { getTranslations } from "../../data/translations";

const education = [
  {
    year: "2023",
    title: { en: "Computer Engineering", fa: "مهندسی کامپیوتر" },
    type: { en: "Bachelor's Degree", fa: "مقطع کارشناسی" },
    institution: { en: "University", fa: "دانشگاه" },
    description: {
      en: "Studying computer engineering while building practical experience through programming, frontend development and personal projects.",
      fa: "در حال تحصیل در رشته مهندسی کامپیوتر و همزمان کسب تجربه عملی از طریق برنامه‌نویسی، توسعه فرانت‌اند و پروژه‌های شخصی.",
    },
    tags: { en: ["Computer Science", "Programming", "Software Development"], fa: ["علوم کامپیوتر", "برنامه‌نویسی", "توسعه نرم‌افزار"] },
    current: true,
  },
  {
    year: "2023",
    title: { en: "Frontend Development", fa: "توسعه فرانت‌اند" },
    type: { en: "Self-directed Learning", fa: "یادگیری خودآموز" },
    institution: { en: "Independent Learning", fa: "یادگیری مستقل" },
    description: {
      en: "Continuously learning modern frontend technologies and applying them through real-world projects and experiments.",
      fa: "به‌صورت مداوم فناوری‌های مدرن فرانت‌اند را یاد می‌گیرم و آن‌ها را در پروژه‌ها و آزمایش‌های واقعی به کار می‌برم.",
    },
    tags: { en: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"], fa: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
    current: true,
  },
  {
    year: "2025 — 2026",
    title: { en: "Product & Digital Development", fa: "توسعه محصول دیجیتال" },
    type: { en: "Practical Experience", fa: "تجربه عملی" },
    institution: { en: "Personal Projects", fa: "پروژه‌های شخصی" },
    description: {
      en: "Learning through building digital products, exploring product thinking, UI/UX and the process of turning ideas into working products.",
      fa: "از طریق ساخت محصولات دیجیتال، تفکر محصول، UI/UX و تبدیل ایده‌ها به محصولات واقعی در حال یادگیری هستم.",
    },
    tags: { en: ["Product Thinking", "UI/UX", "Startup", "Problem Solving"], fa: ["تفکر محصول", "UI/UX", "استارتاپ", "حل مسئله"] },
    current: true,
  },
  {
    year: "2026 — Now",
    title: { en: "Backend Development", fa: "توسعه بک‌اند" },
    type: { en: "Self-directed Learning", fa: "یادگیری خودآموز" },
    institution: { en: "Independent Learning", fa: "یادگیری مستقل" },
    description: {
      en: "Learning backend development with Python, focusing on APIs, databases and server-side application development.",
      fa: "در حال یادگیری توسعه بک‌اند با Python و تمرکز روی APIها، دیتابیس و توسعه سمت سرور.",
    },
    tags: { en: ["Python", "Backend", "APIs", "Databases"], fa: ["Python", "Backend", "API", "Database"] },
    current: true,
  },
];

export default function Education() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section id="education" className="relative min-h-screen overflow-hidden bg-[#020817] py-2">
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-brand/[0.04] blur-[130px]" />
      <div className="relative mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-brand">02</span>
            <span className="h-px w-8 bg-brand/50" />
            <span className="text-xs font-medium tracking-[0.2em] text-text-muted">{t.education.section}</span>
          </div>
          <h2 className="mt-6 max-w-[700px] text-4xl font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-5xl">
            {t.education.heading}
            <span className="block text-white/35">{t.education.headingAccent}</span>
          </h2>
          <p className="mt-6 max-w-[620px] text-sm leading-7 text-text-muted">{t.education.intro}</p>
        </div>

        <div className="relative">
          {education.map((item) => (
            <EducationItem
              key={`${item.year}-${item.title.en}`}
              {...item}
              title={item.title[language]}
              type={item.type[language]}
              institution={item.institution[language]}
              description={item.description[language]}
              tags={item.tags[language]}
              currentLabel={t.education.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
