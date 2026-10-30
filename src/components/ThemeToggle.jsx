import React, { useState, useEffect, useCallback } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

/**
 * Compliant with modern-web-guidance: `dark-mode-toggle`
 * 1. Synchronizes with <meta name="color-scheme" content="light|dark|light dark">
 * 2. Persists preference to localStorage and reacts to multi-tab storage events
 * 3. Keeps documentElement classList in sync for Tailwind's dark styling
 */
function applyThemeToDOM(mode) {
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (mode === 'dark') {
    if (meta) meta.content = 'dark';
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-scheme', 'dark');
  } else if (mode === 'light') {
    if (meta) meta.content = 'light';
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-scheme', 'light');
  } else {
    // System default
    if (meta) meta.content = 'light dark';
    localStorage.removeItem('color-scheme');
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isSystemDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

export default function ThemeToggle() {
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window === 'undefined') return 'system';
    const stored = localStorage.getItem('color-scheme');
    if (stored === 'dark' || stored === 'light') return stored;
    return 'system';
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 1. Initial sync to DOM
    applyThemeToDOM(themeMode);

    // 2. Multi-tab synchronization
    const handleStorage = (e) => {
      if (e.key === 'color-scheme') {
        const val = e.newValue;
        if (val === 'dark' || val === 'light') {
          setThemeMode(val);
          applyThemeToDOM(val);
        } else {
          setThemeMode('system');
          applyThemeToDOM('system');
        }
      }
    };

    // 3. System preference change listener
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = (e) => {
      const currentStored = localStorage.getItem('color-scheme');
      if (!currentStored || currentStored === 'light dark') {
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    window.addEventListener('storage', handleStorage);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      window.removeEventListener('storage', handleStorage);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [themeMode]);

  const handleSelectMode = useCallback((mode) => {
    setThemeMode(mode);
    applyThemeToDOM(mode);
    setIsOpen(false);
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-xs"
        aria-label="Select theme mode"
        aria-expanded={isOpen}
      >
        {themeMode === 'dark' ? (
          <Moon className="w-4 h-4 text-indigo-400" />
        ) : themeMode === 'light' ? (
          <Sun className="w-4 h-4 text-amber-500" />
        ) : (
          <Monitor className="w-4 h-4 text-slate-500" />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 mt-2 w-36 rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800 shadow-xl z-50 py-1.5 focus:outline-hidden">
            <button
              onClick={() => handleSelectMode('light')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                themeMode === 'light'
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <Sun className="w-4 h-4 text-amber-500" />
              <span>Light</span>
            </button>
            <button
              onClick={() => handleSelectMode('dark')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                themeMode === 'dark'
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <Moon className="w-4 h-4 text-indigo-400" />
              <span>Dark</span>
            </button>
            <button
              onClick={() => handleSelectMode('system')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                themeMode === 'system'
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <Monitor className="w-4 h-4 text-slate-400" />
              <span>System</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
