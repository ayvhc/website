import { TopNav } from "@/components/top-nav";

export default function ResumePage() {
  return (
    <main id="top" className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(111,141,178,0.12),transparent_34%),radial-gradient(circle_at_20%_30%,rgba(205,218,231,0.28),transparent_20%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-soft-grid bg-[length:72px_72px] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <TopNav active="resume" />

      <section className="section-shell flex min-h-screen flex-col pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-5">
              <span className="eyebrow">Resume</span>
              <div>
                <h1 className="font-serif text-4xl text-navy sm:text-5xl">A cleaner view of the full resume.</h1>
              </div>
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-flex w-fit items-center justify-center rounded-full border border-navy/12 bg-white/80 px-5 py-3 text-sm font-medium text-navy shadow-soft hover:border-navy/20"
            >
              Download Resume
            </a>
          </div>

          <div className="glass-card overflow-hidden rounded-[2rem] border border-white/70 p-3 shadow-soft sm:p-4">
            <div className="overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white/70">
              <iframe
                src="/resume.pdf"
                title="Resume PDF"
                className="h-[72vh] min-h-[38rem] w-full bg-white"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
