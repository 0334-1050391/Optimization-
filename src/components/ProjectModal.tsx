import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Code2, Tag } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-sky-700 font-semibold mb-1">
              <span>{project.category}</span>
              {project.featured && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>Featured Live Project</span>
                </>
              )}
            </div>
            <h3
              id="modal-project-title"
              className="text-2xl font-bold tracking-tight text-slate-900"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono-code text-slate-400 font-semibold mb-2">
              Overview & Objectives
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono-code text-slate-400 font-semibold mb-2">
                Methodological Highlights
              </h4>
              <ul className="space-y-1.5 text-sm text-slate-700">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">›</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono-code text-slate-400 font-semibold mb-3">
              Key Functionality
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {project.keyFunctionality.map((func, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{func}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono-code text-slate-400 font-semibold mb-2">
              Technologies & Competencies
            </h4>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-slate-800">
              {project.technologies.map((tech, index) => (
                <React.Fragment key={tech}>
                  <span>{tech}</span>
                  {index < project.technologies.length - 1 && (
                    <span className="text-slate-300" aria-hidden="true">
                      /
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 sm:p-8 border-t border-slate-100 bg-slate-50/80 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-500 font-mono-code">
            Repository: {project.title}
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-md transition-colors"
              >
                <span>Live Project Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-md transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
