"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  const cardVariants = ["premium-card-b", "premium-card-d", "premium-card-a", "premium-card-c"];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills, organized by the way I work."
          description="Instead of a flat list, these clusters reflect the environments I tend to contribute in: product, research, engineering, and strategy."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className={`premium-section-card skill-cluster-card ${cardVariants[index % cardVariants.length]} p-6 sm:p-7`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/50">
                    Cluster {index + 1}
                  </p>
                  <h3 className="premium-gradient-text mt-3 font-serif text-3xl">{group.title}</h3>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span key={item} className="premium-skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
