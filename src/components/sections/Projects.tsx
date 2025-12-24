import ProjectCard from "../ui/ProjectCard";

import approvalImg from "../../assets/projects/approval.png";
import authImg from "../../assets/projects/auth-dashboard.png";

export default function Projects() {
  return (
    <section className="py-36" id="projects">

      <div className="max-w-2xl">
        <p
          className="text-sm font-semibold tracking-wide"
          style={{ color: "var(--primary)" }}
        >
          PROJECTS
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Selected work
        </h2>

        <p className="mt-4 text-[var(--text-muted)]">
          A selection of projects that demonstrate real-world
          frontend development, system design, and UI polish.
        </p>
      </div>

      <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">

        <ProjectCard
          title="Approval Workflow System"
          description="Enterprise-style expense approval system with role-based access and audit logging."
          image={approvalImg}
          tech={["React", "Node.js", "Express", "MySQL"]}
          points={[
            "Implemented multi-level approval logic based on request amount",
            "Built immutable audit logs with CSV export for compliance",
            "Designed clean React UI without external UI libraries"
          ]}
          github="https://github.com/saquibkhan-dev"
        />

        <ProjectCard
          title="Authentication Dashboard"
          description="Secure authentication and role-based dashboard with JWT authorization."
          image={authImg}
          tech={["React", "Node.js", "JWT", "MySQL"]}
          points={[
            "Implemented secure signup and login with encrypted passwords",
            "Protected routes using token-based authorization",
            "Built role-aware dashboards with clean state management"
          ]}
          github="https://github.com/saquibkhan-dev"
        />
      </div>
    </section>
  );
}
