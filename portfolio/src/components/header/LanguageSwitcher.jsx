import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  const targetLanguage = language === "en" ? "FA" : "EN";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`Switch to ${targetLanguage}`}
      className="fixed left-6 top-6 z-[100] flex items-center justify-center
                 rounded-full border border-white/10 bg-white/5
                 px-4 py-2 text-sm font-medium text-white
                 backdrop-blur-md transition-all duration-300
                 hover:bg-white/10"
    >
      {targetLanguage}
    </button>
  );
}