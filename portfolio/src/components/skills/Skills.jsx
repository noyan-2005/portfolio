import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  Server,
  Wrench,
  Palette,
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

import { useLanguage } from "../../context/LanguageContext";
import { getTranslations } from "../../data/translations";

const categories = [
  {
    id: "frontend",
    icon: Code2,
  },
  {
    id: "backend",
    icon: Server,
  },
  {
    id: "tools",
    icon: Wrench,
  },
  {
    id: "design",
    icon: Palette,
  },
];

const skills = {
  frontend: [
    {
      key: "react",
      name: "React",
      icon: FaReact,
      color: "#61DAFB",
      level: "advanced",
      experience: "years3",
      progress: 88,
    },
    {
      key: "next",
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#ffffff",
      level: "advanced",
      experience: "years2",
      progress: 82,
    },
    {
      key: "javascript",
      name: "JavaScript",
      icon: FaJs,
      color: "#F7DF1E",
      level: "advanced",
      experience: "years3",
      progress: 86,
    },
    {
      key: "tailwind",
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
      level: "advanced",
      experience: "years2",
      progress: 90,
    },
    {
      key: "html",
      name: "HTML",
      icon: FaHtml5,
      color: "#E34F26",
      level: "advanced",
      experience: "years3",
      progress: 94,
    },
    {
      key: "css",
      name: "CSS",
      icon: FaCss3Alt,
      color: "#1572B6",
      level: "advanced",
      experience: "years3",
      progress: 91,
    },
  ],

  backend: [
    {
      key: "python",
      name: "Python",
      icon: FaPython,
      color: "#3776AB",
      level: "learning",
      experience: "learning",
      progress: 25,
    },
  ],

  tools: [
    {
      key: "git",
      name: "Git",
      icon: FaGitAlt,
      color: "#F05032",
      level: "advanced",
      experience: "years3",
      progress: 82,
    },
    {
      key: "github",
      name: "GitHub",
      icon: FaGithub,
      color: "#ffffff",
      level: "advanced",
      experience: "years3",
      progress: 84,
    },
    {
      key: "vscode",
      name: "VS Code",
      icon: Code2,
      color: "#007ACC",
      level: "advanced",
      experience: "years3",
      progress: 95,
    },
  ],

  design: [
    {
      key: "ui",
      name: "UI Design",
      icon: Palette,
      color: "#A855F7",
      level: "intermediate",
      experience: "personal",
      progress: 88,
    },
  ],
};

export default function Skills() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const [activeCategory, setActiveCategory] =
    useState("frontend");

  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-background
        text-text-primary
        py-20
        sm:py-24
        lg:py-28
        transition-colors
        duration-300
      "
    >
      {/* =========================
          Background Glow
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[15%]
          h-[220px]
          w-[220px]
          rounded-full
          bg-brand/[0.05]
          blur-[100px]

          sm:left-[10%]
          sm:h-[280px]
          sm:w-[280px]

          lg:left-[15%]
          lg:top-[20%]
          lg:h-[350px]
          lg:w-[350px]
          lg:blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[5%]
          right-[5%]
          h-[220px]
          w-[220px]
          rounded-full
          bg-brand/[0.035]
          blur-[100px]

          sm:h-[260px]
          sm:w-[260px]

          lg:right-[10%]
          lg:h-[300px]
          lg:w-[300px]
          lg:blur-[120px]
        "
      />

      {/* =========================
          Container
      ========================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1400px]
          px-5

          sm:px-7
          md:px-8
          lg:px-12
        "
      >
        {/* =========================
            Header
        ========================== */}

        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-brand

                sm:text-xs
              "
            >
              05
            </span>

            <span className="h-px w-6 bg-brand/50 sm:w-8" />

            <span
              className="
                text-[10px]
                font-medium
                tracking-[0.15em]
                text-text-muted

                sm:text-xs
                sm:tracking-[0.2em]
              "
            >
              {t.skills.section}
            </span>
          </div>

          <div
            className="
              mt-4
              flex
              flex-col
              gap-4

              sm:mt-5

              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-8
            "
          >
            <h2
              className="
                text-3xl
                font-bold
                leading-[1.1]
                tracking-[-0.035em]
                text-text-primary

                sm:text-4xl
                md:text-5xl
              "
            >
              {t.skills.heading}

              <span className="block text-text-primary/35">
                {t.skills.headingAccent}
              </span>
            </h2>

            <p
              className="
                max-w-[380px]
                text-xs
                leading-6
                text-text-muted

                sm:text-sm

                lg:text-right
              "
            >
              {t.skills.intro}
            </p>
          </div>
        </div>

        {/* =========================
            Category Tabs
        ========================== */}

        <div
          className="
            mx-auto
            mb-7
            flex
            w-full
            max-w-[720px]
            flex-wrap
            gap-1
            rounded-2xl
            border
            border-border
            bg-surface/50
            p-1
            backdrop-blur-xl

            sm:mb-9
            sm:gap-1.5
            sm:p-1.5
          "
        >
          {categories.map(
            ({ id, icon: Icon }) => {
              const active =
                activeCategory === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(id)
                  }
                  className={`
                    relative
                    flex
                    min-w-0
                    flex-1
                    cursor-pointer
                    items-center
                    justify-center
                    gap-1.5
                    rounded-xl
                    px-2
                    py-2.5
                    text-[11px]
                    font-medium
                    transition-colors
                    duration-300

                    sm:gap-2
                    sm:px-4
                    sm:text-sm

                    ${
                      active
                        ? "text-background"
                        : "text-text-muted hover:bg-surface hover:text-text-primary"
                    }
                  `}
                >
                  {active && (
                    <motion.div
                      layoutId="skills-active-tab"
                      className="
                        absolute
                        inset-0
                        rounded-xl
                        bg-brand
                      "
                      transition={{
                        duration: 0.25,
                        ease: "linear",
                      }}
                    />
                  )}

                  <Icon
                    size={14}
                    className="
                      relative
                      z-10
                      shrink-0

                      sm:h-4
                      sm:w-4
                    "
                  />

                  <span
                    className="
                      relative
                      z-10
                      truncate
                    "
                  >
                    {t.skills.categories[id]}
                  </span>
                </button>
              );
            }
          )}
        </div>

        {/* =========================
            Skills Grid
        ========================== */}

        <div className="relative min-h-[285px]">
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            <motion.div
              key={activeCategory}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -6,
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
              className="
                grid
                grid-cols-2
                gap-3

                sm:grid-cols-3
                sm:gap-4

                lg:grid-cols-4

                xl:grid-cols-6
              "
            >
              {skills[activeCategory].map(
                (skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    t={t}
                    index={index}
                  />
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  t,
  index,
}) {
  const Icon = skill.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 14,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        delay: index * 0.045,
        ease: "linear",
      }}
      className="
        group
        relative
        min-h-[285px]
        overflow-hidden
        rounded-[18px]
        border
        border-border
        bg-surface/50
        p-5
        backdrop-blur-sm
        transition-all
        duration-300

        hover:border-brand/25
        hover:bg-surface/80

        md:hover:-translate-y-1
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
          bg-brand/[0.08]
          opacity-0
          blur-[55px]
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative">
        {/* Icon */}

        <div
          className="
            flex
            h-[70px]
            items-center
            justify-center

            sm:h-[82px]
          "
        >
          <Icon
            size={42}
            color={skill.color}
            strokeWidth={0.9}
            className="
              transition-transform
              duration-300

              sm:h-12
              sm:w-12

              md:group-hover:scale-110
            "
          />
        </div>

        {/* Name */}

        <h3
          className="
            mt-3
            text-[15px]
            font-semibold
            tracking-tight
            text-text-primary

            sm:text-[17px]
          "
        >
          {skill.name}
        </h3>

        {/* Level */}

        <div
          className="
            mt-2.5
            flex
            items-center
            justify-between

            sm:mt-3
          "
        >
          <span
            className="
              text-[10px]
              font-medium
              text-brand

              sm:text-xs
            "
          >
            {t.skills.levels[skill.level]}
          </span>

          <span
            className="
              text-[9px]
              text-text-muted

              sm:text-[10px]
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
            bg-border
          "
        >
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${skill.progress}%`,
            }}
            transition={{
              duration: 0.7,
              delay:
                0.15 + index * 0.045,
              ease: "linear",
            }}
            className="
              h-full
              rounded-full
              bg-brand
            "
          />
        </div>

        {/* Description */}

        <p
          className="
            mt-3
            text-[10px]
            leading-5
            text-text-muted

            sm:mt-4
            sm:text-[12px]
          "
        >
          {t.skills.descriptions[skill.key]}
        </p>

        {/* Experience */}

        <div
          className="
            mt-3
            border-t
            border-border
            pt-3
            text-[9px]
            text-text-muted

            sm:mt-4
            sm:text-[10px]
          "
        >
          {t.skills.experience[
            skill.experience
          ]}
        </div>
      </div>
    </motion.article>
  );
}