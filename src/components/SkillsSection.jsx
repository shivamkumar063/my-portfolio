import React, { useState } from 'react';
import { 
  Code2, FileCode, Palette, Layers, Server, Terminal, 
  Database, Zap, Box, Cloud, GitBranch, Network, Cpu, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Code2, FileCode, Palette, Layers, Server, Terminal,
  Database, Zap, Box, Cloud, GitBranch, Network, Cpu, ShieldCheck
};

export default function SkillsSection() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'devops', label: 'Cloud & DevOps' },
    { id: 'architecture', label: 'Architecture & Systems' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section className="py-20 relative border-t border-slate-200/80 dark:border-slate-900" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Built with modern standards, engineered for scale.
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            A battle-tested stack balancing developer velocity with rock-solid production performance.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={skill.name}
                className="group p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200 hover:-translate-y-1 shadow-2xs hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    skill.level === 'Expert'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                  }`}>
                    {skill.level}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-slate-900 dark:text-white text-base">
                  {skill.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-mono capitalize">
                  {skill.category}
                </p>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophy Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Performance By Default</h4>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Zero gratuitous runtime dependencies. Fast first paint, low bundle sizes, and optimized rendering loops.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Strong Typing & Observability</h4>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Strict TypeScript schemas, automated integration testing, and telemetry-driven debugging before bugs hit production.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Accessible & Resilient</h4>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Adhering to WCAG guidelines, progressive enhancement, graceful degradation, and offline handling.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
