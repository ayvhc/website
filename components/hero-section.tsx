"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "./icons";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 90]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.55]);

  return (
    <section className="relative min-h-screen overflow-hidden py-10 sm:py-12">
      <div className="section-shell flex min-h-screen flex-col justify-center">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(260px,0.72fr)] lg:gap-10 xl:gap-14">
          <motion.div
            className="-mt-4 flex max-w-3xl flex-col gap-8 sm:-mt-6 sm:gap-9 lg:-mt-8 lg:gap-10"
            style={{ y, opacity }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-5 sm:space-y-6">
              <p className="font-serif text-[2.9rem] leading-none text-navy sm:text-[4.2rem] lg:text-[5.45rem]">
                Yihung Chen
              </p>
              <div className="space-y-3">
                <p className="max-w-2xl text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
                  Systems Engineering at UIUC
                </p>
                <p className="max-w-3xl text-base text-foreground/76 sm:text-lg lg:text-[1.16rem]">
                  I build teams, engineer solutions, invest in ideas, and once
                  started a flower shop on campus for fun. You don't learn
                  to swim by reading about the ocean, just jump in!
                </p>
              </div>
            </div>

            <motion.a
              href="#timeline"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-navy/12 bg-white/72 px-5 py-3 text-sm font-medium text-navy shadow-soft"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.32 }}
              whileHover={{ y: -3 }}
            >
              <span>Scroll to explore my story</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white">
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            className="relative mx-auto flex w-full justify-center lg:mx-0 lg:justify-center"
            initial={{ opacity: 0, x: 24, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-[23rem] w-[16.25rem] overflow-hidden rounded-[28px] border border-white/70 bg-white/70 shadow-soft sm:h-[26rem] sm:w-[18.75rem] lg:h-[29.5rem] lg:w-[20.5rem] xl:h-[31rem] xl:w-[21.75rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_42%)]" />
              <Image
                src="/images/yihung-chen-portrait.jpg"
                alt="Yihung Chen portrait"
                width={920}
                height={1180}
                className="relative h-full w-full object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-32 w-px -translate-x-1/2 bg-gradient-to-b from-navy/0 via-navy/30 to-navy/0 sm:block"
        animate={{ opacity: [0.45, 0.85, 0.45] }}
        transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut" }}
      />
    </section>
  );
}
