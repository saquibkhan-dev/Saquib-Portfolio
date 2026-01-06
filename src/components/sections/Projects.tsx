import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-2xl">
        <p
          className="text-sm font-semibold tracking-wide"
          style={{ color: "var(--primary)" }}
        >
          PROJECTS
        </p>

        <h2
          className="mt-3 text-4xl font-bold"
          style={{ color: "var(--text-main)" }}
        >
          Selected work
        </h2>

        <p
          className="mt-4"
          style={{ color: "var(--text-muted)" }}
        >
          A collection of real-world projects showcasing frontend
          architecture, UI judgement, and full-stack understanding.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProjectCard
          title="Invoice Chaser"
          description="A freelance invoice management and reminder system designed to track payments and automate follow-ups."
          tech={["React", "Supabase", "Stripe", "Tailwind"]}
          points={[
            "Invoice creation and status tracking",
            "Automated payment reminder workflow",
            "Client-facing invoice pages",
            "Clean SaaS-style dashboard UI"
          ]}
          github="https://github.com/saquibkhan-dev/Invoice-Chaser"
        />

        <ProjectCard
          title="Full-Stack Job Application Platform"
          description="An end-to-end job application system with authentication, role-based access, and application workflows."
          tech={["React", "Node.js", "Express", "MySQL"]}
          points={[
            "User authentication and authorization",
            "Job posting and application lifecycle",
            "Role-based access control",
            "Full-stack architecture with REST APIs"
          ]}
          github="https://github.com/saquibkhan-dev/Full-stack-job-application-platform"
        />

        <ProjectCard
          title="Business Website"
          description="A responsive business website focused on layout structure, accessibility, and content clarity."
          tech={["HTML", "CSS", "JavaScript"]}
          points={[
            "Responsive layout using modern CSS",
            "Semantic HTML structure",
            "Business-focused content organization",
            "Performance and accessibility considerations"
          ]}
          github="https://github.com/saquibkhan-dev/business-website"
        />

        <ProjectCard
          title="Social Media Dashboard"
          description="A dashboard-style interface for visualizing and managing social media metrics."
          tech={["React", "JavaScript", "CSS"]}
          points={[
            "Dashboard UI patterns",
            "Component-based architecture",
            "Scalable layout for analytics",
            "Focus on clarity and usability"
          ]}
          github="https://github.com/saquibkhan-dev/Social-Media-Dashboard"
        />
      </div>
    </section>
  );
}
