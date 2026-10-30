import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, ShieldCheck } from 'lucide-react';
import { FAQ_DATA, BOOK_DETAILS } from '../data/bookData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-slate-950 relative border-t border-indigo-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Have Questions? <span className="text-cyan-400">We Have Answers</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Everything you need to know about purchasing, downloading, and studying with Python Mastery.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl transition-all border ${
                  isOpen 
                    ? 'bg-slate-900 border-indigo-500/50 shadow-md' 
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-cyan-400" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-center space-y-2">
          <p className="text-xs sm:text-sm text-slate-200">
            Still have questions or facing payment issues?
          </p>
          <p className="text-xs text-indigo-300 font-mono">
            Support Email: <strong>support@nexcart.in</strong> • Abhishek Prajapati (Author Support)
          </p>
        </div>

      </div>
    </section>
  );
};
