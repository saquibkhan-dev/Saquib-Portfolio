import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SkillCard from "../ui/SkillCard";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
export default function Skills() {
    const { ref, visible } = useRevealOnScroll();
    return (_jsxs("section", { ref: ref, id: "skills", className: `py-32 ${visible ? "reveal-visible" : "reveal"}`, children: [_jsxs("div", { className: "max-w-2xl", children: [_jsx("p", { className: "text-sm font-bold tracking-widest", style: { color: "var(--primary)" }, children: "SKILLS" }), _jsx("h2", { className: "mt-4 text-5xl font-extrabold", children: "Tech I use daily" }), _jsx("p", { className: "mt-6 text-lg text-[var(--text-muted)]", children: "A modern frontend-focused stack, designed for building production-ready, scalable web applications with strong UI polish." })] }), _jsxs("div", { className: "mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12", children: [_jsx(SkillCard, { title: "Frontend Development", accent: "primary", items: [
                            "HTML5",
                            "CSS3",
                            "JavaScript",
                            "React",
                            "TypeScript",
                            "Tailwind CSS"
                        ] }), _jsx(SkillCard, { title: "Backend Familiarity", accent: "secondary", items: [
                            "Node.js",
                            "Express.js",
                            "MySQL",
                            "REST APIs",
                            "JWT"
                        ] }), _jsx(SkillCard, { title: "Tools & Workflow", accent: "primary", items: [
                            "Git & GitHub",
                            "VS Code",
                            "Postman",
                            "Chrome DevTools",
                            "Agile / Scrum"
                        ] })] })] }));
}
