import { useEffect, useState } from "react";
import profile from "../../assets/profile.jpg";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT — CONTENT */}
      <div
        className="flex items-center px-6 py-16 lg:px-20"
        style={{ backgroundColor: "var(--surface)" }}
      >
        <div
          className={`
            max-w-md
            ${show ? "animate-[fadeUp_0.8s_ease-out_forwards]" : "opacity-0"}
          `}
        >
          {/* NAME */}
          <h1
            className="text-4xl font-semibold tracking-tight"
            style={{ color: "var(--text-main)" }}
          >
            Saquib Khan
          </h1>

          {/* ROLE */}
          <p
            className="mt-1 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Frontend Developer
          </p>

          {/* DESCRIPTION */}
          <p
            className="mt-6 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Frontend developer with a strong focus on building clean,
            scalable web interfaces. Experienced in React, TypeScript,
            and Tailwind CSS, with hands-on work on dashboards,
            approval workflows, and authentication systems.
          </p>

          {/* LINKS */}
          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <a
              href="https://github.com/saquibkhan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "var(--primary)" }}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/saquib-khan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "var(--primary)" }}
            >
              LinkedIn
            </a>

            <a
              href="mailto:saquibkhanjava@gmail.com"
              className="hover:underline"
              style={{ color: "var(--primary)" }}
            >
              Email
            </a>
          </div>

          {/* SCROLL HINT */}
          <div
            className="mt-12 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            ↓ Scroll to explore
          </div>
        </div>
      </div>

      {/* RIGHT — IMAGE */}
      <div className="relative overflow-hidden h-[50vh] lg:h-auto pointer-events-none">
        <img
          src={profile}
          alt="Saquib Khan"
          className={`
            w-full h-full object-cover
            ${show ? "animate-[slideIn_1.1s_ease-out_forwards]" : "opacity-0"}
          `}
          style={{
            filter: "grayscale(20%) brightness(0.95)"
          }}
        />

        {/* THEME-AWARE IMAGE OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent, var(--surface-soft))"
          }}
        />
      </div>
    </section>
  );
}
