import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        px-3 py-1.5 rounded-md
        text-xs font-medium
        border border-gray-300
        hover:bg-gray-100
      "
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
