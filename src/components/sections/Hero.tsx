import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="w-full max-w-4xl px-6 lg:px-20">
        <div
          className={`
            ${show ? "animate-[fadeUp_0.9s_ease-out_forwards]" : "opacity-0"}
          `}
        >
          {/* EYEBROW */}
          <p
            className="text-sm tracking-wide uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            Frontend Developer
          </p>

          {/* NAME */}
          <h1
            className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight"
            style={{ color: "var(--text-main)" }}
          >
            Saquib Khan
          </h1>

          {/* STATEMENT */}
          <p
            className="mt-8 max-w-2xl text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            I build clean, scalable, and user-focused web interfaces using
            React, TypeScript, and modern CSS. My work focuses on clarity,
            performance, and real-world product thinking.
          </p>

          {/* LINKS */}
          <div className="mt-10 flex flex-wrap gap-8 text-sm">
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
            className="mt-24 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            ↓ Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}
