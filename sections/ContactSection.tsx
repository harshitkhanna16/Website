"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Sparkles,
  ExternalLink,
  MessageSquare,
  ArrowUpRight
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { soundManager } from "@/lib/audio";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    soundManager.playClick();
    soundManager.triggerHaptic(10);
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    soundManager.playClick();
    soundManager.triggerHaptic(10);
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full bg-[#050508] py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] tracking-wider text-cyan-300 uppercase">
            <Sparkles className="h-3 w-3" />
            <span>Direct Communication &amp; Hiring</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            LET&apos;S BUILD <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">SOMETHING</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Have a problem worth solving, a product worth building, or an engineering challenge worth exploring? Reach out directly.
          </p>
        </div>

        {/* Contact Hub Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          
          {/* Email Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-white/[0.03]">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                <Mail className="h-5 w-5" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-cyan-300 transition-colors"
              >
                {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>
            
            <h3 className="mt-4 text-base font-bold text-white">Direct Email</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Primary inbox for opportunities</p>
            
            <a
              href={PORTFOLIO_DATA.personal.links.email}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:underline"
            >
              <span>{PORTFOLIO_DATA.personal.email}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Telephone / WhatsApp Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:bg-white/[0.03]">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                <Phone className="h-5 w-5" />
              </div>
              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-emerald-300 transition-colors"
              >
                {copiedPhone ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedPhone ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <h3 className="mt-4 text-base font-bold text-white">Phone &amp; WhatsApp</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Direct line for quick discussions</p>

            <a
              href={PORTFOLIO_DATA.personal.links.phone}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:underline"
            >
              <span>{PORTFOLIO_DATA.personal.phone}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-white/[0.03]">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
                <LinkedInIcon className="h-5 w-5" />
              </div>
              <span className="font-mono text-[10px] text-zinc-400 uppercase">Profile</span>
            </div>

            <h3 className="mt-4 text-base font-bold text-white">LinkedIn Network</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Connect and view updates</p>

            <a
              href={PORTFOLIO_DATA.personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:underline"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Social Quick Pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto">
          <a
            href={PORTFOLIO_DATA.personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>GitHub Profile</span>
            <ExternalLink className="h-3 w-3 text-zinc-400" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-xs font-semibold text-amber-300 transition-all hover:bg-amber-500/20"
          >
            <span>LeetCode Profile</span>
            <ExternalLink className="h-3 w-3 text-amber-400" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.links.email}
            className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-xs font-semibold text-cyan-300 transition-all hover:bg-cyan-500/20"
          >
            <Mail className="h-4 w-4" />
            <span>Email Me Directly</span>
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-xs text-zinc-400">
          Graduating in 2027 • Final-year CS Engineering at Graphic Era University • Open for SDE &amp; Engineering Roles
        </div>

      </div>
    </section>
  );
}
