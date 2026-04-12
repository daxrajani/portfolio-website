"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
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
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden flex flex-col hover:shadow-md hover:shadow-slate-200 transition-shadow duration-300"
            >
              {/* Top accent gradient line */}
              <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 to-emerald-600 rounded-t-2xl shrink-0" />

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Project name & subtitle */}
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {project.name}
                </h3>
                <p className="text-slate-500 text-sm mt-1">{project.subtitle}</p>

                {/* Description */}
                <p className="text-slate-600 text-sm mt-3 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 text-xs"
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
