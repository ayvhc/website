"use client";

import { motion } from "framer-motion";
import { principles } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function HowIThinkSection() {
  const cardVariants = ["premium-card-a", "premium-card-b", "premium-card-c", "premium-card-d"];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="How I think and build"
          title="A blend of engineering rigor and founder intuition."
          description="I like trying new things-unexpected outcomes are where real growth happens. That's how I learn what actually works."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((item, index) => (
            <motion.article
              key={item.title}
              className={`premium-section-card mindset-card ${cardVariants[index % cardVariants.length]} p-6`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue/85">
                0{index + 1}
              </p>
              <h3 className="premium-gradient-text mt-5 font-serif text-3xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-foreground/68">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
