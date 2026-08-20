// src/components/projects/ProjectCard.jsx

import { useLanguage } from "../../context/LanguageContext";
import { getTranslations } from "../../data/translations";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import ProjectPreview from "./ProjectPreview";

export default function ProjectCard({
  project,
  position,
  onClick,
  isPaused,
}) {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const isActive = position === 0;

  const x = position * 310;
  const y = isActive ? 0 : 75;
  const scale = isActive ? 1 : 0.78;
  const rotateY = position * -13;
  const blur = isActive ? 0 : 4;
  const opacity = isActive ? 1 : 0.55;

  return (
    <motion.div
      className="
        absolute
        left-1/2
        top-1/2
        w-[min(72vw,680px)]
        -translate-x-1/2
        -translate-y-1/2
        cursor-pointer
      "
      animate={{
        x,
        y,
        scale,
        rotateY,
        filter: `blur(${blur}px)`,
        opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 18,
        mass: 0.8,
      }}
      style={{
        zIndex: isActive ? 100 : 50,
        transformStyle: "preserve-3d",
      }}
      onClick={onClick}
    >
      <div
        className={`
          group
          relative
          aspect-[16/10]
          overflow-hidden
          rounded-[28px]
          border
          bg-surface
          shadow-2xl
          transition-all
          duration-500
          ${
            isActive
              ? "border-brand/30 shadow-brand/10"
              : "border-border"
          }
        `}
      >
        <ProjectPreview
          project={project}
          isActive={isActive}
          isHovered={isPaused}
        />

        {/* Project information */}

        <div
          className={`
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            p-6
            transition-all
            duration-500
            ${
              isActive
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }
          `}
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p
                className="
                  mb-1
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                "
              >
                {project.category[language]}
              </p>

              <h3
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                  md:text-3xl
                "
              >
                {project.title}
              </h3>
            </div>

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/20
                backdrop-blur-md
                transition-all
                duration-300
                group-hover:border-brand/40
                group-hover:bg-brand/20
              "
            >
              <ArrowUpRight
                size={18}
                className="
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-brand
                "
              />
            </div>
          </div>
        </div>

        {/* Active border */}

        {isActive && (
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[28px]
              ring-1
              ring-inset
              ring-brand/20
            "
          />
        )}
      </div>
    </motion.div>
  );
}