import React from 'react';
import { 
  Quote, 
  CheckCircle2, 
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { BOOK_DETAILS } from '../data/bookData';

export const AuthorSection: React.FC = () => {
  return (
    <section id="author" className="py-16 sm:py-20 bg-slate-950 relative border-t border-indigo-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/30">
            MEET THE AUTHOR
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Created by {BOOK_DETAILS.author}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            {BOOK_DETAILS.authorRole} • Published by {BOOK_DETAILS.publisher}
          </p>
        </div>

        {/* Profile Card with Abhishek's Real Photo */}
        <div className="bg-slate-900 rounded-3xl border border-indigo-500/40 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left: Real Author Photo (4 cols) */}
            <div className="md:col-span-4 text-center space-y-3">
              <div className="relative inline-block">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl p-1 bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 shadow-xl shadow-indigo-600/30 mx-auto">
                  <img
                    src={BOOK_DETAILS.authorImage}
                    alt={BOOK_DETAILS.author}
                    className="w-full h-full rounded-2xl object-cover bg-slate-950"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = BOOK_DETAILS.authorImageBackup;
                    }}
                  />
                </div>

                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-slate-950 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap shadow-md flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Author Verified</span>
                </div>
              </div>

              <div className="pt-1">
                <h3 className="text-lg font-bold text-white">{BOOK_DETAILS.author}</h3>
                <p className="text-xs text-indigo-300 font-semibold">{BOOK_DETAILS.authorRole}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{BOOK_DETAILS.publisher} • First Edition 2026</p>
              </div>
            </div>

            {/* Right: Author Statement (8 cols) */}
            <div className="md:col-span-8 space-y-3 text-left">
              <div className="p-2.5 bg-indigo-950/40 border border-indigo-500/30 rounded-xl inline-flex items-center gap-2 text-xs text-indigo-200">
                <Quote className="w-3.5 h-3.5 text-pink-400" />
                <span className="font-semibold">Author's Note to Fellow Students</span>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-200 leading-relaxed italic space-y-2">
                <p>
                  "When I was studying BCA, standard textbooks felt overly complicated with heavy definitions and zero practical execution. I wanted to build a book where every concept is immediately backed by tested code, real outputs, and viva questions."
                </p>
                <p>
                  "<strong>Python Mastery: From Zero to Pro</strong> is written to make learning programming exciting and stress-free. Happy coding and ace your exams!"
                </p>
              </blockquote>

              <div className="pt-2 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✔</span>
                  <span>Zero confusing jargon</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✔</span>
                  <span>Tested on Python 3.12+</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 font-bold">✔</span>
                  <span>Viva &amp; lab exam ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-400 font-bold">✔</span>
                  <span>6 Complete mini projects</span>
                </div>
              </div>

              {/* Thank you note */}
              <div className="bg-slate-950 p-3 rounded-xl border border-emerald-500/30 text-[11px] text-emerald-300">
                <strong className="text-white block mb-0.5">THANK YOU NOTE (Page 115):</strong>
                "Thank you for choosing this book. I hope it helps you write your first program, ace your exams and build projects you are proud of. Keep learning, keep coding! — Abhishek Prajapati"
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
