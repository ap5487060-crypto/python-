import React from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';
import { BOOK_DETAILS } from '../data/bookData';

export const StickyBottomCta: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-indigo-900/60 p-3 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-white">₹{BOOK_DETAILS.offerPrice}</span>
            <span className="text-xs line-through text-slate-500 font-mono">₹{BOOK_DETAILS.regularPrice}</span>
            <span className="text-[10px] font-bold text-pink-400 bg-pink-500/10 px-1.5 py-0.2 rounded">85% OFF</span>
          </div>
          <p className="text-[10px] text-slate-400">115+ Pages • 100+ Tested Codes</p>
        </div>

        <a
          href={BOOK_DETAILS.paymentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl text-xs font-black text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-md shadow-purple-900/40 flex items-center gap-1.5 active:scale-95 transition-all"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Buy eBook — ₹{BOOK_DETAILS.offerPrice}</span>
        </a>
      </div>
    </div>
  );
};
