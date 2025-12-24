import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext(undefined);
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        // 🔥 THIS IS THE KEY FIX
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };
    return (_jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children: children }));
}
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return ctx;
}
