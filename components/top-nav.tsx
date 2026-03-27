type TopNavProps = {
  active?: "me" | "resume";
};

export function TopNav({ active }: TopNavProps) {
  return (
    <nav className="absolute right-6 top-8 z-30 flex items-center gap-4 md:right-10 md:gap-6">
      <a href="/" className={`top-nav-link ${active === "me" ? "top-nav-link-active" : ""}`}>
        Me
      </a>
      <a
        href="/resume"
        className={`top-nav-link ${active === "resume" ? "top-nav-link-active" : ""}`}
      >
        Resume
      </a>
    </nav>
  );
}
