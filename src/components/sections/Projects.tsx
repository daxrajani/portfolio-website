"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/brand-icons";
import HighlightedText from "@/components/ui/HighlightedText";
import { projects } from "@/data/portfolio";
import CreativeSectionDecor from "@/components/sections/CreativeSectionDecor";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <CreativeSectionDecor variant="projects" />
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Projects
          </h2>
          <div className="mt-2 h-[2px] w-[60px] bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full" />
          <p className="text-slate-500 mt-4">Things I&apos;ve built</p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.1,
                y: {
                  duration: 6 + i * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                },
              }}
              className="group embedded-panel rounded-2xl overflow-hidden flex flex-col hover:shadow-md hover:shadow-slate-200 transition-shadow duration-300"
            >
              {/* Top accent gradient line */}
              <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 to-emerald-600 rounded-t-2xl shrink-0" />

              {/* Hardware photo (optional) */}
              {project.image && (
                <div className="relative w-full h-56 overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Project name & subtitle */}
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {project.name}
                </h3>
                <p className="text-slate-500 text-sm mt-1">{project.subtitle}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="terminal-tag inline-flex w-fit">Engineering Build</span>
                  <span className="terminal-tag inline-flex w-fit">
                    {project.tech.some((t) => ["C", "Zephyr RTOS", "MCUboot"].includes(t))
                      ? "Embedded Firmware"
                      : "Systems Analytics"}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm mt-3 leading-relaxed flex-1">
                  <HighlightedText
                    text={project.description}
                    className="text-slate-600 text-sm leading-relaxed"
                  />
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="pcb-chip px-3 py-1 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom actions */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} source code on GitHub`}
                      className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      <GithubIcon size={16} aria-hidden="true" />
                      View Code
                    </a>
                  ) : null}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} live demo`}
                      className="flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-600 transition-colors duration-200"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Live Demo
                    </a>
                  ) : null}

                  {!project.github && !project.demo ? (
                    <span className="text-slate-400 text-xs italic">
                      Code available on request
                    </span>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
