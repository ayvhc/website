"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { contactLinks } from "@/lib/portfolio-data";
import { ArrowUpRight } from "./icons";

export function ContactSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-shell">
        <motion.div
          className="glass-card overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(90,121,159,0.12),transparent_32%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Contact</span>
              <h2 className="mt-6 font-serif text-4xl text-navy sm:text-5xl">
                If this story feels aligned, I'd love to continue the conversation.
              </h2>
              <p className="mt-5 max-w-xl text-base text-foreground/66 sm:text-lg">
                I'm especially interested in opportunities that sit at the intersection of
                engineering, product, research, startups, and thoughtful business building.
              </p>
            </div>

            <div className="grid gap-3">
              {contactLinks.map((item) => (
                item.href === "/resume" ? (
                  <Link
                    key={item.label}
                    href="/resume"
                    className="flex cursor-pointer items-center justify-between rounded-[1.35rem] border border-navy/10 bg-white/70 px-5 py-4 text-sm text-foreground/72 hover:border-navy/18 hover:shadow-soft"
                  >
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy/46">
                        {item.label}
                      </p>
                      <p className="mt-1 text-base font-medium text-foreground">{item.value}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-navy" />
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between rounded-[1.35rem] border border-navy/10 bg-white/70 px-5 py-4 text-sm text-foreground/72 hover:border-navy/18 hover:shadow-soft"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy/46">
                        {item.label}
                      </p>
                      <p className="mt-1 text-base font-medium text-foreground">{item.value}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-navy" />
                  </a>
                )
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
