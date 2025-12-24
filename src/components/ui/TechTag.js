import { jsx as _jsx } from "react/jsx-runtime";
export default function TechTag({ label }) {
    return (_jsx("span", { className: "\r\n        px-3 py-1 rounded-full text-xs font-medium\r\n        border cursor-default\r\n        transition-all duration-200\r\n        hover:-translate-y-[1px]\r\n      ", style: {
            borderColor: "var(--border)",
            backgroundColor: "var(--surface-soft)",
            color: "var(--text-main)"
        }, children: _jsx("span", { className: "\r\n          transition-all duration-200\r\n          hover:text-[var(--primary)]\r\n        ", style: {
                textShadow: "0 0 10px rgba(124, 58, 237, 0.35)"
            }, children: label }) }));
}
