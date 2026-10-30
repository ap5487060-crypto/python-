import React, { useState, useEffect } from 'react';
import { Flame, Clock, Sparkles } from 'lucide-react';
import { BOOK_DETAILS } from '../data/bookData';

export const AnnouncementBar: React.FC = () => {
  // 15-minute countdown timer loop for urgency
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number }>({
    minutes: 14,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 14, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-violet-950 via-indigo-900 to-purple-950 text-white text-xs sm:text-sm py-2 px-3 border-b border-indigo-500/20 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center">
        <div className="inline-flex items-center gap-1.5 font-bold text-amber-300">
          <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>BCA SEMESTER SPECIAL DISCOUNT:</span>
        </div>
        
        <div className="flex items-center gap-1.5 text-slate-200">
          <span>Flat 85% OFF on Complete 115+ Page Guide</span>
          <span className="line-through text-slate-400">₹{BOOK_DETAILS.regularPrice}</span>
          <span className="font-extrabold text-emerald-400 text-sm">₹{BOOK_DETAILS.offerPrice} Only!</span>
        </div>

        <div className="inline-flex items-center gap-1 bg-black/30 border border-indigo-400/30 px-2 py-0.5 rounded text-xs font-mono font-semibold text-pink-300">
          <Clock className="w-3.5 h-3.5 text-pink-400" />
          <span>Offer Ends: {formatNum(timeLeft.minutes)}:{formatNum(timeLeft.seconds)}</span>
        </div>

        <a
          href={BOOK_DETAILS.paymentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-amber-200 font-bold ml-1 flex items-center gap-0.5 text-xs text-indigo-200"
        >
          Claim Now &rarr;
        </a>
      </div>
    </div>
  );
};
