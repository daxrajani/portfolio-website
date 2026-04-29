"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { workExperience } from "@/data/portfolio";
import HighlightedText from "@/components/ui/HighlightedText";

function RoleBadge({ type }: { type: string }) {
  if (type === "Full-time") {
    return (
      <span className="text-xs font-medium bg-green-50 text-green-700 border border-green-200 rounded-full px-2 py-0.5">
        {type}
      </span>
    );
  }
  return (
    <span className="text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-2 py-0.5">
      {type}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Work Experience
          </h2>
          <div className="mt-2 h-[2px] w-[60px] bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full" />
          <p className="text-slate-500 mt-4">
            Where I&apos;ve worked and what I built
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-blue-200" aria-hidden="true" />

          {workExperience.map((company, ci) => (
            <div key={ci} className="pl-12">
              {/* Company header */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative mb-6"
              >
                {/* Timeline dot for company */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute -left-[2.1rem] top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-lg shadow-blue-200"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-slate-900">{company.company}</h3>
                <p className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                  <MapPin size={14} aria-hidden="true" />
                  {company.location}
                </p>
              </motion.div>

              {/* Roles */}
              {company.roles.map((role, ri) => (
                <div key={ri} className="relative mb-8">
                  {/* Small timeline dot per role */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * ri }}
                    className="absolute -left-[2.1rem] top-5 w-2.5 h-2.5 rounded-full bg-blue-400 border border-white"
                    aria-hidden="true"
                  />

                  {/* Role card */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * ri }}
                  className="embedded-panel rounded-2xl p-6 hover:shadow-md hover:shadow-blue-100 transition-shadow duration-300"
                  >
                    {/* Role header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-blue-600 font-semibold">{role.title}</span>
                        <RoleBadge type={role.type} />
                      </div>
                      <span className="text-slate-500 text-sm font-mono shrink-0">
                        {role.duration}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3 mb-5" role="list">
                      {role.bullets.map((bullet, bi) => (
                        <motion.li
                          key={bi}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.05 * bi,
                          }}
                          className="flex gap-3 items-start"
                        >
                          <span
                            className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500"
                            aria-hidden="true"
                          />
                          <HighlightedText
                            text={bullet}
                            className="text-slate-600 text-sm leading-relaxed"
                          />
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                      {role.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
