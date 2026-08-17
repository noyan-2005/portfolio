import {
  CalendarDays,
  MapPin,
  CircleCheck,
} from "lucide-react";

const profileInfo = [
  {
    icon: CalendarDays,
    label: "Age",
    value: "20 years old",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Iran",
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
        py-28
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[30%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-brand/[0.045]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[15%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-blue-500/[0.035]
          blur-[110px]
        "
      />

      {/* Main Container */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[700px]
          max-w-[1400px]
          flex-col
          justify-center
          px-8
          pr-[120px]
          lg:px-12
          lg:pr-[140px]
        "
      >
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3">
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
        </div>

        {/* Content */}
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-12
            lg:grid-cols-[340px_1fr]
            lg:gap-20
          "
        >
          {/* =================================
              Profile Card
          ================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-13
              backdrop-blur-xl
            "
          >
            {/* Card Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-58
                w-48
                rounded-full
                bg-brand/[0.07]
                blur-[70px]
              "
            />

            <div className="relative">
              {/* Avatar */}
              <div
                className="
                  mx-auto
                  flex
                  aspect-square
                  max-w-[220px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/[0.08]
                  bg-gradient-to-br
                  from-brand/80
                  to-blue-600/80
                "
              >
                {/* Replace this with your image */}
                <span
                  className="
                    text-5xl
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
                  <img src="../../../public/mahdi2.png" alt=""/>
                </span>
              </div>

              {/* Name */}
              <div className="mt-6 text-center">
                <h3
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
                  Mahdi Alizadeh
                </h3>

                <p
                  className="
                    mt-2
                    text-base
                    font-medium
                    text-brand
                  "
                >
                  Frontend Developer
                </p>
              </div>

              {/* Info Pills */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {profileInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-white/[0.06]
                        bg-white/[0.04]
                        px-3
                        py-2
                        text-xs
                        text-text-muted
                      "
                    >
                      <Icon
                        size={14}
                        strokeWidth={1.8}
                        className="text-white/50"
                      />

                      <span>{item.value}</span>
                    </div>
                  );
                })}
              </div>

              {/* Availability */}
              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-emerald-400/10
                  bg-emerald-400/[0.06]
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-emerald-400
                "
              >
                <CircleCheck size={15} />

                <span>Open to opportunities</span>
              </div>
            </div>
          </div>

          {/* =================================
              About Content
          ================================== */}

          <div className="pt-2">
            {/* Heading */}
            <h2
              className="
                max-w-[850px]
                text-3xl
                font-bold
                leading-[1.2]
                tracking-[-0.03em]
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
               I'm Mahdi Alizadeh.
              <span className="mt-2 block text-white/40">
                I build things for the web.
              </span>
            </h2>

            {/* Description */}
            <div
              className="
                mt-8
                max-w-[780px]
                space-y-5
                text-[15px]
                leading-6
                text-text-muted
                lg:text-base
              "
            >
              <p>
                I'm a frontend developer and computer engineering
                student who enjoys turning ideas into clean,
                modern and meaningful digital experiences.
              </p>

              <p>
                I'm interested in technology, design and building
                products that are not only functional, but also
                enjoyable to use.
              </p>

              <p>
                I constantly learn, experiment and build new
                things to improve my skills and understand how
                great digital products are made.
              </p>
            </div>

            {/* Personal Statement */}
            <div
              className="
                mt-10
                max-w-[760px]
                border-l
                border-brand/40
                pl-5
              "
            >
              <p
                className="
                  text-lg
                  font-medium
                  leading-8
                  text-white/80
                "
              >
                I believe the best products live at the
                intersection of technology, simplicity and
                thoughtful design.
              </p>
            </div>

            {/* Quick Facts */}
            <div
              className="
                mt-8
                grid
                max-w-[780px]
                grid-cols-2
                gap-3
                sm:grid-cols-4
              "
            >
              <QuickFact value="React" label="Main Focus" />
              <QuickFact value="3+" label="Years Learning" />
              <QuickFact value="∞" label="Curiosity" />
              <QuickFact value="24/7" label="Builder Mindset" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* =================================
   Quick Fact
================================= */

function QuickFact({ value, label }) {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/[0.06]
        bg-white/[0.02]
        px-4
        py-4
      "
    >
      <div
        className="
          text-lg
          font-semibold
          text-brand
        "
      >
        {value}
      </div>

      <div
        className="
          mt-1
          text-[11px]
          font-medium
          uppercase
          tracking-wider
          text-text-muted
        "
      >
        {label}
      </div>
    </div>
  );
}