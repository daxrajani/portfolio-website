"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { workExperience } from "@/data/portfolio";


/** Highlight quantified numbers inside bullet text */
function HighlightedBullet({ text }: { text: string }) {
  // Match percentages, large numbers with +, and short durations like "2 weeks"
  const parts = text.split(
    /(\b\d+[\,\.]?\d*%|\b4[,.]?000\+|\b2 weeks\b)/g
  );
  return (
    <span className="text-gray-300 text-sm leading-relaxed">
      {parts.map((part, i) =>
        /(\b\d+[\,\.]?\d*%|\b4[,.]?000\+|\b2 weeks\b)/.test(part) ? (
          <span key={i} className="text-blue-400 font-semibold">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

function RoleBadge({ type }: { type: string }) {
  if (type === "Full-time") {
    return (
      <span className="text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30 rounded-full px-2 py-0.5">
        {type}
      </span>
    );
  }
  return (
    <span className="text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full px-2 py-0.5">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Work Experience
          </h2>
          <div className="mt-2 h-[2px] w-[60px] bg-gradient-to-r from-blue-600 to-violet-600 rounded-full" />
          <p className="text-gray-400 mt-4">
            Where I&apos;ve worked and what I built
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-blue-600/40" aria-hidden="true" />

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
                  className="absolute -left-[2.1rem] top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-[#0a0a0f] shadow-lg shadow-blue-500/50"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-white">{company.company}</h3>
                <p className="flex items-center gap-1 text-gray-400 text-sm mt-1">
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
                    className="absolute -left-[2.1rem] top-5 w-2.5 h-2.5 rounded-full bg-blue-400/70 border border-[#0a0a0f]"
                    aria-hidden="true"
                  />

                  {/* Role card */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * ri }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300"
                  >
                    {/* Role header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-blue-400 font-semibold">{role.title}</span>
                        <RoleBadge type={role.type} />
                      </div>
                      <span className="text-gray-400 text-sm font-mono shrink-0">
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
                          <HighlightedBullet text={bullet} />
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {role.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-blue-600/20 text-blue-300 border border-blue-500/30 rounded-full px-3 py-1 text-xs"
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
