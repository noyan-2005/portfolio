import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { projects } from "./projects";
import {
  useLanguage,
} from "../../context/LanguageContext";
import {
  getTranslations,
} from "../../data/translations";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState(null);

  const totalProjects = projects.length;

  const goNext = useCallback(() => {
    setActiveIndex(
      (prev) => (prev + 1) % totalProjects
    );
  }, [totalProjects]);

  const goPrevious = useCallback(() => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + totalProjects) %
        totalProjects
    );
  }, [totalProjects]);

  useEffect(() => {
    if (isPaused || selectedProject) return;

    const interval = setInterval(() => {
      goNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [
    isPaused,
    selectedProject,
    goNext,
  ]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedProject) return;

      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrevious();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    selectedProject,
    goNext,
    goPrevious,
  ]);

  const getPosition = useCallback(
    (index) => {
      let difference =
        index - activeIndex;

      if (
        difference >
        totalProjects / 2
      ) {
        difference -= totalProjects;
      }

      if (
        difference <
        -totalProjects / 2
      ) {
        difference += totalProjects;
      }

      return difference;
    },
    [activeIndex, totalProjects]
  );

  const visibleProjects = useMemo(() => {
    return projects
      .map((project, index) => ({
        project,
        index,
        position: getPosition(index),
      }))
      .filter(
        ({ position }) =>
          position >= -1 && position <= 1
      );
  }, [getPosition]);

  return (
    <>
      <section
        id="projects"
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-background
          py-2
          text-text-primary
          transition-colors
          duration-300
        "
      >
        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-[5%]
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-brand/[0.045]
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[5%]
            top-[10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-brand/[0.035]
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
          {/* Header */}

          <div className="mb-12">
            <div className="flex items-center gap-3">
              <span
                className="
                  text-xs
                  font-semibold
                  tracking-[0.25em]
                  text-brand
                "
              >
                04
              </span>

              <span className="h-px w-8 bg-brand/50" />

              <span
                className="
                  text-xs
                  font-medium
                  tracking-[0.2em]
                  text-text-muted
                "
              >
                {t.projects.section}
              </span>
            </div>

            <h2
              className="
                mt-6
                max-w-[700px]
                text-4xl
                font-bold
                leading-[1.1]
                tracking-[-0.035em]
                text-text-primary
                transition-colors
                duration-300
                sm:text-5xl
              "
            >
              {t.projects.heading}

              <span
                className="
                  block
                  text-text-primary/35
                "
              >
                {t.projects.headingAccent}
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-[620px]
                text-sm
                leading-7
                text-text-muted
              "
            >
              {t.projects.intro}
            </p>
          </div>

          {/* Carousel */}

          <div
            className="
              relative
              mx-auto
              mt-2
              h-[420px]
              w-full
              md:h-[500px]
            "
            style={{
              perspective: "1400px",
            }}
            onMouseEnter={() =>
              setIsPaused(true)
            }
            onMouseLeave={() =>
              setIsPaused(false)
            }
          >
            {/* Curved Rail */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[250px]
                w-[85%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-[50%]
                border
                border-border
                opacity-40
              "
              style={{
                transform:
                  "translate(-50%, -50%) rotateX(65deg)",
              }}
            />

            {/* Project Cards */}

            {visibleProjects.map(
              ({
                project,
                position,
              }) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  position={position}
                  isPaused={isPaused}
                  onClick={() => {
                    if (position === 0) {
                      setSelectedProject(
                        project
                      );
                    }
                  }}
                />
              )
            )}

            {/* Previous */}

            <button
              type="button"
              onClick={goPrevious}
              aria-label={t.projects.previous}
              className="
                absolute
                left-0
                top-1/2
                z-[200]
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-border
                bg-surface/60
                text-text-secondary
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-brand/30
                hover:bg-brand/10
                hover:text-brand
                md:left-4
                md:h-12
                md:w-12
              "
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}

            <button
              type="button"
              onClick={goNext}
              aria-label={t.projects.next}
              className="
                absolute
                right-0
                top-1/2
                z-[200]
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-border
                bg-surface/60
                text-text-secondary
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-brand/30
                hover:bg-brand/10
                hover:text-brand
                md:right-4
                md:h-12
                md:w-12
              "
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Carousel Footer */}

          <div
            className="
              mt-2
              flex
              items-center
              justify-center
              border-t
              border-border
              pt-6
            "
          >
            <div className="flex items-center gap-2">
              {projects.map(
                (project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    aria-label={`Go to ${project.title}`}
                    className={`
                      h-1
                      rounded-full
                      transition-all
                      duration-500
                      ${
                        index === activeIndex
                          ? "w-8 bg-brand"
                          : "w-2 bg-border hover:bg-text-muted"
                      }
                    `}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />
    </>
  );
}