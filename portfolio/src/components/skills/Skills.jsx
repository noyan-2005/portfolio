import { useState } from "react";
import { Code2, Server, Wrench, Palette } from "lucide-react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaGithub } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { useLanguage } from "../../context/LanguageContext";
import { getTranslations } from "../../data/translations";

const categories = [
  { id: "frontend", icon: Code2 },
  { id: "backend", icon: Server },
  { id: "tools", icon: Wrench },
  { id: "design", icon: Palette },
];

const skills = {
  frontend: [
    { key: "react", name: "React", icon: FaReact, color: "#61DAFB", level: "advanced", experience: "years3", progress: 88 },
    { key: "next", name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: "advanced", experience: "years2", progress: 82 },
    { key: "javascript", name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: "advanced", experience: "years3", progress: 86 },
    { key: "tailwind", name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: "advanced", experience: "years2", progress: 90 },
    { key: "html", name: "HTML", icon: FaHtml5, color: "#E34F26", level: "advanced", experience: "years3", progress: 94 },
    { key: "css", name: "CSS", icon: FaCss3Alt, color: "#1572B6", level: "advanced", experience: "years3", progress: 91 },
  ],
  backend: [
    { key: "python", name: "Python", icon: FaPython, color: "#3776AB", level: "learning", experience: "learning", progress: 25 },
  ],
  tools: [
    { key: "git", name: "Git", icon: FaGitAlt, color: "#F05032", level: "advanced", experience: "years3", progress: 82 },
    { key: "github", name: "GitHub", icon: FaGithub, color: "#ffffff", level: "advanced", experience: "years3", progress: 84 },
    { key: "vscode", name: "VS Code", icon: Code2, color: "#007ACC", level: "advanced", experience: "years3", progress: 95 },
  ],
  design: [
    { key: "ui", name: "UI Design", icon: Palette, color: "#A855F7", level: "intermediate", experience: "personal", progress: 88 },
  ],
};

export default function Skills() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section id="skills" className="relative min-h-screen overflow-hidden bg-[#020817] py-28">
      <div className="pointer-events-none absolute left-[15%] top-[20%] h-[350px] w-[350px] rounded-full bg-cyan-400/[0.035] blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[5%] right-[10%] h-[300px] w-[300px] rounded-full bg-blue-600/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-cyan-400">05</span>
            <span className="h-px w-8 bg-cyan-400/50" />
            <span className="text-xs font-medium tracking-[0.2em] text-slate-500">{t.skills.section}</span>
          </div>
          <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-5xl">
              {t.skills.heading}
              <span className="block text-white/35">{t.skills.headingAccent}</span>
            </h2>
            <p className="max-w-[380px] text-sm leading-6 text-slate-500 lg:text-right">{t.skills.intro}</p>
          </div>
        </div>

        <div className="mx-auto mb-9 flex max-w-[720px] flex-wrap gap-1.5 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-1.5 backdrop-blur-xl">
          {categories.map(({ id, icon: Icon }) => {
            const active = activeCategory === id;
            return (
              <button key={id} onClick={() => setActiveCategory(id)} className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${active ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-[0_8px_25px_rgba(0,180,255,0.15)]" : "text-slate-500 hover:bg-white/[0.035] hover:text-white"}`}>
                <Icon size={16} />
                <span>{t.skills.categories[id]}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {skills[activeCategory].map((skill) => <SkillCard key={skill.name} skill={skill} t={t} />)}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, t }) {
  const Icon = skill.icon;
  return (
    <article className="group relative min-h-[285px] overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#101c2d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-[#132237]">
      <div className="pointer-events-none absolute -right-14 -top-14 size-32 rounded-full bg-cyan-400/[0.06] opacity-0 blur-[55px] transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex h-[82px] items-center justify-center">
          <Icon size={48} color={skill.color} strokeWidth={0.9} className="transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="mt-3 text-[17px] font-semibold tracking-tight text-white">{skill.name}</h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-medium text-cyan-400">{t.skills.levels[skill.level]}</span>
          <span className="text-[10px] text-slate-600">{skill.progress}%</span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]">
          <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${skill.progress}%` }} />
        </div>
        <p className="mt-4 text-[12px] leading-5 text-slate-500">{t.skills.descriptions[skill.key]}</p>
        <div className="mt-4 border-t border-white/[0.06] pt-3 text-[10px] text-slate-600">{t.skills.experience[skill.experience]}</div>
      </div>
    </article>
  );
}
