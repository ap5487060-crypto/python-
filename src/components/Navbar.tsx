import React from 'react';
import { BookOpen, ShoppingBag, Download } from 'lucide-react';
import { BOOK_DETAILS } from '../data/bookData';
import { downloadSamplePdf } from '../utils/downloadHelper';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-indigo-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo & Author Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src={BOOK_DETAILS.authorImage} 
                alt={BOOK_DETAILS.author} 
                className="w-9 h-9 rounded-full object-cover border-2 border-indigo-500 shadow-md group-hover:scale-105 transition-transform"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = BOOK_DETAILS.authorImageBackup;
                }}
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base sm:text-lg text-white tracking-tight">Python Mastery</span>
                <span className="text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-1.5 py-0.2 rounded">
                  ₹{BOOK_DETAILS.offerPrice}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">By {BOOK_DETAILS.author} • NexCart Pub.</p>
            </div>
          </a>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#sample-pdf" className="hover:text-cyan-400 transition-colors">Sample Preview</a>
            <a href="#included" className="hover:text-cyan-400 transition-colors">What's Inside</a>
            <a href="#author" className="hover:text-cyan-400 transition-colors">Author</a>
            <a href="#pricing" className="hover:text-pink-400 transition-colors">Pricing</a>
          </div>

          {/* Quick CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={downloadSamplePdf}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:text-white transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sample PDF</span>
            </button>

            <a
              href={BOOK_DETAILS.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-600 hover:to-pink-600 shadow-md shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Buy ₹{BOOK_DETAILS.offerPrice}</span>
              <span className="hidden sm:inline-block text-[10px] bg-white/20 px-1 py-0.2 rounded font-black">
                85% OFF
              </span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};
