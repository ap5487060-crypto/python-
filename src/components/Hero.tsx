import React from 'react';
import { 
  Download, 
  ShoppingBag, 
  BookOpen, 
  Star, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { BOOK_DETAILS } from '../data/bookData';
import { downloadSamplePdf, openSamplePdfInNewTab } from '../utils/downloadHelper';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-purple-600/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-pink-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Highlights & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                First Edition 2026
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                NexCart Publications
              </span>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="font-bold ml-1">4.9/5</span>
                <span className="text-slate-400 hidden sm:inline">(1,420+ Students)</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 font-mono">
                THE COMPLETE HANDS-ON GUIDE
              </p>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
                PYTHON <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">MASTERY</span>
                <br />
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-200">
                  From Zero to Pro
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Specially designed for <strong className="text-cyan-300 font-semibold">BCA students &amp; beginners</strong>. 
                Learn through real practicals: <em>Concept &rarr; Diagram &rarr; Tested Code &rarr; Output &rarr; Practice</em>. 
                Zero complex theory, 100% exam and career ready!
              </p>
            </div>

            {/* Author Credential Card with Real Photo */}
            <div className="inline-flex items-center gap-3 p-2 rounded-2xl bg-slate-900/90 border border-indigo-900/60 shadow-lg">
              <div className="relative">
                <img 
                  src={BOOK_DETAILS.authorImage} 
                  alt={BOOK_DETAILS.author} 
                  className="w-12 h-12 rounded-xl object-cover border-2 border-indigo-500/80 shadow-md"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = BOOK_DETAILS.authorImageBackup;
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center">
                  <span className="text-[7px] text-white font-bold">✓</span>
                </div>
              </div>
              <div className="text-left pr-2">
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  Written by {BOOK_DETAILS.author}
                  <span className="text-[9px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.2 rounded font-mono font-medium">Author</span>
                </div>
                <p className="text-xs text-slate-400">{BOOK_DETAILS.authorRole}</p>
              </div>
            </div>

            {/* Four Signature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 max-w-lg mx-auto lg:mx-0 text-center">
              <div className="bg-amber-400/10 border border-amber-400/30 rounded-lg p-1.5">
                <span className="text-[11px] font-bold text-amber-300 tracking-wider">BCA STUDENTS</span>
              </div>
              <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-1.5">
                <span className="text-[11px] font-bold text-cyan-300 tracking-wider">BEGINNER FRIENDLY</span>
              </div>
              <div className="bg-pink-400/10 border border-pink-400/30 rounded-lg p-1.5">
                <span className="text-[11px] font-bold text-pink-300 tracking-wider">100+ CODES</span>
              </div>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-1.5">
                <span className="text-[11px] font-bold text-emerald-300 tracking-wider">6 PROJECTS</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                {/* Primary Razorpay Buy Button */}
                <a
                  href={BOOK_DETAILS.paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-black text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 text-base group cursor-pointer animate-glow"
                >
                  <ShoppingBag className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                  <span>Buy Full eBook — ₹{BOOK_DETAILS.offerPrice}</span>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-bold">
                    85% OFF
                  </span>
                </a>

                {/* Direct Sample PDF Download */}
                <button
                  onClick={downloadSamplePdf}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 hover:text-white transition-all flex items-center justify-center gap-2 text-sm group cursor-pointer"
                  title="Download the official sample preview PDF"
                >
                  <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Sample PDF</span>
                </button>
              </div>

              {/* Quick links to Sample Reader */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-400">
                <a
                  href="#sample-pdf"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read 11 Sample Pages Below &darr;</span>
                </a>
                <span>•</span>
                <button
                  onClick={openSamplePdfInNewTab}
                  className="text-slate-300 hover:text-white underline underline-offset-4 cursor-pointer"
                >
                  Open PDF in New Window
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center sm:text-left">
              <div>
                <p className="text-xl font-black text-white font-mono">115+</p>
                <p className="text-[11px] text-slate-400">Book Pages</p>
              </div>
              <div>
                <p className="text-xl font-black text-white font-mono">17</p>
                <p className="text-[11px] text-slate-400">Chapters</p>
              </div>
              <div>
                <p className="text-xl font-black text-emerald-400 font-mono">Instant</p>
                <p className="text-[11px] text-slate-400">PDF Delivery</p>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive eBook Mockup with Real Photo (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 rounded-2xl blur-xl opacity-35 group-hover:opacity-60 transition duration-500" />
              
              {/* 3D Book Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-indigo-500/40 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                
                {/* Book Spine */}
                <div className="h-2 bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500" />
                
                {/* Book Cover Face (Replicating PDF Page 1 with Abhishek's Photo) */}
                <div className="p-5 bg-gradient-to-b from-[#130b2e] via-[#0f0924] to-[#070414] text-white relative">
                  
                  {/* Floating 3D Cubes */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-pink-500/30 border border-pink-400 rounded-md rotate-12 flex items-center justify-center font-mono text-[10px] font-bold text-pink-200 animate-float">
                    [ ]
                  </div>
                  <div className="absolute top-14 left-4 w-9 h-9 bg-indigo-500/30 border border-indigo-400 rounded-md -rotate-12 flex items-center justify-center font-mono text-[9px] font-bold text-cyan-200 animate-float-delayed">
                    def
                  </div>

                  {/* Top Book Meta */}
                  <div className="text-center space-y-1 mb-4">
                    <p className="text-[9px] font-mono tracking-widest text-indigo-300 font-bold uppercase">
                      THE COMPLETE HANDS-ON GUIDE
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                      PYTHON <span className="text-cyan-400">MASTERY</span>
                    </h2>
                    <p className="text-xs font-semibold text-pink-400">From Zero to Pro</p>
                  </div>

                  {/* Badges bar */}
                  <div className="flex flex-wrap items-center justify-center gap-1 py-1 mb-4">
                    <span className="text-[8px] font-bold bg-amber-500 text-slate-950 px-1.5 py-0.2 rounded">BCA STUDENTS</span>
                    <span className="text-[8px] font-bold bg-cyan-500 text-slate-950 px-1.5 py-0.2 rounded">BEGINNER FRIENDLY</span>
                    <span className="text-[8px] font-bold bg-pink-500 text-white px-1.5 py-0.2 rounded">100+ CODES</span>
                    <span className="text-[8px] font-bold bg-emerald-500 text-slate-950 px-1.5 py-0.2 rounded">PROJECTS</span>
                  </div>

                  {/* Real Author Photo Card on Book Face (Exactly like PDF Cover!) */}
                  <div className="bg-slate-950/90 rounded-xl p-3 border border-indigo-500/40 mb-3 flex items-center gap-3">
                    <img
                      src={BOOK_DETAILS.authorImage}
                      alt={BOOK_DETAILS.author}
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-lg object-cover border-2 border-indigo-500 shadow-md shrink-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = BOOK_DETAILS.authorImageBackup;
                      }}
                    />
                    <div className="text-left space-y-0.5">
                      <p className="text-[9px] uppercase tracking-wider text-indigo-300 font-mono font-bold">WRITTEN BY</p>
                      <h3 className="text-sm sm:text-base font-black text-white">{BOOK_DETAILS.author}</h3>
                      <p className="text-[10px] text-slate-400 leading-tight">BCA Student • Entrepreneur • Content Creator</p>
                    </div>
                  </div>

                  {/* Publisher note at bottom of cover */}
                  <div className="pt-2 border-t border-indigo-900/60 flex items-center justify-between text-left text-[10px] text-slate-400">
                    <span>Published by NexCart Publications</span>
                    <span className="font-mono text-cyan-400 font-bold">115+ Pages</span>
                  </div>
                </div>

                {/* Bottom card bar */}
                <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Price:</span>
                    <span className="text-base font-black text-emerald-400">₹{BOOK_DETAILS.offerPrice}</span>
                    <span className="text-xs line-through text-slate-500">₹{BOOK_DETAILS.regularPrice}</span>
                  </div>
                  <a
                    href="#sample-pdf"
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Flip Pages &rarr;</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
