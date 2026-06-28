"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="rounded-md border border-line bg-panel/50 px-8 py-14 text-center sm:px-16"
      >
        <p className="font-mono text-[12px] tracking-[0.18em] text-flow">
          {"// contact"}
        </p>
        <h2 className="mx-auto mt-3 max-w-lg font-display text-[clamp(1.8rem,4vw,2.6rem)] font-semibold leading-tight tracking-tight text-text">
          Have a pipeline that needs building?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-text-dim">
          Open to Senior Data Engineer and AI/Data platform roles across the
          EU. Based in Berlin with a valid work permit.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-sm bg-flow px-6 py-3 font-mono text-[13px] font-medium text-ink transition-opacity hover:opacity-85"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="rounded-sm border border-line-bright px-6 py-3 font-mono text-[13px] text-text transition-colors hover:border-flow hover:text-flow"
          >
            {profile.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
