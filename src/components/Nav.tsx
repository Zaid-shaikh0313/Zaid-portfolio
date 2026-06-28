"use client";

const links = [
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-[15px] font-semibold tracking-tight text-text"
        >
          ZS<span className="text-flow">.</span>
          <span className="ml-2 hidden font-mono text-[11px] font-normal tracking-wider text-text-dim sm:inline">
            data engineer
          </span>
        </a>
        <ul className="flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[12px] tracking-wide text-text-dim transition-colors hover:text-flow"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
