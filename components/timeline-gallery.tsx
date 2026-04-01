"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type TimelineGalleryProps = {
  image: string;
  className?: string;
};

export function TimelineGallery({ image, className = "" }: TimelineGalleryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -18, y: 12 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: -12, y: 10 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-card relative overflow-hidden border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(236,242,248,0.72))] p-4 shadow-[0_18px_42px_rgba(18,36,62,0.08)] sm:p-5 ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-24 rounded-full bg-[radial-gradient(circle,rgba(94,123,157,0.12),transparent_72%)]" />
      <div className="relative">
        <p className="mb-4 text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-navy/52">
          Project Gallery
        </p>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.36,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative overflow-hidden rounded-[1.3rem] border border-white/80 bg-[linear-gradient(180deg,rgba(244,247,250,0.95),rgba(233,239,245,0.9))] p-3 shadow-[0_12px_24px_rgba(18,36,62,0.08)] sm:p-4"
        >
          <Image
            src={image}
            alt="Gazzola Lab project showcase"
            width={1600}
            height={1200}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 88vw, 28vw"
            className="h-auto w-full rounded-[1rem] object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
