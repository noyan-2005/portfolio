import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { getTranslations } from "../../data/translations";

export default function TypingText() {
  const { language } = useLanguage();
  const words = getTranslations(language).hero.roles;
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setWordIndex(0);
    setText("");
    setDeleting(false);
  }, [language]);

  const currentWord = words[wordIndex];

  useEffect(() => {
    if (!deleting && text === currentWord) {
      const timeout = setTimeout(() => setDeleting(true), 1000);
      return () => clearTimeout(timeout);
    }

    if (deleting) {
      const timeout = setTimeout(() => {
        setText((prev) => {
          const next = prev.slice(0, -1);
          if (next === "") {
            setDeleting(false);
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
          return next;
        });
      }, 45);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setText(currentWord.slice(0, text.length + 1));
    }, 75);

    return () => clearTimeout(timeout);
  }, [text, deleting, currentWord, words.length]);

  return (
    <span className="inline-flex h-full min-w-[320px] items-center leading-none">
      <span className="text-brand">{text}</span>
      <span className="ml-1 h-[1.1em] w-[2px] shrink-0 animate-pulse bg-brand" />
    </span>
  );
}
