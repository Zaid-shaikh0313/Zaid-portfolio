"use client";

import { motion } from "framer-motion";
import { profile, stages } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28">
      <div className="flex flex-col gap-3">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[12px] tracking-[0.18em] text-flow"
        >
          {"// "}{profile.location} · open to relocation in EU
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[1.04] tracking-tight text-text"
        >
          I move data from
          <br />
          <span className="text-text-dim">raw</span> to{" "}
          <span className="relative inline-block text-flow">
            reliable
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 200 8"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M1 5.5 Q 50 1, 100 5 T 199 4.5"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-4 max-w-xl text-[16px] leading-relaxed text-text-dim"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="rounded-sm bg-flow px-5 py-2.5 font-mono text-[13px] font-medium text-ink transition-opacity hover:opacity-85"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="rounded-sm border border-line-bright px-5 py-2.5 font-mono text-[13px] text-text transition-colors hover:border-flow hover:text-flow"
          >
            View projects
          </a>
        </motion.div>
      </div>

      {/* Signature element: the pipeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mt-20 overflow-hidden rounded-md border border-line bg-panel/60"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <span className="font-mono text-[11px] tracking-wide text-text-faint">
            pipeline.status
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-flow">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flow opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-flow" />
            </span>
            running
          </span>
        </div>

        <div className="grid grid-cols-2 gap-px sm:grid-cols-4">
          {stages.map((s, i) => (
            <div
              key={s.name}
              className="relative px-5 py-6 sm:py-7"
              style={{
                borderRight:
                  i < stages.length - 1 ? "1px solid var(--line)" : "none",
              }}
            >
              <div className="flex items-baseline gap-2">
                <span
                  className={`font-mono text-[11px] ${
                    s.color === "signal" ? "text-signal" : "text-flow"
                  }`}
                >
                  {s.tag}
                </span>
                <span className="font-display text-[15px] font-medium text-text">
                  {s.name}
                </span>
              </div>
              <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-text-faint">
                {s.detail}
              </p>
              {i < stages.length - 1 && (
                <div className="absolute -right-[1px] top-1/2 hidden h-px w-2 bg-line sm:block" />
              )}
            </div>
          ))}
        </div>

        <div className="h-[2px] w-full overflow-hidden bg-line">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-flow to-transparent"
            style={{ width: "30%" }}
            animate={{ x: ["-30%", "330%"] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
