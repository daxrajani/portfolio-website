"use client";

import { motion } from "framer-motion";
import { Cpu, Radio, Activity, Wifi, Wrench } from "lucide-react";

const floatingIcons = [
  { Icon: Cpu, label: "MCU", cls: "creative-float-a" },
  { Icon: Radio, label: "BLE", cls: "creative-float-b" },
  { Icon: Activity, label: "Scope", cls: "creative-float-c" },
  { Icon: Wifi, label: "RF", cls: "creative-float-d" },
  { Icon: Wrench, label: "Solder", cls: "creative-float-e" },
];

export default function CreativeOverlays() {
  return (
    <div className="creative-overlay-layer" aria-hidden="true">
      <div className="creative-pcb-lines" />
      <div className="creative-radar-rings" />
      <div className="creative-solder-sparks" />

      <svg className="creative-scope-svg" viewBox="0 0 1200 180" preserveAspectRatio="none">
        <path
          className="creative-scope-line"
          d="M0 115 L120 115 L180 50 L230 145 L300 40 L360 120 L430 120 L500 65 L560 128 L620 55 L700 115 L770 115 L830 72 L900 130 L970 58 L1040 118 L1200 118"
        />
      </svg>

      <div className="creative-icons-cloud">
        {floatingIcons.map(({ Icon, label, cls }) => (
          <motion.div
            key={label}
            className={`creative-icon-pill ${cls}`}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon size={14} />
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
