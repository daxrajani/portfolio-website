"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

// Core-stack entries are derived from portfolio skill groups to avoid hardcoding.
// We pull one representative item from each primary embedded-systems category.
const CORE_CATEGORY_PICKS: Record<string, string> = {
  Languages: "C",
  "Microcontrollers & SoCs": "nRF52840",
  "RTOS & OS": "FreeRTOS",
  "Wireless Protocols": "BLE 5.x (Central + Peripheral)",
  "Debug & Tools": "JTAG",
  "ML & AI": "PyTorch",
  "Tools & Workflow": "Git",
};

const coreStack: string[] = skills.flatMap((group) => {
  const pick = CORE_CATEGORY_PICKS[group.category];
  if (!pick) return [];
  // Only include the pick if it actually exists in the group
  return group.skills.includes(pick) ? [pick] : [];
});

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Skills</h2>
          <div className="mt-2 h-[2px] w-[60px] bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full" />
          <p className="text-slate-500 mt-4">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skill category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: gi * 0.07 }}
              className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 hover:shadow-md hover:shadow-slate-200 hover:scale-[1.02] transition-all duration-300"
            >
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: gi * 0.07 + si * 0.04,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 text-sm cursor-default transition-colors duration-200 hover:bg-blue-100"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Stack highlight bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
        >
          <p className="text-slate-500 text-sm mb-4 uppercase tracking-widest font-medium">
            Core Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {coreStack.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="text-slate-800 font-bold text-lg border border-slate-200 rounded-xl px-4 py-2 bg-white shadow-sm">
                  {item}
                </span>
                {i < coreStack.length - 1 && (
                  <span className="text-slate-300 font-light select-none" aria-hidden="true">
                    |
                  </span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
