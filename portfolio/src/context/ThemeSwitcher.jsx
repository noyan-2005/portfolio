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
        border-border

        bg-surface/70
        text-text-secondary

        shadow-sm
        backdrop-blur-md

        transition-all
        duration-300

        hover:border-brand/30
        hover:bg-surface
        hover:text-brand
        hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]
      "
    >
      {isDark ? (
        <Sun
          size={18}
          strokeWidth={1.8}
        />
      ) : (
        <Moon
          size={18}
          strokeWidth={1.8}
        />
      )}
    </button>
  );
}