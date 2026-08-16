const expertise = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building modern, responsive and high-performance interfaces.",
  },
  {
    number: "02",
    title: "Product",
    description:
      "Turning ideas into useful and polished digital products.",
  },
  {
    number: "03",
    title: "Creative",
    description:
      "Combining technology and visual thinking to create memorable experiences.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#020817]
        py-32
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[15%]
          top-1/2
          h-[420px]
          w-[420px]
          -translate-y-1/2
          rounded-full
          bg-brand/[0.07]
          blur-[120px]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          mx-auto
          grid
          min-h-[700px]
          max-w-[1400px]
          grid-cols-1
          items-center
          gap-20
          px-8
          pr-[120px]
          lg:grid-cols-2
          lg:px-12
          lg:pr-[140px]
        "
      >
        {/* =========================
            Left — Introduction
        ========================== */}

        <div className="relative z-10">

          {/* Section Label */}
          <div className="mb-6 flex items-center gap-3">
            <span
              className="
                text-xs
                font-semibold
                tracking-[0.25em]
                text-brand
              "
            >
              01
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
              ABOUT ME
            </span>
          </div>


          {/* Heading */}
          <h2
            className="
              max-w-[600px]
              text-4xl
              font-bold
              leading-[1.1]
              tracking-[-0.035em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            I don't just build websites.
            <span className="mt-2 block text-white/40">
              I build digital experiences.
            </span>
          </h2>


          {/* Description */}
          <div
            className="
              mt-8
              max-w-[570px]
              space-y-5
              text-[15px]
              leading-8
              text-text-muted
            "
          >
            <p>
              I'm Mahdi Alizadeh, a frontend developer and
              product-minded creator who enjoys turning ideas
              into meaningful digital experiences.
            </p>

            <p>
              I care about the details that make a product
              feel right — from clean interfaces and smooth
              interactions to performance and usability.
            </p>
          </div>


          {/* Small Highlight */}
          <div
            className="
              mt-10
              flex
              items-center
              gap-3
              text-sm
              text-white/70
            "
          >
            <span
              className="
                flex
                size-2
                rounded-full
                bg-brand
                shadow-[0_0_12px_rgba(0,213,239,0.7)]
              "
            />

            Always learning. Always building.
          </div>

        </div>


        {/* =========================
            Right — Expertise
        ========================== */}

        <div className="relative z-10">

          {/* Glass Container */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-3
              shadow-[0_30px_100px_rgba(0,0,0,0.25)]
              backdrop-blur-xl
            "
          >

            {/* Inner Glow */}
            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                h-48
                w-48
                rounded-full
                bg-brand/[0.06]
                blur-[80px]
              "
            />

            <div className="relative">

              {expertise.map((item, index) => (
                <div
                  key={item.number}
                  className={`
                    group
                    relative
                    flex
                    gap-6
                    p-7
                    transition-colors
                    duration-300
                    hover:bg-white/[0.025]

                    ${
                      index !== expertise.length - 1
                        ? "border-b border-white/[0.06]"
                        : ""
                    }
                  `}
                >

                  {/* Number */}
                  <span
                    className="
                      pt-1
                      text-xs
                      font-medium
                      tracking-widest
                      text-brand/60
                      transition-colors
                      duration-300
                      group-hover:text-brand
                    "
                  >
                    {item.number}
                  </span>


                  {/* Content */}
                  <div>
                    <h3
                      className="
                        text-lg
                        font-semibold
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-[400px]
                        text-sm
                        leading-7
                        text-text-muted
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>


          {/* Decorative Element */}
          <div
            className="
              absolute
              -bottom-5
              -right-5
              size-20
              rounded-2xl
              border
              border-brand/10
              bg-brand/[0.02]
              backdrop-blur-sm
            "
          />

        </div>

      </div>
    </section>
  );
}