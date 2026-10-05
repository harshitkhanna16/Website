"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Sparkles, 
  ExternalLink 
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { soundManager } from "@/lib/audio";

export default function AchievementsEducationSection() {
  return (
    <section id="achievements" className="relative w-full bg-[#050508] py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Achievements Sub-Section */}
        <div>
          <div className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-[11px] tracking-wider text-amber-300 uppercase w-fit">
            <Award className="h-3 w-3" />
            <span>Honors &amp; Recognition</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            ACHIEVEMENTS &amp; <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">SELECTION</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            National competitive benchmarks and selective engineering program admissions.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_DATA.achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onMouseEnter={() => soundManager.playHover()}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-amber-500/30 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-bold text-amber-300">
                      {ach.rank}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-zinc-300">
                      {ach.score}
                    </span>
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {ach.title}
                </h3>
                <p className="text-sm font-medium text-amber-400/90 mt-1">
                  Issued by {ach.issuer}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                  {ach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Timeline Sub-Section */}
        <div id="education" className="mt-28">
          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] tracking-wider text-cyan-300 uppercase w-fit">
            <GraduationCap className="h-3 w-3" />
            <span>Academic Background</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            EDUCATION <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">TIMELINE</span>
          </h2>

          <div className="mt-10 space-y-6">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-white/20"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400">
                      {edu.degree}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                      <span>{edu.period}</span>
                    </span>
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-bold text-cyan-300">
                      {edu.grade}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 text-xs text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                    <span>{edu.location}</span>
                  </span>
                  <span className="text-zinc-400">
                    {edu.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Sub-Section */}
        <div className="mt-20 border-t border-white/5 pt-16">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                CREDENTIALS &amp; CERTIFICATIONS
              </span>
              <p className="text-xs text-zinc-400 mt-0.5">
                Targeted AI engineering and productivity foundations.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs"
              >
                <div>
                  <h4 className="font-bold text-white text-sm">{cert.title}</h4>
                  <p className="text-cyan-400 font-mono text-[11px] mt-0.5">{cert.issuer} • {cert.category}</p>
                  <p className="text-zinc-400 text-xs mt-1.5">{cert.description}</p>
                </div>
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 ml-3" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
