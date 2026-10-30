import React from 'react';
import { ShieldCheck, BookOpen, Heart, Sparkles, Download, ShoppingBag } from 'lucide-react';
import { BOOK_DETAILS } from '../data/bookData';
import { downloadSamplePdf, openSamplePdfInNewTab } from '../utils/downloadHelper';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-24 lg:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center font-mono font-bold text-white text-sm">
                Py
              </div>
              <span className="font-bold text-lg text-white">Python Mastery: From Zero to Pro</span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              The complete hands-on practical Python handbook written by Abhishek Prajapati for college scholars, BCA undergraduates, and programming beginners worldwide.
            </p>
            <div className="flex items-center gap-3 text-slate-500 pt-2 font-mono text-[11px]">
              <span>Published by NexCart Publications</span>
              <span>•</span>
              <span>First Edition 2026</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sample-pdf" className="hover:text-cyan-400 transition-colors">
                  Sample Preview (11 Pages)
                </a>
              </li>
              <li>
                <button onClick={downloadSamplePdf} className="hover:text-cyan-400 transition-colors text-left">
                  Download Sample PDF File
                </button>
              </li>
              <li>
                <button onClick={openSamplePdfInNewTab} className="hover:text-cyan-400 transition-colors text-left">
                  Open PDF in New Window
                </button>
              </li>
              <li>
                <a href="#syllabus" className="hover:text-cyan-400 transition-colors">
                  17 Chapters Full Syllabus
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  6 Mini Projects Showcase
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-pink-400 transition-colors font-semibold">
                  Get Full eBook for ₹{BOOK_DETAILS.offerPrice}
                </a>
              </li>
            </ul>
          </div>

          {/* Security & Razorpay Notice */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Payment &amp; Security</h4>
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Razorpay Secured (256-bit SSL)</span>
              </div>
              <p className="text-[11px] text-slate-400">
                All transactions are processed directly through Razorpay's PCI-DSS compliant checkout gateway. Instant digital delivery after successful payment.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} NexCart Publications &amp; Abhishek Prajapati. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span>for College Students &amp; Python Learners</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
