type Props = {
  title: string;
  items: string[];
  accent: "primary" | "secondary";
};

export default function SkillCard({ title, items, accent }: Props) {
  const gradient =
    accent === "primary"
      ? "linear-gradient(135deg, var(--primary), var(--secondary))"
      : "linear-gradient(135deg, var(--secondary), var(--primary))";

  return (
    <div
      className="
        group relative rounded-3xl p-8
        glass border
        transition-all duration-300
        hover:-translate-y-2
      "
      style={{
        borderColor: "var(--border)",
        boxShadow: "0 12px 30px rgba(2,6,23,0.12)"
      }}
    >
      {/* Soft halo (very subtle) */}
      <div
        className="
          absolute -inset-0.5 rounded-3xl opacity-0
          group-hover:opacity-100 transition duration-300
        "
        style={{
          background: gradient,
          filter: "blur(24px)",
          zIndex: -1
        }}
      />

      {/* Accent bar */}
      <div
        className="h-1 w-14 rounded-full mb-6"
        style={{ background: gradient }}
      />

      <h3 className="text-xl font-semibold">{title}</h3>

      <ul className="mt-6 flex flex-wrap gap-3">
        {items.map(item => (
          <li
            key={item}
            className="
              px-4 py-1.5 rounded-full text-sm font-medium
              border bg-[var(--surface-soft)]
              transition
            "
            style={{
              borderColor: "var(--border)"
            }}
          >
            {/* Subtle highlight instead of glow */}
            <span
              className="
                transition-colors duration-200
                group-hover:text-[var(--primary)]
              "
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
