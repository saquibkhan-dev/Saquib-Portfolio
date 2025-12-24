export default function Footer() {
  return (
    <footer className="py-20 text-sm text-[var(--text-muted)]">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <span>© {new Date().getFullYear()} Saquib Khan</span>

        <span>
          Built with React, TypeScript & Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
