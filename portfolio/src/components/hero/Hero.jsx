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
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#020817]">
      <LanguageSwitcher />
      <ThemeSwitcher />
      <div className="pointer-events-none absolute left-[45%] top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-8 pr-[120px] lg:px-12 lg:pr-[140px]">
        <div className="z-10 w-1/2">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-brand" />
            <span className="text-sm font-medium tracking-[0.2em] text-brand">{t.hero.hello}</span>
          </div>

          <h1 className="max-w-[650px] text-6xl font-bold leading-[1.05] tracking-[-0.04em] text-white xl:text-7xl">
            Mahdi Alizadeh
          </h1>

          <div className="mt-7 flex h-[36px] items-center gap-2 text-2xl font-medium leading-none text-white/80">
            <span className="shrink-0">{t.hero.intro}</span>
            <TypingText />
          </div>

          <p className="mt-6 max-w-[560px] text-base leading-8 text-text-muted">
            {t.hero.description}
          </p>

          <div className="mt-9 flex items-center gap-4">
            <a href="/resume.pdf" download="Mahdi-Alizadeh-Resume.pdf">
              <Button variant="primary">{t.hero.resume}</Button>
            </a>

            <Button
              variant="secondary"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.hero.talk}
            </Button>
          </div>

          <SocialLinks />
        </div>

        <div className="relative flex w-1/2 items-center justify-center">
          <div className="pointer-events-none absolute h-[430px] w-[430px] rounded-full bg-brand/15 blur-[100px]" />
          <div className="relative flex h-[520px] w-[390px] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025] shadow-[0_0_80px_rgba(0,213,239,0.09)] backdrop-blur-sm">
            <img src="/mahdi.png" alt="Mahdi Alizadeh" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
