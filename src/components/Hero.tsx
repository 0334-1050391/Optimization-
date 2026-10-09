import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-20 pb-16"
    >
      {/* Subtle Mathematical Grid & Coordinate Geometry Vector Backdrop */}
      <div
        className="absolute inset-0 math-grid-pattern opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Understated mathematical vector curve representing calculus/analysis */}
      <svg
        className="absolute right-0 top-1/4 w-1/2 h-2/3 max-w-xl opacity-15 pointer-events-none select-none text-sky-400 stroke-current"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 50 350 C 150 340, 200 200, 300 210 C 400 220, 450 50, 550 60"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 50 300 C 180 290, 260 120, 380 140 C 480 160, 500 280, 580 80"
          strokeWidth="1.5"
        />
        <circle cx="300" cy="210" r="4" fill="currentColor" />
        <circle cx="380" cy="140" r="4" fill="currentColor" />
        <circle cx="550" cy="60" r="4" fill="currentColor" />
        {/* Subtle grid lines */}
        <line x1="50" y1="50" x2="550" y2="50" strokeWidth="0.5" strokeOpacity="0.4" />
        <line x1="50" y1="200" x2="550" y2="200" strokeWidth="0.5" strokeOpacity="0.4" />
        <line x1="50" y1="350" x2="550" y2="350" strokeWidth="0.5" strokeOpacity="0.4" />
        <line x1="50" y1="50" x2="50" y2="350" strokeWidth="0.5" strokeOpacity="0.4" />
        <line x1="300" y1="50" x2="300" y2="350" strokeWidth="0.5" strokeOpacity="0.4" />
        <line x1="550" y1="50" x2="550" y2="350" strokeWidth="0.5" strokeOpacity="0.4" />
      </svg>

      {/* Radial ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-950/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow / Professional Title - clean unboxed typography */}
          <div className="flex items-center gap-3 text-xs sm:text-sm tracking-widest uppercase font-mono-code text-sky-400 mb-4">
            <span className="w-8 h-px bg-sky-400/80 inline-block" />
            <span>Mathematician · BS Mathematics</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            {personalInfo.name}
          </h1>

          {/* Concise Headline */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-serif-heading italic text-slate-200 leading-snug mb-6 max-w-2xl text-balance">
            “Turning Mathematical Thinking into Data-Driven and Computational Solutions.”
          </p>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl">
            A mathematically minded professional combining pure and applied analytical foundations
            with Python programming, exploratory data analysis, machine learning algorithms, and
            computational modeling to structure and solve practical real-world problems.
          </p>

          {/* Two Primary CTAs + Direct Links */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#featured"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-md transition-all shadow-sm hover:shadow-sky-900/30 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-md transition-all active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Subtle Social Links with clean accessible icons */}
          <div className="pt-6 border-t border-slate-800/80 flex items-center gap-6 text-sm text-slate-400">
            <span className="text-xs uppercase tracking-wider text-slate-300 font-mono-code">
              Profiles
            </span>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
