import { useState } from "react";
import { Copy, Check, Mail, ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa6";

import { useLanguage } from "../../context/LanguageContext";
import { getTranslations } from "../../data/translations";

const EMAIL = "ma13842791199@gmail.com";

const socialLinks = [
  {
    key: "github",
    username: "noyan-2005",
    href: "https://github.com/noyan-2005",
    icon: FaGithub,
  },
  {
    key: "linkedin",
    username: "Mahdi Alizadeh",
    href: "https://www.linkedin.com/in/mahdi-alizadeh-b4636942a/",
    icon: FaLinkedin,
  },
  {
    key: "instagram",
    username: "thenoyan.dev",
    href: "https://instagram.com/thenoyan.dev",
    icon: FaInstagram,
  },
  {
    key: "telegram",
    username: "Ansel2005",
    href: "https://t.me/Ansel2005",
    icon: FaTelegram,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const { language } = useLanguage();
  const t = getTranslations(language);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-background
        px-4
        pb-5
        text-text-primary
        transition-colors
        duration-300

        sm:px-6
        sm:py-24

        lg:px-12
        lg:py-28
      "
    >
      {/* =========================
          Background Grid
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]

          [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* =========================
          Glow
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[10%]

          h-[220px]
          w-[220px]

          rounded-full
          bg-brand/[0.05]

          blur-[100px]

          sm:h-[300px]
          sm:w-[300px]

          lg:h-[350px]
          lg:w-[350px]

          lg:blur-[130px]
        "
      />

      {/* =========================
          Container
      ========================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1280px]
        "
      >
        {/* =========================
            Header
        ========================== */}

        <div
          className="
            mb-10

            sm:mb-14

            lg:mb-16
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                font-mono
                text-[10px]
                font-medium
                tracking-[0.18em]
                text-brand

                sm:text-xs
              "
            >
              07
            </span>

            <span
              className="
                text-[10px]
                font-medium
                tracking-[0.15em]
                text-brand

                sm:text-xs
              "
            >
              {t.contact.section}
            </span>
          </div>

          <h2
            className="
              mt-4
              max-w-[800px]

              text-3xl
              font-bold
              leading-[1.12]
              tracking-[-0.035em]
              text-text-primary

              transition-colors
              duration-300

              sm:mt-5
              sm:text-4xl

              md:text-5xl

              lg:text-[52px]
              lg:leading-[1.08]
            "
          >
            {t.contact.heading}
          </h2>

          <p
            className="
              mt-4
              max-w-[700px]

              text-sm
              leading-6
              text-text-muted

              transition-colors
              duration-300

              sm:mt-5
              sm:text-base
              sm:leading-7

              lg:text-lg
            "
          >
            {t.contact.intro}
          </p>
        </div>

        {/* =========================
            Main Contact Card
        ========================== */}

        <div
          className="
            relative
            overflow-hidden

            rounded-2xl
            border
            border-border

            bg-surface/70

            shadow-[0_20px_60px_rgba(0,0,0,0.08)]

            backdrop-blur-xl

            transition-colors
            duration-300

            sm:rounded-[22px]
            sm:shadow-[0_25px_80px_rgba(0,0,0,0.10)]
          "
        >
          <div
            className="
              relative

              p-5

              sm:p-8

              md:p-10

              lg:p-[60px]
            "
          >
            {/* =========================
                Email + Buttons
            ========================== */}

            <div
              className="
                flex
                flex-col
                gap-8

                xl:flex-row
                xl:items-center
                xl:justify-between
              "
            >
              {/* Email */}

              <div className="min-w-0">
                <p
                  className="
                    text-xs
                    font-medium
                    tracking-[0.04em]
                    text-text-muted

                    sm:text-sm
                  "
                >
                  {t.contact.preferred}
                </p>

                <a
                  href={`mailto:${EMAIL}`}
                  className="
                    mt-3
                    block
                    break-all

                    text-xl
                    font-semibold
                    leading-tight
                    tracking-[-0.025em]
                    text-text-primary

                    transition-colors
                    duration-300

                    hover:text-brand

                    sm:mt-4
                    sm:text-2xl

                    md:text-3xl
                  "
                >
                  {EMAIL}
                </a>

                <div
                  className="
                    mt-4
                    flex
                    items-start
                    gap-2

                    text-xs
                    leading-5
                    text-text-muted

                    sm:mt-5
                    sm:items-center
                    sm:text-sm
                  "
                >
                  <Mail
                    size={16}
                    className="
                      mt-0.5
                      shrink-0
                      text-brand

                      sm:mt-0
                    "
                  />

                  <span>{t.contact.availability}</span>
                </div>
              </div>

              {/* =========================
                  Buttons
              ========================== */}

              <div
                className="
                  flex
                  w-full
                  flex-col
                  gap-3

                  sm:flex-row

                  xl:w-auto
                  xl:shrink-0
                "
              >
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="
                    group
                    flex
                    h-12
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2.5

                    rounded-xl
                    border
                    border-border

                    bg-surface/40

                    px-5

                    text-sm
                    font-medium
                    text-text-secondary

                    backdrop-blur-sm

                    transition-all
                    duration-300

                    hover:border-brand/30
                    hover:bg-brand/[0.05]
                    hover:text-text-primary

                    sm:h-14
                    sm:w-auto
                    sm:px-6
                  "
                >
                  {copied ? (
                    <>
                      <Check
                        size={18}
                        className="text-emerald-500"
                      />

                      <span className="text-emerald-500">
                        {t.contact.copied}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      <span>{t.contact.copy}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${EMAIL}`}
                  className="
                    flex
                    h-12
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2.5

                    rounded-xl
                    bg-brand

                    px-5

                    text-sm
                    font-semibold
                    text-background

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-brand/90

                    sm:h-14
                    sm:w-auto
                    sm:px-6
                  "
                >
                  <Mail size={18} />

                  <span>{t.contact.send}</span>
                </a>
              </div>
            </div>

            {/* =========================
                Divider
            ========================== */}

            <div
              className="
                my-8
                h-px
                bg-border
                opacity-70

                sm:my-10

                lg:my-12
              "
            />

            {/* =========================
                Social Links
            ========================== */}

            <div
              className="
                grid
                grid-cols-1
                gap-3

                sm:grid-cols-2

                xl:grid-cols-4
              "
            >
              {socialLinks.map(
                ({
                  key,
                  username,
                  href,
                  icon: Icon,
                }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group
                      relative
                      flex
                      min-h-[82px]
                      cursor-pointer
                      items-center
                      justify-between
                      overflow-hidden

                      rounded-xl
                      border
                      border-border

                      bg-surface/30

                      px-4

                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:border-brand/30
                      hover:bg-brand/[0.04]

                      sm:min-h-[92px]
                      sm:px-5
                    "
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <Icon
                          size={18}
                          className="
                            shrink-0
                            text-text-secondary

                            transition-colors
                            duration-300

                            group-hover:text-brand

                            sm:size-[19px]
                          "
                        />

                        <span
                          className="
                            text-sm
                            font-semibold
                            text-text-primary

                            sm:text-base
                          "
                        >
                          {t.social[key]}
                        </span>
                      </div>

                      <p
                        className="
                          mt-1.5
                          truncate
                          text-xs
                          text-text-muted

                          sm:mt-2
                          sm:text-sm
                        "
                      >
                        {username}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="
                        ml-3
                        shrink-0
                        text-text-muted

                        opacity-50

                        transition-all
                        duration-300

                        group-hover:text-brand
                        group-hover:opacity-100
                      "
                    />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* =========================
            Footer
        ========================== */}

        <div
          className="
            mt-6
            flex
            flex-col
            gap-2

            text-[11px]
            leading-5
            text-text-muted

            transition-colors
            duration-300

            sm:mt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-xs
          "
        >
          <span>© 2026 Mahdi Alizadeh</span>

          <span>{t.contact.footer}</span>
        </div>
      </div>
    </section>
  );
}