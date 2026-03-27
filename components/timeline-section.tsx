"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { timelineEntries } from "@/lib/portfolio-data";
import { TimelineCard } from "./timeline-card";

const removedTimelineIds = new Set(["ubs", "build-illinois"]);

export function TimelineSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 18%", "end 78%"]
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25
  });
  const glowOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0.4, 1]);
  const visibleEntries = timelineEntries.filter((entry) => !removedTimelineIds.has(entry.id));

  return (
    <section id="timeline" ref={sectionRef} className="relative py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl font-medium text-navy/92 sm:text-5xl">
            Scroll slowly, time moves backward here...
          </h2>
        </div>

        <div className="relative mt-12 sm:mt-16">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-navy/10 lg:left-1/2 lg:-translate-x-1/2" />
          <motion.div
            className="absolute bottom-0 left-5 top-0 w-px origin-top bg-gradient-to-b from-blue/35 via-navy to-blue/30 lg:left-1/2 lg:-translate-x-1/2"
            style={{ scaleY: lineScale, opacity: glowOpacity }}
          />
          <div className="space-y-7 sm:space-y-10">
            {visibleEntries.map((entry, index) => (
              <TimelineCard
                key={entry.id}
                entry={entry}
                align={index % 2 === 0 ? "left" : "right"}
                isLast={index === timelineEntries.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
