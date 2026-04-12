"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import type { ISourceOptions } from "@tsparticles/engine";
import type { Easing } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { personalInfo } from "@/data/portfolio";

// Lazy-load tsParticles to avoid SSR issues
const Particles = dynamic(
  () => import("@tsparticles/react").then((mod) => mod.Particles),
  { ssr: false }
);

const EASE_OUT: Easing = "easeOut";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: EASE_OUT, delay },
});

const scaleUp = (delay: number) => ({
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.5, ease: EASE_OUT, delay },
});

// Build the sequence array for TypeAnimation from personalInfo.tagline
const buildTypeSequence = (taglines: string[]): (string | number)[] => {
  const seq: (string | number)[] = [];
  taglines.forEach((t) => {
    seq.push(t, 2000);
  });
  return seq;
};

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize tsParticles engine once on mount (v3 API: initParticlesEngine)
  useEffect(() => {
    let cancelled = false;
    import("@tsparticles/react")
      .then(({ initParticlesEngine }) =>
        import("@tsparticles/slim").then(({ loadSlim }) =>
          initParticlesEngine(async (engine) => {
            await loadSlim(engine);
          })
        )
      )
      .then(() => {
        if (!cancelled) setEngineReady(true);
      })
      .catch(() => {
        // Particles are progressive enhancement; silently skip on failure
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleScrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const particlesOptions: ISourceOptions = {
    preset: "slim",
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 60, density: { enable: true, width: 1200 } },
      color: { value: ["#ffffff", "#2563eb"] },
      opacity: { value: 0.25 },
      size: { value: 1.5 },
      move: { enable: true, speed: 0.8, direction: "none" as const, random: true, outModes: { default: "out" as const } },
      links: {
        enable: true,
        distance: 120,
        opacity: 0.15,
        color: "#2563eb",
        width: 1,
      },
    },
    detectRetina: true,
  };

  const typeSequence = buildTypeSequence(personalInfo.tagline);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* tsParticles canvas — rendered only after engine is initialised */}
      {engineReady && (
        <Particles
          id="hero-particles"
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full gap-6">
        {/* Eyebrow label — first tagline word used as descriptor */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-1 bg-blue-600/10 border border-blue-500/30 text-blue-400 rounded-full px-4 py-1 text-xs font-mono uppercase tracking-widest">
            {personalInfo.tagline[0].toUpperCase()}
            <span className="animate-blink ml-1" aria-hidden="true">
              ▌
            </span>
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          {...scaleUp(0.1)}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div {...fadeUp(0.2)} className="h-8 md:h-10">
          <TypeAnimation
            sequence={typeSequence}
            wrapper="span"
            speed={60}
            deletionSpeed={40}
            repeat={Infinity}
            className="text-xl md:text-2xl font-medium bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto text-center leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleScrollToProjects}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-3 font-semibold transition-colors duration-200"
          >
            View My Work
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href={personalInfo.resumeFile}
            download
            aria-label="Download resume PDF"
            className="border border-white/20 hover:border-blue-500/50 hover:bg-white/5 text-white rounded-xl px-8 py-3 font-semibold transition-all duration-200"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex items-center gap-5"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <GithubIcon size={22} aria-hidden="true" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <LinkedinIcon size={22} aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {scrollY < 100 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <ChevronDown size={28} className="text-gray-500" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
