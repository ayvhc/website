"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TimelineEntry } from "@/lib/portfolio-data";
import { ArrowUpRight, Plus } from "./icons";
import { TimelineGallery } from "./timeline-gallery";

type TimelineCardProps = {
  entry: TimelineEntry;
  align: "left" | "right";
  isLast: boolean;
};

const accentStyles = {
  default:
    "bg-[linear-gradient(135deg,rgba(240,245,250,0.96),rgba(248,251,254,0.94),rgba(255,255,255,0.9))] before:bg-gradient-to-br before:from-blue/14 before:to-transparent",
  brand:
    "bg-[linear-gradient(145deg,rgba(241,246,251,0.97),rgba(237,243,249,0.95),rgba(255,255,255,0.92))] before:bg-[radial-gradient(circle_at_top,rgba(77,108,145,0.18),transparent_62%)]",
  research:
    "bg-[linear-gradient(145deg,rgba(243,248,252,0.97),rgba(238,244,249,0.96),rgba(255,255,255,0.92))] before:bg-[radial-gradient(circle_at_top,rgba(130,154,179,0.18),transparent_62%)]"
};

const badgeLogoById: Partial<Record<TimelineEntry["id"], string>> = {
  present: "/images/uiuclogo.png",
  azura: "/images/azuralogo.png",
  hennecke: "/images/henneckelogo.png",
  cas: "/images/caslogo.png",
  "build-illinois": "/images/uiuclogo.png",
  gazzola: "/images/uiuclogo.png",
  "autism-research": "/images/uiuclogo.png",
  ubs: "/images/uiuclogo.png",
  "pressure-sensor": "/images/saslogo.png"
};

export function TimelineCard({ entry, align, isLast }: TimelineCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([current]) => {
        setIsActive(current.isIntersecting && current.intersectionRatio >= 0.4);
      },
      {
        threshold: [0.25, 0.4, 0.6]
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const isLeft = align === "left";
  const isIntroCard = entry.id === "present";
  const hasGallery = Boolean(entry.galleryImage);
  const desktopGallerySide = entry.galleryDesktopSide ?? (hasGallery && !isLeft ? "left" : null);
  const hasDesktopSideGallery = Boolean(desktopGallerySide);
  const showSideGallery = hasDesktopSideGallery && isOpen;
  const galleryOnLeft = desktopGallerySide === "left";
  const galleryPresenceAnimation = galleryOnLeft
    ? { initial: { opacity: 0, x: -18 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -12 } }
    : { initial: { opacity: 0, x: 18 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 12 } };

  return (
    <motion.article
      ref={ref}
      className={`relative pl-14 lg:grid lg:grid-cols-[1fr_72px_1fr] lg:items-start lg:pl-0 ${
        isLast ? "" : "pb-2"
      }`}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {hasDesktopSideGallery && galleryOnLeft ? (
        <div className="hidden lg:col-start-1 lg:block">
          <AnimatePresence initial={false}>
            {showSideGallery ? (
              <motion.div
                key={`${entry.id}-desktop-gallery-shell`}
                initial={galleryPresenceAnimation.initial}
                animate={galleryPresenceAnimation.animate}
                exit={galleryPresenceAnimation.exit}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <TimelineGallery image={entry.galleryImage!} title={entry.title} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ) : hasDesktopSideGallery ? (
        <div className="hidden lg:col-start-3 lg:block">
          <AnimatePresence initial={false}>
            {showSideGallery ? (
              <motion.div
                key={`${entry.id}-desktop-gallery-shell`}
                initial={galleryPresenceAnimation.initial}
                animate={galleryPresenceAnimation.animate}
                exit={galleryPresenceAnimation.exit}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <TimelineGallery image={entry.galleryImage!} title={entry.title} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ) : isLeft ? null : (
        <div className="hidden lg:col-start-1 lg:block" />
      )}

      <div className={`${isLeft ? "lg:col-start-1" : "lg:col-start-3"}`}>
        <motion.div
          className={`group glass-card relative w-full overflow-hidden border text-left ${
            accentStyles[entry.accent ?? "default"]
          } ${
            isActive
              ? "border-navy/18 shadow-soft"
              : "border-white/60 shadow-[0_10px_28px_rgba(18,36,62,0.05)]"
          } before:absolute before:inset-0 before:opacity-100 before:content-['']`}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 230, damping: 24 }}
        >
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="relative z-10 w-full p-6 text-left sm:p-7"
            aria-expanded={isOpen}
          >
            <div className="flex items-start justify-between gap-5">
              <div className="space-y-3">
                <span className="inline-flex rounded-full border border-navy/10 bg-background/72 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-navy/68">
                  {entry.date}
                </span>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[1.9rem]">
                    {entry.title}
                  </h3>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue/90">
                    {entry.role}
                  </p>
                </div>
              </div>
              <BadgeTile
                entry={entry}
                isActive={isActive}
                isOpen={isOpen}
                logoSrc={badgeLogoById[entry.id]}
              />
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-[1.3fr_0.9fr]">
              <div className="space-y-4">
                <p className="max-w-xl text-base leading-7 text-foreground/72">{entry.shortSummary}</p>
                <div className="h-[3.85rem]">
                  <div className="flex h-full items-center justify-between rounded-[1rem] border border-slate-200/70 bg-white/90 px-4 py-3 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs uppercase tracking-[0.18em] text-navy/56">Click to expand</p>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white shadow-sm">
                    <Plus
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "group-hover:rotate-90"
                      }`}
                    />
                    </span>
                  </div>
                </div>
              </div>

              {isIntroCard ? (
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-[linear-gradient(180deg,rgba(240,244,248,0.9),rgba(255,255,255,0.9))]">
                  <Image
                    src="/images/uiucintro.png"
                    alt="UIUC introduction"
                    width={900}
                    height={700}
                    className="h-full min-h-[13rem] w-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-[linear-gradient(180deg,rgba(27,45,80,0.95),rgba(63,94,128,0.74))] p-4 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_45%)]" />
                  <div className="relative flex h-full flex-col justify-between gap-4">
                    <div className="flex h-full flex-col justify-center gap-3 text-left">
                      {entry.tags.slice(0, 3).map((tag) => (
                        <p
                          key={tag}
                          className="text-[0.64rem] font-medium uppercase leading-5 tracking-[0.14em] text-white/88"
                        >
                          - {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </button>

          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0, y: 8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: 8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative z-10 overflow-hidden px-6 pb-6 sm:px-7 sm:pb-7"
              >
                <div className="space-y-4 border-t border-navy/10 pt-6">
                  <DetailBlock title="Motivation" value={entry.motivation} />
                  <DetailBlock title="Outcome" value={entry.outcome} />
                </div>

                {entry.link ? (
                  <a
                    href={entry.link.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{entry.link.label}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}

                {hasGallery ? (
                  <div className="mt-5 lg:hidden">
                    <TimelineGallery
                      key={`${entry.id}-mobile-gallery`}
                      image={entry.galleryImage!}
                      title={entry.title}
                    />
                  </div>
                ) : null}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="absolute left-5 top-1/2 z-20 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:left-1/2">
        <motion.div
          className={`flex h-4 w-4 items-center justify-center rounded-full border ${
            isActive ? "border-navy bg-navy" : "border-navy/24 bg-background"
          }`}
          animate={{ scale: isActive ? 1.25 : 1 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </motion.div>
      </div>
    </motion.article>
  );
}

function DetailBlock({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-[1.2rem] border border-navy/10 bg-background/55 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/52">{title}</p>
      <p className="mt-3 text-sm leading-7 text-foreground/68">{value}</p>
    </div>
  );
}

function BadgeTile({
  entry,
  isActive,
  isOpen,
  logoSrc
}: {
  entry: TimelineEntry;
  isActive: boolean;
  isOpen: boolean;
  logoSrc?: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const showLogo = Boolean(logoSrc) && !imageFailed;

  return (
    <motion.div
      className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[1.2rem] border border-white/70 shadow-sm ${
        entry.accent === "brand"
          ? "bg-[linear-gradient(135deg,rgba(236,241,247,0.98),rgba(210,220,230,0.9))]"
          : "bg-mist/72"
      }`}
      animate={{ scale: isActive ? 1.06 : 1, rotate: isOpen ? 6 : 0 }}
    >
      {showLogo ? (
        <div className="relative flex h-full w-full items-center justify-center p-2">
          <Image
            src={logoSrc!}
            alt={`${entry.title} badge`}
            fill
            sizes="56px"
            className="p-2 object-contain"
            onError={() => setImageFailed(true)}
          />
        </div>
      ) : (
        <span className="text-sm font-semibold tracking-[0.18em] text-navy">{entry.imageLabel}</span>
      )}
    </motion.div>
  );
}
