import {
  CalendarDays,
  MapPin,
  CircleCheck,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { getTranslations } from "../../data/translations";

export default function About() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const profileInfo = [
    {
      icon: CalendarDays,
      value: t.about.ageValue,
    },
    {
      icon: MapPin,
      value: t.about.locationValue,
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-background

        transition-colors
        duration-300

        sm:py-24
        lg:py-28
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
          top-[20%]
          h-[280px]
          w-[280px]
          rounded-full
          bg-brand/[0.045]
          blur-[100px]

          sm:left-[10%]
          sm:top-[30%]
          sm:h-[350px]
          sm:w-[350px]
          sm:blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[5%]
          right-[5%]
          h-[240px]
          w-[240px]
          rounded-full
          bg-blue-500/[0.035]
          blur-[90px]

          sm:bottom-[10%]
          sm:right-[15%]
          sm:h-[300px]
          sm:w-[300px]
          sm:blur-[110px]
        "
      />

      <div
        className="
          relative
          mx-auto
          flex
          min-h-0
          max-w-[1400px]
          flex-col
          justify-center

          px-5

          sm:px-8

          lg:min-h-[700px]
          lg:px-12
          lg:pr-[140px]
        "
      >
        {/* =========================
            Section Header
        ========================== */}

        <div
          className="
            mb-10

            sm:mb-12

            lg:mb-14
          "
        >
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

            <span
              className="
                h-px
                w-6
                bg-brand/50

                sm:w-8
              "
            />

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
              {t.about.section}
            </span>
          </div>
        </div>

        {/* =========================
            Main Grid
        ========================== */}

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-10

            sm:gap-12

            lg:grid-cols-[340px_1fr]
            lg:gap-20
          "
        >
          {/* =========================
              Profile Card
          ========================== */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[400px]
              overflow-hidden
              rounded-[24px]

              border
              border-border

              bg-surface/70

              p-5

              backdrop-blur-xl

              transition-colors
              duration-300

              sm:rounded-[28px]
              sm:p-8

              lg:mx-0
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-brand/[0.07]
                blur-[70px]
              "
            />

            <div className="relative">
              {/* Profile Image */}

              <div
                className="
                  mx-auto
                  flex
                  aspect-square
                  w-full
                  max-w-[190px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[20px]

                  border
                  border-border

                  bg-gradient-to-br
                  from-brand/80
                  to-blue-600/80

                  sm:max-w-[220px]
                  sm:rounded-[24px]
                "
              >
                <img
                  src="/mahdi2.png"
                  alt="Mahdi Alizadeh"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name */}

              <div className="mt-5 text-center sm:mt-6">
                <h3
                  className="
                    text-xl
                    font-bold
                    tracking-tight
                    text-text-primary

                    sm:text-2xl
                  "
                >
                  Mahdi Alizadeh
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-brand

                    sm:text-base
                  "
                >
                  {t.about.role}
                </p>
              </div>

              {/* Profile Info */}

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  justify-center
                  gap-2

                  sm:mt-6
                "
              >
                {profileInfo.map(
                  ({ icon: Icon, value }) => (
                    <div
                      key={value}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-lg

                        border
                        border-border

                        bg-surface-soft

                        px-2.5
                        py-2

                        text-[11px]
                        text-text-muted

                        sm:px-3
                        sm:py-2
                        sm:text-xs
                      "
                    >
                      <Icon
                        size={14}
                        strokeWidth={1.8}
                        className="shrink-0 text-text-secondary"
                      />

                      <span>{value}</span>
                    </div>
                  )
                )}
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
                  border-emerald-500/15

                  bg-emerald-500/[0.06]

                  px-3
                  py-2.5

                  text-xs
                  font-medium
                  text-emerald-500

                  sm:px-4
                  sm:text-sm
                "
              >
                <CircleCheck
                  size={15}
                  className="shrink-0"
                />

                <span>
                  {t.about.availability}
                </span>
              </div>
            </div>
          </div>

          {/* =========================
              About Content
          ========================== */}

          <div className="pt-0 lg:pt-2">
            <h2
              className="
                max-w-[850px]

                text-2xl
                font-bold
                leading-[1.2]
                tracking-[-0.03em]

                text-text-primary

                sm:text-4xl

                lg:text-5xl
              "
            >
              {t.about.heading}

              <span
                className="
                  mt-2
                  block
                  text-text-secondary/50
                "
              >
                {t.about.headingAccent}
              </span>
            </h2>

            {/* Paragraphs */}

            <div
              className="
                mt-6
                max-w-[780px]
                space-y-4

                text-sm
                leading-7
                text-text-muted

                sm:mt-8
                sm:space-y-5
                sm:text-[15px]

                lg:text-base
              "
            >
              {t.about.paragraphs.map(
                (paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                )
              )}
            </div>

            {/* Statement */}

            <div
              className="
                mt-8
                max-w-[760px]

                border-l
                border-brand/40

                pl-4

                sm:mt-10
                sm:pl-5
              "
            >
              <p
                className="
                  text-base
                  font-medium
                  leading-7
                  text-text-secondary

                  sm:text-lg
                  sm:leading-8
                "
              >
                {t.about.statement}
              </p>
            </div>

            {/* Quick Facts */}

            <div
              className="
                mt-7
                grid
                max-w-[780px]
                grid-cols-2
                gap-2.5

                sm:mt-8
                sm:grid-cols-4
                sm:gap-3
              "
            >
              <QuickFact
                value="React"
                label={t.about.facts.focus}
              />

              <QuickFact
                value="3+"
                label={t.about.facts.learning}
              />

              <QuickFact
                value="∞"
                label={t.about.facts.curiosity}
              />

              <QuickFact
                value="24/7"
                label={t.about.facts.mindset}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickFact({ value, label }) {
  return (
    <div
      className="
        rounded-xl

        border
        border-border

        bg-surface-soft

        px-3
        py-3

        transition-all
        duration-300

        hover:border-brand/20
        hover:bg-brand-soft

        sm:px-4
        sm:py-4
      "
    >
      <div
        className="
          text-base
          font-semibold
          text-brand

          sm:text-lg
        "
      >
        {value}
      </div>

      <div
        className="
          mt-1
          text-[9px]
          font-medium
          uppercase
          tracking-wider
          text-text-muted

          sm:text-[11px]
        "
      >
        {label}
      </div>
    </div>
  );
}