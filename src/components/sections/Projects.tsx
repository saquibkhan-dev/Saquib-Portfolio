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
          A collection of real-world projects demonstrating frontend
          architecture, UI judgement, and full-stack understanding.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 🔹 OLD PROJECT 1 */}
        <ProjectCard
          title="Approval Workflow & Audit Log Platform"
          description="A role-based approval workflow system designed with compliance and auditability in mind."
          tech={["React", "Node.js", "Express", "MySQL"]}
          points={[
            "Multi-level approval flow (Employee → Manager → Finance)",
            "Backend-enforced business rules",
            "Immutable audit logs for compliance",
            "Clean separation of frontend and backend logic"
          ]}
          github="https://github.com/saquibkhan-dev/Approval-Workflow-and-Audit-Log"
        />

        {/* 🔹 OLD PROJECT 2 */}
        <ProjectCard
          title="Authentication Dashboard Application"
          description="A secure authentication-based dashboard implementing modern login and authorization flows."
          tech={["React", "Node.js", "JWT", "MySQL"]}
          points={[
            "User signup and login with JWT authentication",
            "Password hashing using bcrypt",
            "Protected routes and session handling",
            "Clean dashboard UI after authentication"
          ]}
          github="https://github.com/saquibkhan-dev/Authentication-Dashboard"
        />

        {/* 🔹 NEW PROJECT 1 */}
        <ProjectCard
          title="Invoice Chaser"
          description="A freelance invoice management and reminder system designed to track payments and automate follow-ups."
          tech={["React", "Supabase", "Stripe", "Tailwind"]}
          points={[
            "Invoice creation and status tracking",
            "Automated reminder workflows",
            "Client-facing invoice pages",
            "SaaS-style dashboard interface"
          ]}
          github="https://github.com/saquibkhan-dev/Invoice-Chaser"
        />

        {/* 🔹 NEW PROJECT 2 */}
        <ProjectCard
          title="Full-Stack Job Application Platform"
          description="An end-to-end job application platform with authentication and application lifecycle management."
          tech={["React", "Node.js", "Express", "MySQL"]}
          points={[
            "User authentication and authorization",
            "Job posting and application flow",
            "Role-based access control",
            "REST API driven architecture"
          ]}
          github="https://github.com/saquibkhan-dev/Full-stack-job-application-platform"
        />

        {/* 🔹 NEW PROJECT 3 */}
        <ProjectCard
          title="Business Website"
          description="A responsive business website focused on layout structure, accessibility, and content clarity."
          tech={["HTML", "CSS", "JavaScript"]}
          points={[
            "Responsive layout using modern CSS",
            "Semantic HTML structure",
            "Business-focused UI design",
            "Performance-optimized pages"
          ]}
          github="https://github.com/saquibkhan-dev/business-website"
        />

        {/* 🔹 NEW PROJECT 4 */}
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
