import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ThemeToggle from "../ui/ThemeToggle";
export default function Navbar() {
    return (_jsx("header", { className: "w-full border-b", style: {
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)"
        }, children: _jsxs("nav", { className: "mx-auto max-w-7xl px-6 lg:px-20 h-16 flex items-center justify-between", children: [_jsx("span", { className: "text-sm font-semibold", style: { color: "var(--text-main)" }, children: "Saquib Khan" }), _jsxs("div", { className: "flex items-center gap-6 text-sm", style: { color: "var(--text-muted)" }, children: [_jsx("a", { href: "#skills", className: "hover:underline", children: "Skills" }), _jsx("a", { href: "#projects", className: "hover:underline", children: "Work" }), _jsx("a", { href: "#contact", className: "hover:underline", children: "Contact" }), _jsx(ThemeToggle, {})] })] }) }));
}
