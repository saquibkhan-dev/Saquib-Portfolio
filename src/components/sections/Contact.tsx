export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 scroll-mt-20"
    >
      <div className="max-w-2xl">
        <p
          className="text-sm font-semibold tracking-wide"
          style={{ color: "var(--primary)" }}
        >
          CONTACT
        </p>

        <h2
          className="mt-3 text-4xl font-bold"
          style={{ color: "var(--text-main)" }}
        >
          Let’s work together
        </h2>

        <p
          className="mt-4"
          style={{ color: "var(--text-muted)" }}
        >
          If you have an opportunity, project, or just want to connect,
          feel free to reach out.
        </p>

        <a
          href="mailto:saquibkhanjava@gmail.com"
          className="inline-block mt-8 text-sm font-semibold hover:underline"
          style={{ color: "var(--primary)" }}
        >
          saquibkhanjava@gmail.com
        </a>
      </div>
    </section>
  );
}
