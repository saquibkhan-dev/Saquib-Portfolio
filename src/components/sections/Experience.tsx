import TimelineItem from "../ui/TimelineItem";

export default function Experience() {
  return (
    <section className="py-32">
      <div className="max-w-2xl">
        <p
          className="text-sm font-semibold tracking-wide"
          style={{ color: "var(--primary)" }}
        >
          EXPERIENCE
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Training & professional experience
        </h2>

        <p className="mt-4 text-[var(--text-muted)]">
          Practical experience gained through structured training and
          real-world development work, focused on building modern,
          maintainable frontend applications.
        </p>
      </div>

      <div className="mt-20 space-y-20">
        <TimelineItem
          title="Frontend Developer Trainee"
          org="Anudip Foundation"
          period="Aug 2025 – Present"
          highlight
          points={[
            "Built reusable React components with Tailwind CSS for dashboards and internal tools",
            "Delivered mobile-first layouts with consistent design patterns across screens",
            "Improved UI performance using memoization techniques in React",
            "Collaborated in Agile teams using Git-based workflows"
          ]}
        />

        <TimelineItem
          title="Frontend Development Intern"
          org="Tech Octanet Pvt. Ltd."
          period="Oct 2024 – Nov 2024"
          points={[
            "Developed responsive interfaces using semantic HTML, CSS, and JavaScript",
            "Enhanced performance through image optimization and lazy loading",
            "Integrated REST APIs and ensured cross-browser compatibility"
          ]}
        />
      </div>
    </section>
  );
}
