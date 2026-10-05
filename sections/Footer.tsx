"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Mail, 
  ArrowUp, 
  Coffee
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { soundManager } from "@/lib/audio";

export default function Footer() {
  const handleScrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#040407] py-16 text-xs text-zinc-400">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* Brand & Subheading */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 font-mono text-xs font-bold text-cyan-400">
                HK
              </div>
              <span className="font-mono text-base font-bold text-white tracking-wider">
                HARSHIT KHANNA
              </span>
            </div>
            <p className="mt-2 text-xs font-mono text-zinc-400">
              Software Engineer • AI/ML • Backend • Data Engineering • Cloud
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={PORTFOLIO_DATA.personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-cyan-400"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <GitHubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-amber-400"
            >
              <Code2 className="h-4 w-4" />
              <span>LeetCode</span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.links.email}
              className="flex items-center gap-1.5 transition-colors hover:text-emerald-400"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-zinc-300 transition-colors hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              <span>TOP</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Metadata & Coffee Line */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-8 text-[11px] text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; 2026 Harshit Khanna. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-zinc-400 italic">
            <span>&ldquo;Built with curiosity, systems thinking, and too much coffee.&rdquo;</span>
            <Coffee className="h-3.5 w-3.5 text-amber-500 not-italic inline" />
          </p>
        </div>

      </div>
    </footer>
  );
}
