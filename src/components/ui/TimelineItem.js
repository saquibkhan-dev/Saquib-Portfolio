import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function TimelineItem({ title, org, period, points, highlight = false }) {
    return (_jsxs("div", { className: "relative pl-12", children: [_jsx("span", { className: "\r\n          absolute left-0 top-1.5 h-4 w-4 rounded-full\r\n        ", style: {
                    backgroundColor: highlight
                        ? "var(--primary)"
                        : "var(--border)",
                    boxShadow: highlight
                        ? "0 0 0 6px var(--primary-soft)"
                        : "none"
                } }), _jsx("span", { className: "absolute left-[7px] top-6 h-full w-px", style: {
                    background: "linear-gradient(to bottom, var(--border), transparent)"
                } }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold", children: title }), _jsxs("p", { className: "mt-1 text-sm text-[var(--text-muted)]", children: [_jsx("span", { className: "font-medium text-[var(--text-main)]", children: org }), " ", "\u00B7 ", period] }), _jsx("ul", { className: "mt-4 space-y-2 text-[var(--text-muted)]", children: points.map(point => (_jsx("li", { className: "leading-relaxed", children: point }, point))) })] })] }));
}
