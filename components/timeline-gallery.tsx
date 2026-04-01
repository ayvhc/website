"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type TimelineGalleryProps = {
  images: string[];
  title: string;
  className?: string;
};

const imageSlots = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1"
];

export function TimelineGallery({ images, title, className = "" }: TimelineGalleryProps) {
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
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-navy/52">
              Project Gallery
            </p>
            <p className="mt-2 text-sm leading-6 text-foreground/64">{title}</p>
          </div>
          <span className="rounded-full border border-navy/10 bg-white/70 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-navy/58">
            7 frames
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:auto-rows-[120px]">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.34,
                delay: 0.06 + index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`group relative overflow-hidden rounded-[1.3rem] border border-white/80 bg-mist/55 shadow-[0_12px_24px_rgba(18,36,62,0.08)] ${
                imageSlots[index] ?? "sm:col-span-1 sm:row-span-1"
              } ${index === 0 ? "col-span-2 aspect-[1.35/1] sm:aspect-auto" : "aspect-square sm:aspect-auto"}`}
            >
              <Image
                src={src}
                alt={`${title} project image ${index + 1}`}
                fill
                sizes="(max-width: 639px) 50vw, (max-width: 1023px) 45vw, 28vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(17,28,43,0.14))]" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
