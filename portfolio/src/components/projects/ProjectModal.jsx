// src/components/projects/ProjectModal.jsx

import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { getTranslations } from "../../data/translations";
import { motion, AnimatePresence } from "framer-motion";

import {
  X,
  ExternalLink,
  Code2,
} from "lucide-react";

export default function ProjectModal({
  project,
  onClose,
}) {
  const { language } = useLanguage();
  const t = getTranslations(language);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            p-4
            md:p-8
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}

          <motion.div
            className="
              absolute
              inset-0
              bg-black/75
              backdrop-blur-xl
            "
            onClick={onClose}
          />

          {/* Modal */}

          <motion.div
            className="
              modal-scrollbar
              relative
              z-10
              max-h-[90vh]
              w-full
              max-w-5xl
              overflow-y-auto
              overflow-x-hidden
              rounded-[32px]
              border
              border-border
              bg-background
              text-text-primary
              shadow-2xl
              transition-colors
              duration-300
            "
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-border
                bg-background/60
                text-text-primary
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-brand/30
                hover:bg-brand/10
                hover:text-brand
              "
              aria-label={t.projects.close}
            >
              <X size={20} />
            </button>

            {/* Hero image */}

            <div
              className="
                relative
                aspect-video
                w-full
                overflow-hidden
              "
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-background
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* Content */}

            <div
              className="
                relative
                -mt-10
                px-6
                pb-8
                md:px-10
              "
            >
              <div className="relative">
                <p
                  className="
                    mb-2
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-text-muted
                  "
                >
                  {project.category[language]}
                </p>

                <h2
                  className="
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-text-primary
                    md:text-5xl
                  "
                >
                  {project.title}
                </h2>
              </div>

              {/* Description */}

              <div className="mt-8 max-w-3xl">
                <p
                  className="
                    text-sm
                    leading-7
                    text-text-secondary
                    md:text-base
                  "
                >
                  {project.description[language]}
                </p>
              </div>

              {/* Technologies */}

              <div className="mt-8">
                <div
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-text-primary
                  "
                >
                  <Code2 size={16} className="text-brand" />

                  {t.projects.technologies}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-border
                          bg-surface/60
                          px-3
                          py-1.5
                          text-xs
                          text-text-secondary
                          transition-colors
                          duration-300
                        "
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Buttons */}

              <div
                className="
                  mt-10
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-brand
                    px-6
                    text-sm
                    font-medium
                    text-background
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-brand/90
                  "
                >
                  <ExternalLink size={17} />

                  {t.projects.visitLive}
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-border
                    bg-surface/50
                    px-6
                    text-sm
                    font-medium
                    text-text-primary
                    transition-all
                    duration-300
                    hover:border-brand/30
                    hover:bg-brand/10
                    hover:text-brand
                  "
                >
                  {t.projects.github}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}