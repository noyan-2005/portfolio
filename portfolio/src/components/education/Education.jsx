import EducationItem from "./EducationItem";

const education = [
  {
    year: "2023",
    title: "Computer Engineering",
    type: "Bachelor's Degree",
    institution: "University Name",
    description:
      "Studying computer engineering while building practical experience through programming, frontend development and personal projects.",
    tags: [
      "Computer Science",
      "Programming",
      "Software Development",
    ],
    current: true,
  },

  {
    year: "2023",
    title: "Frontend Development",
    type: "Self-directed Learning",
    institution: "Independent Learning",
    description:
      "Continuously learning modern frontend technologies and applying them through real-world projects and experiments.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    current: true,
  },

  {
    year: "2025 - 2026",
    title: "Product & Digital Development",
    type: "Practical Experience",
    institution: "Personal Projects",
    description:
      "Learning through building digital products, exploring product thinking, UI/UX and the process of turning ideas into working products.",
    tags: [
      "Product Thinking",
      "UI/UX",
      "Startup",
      "Problem Solving",
    ],
    current: true,
  },

  {
        year: "2026 — Now",
        title: "Backend Development",
        type: "Self-directed Learning",
        institution: "Independent Learning",
        description:
            "Learning backend development with Python, focusing on building APIs, working with databases and understanding server-side application development.",
        tags: [
            "Python",
            "Backend",
            "APIs",
            "Databases",
        ],
        current: true,
    },
];

export default function Education() {
  return (
    <section
      id="education"
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
          right-[10%]
          top-[20%]
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
          max-w-[1400px]
          px-8
          lg:px-12
        "
      >
        {/* Header */}
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
              02
            </span>

            <span className="h-px w-8 bg-brand/50" />

            <span
              className=" text-xs font-medium tracking-[0.2em] text-text-muted "
            >
              EDUCATION
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
              text-white
              sm:text-5xl
            "
          >
            My academic journey
            <span className="block text-white/35">
              and continuous learning.
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
            Education gave me the foundation. Building,
            experimenting and staying curious continue to
            shape how I grow.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {education.map((item) => (
            <EducationItem
              key={`${item.year}-${item.title}`}
              {...item}
            />
          ))}
        </div>

       
      </div>
    </section>
  );
}