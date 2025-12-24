import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function SkillCard({ title, items, accent }) {
    const gradient = accent === "primary"
        ? "linear-gradient(135deg, var(--primary), var(--secondary))"
        : "linear-gradient(135deg, var(--secondary), var(--primary))";
    return (_jsxs("div", { className: "\r\n        group relative rounded-3xl p-8\r\n        glass border\r\n        transition-all duration-300\r\n        hover:-translate-y-2\r\n      ", style: {
            borderColor: "var(--border)",
            boxShadow: "0 12px 30px rgba(2,6,23,0.12)"
        }, children: [_jsx("div", { className: "\r\n          absolute -inset-0.5 rounded-3xl opacity-0\r\n          group-hover:opacity-100 transition duration-300\r\n        ", style: {
                    background: gradient,
                    filter: "blur(24px)",
                    zIndex: -1
                } }), _jsx("div", { className: "h-1 w-14 rounded-full mb-6", style: { background: gradient } }), _jsx("h3", { className: "text-xl font-semibold", children: title }), _jsx("ul", { className: "mt-6 flex flex-wrap gap-3", children: items.map(item => (_jsx("li", { className: "\r\n              px-4 py-1.5 rounded-full text-sm font-medium\r\n              border bg-[var(--surface-soft)]\r\n              transition\r\n            ", style: {
                        borderColor: "var(--border)"
                    }, children: _jsx("span", { className: "\r\n                transition-colors duration-200\r\n                group-hover:text-[var(--primary)]\r\n              ", children: item }) }, item))) })] }));
}
