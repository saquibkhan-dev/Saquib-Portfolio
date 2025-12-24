import TechTag from "./TechTag";

type Props = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  points: string[];
  github?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  points,
  github,
}: Props) {
  return (
    <div
  className="
    group rounded-3xl overflow-hidden
    glass border
    transition hover:-translate-y-1.5
    flex flex-col
  "
  style={{
    borderColor: "var(--border)",
    boxShadow: "0 20px 60px rgba(2,6,23,0.14)"
  }}
>

      {/* Screenshot */}
    <div className="overflow-hidden rounded-t-3xl">
  <img
    src={image}
    alt={title}
    loading="lazy"
    className="
      w-full
      h-[220px] sm:h-[260px] lg:h-auto
      object-cover
      transition-transform duration-500
      group-hover:scale-[1.03]
    "
  />
</div>


      {/* Content */}
     <div className="p-6 sm:p-8">

       <h3 className="text-2xl font-semibold tracking-tight">
  {title}
</h3>


        <p className="mt-3 max-w-xl text-[var(--text-muted)]">
  {description}
</p>


        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>

        {/* Highlights */}
        <ul className="mt-6 space-y-2 text-[var(--text-muted)]">
          {points.map((p) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>

        {/* CTA */}
        {github && (
          <a
  href={github}
  target="_blank"
  className="
    inline-flex items-center gap-2 mt-10
    text-sm font-semibold
    transition
    group/cta
  "
  style={{ color: "var(--primary)" }}
>
  View on GitHub
  <span
    className="
      transition-transform duration-200
      group-hover/cta:translate-x-1
    "
  >
    →
  </span>
</a>

        )}
      </div>
    </div>
  );
}
