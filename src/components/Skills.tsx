import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Sigma, Code2, LineChart, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | 'all'>('all');

  const categoryIcons = [Sigma, Code2, LineChart];

  const displayedCategories =
    activeTab === 'all'
      ? skillCategories
      : [skillCategories[activeTab]];

  return (
    <section id="skills" className="py-24 bg-slate-50 text-slate-800 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-mono-code text-sky-700 font-semibold mb-2">
              02. Technical Competencies
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Core Skills & Capabilities
            </h2>
            <p className="text-base text-slate-600">
              A disciplined blend of foundational mathematics, object-oriented software engineering,
              and data-driven predictive modeling.
            </p>
          </div>

          {/* Segmented Filter Control (Allowed functional interactive button tabs per frontend-design) */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Disciplines
            </button>
            {skillCategories.map((category, idx) => (
              <button
                key={category.title}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  activeTab === idx
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {category.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {displayedCategories.map((category, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={category.title}
                className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              >
                {/* Category Header */}
                <div className="flex items-start sm:items-center gap-3.5 mb-6 pb-6 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                    <p className="text-sm text-slate-500 mt-0.5">{category.description}</p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-5 bg-slate-50/70 border border-slate-200/80 rounded-lg hover:border-sky-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-semibold text-slate-900">{skill.name}</h4>
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600" aria-hidden="true" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Analytical Competencies Footnote */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900 text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-sky-400 shrink-0" />
            <p className="text-sm">
              <strong className="text-white">Applied Mathematical Method:</strong> Combining
              structured abstract formulations with Python, reproducible validation, and predictive
              inference.
            </p>
          </div>
          <a
            href="#projects"
            className="text-xs font-semibold uppercase tracking-wider text-sky-400 hover:text-sky-300 whitespace-nowrap self-start sm:self-auto"
          >
            Explore Projects Below →
          </a>
        </div>
      </div>
    </section>
  );
};
