import React, { useState } from 'react';
import { ArrowRight, Copy, Check, Terminal, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" id="about">
      {/* Decorative gradient glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-cyan-400/15 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-float-reverse" />
      <div className="absolute top-2/3 -right-20 w-96 h-96 bg-purple-500/15 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-300 shadow-2xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{profile.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Building modern <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent">
                web architectures
              </span> <br />
              that scale with grace.
            </h1>

            {/* Subtitle / Bio */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-normal">
              Hi, I'm <strong className="font-semibold text-slate-900 dark:text-white">{profile.name}</strong> — a {profile.role}.
              I specialize in crafting high-throughput distributed backends, modern reactive interfaces with React 19 & Tailwind, and resilient cloud infrastructure.
            </p>

            {/* CTAs & Copy Email */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-md shadow-indigo-600/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-600/35"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:border-slate-400 dark:hover:border-slate-700 shadow-2xs"
                title="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Tech Snapshot Badges */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[11px]">Primary Core:</span>
              <span className="hover:text-indigo-500 transition-colors">React 19</span>
              <span>•</span>
              <span className="hover:text-indigo-500 transition-colors">TypeScript</span>
              <span>•</span>
              <span className="hover:text-indigo-500 transition-colors">Node.js</span>
              <span>•</span>
              <span className="hover:text-indigo-500 transition-colors">PostgreSQL</span>
              <span>•</span>
              <span className="hover:text-indigo-500 transition-colors">Docker & AWS</span>
            </div>
          </div>

          {/* Right Column: Interactive Code Snapshot / Terminal Preview Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Subtle card glow border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition duration-500" />
              
              <div className="relative rounded-2xl glass-card overflow-hidden shadow-2xl border border-slate-200/90 dark:border-slate-800">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>engineer.config.ts</span>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded-sm bg-emerald-500/10">
                    Ready
                  </div>
                </div>

                {/* Code Window Body */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-800 dark:text-slate-200">
                  <p className="text-slate-400 dark:text-slate-500">// Personal Engineering Manifest</p>
                  <p className="mt-2">
                    <span className="text-purple-600 dark:text-purple-400">export const</span>{' '}
                    <span className="text-indigo-600 dark:text-indigo-400">engineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-emerald-600 dark:text-emerald-400">"{profile.name}"</span>,
                  </p>
                  <p className="pl-4">
                    focus: <span className="text-emerald-600 dark:text-emerald-400">"Full Stack & Distributed Systems"</span>,
                  </p>
                  <p className="pl-4">
                    location: <span className="text-emerald-600 dark:text-emerald-400">"{profile.location}"</span>,
                  </p>
                  <p className="pl-4">
                    yearsExperience: <span className="text-amber-600 dark:text-amber-400">4</span>,
                  </p>
                  <p className="pl-4">
                    coreDisciplines: [
                  </p>
                  <p className="pl-8 text-slate-600 dark:text-slate-300">
                    <span className="text-emerald-600 dark:text-emerald-400">"React 19"</span>,{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"Tailwind v4"</span>,{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"Microservices"</span>
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    designPhilosophy: <span className="text-emerald-600 dark:text-emerald-400">"Speed, Simplicity & Reliability"</span>,
                  </p>
                  <p className="pl-4">
                    isAvailable: <span className="text-amber-600 dark:text-amber-400">true</span>
                  </p>
                  <p>&#125;;</p>

                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Type-checked with TypeScript
                    </span>
                    <span className="text-slate-400">0 errors</span>
                  </div>
                </div>

                {/* Live Stats Bar inside card */}
                <div className="grid grid-cols-3 divide-x divide-slate-200 dark:divide-slate-800 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                  <div className="p-3 text-center">
                    <div className="text-base font-bold text-slate-900 dark:text-white font-mono">{profile.yearsOfExp}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Experience</div>
                  </div>
                  <div className="p-3 text-center">
                    <div className="text-base font-bold text-slate-900 dark:text-white font-mono">{profile.projectsCompleted}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Shipped</div>
                  </div>
                  <div className="p-3 text-center">
                    <div className="text-base font-bold text-slate-900 dark:text-white font-mono">{profile.codeQuality}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
