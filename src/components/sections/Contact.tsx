"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { personalInfo } from "@/data/portfolio";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClass =
    "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200";

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Contact</h2>
          <div className="mt-2 h-[2px] w-[60px] bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full" />
          <p className="text-slate-500 mt-4 max-w-xl">
            Open to embedded firmware, AI embedded, and systems engineering
            roles across Canada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column — contact info (shown second on mobile via order) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="order-2 md:order-1 flex flex-col gap-6 justify-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Let&apos;s Talk
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Currently available for full-time roles.
                <br />
                Response within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label={`Email ${personalInfo.email}`}
                className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
              >
                <Mail size={18} className="text-blue-600 shrink-0" aria-hidden="true" />
                <span className="group-hover:underline">{personalInfo.email}</span>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
              >
                <LinkedinIcon size={18} className="text-blue-600 shrink-0" aria-hidden="true" />
                <span className="group-hover:underline text-sm">
                  {personalInfo.linkedin.replace(/^https?:\/\//, "")}
                </span>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
              >
                <GithubIcon size={18} className="text-blue-600 shrink-0" aria-hidden="true" />
                <span className="group-hover:underline text-sm">
                  {personalInfo.github.replace(/^https?:\/\//, "")}
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin size={18} className="text-blue-600 shrink-0" aria-hidden="true" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm italic">
              Open to relocation anywhere across Canada — in-person, hybrid, or fully remote.
            </p>
          </motion.div>

          {/* Right column — form (shown first on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="order-1 md:order-2 bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-4">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <label htmlFor="name" className="sr-only">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={formState === "loading"}
                    className={inputClass}
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <label htmlFor="email" className="sr-only">
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={formState === "loading"}
                    className={inputClass}
                  />
                </motion.div>

                {/* Subject */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={formState === "loading"}
                    className={inputClass}
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formState === "loading"}
                    className={`${inputClass} resize-none`}
                  />
                </motion.div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={formState === "loading"}
                  whileHover={formState !== "loading" ? { scale: 1.01, opacity: 0.95 } : {}}
                  whileTap={formState !== "loading" ? { scale: 0.99 } : {}}
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl py-3 font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed transition-opacity duration-200"
                >
                  {formState === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>

                {/* Success state */}
                {formState === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-600 text-sm"
                    role="status"
                    aria-live="polite"
                  >
                    <CheckCircle size={16} aria-hidden="true" />
                    Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                )}

                {/* Error state */}
                {formState === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-600 text-sm"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle size={16} aria-hidden="true" />
                    Something went wrong. Please email me directly at{" "}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="underline hover:text-red-500"
                    >
                      {personalInfo.email}
                    </a>
                    .
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
