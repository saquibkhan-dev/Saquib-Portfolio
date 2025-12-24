import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TimelineItem from "../ui/TimelineItem";
export default function Experience() {
    return (_jsxs("section", { className: "py-32", children: [_jsxs("div", { className: "max-w-2xl", children: [_jsx("p", { className: "text-sm font-semibold tracking-wide", style: { color: "var(--primary)" }, children: "EXPERIENCE" }), _jsx("h2", { className: "mt-3 text-4xl font-bold", children: "Training & professional experience" }), _jsx("p", { className: "mt-4 text-[var(--text-muted)]", children: "Practical experience gained through structured training and real-world development work, focused on building modern, maintainable frontend applications." })] }), _jsxs("div", { className: "mt-20 space-y-20", children: [_jsx(TimelineItem, { title: "Frontend Developer Trainee", org: "Anudip Foundation", period: "Aug 2025 \u2013 Present", highlight: true, points: [
                            "Built reusable React components with Tailwind CSS for dashboards and internal tools",
                            "Delivered mobile-first layouts with consistent design patterns across screens",
                            "Improved UI performance using memoization techniques in React",
                            "Collaborated in Agile teams using Git-based workflows"
                        ] }), _jsx(TimelineItem, { title: "Frontend Development Intern", org: "Tech Octanet Pvt. Ltd.", period: "Oct 2024 \u2013 Nov 2024", points: [
                            "Developed responsive interfaces using semantic HTML, CSS, and JavaScript",
                            "Enhanced performance through image optimization and lazy loading",
                            "Integrated REST APIs and ensured cross-browser compatibility"
                        ] })] })] }));
}
