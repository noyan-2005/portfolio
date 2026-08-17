const experiences = [
  {
        period: "2025",
        title: "Frontend Developer",
        company: "Polaris",
        type: "Professional Experience",
        description:
            "Worked on modern web applications using React, Next.js and Tailwind CSS, gaining hands-on experience in building responsive interfaces and developing production-ready frontend solutions.",
        tags: [
            "React",
            "Next.js",
            "Tailwind CSS",
        ],
        current: false,
    },

  {
    period: "2026 — Present",
    title: "Freelance Developer",
    company: "Independent",
    type: "Freelance",
    description:
      "Currently working independently with clients and personal projects, building modern web experiences and continuously expanding my skills across frontend and backend development.",
    tags: [
      "Frontend",
      "React",
      "Freelance",
      "Next",
    ],
    current: true,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          left-[10%]
          top-[25%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-brand/[0.04]
          blur-[130px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-[1350px]
          px-8
          lg:px-12
        "
      >
        {/* =========================
            Header
        ========================== */}

        <div className="mb-16">
          <div className="flex items-center gap-3">
            <span
              className="
                text-xs
                font-semibold
                tracking-[0.25em]
                text-brand
              "
            >
              03
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
              EXPERIENCES
            </span>
          </div>

          <h2
            className="
              mt-6
              max-w-[720px]
              text-4xl
              font-bold
              leading-[1.1]
              tracking-[-0.035em]
              text-white
              sm:text-5xl
            "
          >
            Where I've worked
            <span className="block text-white/35">
              and what I'm building now.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-[650px]
              text-sm
              leading-7
              text-text-muted
            "
          >
            From working in a professional team to working
            independently, every experience has shaped the way
            I approach development and problem solving.
          </p>
        </div>


        {/* =========================
            Timeline
        ========================== */}

        <div className="relative">
          {/* Main Line */}
          <div
            className="
              absolute
              bottom-0
              left-[105px]
              top-0
              hidden
              w-px
              bg-white/[0.08]
              sm:block
            "
          />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.company}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


/* =================================
   Experience Item
================================= */

function ExperienceItem({ experience }) {
  return (
    <article
      className="
        group
        relative
        grid
        grid-cols-1
        gap-5
        sm:grid-cols-[90px_30px_1fr]
        sm:gap-5
      "
    >
      {/* Period */}
      <div className="pt-6 sm:text-right">
        <span
          className={`
            text-xs
            font-medium
            tracking-wider
            ${
              experience.current
                ? "text-brand"
                : "text-white/35"
            }
          `}
        >
          {experience.period}
        </span>
      </div>


      {/* Timeline Dot */}
      <div className="relative hidden justify-center sm:flex">
        <div
          className={`
            relative
            z-10
            mt-7
            size-3
            rounded-full
            border
            ${
              experience.current
                ? "border-brand bg-brand shadow-[0_0_16px_rgba(0,213,239,0.6)]"
                : "border-white/20 bg-[#020817]"
            }
          `}
        />
      </div>


      {/* Card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.06]
          bg-white/[0.02]
          max-w-[950px]
          p-7
          transition-all
          duration-300
          hover:border-brand/20
          hover:bg-white/[0.035]
        "
      >
        {/* Hover Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            size-40
            rounded-full
            bg-brand/[0.05]
            opacity-0
            blur-[70px]
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        <div className="relative">
          {/* Top Row */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-between
              gap-3
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-brand/70
                "
              >
                {experience.type}
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                "
              >
                {experience.title}
              </h3>
            </div>

            {experience.current && (
              <span
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-400/10
                  bg-emerald-400/[0.06]
                  px-3
                  py-1.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-wider
                  text-emerald-400
                "
              >
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Current
              </span>
            )}
          </div>


          {/* Company */}
          <p
            className="
              mt-3
              text-sm
              font-medium
              text-white/50
            "
          >
            {experience.company}
          </p>


          {/* Description */}
          <p
            className="
              mt-5
              max-w-[720px]
              text-sm
              leading-7
              text-text-muted
            "
          >
            {experience.description}
          </p>


          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-md
                  border
                  border-white/[0.06]
                  bg-white/[0.025]
                  px-2.5
                  py-1
                  text-[11px]
                  text-white/45
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}