// src/components/projects/ProjectModal.jsx

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
//   Github,
  ExternalLink,
  Code2,
} from "lucide-react";

export default function ProjectModal({
  project,
  onClose,
}) {
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
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/75 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
              className="modal-scrollbar relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto overflow-x-hidden rounded-[32px] border border-white/10 bg-[#111111] shadow-2xl"            initial={{
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
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition hover:bg-white/10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Hero image */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative -mt-10 px-6 pb-8 md:px-10">
              <div className="relative">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/40">
                  {project.category}
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  {project.title}
                </h2>
              </div>

              {/* Description */}
              <div className="mt-8 max-w-3xl">
                <p className="text-sm leading-7 text-white/60 md:text-base">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-8">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                  <Code2 size={16} />
                  Technologies
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  <ExternalLink size={17} />

                  Visit Live

                  <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {/* <Github size={17} /> */}

                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}