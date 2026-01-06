import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)"
      }}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-20 h-16 flex items-center justify-between">
        <span
          className="text-sm font-semibold"
          style={{ color: "var(--text-main)" }}
        >
          Saquib Khan
        </span>

        <div
          className="flex items-center gap-6 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          <a href="#skills" className="hover:underline">
            Skills
          </a>

          <a href="#projects" className="hover:underline">
            Work
          </a>

          <a href="#contact" className="hover:underline">
            Contact
          </a>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
