"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { Activity, Antenna, Cpu, Radar, Radio, Rss, Spline, Wrench } from "lucide-react";

type DecorVariant =
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "contact"
  | "stats";

const variantIcons: Record<DecorVariant, Array<{ label: string; Icon: ComponentType<{ size?: number }> }>> = {
  experience: [
    { label: "RTOS", Icon: Cpu },
    { label: "BLE", Icon: Radio },
    { label: "Debug", Icon: Activity },
  ],
  projects: [
    { label: "OTA", Icon: Radar },
    { label: "RF", Icon: Rss },
    { label: "Scope", Icon: Activity },
  ],
  skills: [
    { label: "PCB", Icon: Spline },
    { label: "MCU", Icon: Cpu },
    { label: "Solder", Icon: Wrench },
  ],
  education: [
    { label: "Signals", Icon: Antenna },
    { label: "DSP", Icon: Activity },
    { label: "Systems", Icon: Cpu },
  ],
  contact: [
    { label: "Wireless", Icon: Rss },
    { label: "Ready", Icon: Radar },
    { label: "Build", Icon: Wrench },
  ],
  stats: [
    { label: "Field", Icon: Radio },
    { label: "Scale", Icon: Radar },
    { label: "Reliability", Icon: Activity },
  ],
};

export default function CreativeSectionDecor({ variant }: { variant: DecorVariant }) {
  const icons = variantIcons[variant];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-90" aria-hidden="true">
      <div className="absolute -top-12 -right-10 w-56 h-56 rounded-full bg-blue-400/15 blur-3xl" />
      <div className="absolute -bottom-14 -left-8 w-44 h-44 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute left-0 right-0 bottom-10 h-px bg-gradient-to-r from-transparent via-emerald-500/35 to-transparent" />

      <div className="absolute right-4 top-4 flex gap-2">
        {icons.map(({ label, Icon }, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="pcb-chip inline-flex items-center gap-1 px-2 py-1 text-[10px] font-bold uppercase tracking-wide"
          >
            <Icon size={11} />
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
