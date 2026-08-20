// src/components/projects/ProjectPreview.jsx

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectPreview({
  project,
  isActive = false,
  isHovered = false,
}) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [project.id]);

  useEffect(() => {
    if (!isActive || isHovered || project.images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % project.images.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [
    project.id,
    project.images.length,
    isActive,
    isHovered,
  ]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[inherit] bg-neutral-900">
      <AnimatePresence mode="wait">
        <motion.img
          key={`${project.id}-${imageIndex}`}
          src={project.images[imageIndex]}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.99,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          draggable={false}
        />
      </AnimatePresence>

      {/* Dark cinematic overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

      {/* Preview indicator */}
      {isActive && project.images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {project.images.map((_, index) => (
            <span
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === imageIndex
                  ? "w-5 bg-white"
                  : "w-1 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}