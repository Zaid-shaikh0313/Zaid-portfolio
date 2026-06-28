"use client";

import { motion } from "framer-motion";
import { skillGroups, education, certifications } from "@/lib/data";
import { SectionHeading } from "./Experience";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="// stack" title="What's in the toolbox" />

      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
          >
            <p className="font-mono text-[11px] tracking-[0.14em] text-text-faint">
              {group.label.toUpperCase()}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-line px-2.5 py-1.5 font-mono text-[12px] text-text-dim transition-colors hover:border-flow hover:text-flow"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 border-t border-line pt-12 sm:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] tracking-[0.14em] text-text-faint">
            EDUCATION
          </p>
          <ul className="mt-4 flex flex-col gap-4">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="font-display text-[14.5px] font-medium text-text">
                  {e.degree}
                </p>
                <p className="text-[13px] text-text-dim">{e.school}</p>
                <p className="font-mono text-[11px] text-text-faint">{e.period}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.14em] text-text-faint">
            CERTIFICATIONS
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {certifications.map((c) => (
              <li
                key={c}
                className="flex gap-3 text-[13.5px] leading-relaxed text-text-dim"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
