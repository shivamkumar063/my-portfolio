import React from 'react';
import { Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TestimonialsSection() {
  const { testimonials } = portfolioData;

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 relative border-t border-slate-200/80 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Peer Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Engineering Leaders Say
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Collaborating with cross-functional pods, founders, and engineering managers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  {item.avatarInitials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
