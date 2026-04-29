"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollYProgress } = useScroll();
  const leftDrift = useTransform(scrollYProgress, [0, 1], [-220, 260]);
  const rightDrift = useTransform(scrollYProgress, [0, 1], [240, -260]);
  const spin = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const lift = useTransform(scrollYProgress, [0, 1], [140, -220]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-90" aria-hidden="true">
      <motion.div
        style={{ x: leftDrift, y: lift, rotate: spin }}
        className="absolute -top-20 -left-24 w-52 h-52 rounded-full bg-blue-400/20 blur-3xl"
      />
      <motion.div
        style={{ x: rightDrift, y: lift }}
        className="absolute -bottom-16 -right-20 w-56 h-56 rounded-full bg-emerald-400/20 blur-3xl"
      />
      <motion.div
        style={{ x: rightDrift, rotate: spin }}
        className="absolute top-1/2 -right-28 w-44 h-44 rounded-full bg-indigo-400/14 blur-3xl"
      />
      <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute left-0 right-0 bottom-10 h-px bg-gradient-to-r from-transparent via-emerald-500/35 to-transparent" />

      <motion.div
        style={{ x: leftDrift, rotate: spin }}
        className="absolute -left-24 top-1/3 w-36 h-36 border border-blue-500/25 rounded-full"
      />
      <motion.div
        style={{ x: rightDrift, rotate: spin }}
        className="absolute -right-24 bottom-1/4 w-32 h-32 border border-emerald-500/25 rounded-full"
      />

      <div className="absolute right-4 top-4 flex gap-2">
        {icons.map(({ label, Icon }, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            style={{
              x: i % 2 === 0 ? leftDrift : rightDrift,
            }}
            className="pcb-chip inline-flex items-center gap-1 px-2 py-1 text-[10px] font-bold uppercase tracking-wide shadow-lg"
          >
            <Icon size={11} />
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
