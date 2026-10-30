import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, Mail, MapPin, Clock, CheckCircle2, AlertCircle, Copy, Check, MessageSquare 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { profile } = portfolioData;
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  /**
   * Guidance: `validate-input-after-interaction`
   * Sync native :user-invalid state with aria-invalid attribute
   */
  useEffect(() => {
    const syncAria = (el) => {
      if (el && typeof el.matches === 'function') {
        el.setAttribute('aria-invalid', el.matches(':user-invalid') ? 'true' : 'false');
      }
    };

    const handleBlur = (e) => syncAria(e.target);
    const handleInput = (e) => {
      if (e.target.hasAttribute('aria-invalid')) syncAria(e.target);
    };

    const currentForm = formRef.current;
    if (currentForm) {
      currentForm.addEventListener('blur', handleBlur, true);
      currentForm.addEventListener('input', handleInput);
    }

    return () => {
      if (currentForm) {
        currentForm.removeEventListener('blur', handleBlur, true);
        currentForm.removeEventListener('input', handleInput);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current.checkValidity()) {
      return;
    }

    // Trigger celebratory confetti burst
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section className="py-24 relative" id="contact">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Start A Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Have an engineering challenge, upcoming project, or full-time opportunity? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <h3 className="mt-4 font-bold text-slate-900 dark:text-white text-base">
                Direct Email
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-mono text-indigo-600 dark:text-indigo-400 select-all">
                {profile.email}
              </p>
            </div>

            {/* Location & Timezone Card */}
            <div className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900 dark:text-white text-base">
                Primary Base & Timezone
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {profile.location} (IST / UTC+5:30)
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Available for overlapping US, UK & APAC time zones
              </div>
            </div>

            {/* Turnaround Guarantee Card */}
            <div className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900 dark:text-white text-base">
                Fast Response Turnaround
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Guaranteed reply within 24 business hours for project inquiries and engineering consultations.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form conforming to :user-invalid */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-200/90 dark:border-slate-800 shadow-xl relative">
              
              {submitted ? (
                /* Success Message State */
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
                    Thank you, <strong className="font-semibold text-slate-900 dark:text-white">{formData.name}</strong>.
                    I have received your message and will review your notes shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                /* Interactive Form */
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate={false}
                  className="space-y-5"
                >
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <MessageSquare className="w-4 h-4 text-indigo-500" />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Send a Direct Message
                    </span>
                  </div>

                  {/* Name field */}
                  <div className="field flex flex-col space-y-1.5">
                    <label
                      htmlFor="user-name"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="user-name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      aria-describedby="name-helper name-error"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 transition-all focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    />
                    <div
                      id="name-error"
                      className="field-error-msg items-center gap-1 text-[11px] text-rose-500 mt-1 font-medium"
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Please enter your full name (minimum 2 characters).</span>
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="field flex flex-col space-y-1.5">
                    <label
                      htmlFor="user-email"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="user-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      aria-describedby="email-helper email-error"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 transition-all focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    />
                    <div
                      id="email-error"
                      className="field-error-msg items-center gap-1 text-[11px] text-rose-500 mt-1 font-medium"
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Please provide a valid email format (e.g. name@domain.com).</span>
                    </div>
                  </div>

                  {/* Subject field */}
                  <div className="field flex flex-col space-y-1.5">
                    <label
                      htmlFor="user-subject"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Topic / Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="user-subject"
                      name="subject"
                      type="text"
                      required
                      minLength={4}
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Distributed Systems Architecture / Role"
                      aria-describedby="subject-error"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 transition-all focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    />
                    <div
                      id="subject-error"
                      className="field-error-msg items-center gap-1 text-[11px] text-rose-500 mt-1 font-medium"
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Please specify a subject topic (at least 4 characters).</span>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="field flex flex-col space-y-1.5">
                    <label
                      htmlFor="user-message"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Project Details / Note <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="user-message"
                      name="message"
                      rows={4}
                      required
                      minLength={10}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about what you are building, timeline, or requirements..."
                      aria-describedby="message-error"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 transition-all focus:outline-hidden focus:ring-2 focus:ring-indigo-500 resize-y"
                    />
                    <div
                      id="message-error"
                      className="field-error-msg items-center gap-1 text-[11px] text-rose-500 mt-1 font-medium"
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Please enter at least 10 characters for your message.</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-semibold shadow-md shadow-indigo-600/30 transition-all hover:shadow-indigo-600/40 hover:-translate-y-0.5"
                    >
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="mt-2.5 text-center text-[11px] text-slate-400">
                      Validation feedback displays cleanly on interaction without premature warning dialogs.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
