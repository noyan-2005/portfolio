import { useState } from "react";

import {
  Code2,
  Server,
  Wrench,
  Palette,
  Clock3,
} from "lucide-react";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa6";

import {
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";


const categories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Code2,
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
  },
  {
    id: "design",
    label: "Design",
    icon: Palette,
  },
];


const skills = {
  frontend: [
    {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
        level: "Advanced",
        experience: "3+ years",
        description: "Building modern and interactive interfaces.",
        progress: 88,
    },

    {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#ffffff",
        level: "Advanced",
        experience: "2+ years",
        description: "Building scalable and production-ready web apps.",
        progress: 82,
    },

    {
        name: "JavaScript",
        icon: FaJs,
        color: "#F7DF1E",
        level: "Advanced",
        experience: "3+ years",
        description: "Developing interactive web experiences.",
        progress: 86,
    },

    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        level: "Advanced",
        experience: "2+ years",
        description: "Creating clean and responsive interfaces.",
        progress: 90,
    },

    {
        name: "HTML",
        icon: FaHtml5,
        color: "#E34F26",
        level: "Advanced",
        experience: "3+ years",
        description: "Building semantic web structures.",
        progress: 94,
    },

    {
        name: "CSS",
        icon: FaCss3Alt,
        color: "#1572B6",
        level: "Advanced",
        experience: "3+ years",
        description: "Crafting responsive layouts and visual systems.",
        progress: 91,
        },
  ],

  backend: [
    {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
        level: "Learning",
        experience: "Currently learning",
        description: "Exploring backend development with Python.",
        progress: 45,
    },
  ],

  tools: [
    {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
        level: "Advanced",
        experience: "3+ years",
        description: "Version control and development workflows.",
        progress: 82,
    },

    {
        name: "GitHub",
        icon: FaGithub,
        color: "#ffffff",
        level: "Advanced",
        experience: "3+ years",
        description: "Managing repositories and collaboration.",
        progress: 84,
    },

   {
        name: "VS Code",
        icon: Code2,
        color: "#007ACC",
        level: "Advanced",
        experience: "3+ years",
        description: "Daily development environment.",
        progress: 95,
    },
  ],

  design: [
    {
      name: "UI Design",
      icon: Palette,
      color: "#A855F7",
      level: "Intermediate",
      experience: "Personal projects",
      description: "Designing clean and modern interfaces.",
      progress: 68,
    },
  ],
};


export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeSkills = skills[activeCategory];

  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#020817]
        py-28
      "
    >

      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[20%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan-400/[0.035]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[5%]
          right-[10%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-blue-600/[0.035]
          blur-[120px]
        "
      />


      <div
        className="
          relative
          mx-auto
          max-w-[1400px]
          px-8
          lg:px-12
        "
      >

        {/* =========================
            Header
        ========================== */}

        <div className="mb-10">

          <div className="flex items-center gap-3">

            <span
              className="
                text-xs
                font-semibold
                tracking-[0.25em]
                text-cyan-400
              "
            >
              05
            </span>

            <span className="h-px w-8 bg-cyan-400/50" />

            <span
              className="
                text-xs
                font-medium
                tracking-[0.2em]
                text-slate-500
              "
            >
              MY SKILLS
            </span>

          </div>


          <div
            className="
              mt-5
              flex
              flex-col
              gap-4
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            <h2
              className="
                text-4xl
                font-bold
                leading-[1.1]
                tracking-[-0.035em]
                text-white
                sm:text-5xl
              "
            >
              Tools I use to
              <span className="block text-white/35">
                turn ideas into reality.
              </span>
            </h2>

            <p
              className="
                max-w-[380px]
                text-sm
                leading-6
                text-slate-500
                lg:text-right
              "
            >
              Technologies and tools I use to build
              modern digital experiences.
            </p>

          </div>

        </div>


        {/* =========================
            Category Navigation
        ========================== */}

        <div
          className="
            mx-auto
            mb-9
            flex
            max-w-[720px]
            flex-wrap
            gap-1.5
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.025]
            p-1.5
            backdrop-blur-xl
          "
        >

          {categories.map((category) => {

            const Icon = category.icon;

            const active =
              activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() =>
                  setActiveCategory(category.id)
                }
                className={`
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        bg-gradient-to-r
                        from-cyan-400
                        to-blue-600
                        text-white
                        shadow-[0_8px_25px_rgba(0,180,255,0.15)]
                      `
                      : `
                        text-slate-500
                        hover:bg-white/[0.035]
                        hover:text-white
                      `
                  }
                `}
              >

                <Icon size={16} />

                <span>{category.label}</span>

              </button>
            );
          })}

        </div>


        {/* =========================
            Skills Grid
        ========================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-6
          "
        >

          {activeSkills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
            />
          ))}

        </div>

      </div>
    </section>
  );
}


/* =================================
   Skill Card
================================= */

function SkillCard({ skill }) {

  const Icon = skill.icon;

  return (
    <article
      className="
        group
        relative
        min-h-[285px]
        overflow-hidden
        rounded-[18px]
        border
        border-white/[0.07]
        bg-[#101c2d]
        p-5
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-cyan-400/20
        hover:bg-[#132237]
      "
    >

      {/* Hover Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-14
          -top-14
          size-32
          rounded-full
          bg-cyan-400/[0.06]
          opacity-0
          blur-[55px]
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />


      <div className="relative">

        {/* Technology Icon */}

        <div
          className="
            flex
            h-[82px]
            items-center
            justify-center
          "
        >

          <Icon
            size={48}
            color={skill.color}
            strokeWidth={0.9}
            className="
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

        </div>


        {/* Name */}

        <h3
          className="
            mt-3
            text-[17px]
            font-semibold
            tracking-tight
            text-white
          "
        >
          {skill.name}
        </h3>


        {/* Level */}

        <div
          className="
            mt-3
            flex
            items-center
            justify-between
          "
        >

          <span
            className="
              text-xs
              font-medium
              text-cyan-400
            "
          >
            {skill.level}
          </span>

          <span
            className="
              text-[10px]
              text-slate-600
            "
          >
            {skill.progress}%
          </span>

        </div>


        {/* Progress */}

        <div
          className="
            mt-2
            h-1
            overflow-hidden
            rounded-full
            bg-white/[0.06]
          "
        >

          <div
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
            "
            style={{
              width: `${skill.progress}%`,
            }}
          />

        </div>


        {/* Description */}

        <p
          className="
            mt-4
            text-[12px]
            leading-5
            text-slate-500
          "
        >
          {skill.description}
        </p>


        {/* Footer */}

        <div
          className="
            mt-4
            flex
            items-center
            gap-1.5
            border-t
            border-white/[0.06]
            pt-3
            text-[10px]
            text-slate-600
          "
        >

          <Clock3 size={12} />

          <span>{skill.experience}</span>

        </div>

      </div>

    </article>
  );
}