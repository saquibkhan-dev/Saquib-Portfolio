import TechTag from "./TechTag";

type Props = {
  title: string;
  description: string;
  tech: string[];
  points: string[];
  github: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  points,
  github
}: Props) {
  return (
    <div
      className="
        glass rounded-3xl p-8
        border transition
        hover:-translate-y-1
      "
      style={{
        borderColor: "var(--border)",
        boxShadow: "0 20px 50px rgba(2,6,23,0.12)"
      }}
    >
      {/* Title */}
      <h3
        className="text-2xl font-semibold"
        style={{ color: "var(--text-main)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="mt-3 leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {description}
      </p>

      {/* Tech Stack */}
      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map(t => (
          <TechTag key={t} label={t} />
        ))}
      </div>

      {/* Highlights */}
      <ul
        className="mt-6 space-y-2"
        style={{ color: "var(--text-muted)" }}
      >
        {points.map(p => (
          <li key={p}>• {p}</li>
        ))}
      </ul>

      {/* GitHub Link */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 text-sm font-semibold hover:underline"
        style={{ color: "var(--primary)" }}
      >
        View on GitHub →
      </a>
    </div>
  );
}
