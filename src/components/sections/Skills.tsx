import SkillCard from "../ui/SkillCard";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
export default function Skills() {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();
  return (
     <section
      ref={ref}
      id="skills"
      className={`py-32 ${
        visible ? "reveal-visible" : "reveal"
      }`}
    >

      <div className="max-w-2xl">
        <p
          className="text-sm font-bold tracking-widest"
          style={{ color: "var(--primary)" }}
        >
          SKILLS
        </p>

        <h2 className="mt-4 text-5xl font-extrabold">
          Tech I use daily
        </h2>

        <p className="mt-6 text-lg text-[var(--text-muted)]">
          A modern frontend-focused stack, designed for building
          production-ready, scalable web applications with strong UI polish.
        </p>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <SkillCard
          title="Frontend Development"
          accent="primary"
          items={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "TypeScript",
            "Tailwind CSS"
          ]}
        />

        <SkillCard
          title="Backend Familiarity"
          accent="secondary"
          items={[
            "Node.js",
            "Express.js",
            "MySQL",
            "REST APIs",
            "JWT"
          ]}
        />

        <SkillCard
          title="Tools & Workflow"
          accent="primary"
          items={[
            "Git & GitHub",
            "VS Code",
            "Postman",
            "Chrome DevTools",
            "Agile / Scrum"
          ]}
        />
      </div>
    </section>
  );
}
