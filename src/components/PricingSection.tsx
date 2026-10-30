import React from 'react';
import { 
  ShoppingBag, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Lock, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { BOOK_DETAILS } from '../data/bookData';

export const PricingSection: React.FC = () => {
  const inclusions = [
    'Complete 115+ Page Python Mastery eBook (All 17 Chapters)',
    '100+ Tested Python Source Code Scripts (.py repository)',
    'Six Full Mini Projects Source Code (Resume Ready)',
    '30-Day University Practical & Placement Prep Blueprint',
    'Viva Voce & Technical Interview Q&A Bank with Answers',
    'Universal PDF Format (Mobile, Tablet, Laptop & Desktop Compatible)',
    'Free Lifetime Revisions & NexCart Publications Updates'
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-[#100b2e] to-slate-950 relative overflow-hidden border-t border-indigo-900/40">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-pink-500/10 text-pink-300 border border-pink-500/30">
            <Zap className="w-3.5 h-3.5 text-pink-400" />
            <span>SPECIAL LAUNCH PRICING • 85% OFF</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get Complete Python Mastery <br />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
              For Just ₹{BOOK_DETAILS.offerPrice} Only
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            One-time investment for your college degree, practical file, and technical interview success.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative bg-slate-900/90 rounded-3xl border border-indigo-500/50 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {/* Top Floating Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white text-[11px] font-black uppercase tracking-wider py-1 px-5 rounded-full shadow-lg flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>Limited Launch Batch • 85% Discount</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: What's Included (7 cols) */}
            <div className="md:col-span-7 space-y-5 text-left">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
                  COMPLETE DIGITAL PACKAGE INCLUDES:
                </p>
                <h3 className="text-2xl font-black text-white mt-1">
                  Python Mastery: From Zero to Pro
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  By Abhishek Prajapati • NexCart Publications • First Edition 2026
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                {inclusions.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                  >
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" /> Instant Digital Delivery
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-indigo-400" /> Lifetime Access
                </span>
              </div>
            </div>

            {/* Right: Price Tag & Direct Checkout Action (5 cols) */}
            <div className="md:col-span-5 bg-slate-950 p-6 rounded-2xl border border-indigo-500/30 text-center space-y-5">
              
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Special Offer Price</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-black text-white font-mono">₹{BOOK_DETAILS.offerPrice}</span>
                  <span className="text-base line-through text-slate-500 font-mono">₹{BOOK_DETAILS.regularPrice}</span>
                </div>
                <p className="text-[11px] font-bold text-emerald-400">You Save ₹850 (Flat 85% OFF)</p>
                <p className="text-[10px] text-slate-500">Single one-time payment • All taxes included</p>
              </div>

              {/* Direct Razorpay Payment Button */}
              <a
                href={BOOK_DETAILS.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl font-black text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-xl shadow-purple-900/50 flex items-center justify-center gap-2.5 text-base group cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <ShoppingBag className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                <span>Pay ₹{BOOK_DETAILS.offerPrice} via Razorpay</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Payment Methods Badges */}
              <div className="space-y-2 pt-2">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                  Secure Checkout Supported By Razorpay:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-1.5 text-[10px] font-mono text-slate-300">
                  <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">UPI</span>
                  <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">Google Pay</span>
                  <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">PhonePe</span>
                  <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">Paytm</span>
                  <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">Cards</span>
                  <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">Net Banking</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-900 text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-bit Encrypted Payment Gateway</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
