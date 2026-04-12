"use client";

import { motion } from "framer-motion";
import { MapPin, Award, Trophy } from "lucide-react";
import { education, awards } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ── Part A: Education ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Education
          </h2>
          <div className="mt-2 h-[2px] w-[60px] bg-gradient-to-r from-blue-600 to-violet-600 rounded-full" />
          <p className="text-gray-400 mt-4">Academic background</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {education.map((edu, i) => (
            <motion.div
              key={edu.university}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.01] transition-all duration-300"
            >
              {/* Degree & field */}
              <h3 className="text-xl font-bold text-white leading-snug">
                {edu.degree}
              </h3>
              <p className="text-blue-400 font-medium mt-1">{edu.field}</p>

              {/* University & location */}
              <p className="text-gray-300 mt-3 font-medium">{edu.university}</p>
              <p className="flex items-center gap-1 text-gray-400 text-sm mt-1">
                <MapPin size={13} aria-hidden="true" />
                {edu.location}
              </p>

              {/* Duration badge */}
              <span className="inline-block mt-3 font-mono text-sm bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-300">
                {edu.duration}
              </span>

              {/* Grade */}
              {edu.grade && (
                <p className="text-gray-400 text-sm mt-2">
                  GPA:{" "}
                  <span className="text-blue-400 font-semibold">{edu.grade}</span>
                </p>
              )}

              {/* Courses */}
              {edu.courses && edu.courses.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="bg-white/5 text-gray-300 border border-white/10 rounded-full px-3 py-1 text-xs"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Part B: Achievements & Awards ─────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Achievements &amp; Recognition
          </h2>
          <div className="mt-2 h-[2px] w-[60px] bg-gradient-to-r from-blue-600 to-violet-600 rounded-full" />
          <p className="text-gray-400 mt-4">A few things beyond the IDE</p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {awards.map((award, i) => {
            if (award.highlight) {
              return (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.07 }}
                  className="relative bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 overflow-hidden gold-shimmer"
                >
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="shrink-0 mt-0.5">
                      <Trophy size={22} className="text-amber-400" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3 className="text-amber-300 font-bold leading-snug">
                          {award.title}
                        </h3>
                        <span className="text-gray-400 text-sm font-mono shrink-0">
                          {award.date}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-0.5">{award.issuer}</p>
                      {award.description && (
                        <p className="text-gray-400 text-sm mt-2">
                          {award.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.07 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:shadow-lg hover:shadow-blue-500/10 transition-shadow duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">
                    <Award size={20} className="text-blue-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-white font-bold leading-snug">
                        {award.title}
                      </h3>
                      <span className="text-gray-400 text-sm font-mono shrink-0">
                        {award.date}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-0.5">{award.issuer}</p>
                    {award.description && (
                      <p className="text-gray-400 text-sm mt-2">
                        {award.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
