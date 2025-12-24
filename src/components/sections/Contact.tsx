export default function Contact() {
  return (
    <section className="py-36">
      <div className="max-w-2xl">
        <p
          className="text-sm font-semibold tracking-wide"
          style={{ color: "var(--primary)" }}
        >
          CONTACT
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Let’s work together
        </h2>

        <p className="mt-4 text-lg text-[var(--text-muted)]">
          I’m open to frontend roles, internships, and product-focused projects.
          If you’re building something meaningful, I’d love to talk.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {/* Primary CTA */}
          <a
            href="mailto:saquibkhanjava@gmail.com"
            className="
              inline-flex items-center justify-center
              rounded-xl px-6 py-3 text-sm font-semibold
              transition hover:scale-[1.02]
            "
            style={{
              background:
                "linear-gradient(to right, var(--primary), var(--secondary))",
              color: "#ffffff"
            }}
          >
            Email Me
          </a>

          {/* Secondary CTA */}
          <a
            href="https://github.com/saquibkhan-dev"
            target="_blank"
            className="
              inline-flex items-center justify-center
              rounded-xl px-6 py-3 text-sm font-semibold
              border transition
            "
            style={{
              borderColor: "var(--border)",
              color: "var(--text-main)"
            }}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
