import { useLanguage } from "../../context/LanguageContext";
import { getTranslations } from "../../data/translations";

const experiences = [
  {
    period: "2025",
    title: { en: "Frontend Developer", fa: "توسعه‌دهنده فرانت‌اند" },
    company: { en: "Polaris", fa: "Polaris" },
    type: { en: "Professional Experience", fa: "تجربه حرفه‌ای" },
    description: {
      en: "Worked on modern web applications using React, Next.js and Tailwind CSS, gaining hands-on experience in responsive interfaces and production-ready frontend solutions.",
      fa: "روی اپلیکیشن‌های وب مدرن با React، Next.js و Tailwind CSS کار کردم و در ساخت رابط‌های واکنش‌گرا و راهکارهای فرانت‌اند آماده تولید تجربه کسب کردم.",
    },
    tags: { en: ["React", "Next.js", "Tailwind CSS"], fa: ["React", "Next.js", "Tailwind CSS"] },
    current: false,
  },
  {
    period: "2026 — Present",
    title: { en: "Freelance Developer", fa: "توسعه‌دهنده فریلنس" },
    company: { en: "Independent", fa: "مستقل" },
    type: { en: "Freelance", fa: "فریلنس" },
    description: {
      en: "Working independently with clients and personal projects, building modern web experiences and continuously expanding my skills across frontend and backend development.",
      fa: "به‌صورت مستقل روی پروژه‌های شخصی و همکاری با مشتریان کار می‌کنم و همزمان مهارت‌هایم را در توسعه فرانت‌اند و بک‌اند گسترش می‌دهم.",
    },
    tags: { en: ["Frontend", "React", "Freelance", "Next.js"], fa: ["Frontend", "React", "Freelance", "Next.js"] },
    current: true,
  },
];

export default function Experience() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section id="experience" className="relative min-h-screen overflow-hidden bg-[#020817] py-28">
      <div className="pointer-events-none absolute left-[10%] top-[25%] h-[400px] w-[400px] rounded-full bg-brand/[0.04] blur-[130px]" />
      <div className="relative mx-auto max-w-[1350px] px-8 lg:px-12">
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-brand">03</span>
            <span className="h-px w-8 bg-brand/50" />
            <span className="text-xs font-medium tracking-[0.2em] text-text-muted">{t.experience.section}</span>
          </div>
          <h2 className="mt-6 max-w-[720px] text-4xl font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-5xl">
            {t.experience.heading}
            <span className="block text-white/35">{t.experience.headingAccent}</span>
          </h2>
          <p className="mt-6 max-w-[650px] text-sm leading-7 text-text-muted">{t.experience.intro}</p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-[105px] top-0 hidden w-px bg-white/[0.08] sm:block" />
          <div className="space-y-10">
            {experiences.map((experience) => (
              <ExperienceItem
                key={experience.period}
                experience={{
                  ...experience,
                  title: experience.title[language],
                  company: experience.company[language],
                  type: experience.type[language],
                  description: experience.description[language],
                  tags: experience.tags[language],
                }}
                currentLabel={t.experience.current}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience, currentLabel }) {
  return (
    <article className="group relative grid grid-cols-1 gap-5 sm:grid-cols-[90px_30px_1fr] sm:gap-5">
      <div className="pt-6 sm:text-right">
        <span className={`text-xs font-medium tracking-wider ${experience.current ? "text-brand" : "text-white/35"}`}>{experience.period}</span>
      </div>

      <div className="relative hidden sm:flex">
        <div className={`relative z-10 mt-8 size-3 rounded-full border ${experience.current ? "border-brand bg-brand shadow-[0_0_16px_rgba(0,213,239,0.6)]" : "border-white/20 bg-[#020817]"}`} />
      </div>

      <div className="relative max-w-[950px] overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:border-brand/20 hover:bg-white/[0.035]">
        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand/70">{experience.type}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{experience.title}</h3>
            </div>
            {experience.current && (
              <span className="flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                {currentLabel}
              </span>
            )}
          </div>
          <p className="mt-3 text-sm font-medium text-white/50">{experience.company}</p>
          <p className="mt-5 max-w-[720px] text-sm leading-7 text-text-muted">{experience.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {experience.tags.map((tag) => <span key={tag} className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[11px] text-white/45">{tag}</span>)}
          </div>
        </div>
      </div>
    </article>
  );
}
