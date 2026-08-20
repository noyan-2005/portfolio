import TypingText from "./TypingText";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";

import { useLanguage } from "../../context/LanguageContext";
import { getTranslations } from "../../data/translations";

import LanguageSwitcher from "../header/LanguageSwitcher";
import ThemeSwitcher from "../../context/ThemeSwitcher";

export default function Hero() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-background
        text-text-primary

        transition-colors
        duration-300
      "
    >
      {/* =========================
          Header Controls
      ========================== */}

      <LanguageSwitcher />
      <ThemeSwitcher />

      {/* =========================
          Main Glow
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[45%]
          top-1/2

          h-[350px]
          w-[350px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full
          bg-brand/10

          blur-[100px]

          sm:h-[450px]
          sm:w-[450px]

          lg:h-[500px]
          lg:w-[500px]

          lg:blur-[120px]
        "
      />

      {/* =========================
          Mobile Background Image
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          md:hidden
        "
      >
        {/* Image */}

        <img
          src="/mahdi.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0

            h-full
            w-full

            object-cover
            object-center

            opacity-[0.95]

            scale-[1.02]
          "
        />

        {/* Dark Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-background/35
          "
        />

        {/* Bottom Gradient */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-background
            via-background/55
            to-background/25
          "
        />

        {/* Side Gradient */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-background/80
            via-transparent
            to-background/50
          "
        />
      </div>

      {/* =========================
          Hero Container
      ========================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          max-w-[1400px]
          items-center

          px-6
          py-28

          sm:px-8

          md:px-8
          md:pr-[120px]
          md:py-0

          lg:px-12
          lg:pr-[140px]
        "
      >
        {/* =========================
            Left Content
        ========================== */}

        <div
          className="
            relative
            z-10
            w-full

            md:w-1/2
          "
        >
          {/* Greeting */}

          <div
            className="
              mb-5
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-7
                bg-brand

                sm:w-8
              "
            />

            <span
              className="
                text-xs
                font-medium
                tracking-[0.2em]
                text-brand

                sm:text-sm
              "
            >
              {t.hero.hello}
            </span>
          </div>

          {/* Name */}

          <h1
            className="
              max-w-[650px]

              text-4xl
              font-bold
              leading-[1.05]
              tracking-[-0.04em]

              text-text-primary

              transition-colors
              duration-300

              sm:text-5xl

              md:text-6xl

              xl:text-7xl
            "
          >
            Mahdi Alizadeh
          </h1>

          {/* Typing Text */}

          <div
            className="
              mt-5
              flex
              min-h-[32px]
              flex-wrap
              items-center
              gap-2

              text-lg
              font-medium
              leading-tight

              text-text-secondary

              transition-colors
              duration-300

              sm:mt-7
              sm:min-h-[36px]
              sm:text-2xl
            "
          >
            <span className="shrink-0">
              {t.hero.intro}
            </span>

            <TypingText />
          </div>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-[560px]

              text-sm
              leading-7

              text-text-muted

              transition-colors
              duration-300

              sm:mt-6
              sm:text-base
            "
          >
            {t.hero.description}
          </p>

          {/* =========================
              Desktop Content
          ========================== */}

          <div
            className="
              mt-8
              hidden

              items-center
              gap-4

              md:flex
            "
          >
            <a
              href="/resume.pdf"
              download="Mahdi-Alizadeh-Resume.pdf"
            >
              <Button variant="primary">
                {t.hero.resume}
              </Button>
            </a>

            <Button
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              {t.hero.talk}
            </Button>
          </div>

          {/* Desktop Social Links */}

          <div className="hidden md:block">
            <SocialLinks />
          </div>
        </div>

        {/* =========================
            Right Image - Desktop
        ========================== */}

        <div
          className="
            relative
            hidden
            w-1/2
            items-center
            justify-center

            md:flex
          "
        >
          {/* Image Glow */}

          <div
            className="
              pointer-events-none
              absolute

              h-[380px]
              w-[380px]

              rounded-full
              bg-brand/15

              blur-[90px]

              lg:h-[430px]
              lg:w-[430px]
              lg:blur-[100px]
            "
          />

          {/* Image Container */}

          <div
            className="
              relative
              flex

              h-[450px]
              w-[340px]

              items-center
              justify-center
              overflow-hidden

              rounded-[32px]

              border
              border-border

              bg-surface/40

              shadow-[0_0_80px_rgba(0,213,239,0.09)]

              backdrop-blur-sm

              transition-all
              duration-300

              lg:h-[520px]
              lg:w-[390px]
            "
          >
            <img
              src="/mahdi.png"
              alt="Mahdi Alizadeh"
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>
        </div>

        {/* =========================
            Mobile Buttons + Social
        ========================== */}

        <div
          className="
            absolute
            bottom-8
            left-6
            right-6
            z-20

            flex
            flex-col
            gap-5

            sm:left-8
            sm:right-8

            md:hidden
          "
        >
          {/* Buttons */}

          <div
            className="
              flex
              w-full
              gap-3
            "
          >
            <a
              href="/resume.pdf"
              download="Mahdi-Alizadeh-Resume.pdf"
              className="flex-1"
            >
              <Button
                variant="primary"
                className="w-full"
              >
                {t.hero.resume}
              </Button>
            </a>

            <Button
              variant="secondary"
              className="flex-1"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              {t.hero.talk}
            </Button>
          </div>

          {/* Social Links */}

          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}