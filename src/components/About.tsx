import React from 'react';
import { Brain, Cpu, Database, Compass, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Brain,
      title: 'Mathematical Rigor & Logic',
      description:
        'A formal background in BS Mathematics provides deep training in logical deduction, calculus, linear algebra, and abstract structures—enabling systematic decomposition of complex challenges.',
    },
    {
      icon: Cpu,
      title: 'Computational Thinking',
      description:
        'Bridging mathematical theory and algorithmic execution, translating conceptual models into clean, testable Python code and object-oriented architectures.',
    },
    {
      icon: Database,
      title: 'Data & Machine Learning',
      description:
        'Leveraging statistical intuition and predictive modeling to extract patterns from structured data, identify critical indicators, and evaluate real-world uncertainty.',
    },
    {
      icon: Compass,
      title: 'Structured Problem Solving',
      description:
        'Approaching problems with curiosity, clarity, and continuous learning—converting ambiguous real-world requirements into disciplined, verifiable technical solutions.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white text-slate-800 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest font-mono-code text-sky-700 font-semibold mb-2">
            01. Background & Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-12 h-1 bg-sky-600 rounded-full" />
        </div>

        {/* Narrative & Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            <p className="text-slate-900 font-medium text-lg sm:text-xl leading-snug">
              Tania Ramzan is a Mathematics professional with a dedicated focus on leveraging
              mathematical precision, Python programming, and machine learning to build practical,
              data-driven solutions.
            </p>
            <p>
              Holding a BS in Mathematics, her foundation is anchored in abstract reasoning,
              formal proofs, and quantitative problem solving. Rather than treating mathematics as
              purely theoretical, she views it as the ultimate analytical toolkit for modern
              computational systems.
            </p>
            <p>
              Her technical journey extends directly into Python development, object-oriented
              programming, exploratory data analysis, and predictive modeling. Whether formulating
              mathematical relationships into numerical scripts or deploying machine-learning
              models to forecast customer churn, her methodology remains constant: dismantle the
              problem into first principles, validate assumptions, and implement clean, structured
              code.
            </p>
            <p>
              Committed to continuous learning, Tania focuses on turning complex datasets and
              computational challenges into transparent, verifiable, and impactful outcomes.
            </p>

            <div className="pt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-700 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>BS Mathematics Graduate</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Python & OOP Development</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Predictive Machine Learning</span>
              </span>
            </div>
          </div>

          {/* Quick Perspective Card */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/90 rounded-xl p-6 sm:p-8 space-y-6">
            <h3 className="text-sm font-semibold tracking-wider uppercase font-mono-code text-slate-900">
              Analytical Principles
            </h3>

            <div className="space-y-4 text-sm text-slate-600">
              <div className="border-l-2 border-sky-600 pl-4 py-1">
                <p className="font-semibold text-slate-900 mb-1">First-Principles Thinking</p>
                <p className="text-xs sm:text-sm">
                  Deconstructing complex problems to their foundational mathematical truths before
                  writing a single line of code.
                </p>
              </div>

              <div className="border-l-2 border-slate-300 pl-4 py-1">
                <p className="font-semibold text-slate-900 mb-1">Computational Translation</p>
                <p className="text-xs sm:text-sm">
                  Converting equations, matrix operations, and probabilistic concepts into
                  executable, maintainable software pipelines.
                </p>
              </div>

              <div className="border-l-2 border-slate-300 pl-4 py-1">
                <p className="font-semibold text-slate-900 mb-1">Empirical Validation</p>
                <p className="text-xs sm:text-sm">
                  Testing predictions and computational logic against rigorous criteria rather than
                  intuition alone.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 font-mono-code">
              Primary Focus: Mathematics · Python · Data Analytics · Machine Learning
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white border border-slate-200/90 rounded-lg p-6 hover:border-slate-300 transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              >
                <div className="w-10 h-10 rounded-md bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
