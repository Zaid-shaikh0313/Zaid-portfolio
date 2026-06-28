"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionHeading } from "./Experience";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="// projects" title="Things I've built end to end" />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex flex-col rounded-md border border-line bg-panel/50 p-6 transition-colors hover:border-line-bright"
          >
            <span className="self-start rounded-sm border border-line-bright px-2 py-0.5 font-mono text-[10px] tracking-wide text-flow">
              {proj.stage}
            </span>
            <h3 className="mt-4 font-display text-[17px] font-medium leading-snug text-text">
              {proj.name}
            </h3>
            <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-text-dim">
              {proj.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {proj.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-sm bg-panel-2 px-2 py-1 font-mono text-[10.5px] text-text-faint"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
