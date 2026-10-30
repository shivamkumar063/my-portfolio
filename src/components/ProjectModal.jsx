import React, { useEffect } from 'react';
import { X, CheckCircle, Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-2xl rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Banner with gradient */}
        <div className={`h-36 sm:h-44 bg-gradient-to-r ${project.imageGrad} p-6 flex flex-col justify-between relative`}>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-xs transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-md">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full bg-amber-400/90 text-slate-950 text-xs font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Featured
              </span>
            )}
          </div>

          <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-xs">
            {project.title}
          </h3>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Description */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Overview & Problem Solved
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Key Engineering Milestones
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metric Highlight */}
          {project.metrics && (
            <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-between">
              <span className="text-xs font-semibold text-indigo-900 dark:text-indigo-300">
                Key Performance Benchmark
              </span>
              <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                {project.metrics}
              </span>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-end gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect Source Code</span>
            </a>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <span>Launch Live Application</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
