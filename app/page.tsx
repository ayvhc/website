import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { HowIThinkSection } from "@/components/how-i-think-section";
import { SkillsSection } from "@/components/skills-section";
import { TimelineSection } from "@/components/timeline-section";
import { TopNav } from "@/components/top-nav";

export default function Home() {
  return (
    <main id="top" className="relative overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(111,141,178,0.12),transparent_34%),radial-gradient(circle_at_20%_30%,rgba(205,218,231,0.28),transparent_20%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-soft-grid bg-[length:72px_72px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <TopNav active="me" />
      <HeroSection />
      <TimelineSection />
      <HowIThinkSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
