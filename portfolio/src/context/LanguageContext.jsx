import { useSyncExternalStore } from "react";

const STORAGE_KEY = "portfolio-language";

let language =
  typeof window !== "undefined"
    ? localStorage.getItem(STORAGE_KEY) || "en"
    : "en";

const listeners = new Set();

function setDocumentLanguage(nextLanguage) {
  if (typeof document === "undefined") return;

  document.documentElement.lang = nextLanguage;
  document.documentElement.dir =
    nextLanguage === "fa" ? "rtl" : "ltr";
}

function setLanguage(nextLanguage) {
  language = nextLanguage === "fa" ? "fa" : "en";

  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, language);
  }

  setDocumentLanguage(language);
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return language;
}

function getServerSnapshot() {
  return "en";
}

export function useLanguage() {
  const currentLanguage = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const toggleLanguage = () => {
    setLanguage(currentLanguage === "en" ? "fa" : "en");
  };

  return {
    language: currentLanguage,
    setLanguage,
    toggleLanguage,
  };
}

if (typeof document !== "undefined") {
  setDocumentLanguage(language);
}
