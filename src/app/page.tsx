"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Hero from "@/components/sections/Hero";
import ProductionStats from "@/components/sections/ProductionStats";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="embedded-shell">
      <Hero />
      <ProductionStats />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />

      {/* Floating back-to-top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg shadow-blue-500/30 transition-colors duration-200"
          >
            <ArrowUp size={20} className="text-white" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
