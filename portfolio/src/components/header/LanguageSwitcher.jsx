import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  const targetLanguage = language === "en" ? "FA" : "EN";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`Switch to ${targetLanguage}`}
      className="
        fixed
        left-6
        top-6
        z-[100]

        flex
        items-center
        justify-center

        rounded-full

        border
        border-border

        bg-surface/60

        px-2.5
        py-2

        text-sm
        font-medium
        text-text-primary

        backdrop-blur-md

        transition-all
        duration-300

        hover:border-brand/30
        hover:bg-surface
        hover:text-brand

        shadow-sm
      "
    >
      {targetLanguage}
    </button>
  );
}