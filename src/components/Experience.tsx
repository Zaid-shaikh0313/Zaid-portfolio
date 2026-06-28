"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="// experience" title="Where I've shipped this" />

      <div className="mt-12 flex flex-col">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="grid grid-cols-1 gap-6 border-t border-line py-8 sm:grid-cols-[200px_1fr] first:border-t-0"
          >
            <div>
              <p className="font-mono text-[12px] text-text-faint">{job.period}</p>
              <p className="mt-1 font-display text-[17px] font-medium text-text">
                {job.role}
              </p>
              <p className="font-mono text-[12px] text-flow">{job.company}</p>
            </div>
            <ul className="flex flex-col gap-2.5">
              {job.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 text-[14px] leading-relaxed text-text-dim"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-bright" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="font-mono text-[12px] tracking-[0.18em] text-flow">{eyebrow}</p>
      <h2 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-tight text-text">
        {title}
      </h2>
    </div>
  );
}
