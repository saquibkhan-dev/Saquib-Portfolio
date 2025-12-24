type Props = {
  label: string;
};

export default function TechTag({ label }: Props) {
  return (
    <span
      className="
        px-3 py-1 rounded-full text-xs font-medium
        border cursor-default
        transition-all duration-200
        hover:-translate-y-[1px]
      "
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--surface-soft)",
        color: "var(--text-main)"
      }}
    >
      <span
        className="
          transition-all duration-200
          hover:text-[var(--primary)]
        "
        style={{
          textShadow: "0 0 10px rgba(124, 58, 237, 0.35)"
        }}
      >
        {label}
      </span>
    </span>
  );
}
