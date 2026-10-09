import React, { useState } from 'react';
import { Github, ArrowUpRight, CheckCircle2, Info, ExternalLink } from 'lucide-react';
import { selectedProjects } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const ProjectsGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Computational Math', 'Software Engineering', 'Utility'];

  const filteredProjects =
    activeCategory === 'All'
      ? selectedProjects
      : selectedProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-slate-50 text-slate-800 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-mono-code text-sky-700 font-semibold mb-2">
              04. Software & Computational Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Selected Projects
            </h2>
            <p className="text-base text-slate-600">
              Curated repositories illustrating applied mathematical formulation, object-oriented
              software architecture, and algorithmic utilities.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all group"
            >
              <div>
                {/* Unboxed Metadata Header */}
                <div className="flex items-center justify-between text-xs font-mono-code text-slate-500 mb-3">
                  <span className="text-sky-700 font-semibold">{project.category}</span>
                  <span>Python / Code</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {project.shortDescription}
                </p>

                {/* Key purpose & functionality highlights */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-mono-code uppercase tracking-wider text-slate-400">
                    Key Functionality
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {project.keyFunctionality.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Technologies List - Unboxed with separators */}
                <div className="pt-4 border-t border-slate-100 mb-5">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-700">
                    {project.technologies.map((tech, index) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {index < project.technologies.length - 1 && (
                          <span className="text-slate-300" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-center gap-1 py-2 px-3 text-xs font-semibold text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100/80 rounded-md transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-Depth Review */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
