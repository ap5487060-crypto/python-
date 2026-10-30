import React from 'react';
import { 
  BookOpen, 
  Code2, 
  FolderGit2, 
  Clock, 
  HelpCircle, 
  ShieldCheck, 
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { WHAT_YOU_GET, BOOK_DETAILS } from '../data/bookData';

export const WhatYouGet: React.FC = () => {
  const icons = [BookOpen, Code2, FolderGit2, Clock, HelpCircle, ShieldCheck];
  const colors = [
    'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    'text-amber-400 bg-amber-500/10 border-amber-500/30',
    'text-pink-400 bg-pink-500/10 border-pink-500/30',
    'text-purple-400 bg-purple-500/10 border-purple-500/30'
  ];

  return (
    <section id="included" className="py-16 sm:py-20 bg-slate-950/70 relative border-t border-indigo-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
            EVERYTHING YOU GET FOR ₹{BOOK_DETAILS.offerPrice}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Comprehensive, Complete &amp; Practical
          </h2>
          <p className="text-sm text-slate-300">
            No fluff or boring filler. Only tested code, clear explanations, and university-proven projects.
          </p>
        </div>

        {/* 6 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHAT_YOU_GET.map((item, idx) => {
            const Icon = icons[idx];
            const colorClass = colors[idx];

            return (
              <div
                key={idx}
                className="bg-slate-900/80 rounded-2xl border border-slate-800 p-5 hover:border-indigo-500/40 transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
