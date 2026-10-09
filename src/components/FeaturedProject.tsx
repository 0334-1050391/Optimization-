import React from 'react';
import { ExternalLink, Github, CheckCircle2, TrendingDown, Layers, ArrowUpRight } from 'lucide-react';
import { featuredProject } from '../data/portfolioData';

export const FeaturedProject: React.FC = () => {
  return (
    <section id="featured" className="py-24 bg-white text-slate-800 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest font-mono-code text-sky-700 font-semibold mb-2">
            03. Highlighted Live Deployment
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Featured Project
          </h2>
          <p className="text-base text-slate-600">
            A deployed cloud-accessible application demonstrating end-to-end data analysis,
            mathematical feature evaluation, and machine learning inference.
          </p>
        </div>

        {/* Featured Showcase Card */}
        <div className="relative rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border border-slate-800 shadow-xl">
          {/* Subtle math graph background element */}
          <div
            className="absolute -right-20 -bottom-20 w-96 h-96 math-dots-pattern opacity-20 pointer-events-none"
            aria-hidden="true"
          />

          <div className="p-8 sm:p-12 lg:p-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Information */}
              <div className="lg:col-span-7 space-y-6">
                {/* Clean unboxed metadata with separators */}
                <div className="flex items-center gap-2 text-xs font-mono-code text-sky-400">
                  <span>Machine Learning</span>
                  <span aria-hidden="true">·</span>
                  <span>Predictive Modeling</span>
                  <span aria-hidden="true">·</span>
                  <span>Active Cloud Deployment</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  {featuredProject.title}
                </h3>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  {featuredProject.fullDescription}
                </p>

                {/* Key functionality bulleted points */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs uppercase tracking-wider font-mono-code text-slate-400 font-semibold">
                    Core Functionality & Analytical Pipeline
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {featuredProject.keyFunctionality.map((func, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{func}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies - Clean unboxed text list */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-xs text-slate-400 font-mono-code mb-2">
                    TECHNOLOGIES USED
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-sky-300">
                    {featuredProject.technologies.map((tech, index) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {index < featuredProject.technologies.length - 1 && (
                          <span className="text-slate-600" aria-hidden="true">
                            /
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-md transition-all shadow-sm hover:shadow-sky-900/40 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-sky-400"
                  >
                    <span>View Live Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-md transition-all active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-slate-400"
                  >
                    <Github className="w-4 h-4 text-slate-400" />
                    <span>View on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Architecture Preview */}
              <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-xl p-6 sm:p-7 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider font-mono-code text-slate-300">
                      Predictive Risk Framework
                    </span>
                  </div>
                  <span className="text-[11px] font-mono-code text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>

                {/* Conceptual Workflow Schematic */}
                <div className="space-y-4 text-xs font-mono-code text-slate-300">
                  <div className="p-3.5 bg-slate-900/90 rounded border border-slate-800">
                    <div className="text-slate-400 mb-1 text-[11px] uppercase tracking-wider">
                      Input Features
                    </div>
                    <div className="text-slate-200">
                      Customer Tenancy · Service Usage · Interaction Patterns · Contract Metrics
                    </div>
                  </div>

                  <div className="flex justify-center text-slate-500">
                    <span className="text-lg">↓</span>
                  </div>

                  <div className="p-3.5 bg-sky-950/40 rounded border border-sky-800/50">
                    <div className="text-sky-300 mb-1 text-[11px] uppercase tracking-wider">
                      Predictive Model Layer
                    </div>
                    <div className="text-sky-100">
                      Supervised Classification Engine · Probability Thresholding · Feature Weights
                    </div>
                  </div>

                  <div className="flex justify-center text-slate-500">
                    <span className="text-lg">↓</span>
                  </div>

                  <div className="p-3.5 bg-slate-900/90 rounded border border-slate-800">
                    <div className="text-slate-400 mb-1 text-[11px] uppercase tracking-wider">
                      Inference & Retention Insight
                    </div>
                    <div className="text-slate-200">
                      Quantified Churn Probability · Key Risk Factors · Actionable Proactive Flags
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://customer-churn-predictor-1.ai.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-sky-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded border border-slate-700 transition-colors"
                  >
                    <span>Launch Live Interactive Web App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
