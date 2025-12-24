type Props = {
  title: string;
  org: string;
  period: string;
  points: string[];
  highlight?: boolean;
};

export default function TimelineItem({
  title,
  org,
  period,
  points,
  highlight = false
}: Props) {
  return (
    <div className="relative pl-12">
      {/* Timeline dot */}
      <span
        className="
          absolute left-0 top-1.5 h-4 w-4 rounded-full
        "
        style={{
          backgroundColor: highlight
            ? "var(--primary)"
            : "var(--border)",
          boxShadow: highlight
            ? "0 0 0 6px var(--primary-soft)"
            : "none"
        }}
      />

      {/* Vertical line */}
      <span
        className="absolute left-[7px] top-6 h-full w-px"
        style={{
          background:
            "linear-gradient(to bottom, var(--border), transparent)"
        }}
      />

      <div>
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          <span className="font-medium text-[var(--text-main)]">
            {org}
          </span>{" "}
          · {period}
        </p>

        <ul className="mt-4 space-y-2 text-[var(--text-muted)]">
          {points.map(point => (
            <li key={point} className="leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
