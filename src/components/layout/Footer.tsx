import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative bg-[#05050a] border-t border-white/10 py-10 px-4">
      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-600/50 via-violet-600/50 to-blue-600/50"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5 text-center">
        {/* DR Logo */}
        <span
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
          aria-label="Dax Rajani logo"
        >
          DR
        </span>

        {/* Name */}
        <p className="text-gray-300 text-sm font-medium">{personalInfo.name}</p>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <GithubIcon size={20} aria-hidden="true" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <LinkedinIcon size={20} aria-hidden="true" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs h-[1px] bg-white/10" aria-hidden="true" />

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; 2026 {personalInfo.name}. Built with Next.js and deployed on
          Vercel.
        </p>
      </div>
    </footer>
  );
}
