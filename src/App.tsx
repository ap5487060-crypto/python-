import React from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SamplePdfViewer } from './components/SamplePdfViewer';
import { WhatYouGet } from './components/WhatYouGet';
import { AuthorSection } from './components/AuthorSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyBottomCta } from './components/StickyBottomCta';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-pink-500 selection:text-white">
      {/* Top Launch Offer Urgency Bar */}
      <AnnouncementBar />

      {/* Main Brand Navigation with Author Avatar */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Hero Section with 3D Book (Featuring Abhishek's Real Photo) */}
        <Hero />

        {/* Free Official 11-Page Sample PDF Viewer & Instant Downloader */}
        <SamplePdfViewer />

        {/* Essential 6 Inclusions: What You Get for ₹149 */}
        <WhatYouGet />

        {/* Author Abhishek Prajapati Profile & Real Photo */}
        <AuthorSection />

        {/* Dedicated High-Converting ₹149 Razorpay Payment Card */}
        <PricingSection />

        {/* Essential Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Sticky Mobile Buy CTA Bar */}
      <StickyBottomCta />
    </div>
  );
}
