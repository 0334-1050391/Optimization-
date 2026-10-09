import React from 'react';
import { GraduationCap, BookOpen, Sigma, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white text-slate-800 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest font-mono-code text-sky-700 font-semibold mb-2">
            05. Academic Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Education
          </h2>
          <p className="text-base text-slate-600">
            Formal mathematical scholarship underpinning logical reasoning, numerical methods, and
            computational architectures.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="flex items-start sm:items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono-code uppercase tracking-wider text-sky-700 font-semibold block">
                  Undergraduate Degree
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {educationData.degree}
                </h3>
                <p className="text-sm font-medium text-slate-600 mt-0.5">
                  {educationData.field}
                </p>
              </div>
            </div>

            <p className="text-base text-slate-700 leading-relaxed mb-8">
              {educationData.description}
            </p>

            <div className="pt-6 border-t border-slate-200">
              <h4 className="text-xs uppercase tracking-wider font-mono-code text-slate-500 font-semibold mb-4">
                Core Theoretical & Applied Pillars
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {educationData.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-white border border-slate-200/80 rounded-lg text-sm text-slate-800 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
