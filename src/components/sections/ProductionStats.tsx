"use client";

import { motion } from "framer-motion";
import CreativeSectionDecor from "@/components/sections/CreativeSectionDecor";

const stats = [
  { value: "4", label: "Production Firmware Projects Shipped" },
  { value: "3", label: "ARM Cortex-M Architectures (M0+, M4, M33)" },
  { value: "450+", label: "Deployed Nodes in Production" },
  { value: "3", label: "Wireless Protocols (BLE 5.x, NFC, Sub GHz RF)" },
];

export default function ProductionStats() {
  return (
    <section className="px-4 pb-12 relative overflow-hidden">
      <CreativeSectionDecor variant="stats" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="embedded-panel rounded-2xl p-8"
        >
          <p className="text-slate-500 text-sm uppercase tracking-widest font-medium mb-3">
            Production Experience At A Glance
          </p>
          <p className="terminal-tag inline-flex mb-6">Field Proven Metrics</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                <span className="text-4xl font-bold text-blue-600">
                  {stat.value}
                </span>
                <span className="text-slate-600 text-sm mt-2 leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
