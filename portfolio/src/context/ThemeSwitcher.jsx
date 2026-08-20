import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
      className="
        fixed
        left-20
        top-6
        z-[100]
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        text-white
        backdrop-blur-md
        transition-all
        duration-300
        hover:bg-white/10
        dark:border-white/10
        dark:bg-white/5
        dark:text-white
      "
    >
      {isDark ? (
        <Sun size={18} strokeWidth={1.8} />
      ) : (
        <Moon size={18} strokeWidth={1.8} />
      )}
    </button>
  );
}