import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "../../context/ThemeContext";
export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (_jsx("button", { onClick: toggleTheme, className: "\r\n        px-3 py-1.5 rounded-md\r\n        text-xs font-medium\r\n        border border-gray-300\r\n        hover:bg-gray-100\r\n      ", children: theme === "light" ? "Dark" : "Light" }));
}
