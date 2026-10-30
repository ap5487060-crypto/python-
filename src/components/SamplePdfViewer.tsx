import React, { useState } from 'react';
import { 
  Download, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Sparkles, 
  FileText,
  ShoppingBag,
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import { BOOK_DETAILS } from '../data/bookData';
import { downloadSamplePdf, openSamplePdfInNewTab, SAMPLE_PDF_URL } from '../utils/downloadHelper';

interface PageItem {
  pageNum: number;
  title: string;
  category: string;
  summary: string;
}

const PAGES_INFO: PageItem[] = [
  { pageNum: 1, title: 'Official Front Cover', category: 'Cover', summary: 'Title, Author byline, NexCart imprint, and four signature badges.' },
  { pageNum: 2, title: 'How To Use This Book & Roadmap', category: 'Methodology', summary: 'The 5 color-coded boxes (Pro-Tip, Note, Warning, Remember, Exam) & 5-level roadmap.' },
  { pageNum: 3, title: 'Table of Contents (Part 1)', category: 'Syllabus', summary: 'Chapter 1 (Intro) to Chapter 6 (Conditionals).' },
  { pageNum: 4, title: 'Table of Contents (Part 2)', category: 'Syllabus', summary: 'Chapter 7 (Loops) to Chapter 12 (File Handling).' },
  { pageNum: 5, title: 'Table of Contents (Part 3)', category: 'Syllabus', summary: 'Chapter 13 (Errors) to Chapter 17 (Interview Prep & 30-Day Plan).' },
  { pageNum: 6, title: 'Chapter 1: Welcome to Python', category: 'Chapter Sample', summary: 'What is Python, key features table, and why it is essential for BCA students.' },
  { pageNum: 7, title: 'Installation & First Program', category: 'Chapter Sample', summary: 'Setup guide, common PATH warning trap, and print("Hello, World!") code.' },
  { pageNum: 8, title: 'Practice Zone: Chapter 1', category: 'Exercises', summary: '5 hands-on coding exercises with real output testing.' },
  { pageNum: 9, title: 'Chapter 3: Operators & Expressions', category: 'Chapter Sample', summary: 'Arithmetic operators cheat table and sample code.' },
  { pageNum: 10, title: 'Chapter 16: Six Mini Projects', category: 'Projects', summary: 'Project 1: Smart Calculator system architecture and code flow.' },
  { pageNum: 11, title: '30-Day Practice Plan & Author Message', category: 'Action Plan', summary: 'Day-by-day practice roadmap and dedication from Abhishek Prajapati.' },
];

export const SamplePdfViewer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'visual_reader' | 'native_embed'>('visual_reader');

  const activePage = PAGES_INFO.find(p => p.pageNum === currentPage) || PAGES_INFO[0];

  const handleNext = () => {
    if (currentPage < PAGES_INFO.length) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section id="sample-pdf" className="py-16 sm:py-24 bg-slate-900/60 relative border-t border-indigo-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>FREE 11-PAGE OFFICIAL SAMPLE PREVIEW</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Read The Sample Preview <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">Before You Decide</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Browse through the actual book contents, curriculum index, sample chapters, and project blueprint.
          </p>
        </div>

        {/* Action Controls Bar */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-indigo-500/30 shadow-xl mb-6 flex flex-wrap items-center justify-between gap-4">
          
          {/* Quick PDF Links */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={downloadSamplePdf}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Sample PDF (2.4 MB)</span>
            </button>

            <button
              onClick={openSamplePdfInNewTab}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <span>Open PDF in New Window</span>
            </button>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-medium">
            <button
              onClick={() => setViewMode('visual_reader')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'visual_reader'
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Visual Book Reader
            </button>
            <button
              onClick={() => setViewMode('native_embed')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'native_embed'
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Embedded PDF Frame
            </button>
          </div>

        </div>

        {/* Reader Container */}
        {viewMode === 'visual_reader' ? (
          <div className="bg-slate-950 rounded-2xl border border-indigo-500/30 overflow-hidden shadow-2xl">
            
            {/* Reader Header */}
            <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-black px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  PAGE {activePage.pageNum} / 11
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">{activePage.title}</h3>
                  <p className="text-xs text-slate-400">{activePage.summary}</p>
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentPage === 11}
                  className="p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Page Display */}
            <div className="p-6 sm:p-10 min-h-[480px] flex items-center justify-center bg-gradient-to-b from-slate-950 via-[#0e0a24] to-slate-950">
              <div className="w-full max-w-2xl bg-slate-900 rounded-2xl border border-indigo-500/40 p-6 sm:p-8 shadow-2xl text-left transition-all duration-300">
                
                {/* Page 1: Cover */}
                {currentPage === 1 && (
                  <div className="text-center py-6 space-y-6">
                    <div className="space-y-2">
                      <p className="text-xs font-mono tracking-widest text-indigo-400 font-bold uppercase">
                        THE COMPLETE HANDS-ON GUIDE
                      </p>
                      <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        PYTHON <span className="text-cyan-400">MASTERY</span>
                      </h3>
                      <p className="text-base font-bold text-pink-400">From Zero to Pro</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold">BCA STUDENTS</span>
                      <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold">BEGINNER FRIENDLY</span>
                      <span className="px-2.5 py-1 rounded bg-pink-500/20 text-pink-300 border border-pink-500/40 text-xs font-bold">100+ TESTED CODES</span>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold">PROJECTS + Q&A</span>
                    </div>

                    <div className="p-4 bg-slate-950 rounded-xl border border-indigo-500/20 max-w-md mx-auto text-left font-mono text-xs text-slate-300 space-y-1">
                      <p className="text-slate-500"># Preview Copy • NexCart Publications</p>
                      <p className="text-cyan-300">author = "Abhishek Prajapati"</p>
                      <p className="text-emerald-300">target_audience = ["BCA", "Beginners", "University"]</p>
                      <p className="text-pink-300">status = "Complete 115-Page Edition 2026"</p>
                    </div>

                    <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
                      <p className="font-bold text-white text-sm">Written by Abhishek Prajapati</p>
                      <p>BCA Student • Entrepreneur • Content Creator</p>
                      <p className="text-indigo-400 mt-1 font-semibold">Published by NexCart Publications</p>
                    </div>
                  </div>
                )}

                {/* Page 2: How To Use This Book */}
                {currentPage === 2 && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white">How To Use This Book</h4>
                    <p className="text-xs text-slate-300">
                      Every chapter follows the simple pattern: <strong className="text-cyan-300">Concept &rarr; Diagram &rarr; Tested Code &rarr; Output &rarr; Practice</strong>.
                    </p>

                    <div className="space-y-2 text-xs">
                      <div className="border-l-4 border-emerald-500 bg-emerald-950/20 p-2.5 rounded-r-lg text-emerald-300">
                        <strong className="font-bold uppercase">PRO TIP:</strong> Shortcuts and good habits that professionals use.
                      </div>
                      <div className="border-l-4 border-blue-500 bg-blue-950/20 p-2.5 rounded-r-lg text-blue-300">
                        <strong className="font-bold uppercase">NOTE:</strong> Extra information that helps you understand the topic better.
                      </div>
                      <div className="border-l-4 border-red-500 bg-red-950/20 p-2.5 rounded-r-lg text-red-300">
                        <strong className="font-bold uppercase">WARNING:</strong> Common mistakes and traps. Read these carefully!
                      </div>
                      <div className="border-l-4 border-amber-500 bg-amber-950/20 p-2.5 rounded-r-lg text-amber-300">
                        <strong className="font-bold uppercase">REMEMBER:</strong> Key points to revise before exams and viva voce.
                      </div>
                      <div className="border-l-4 border-purple-500 bg-purple-950/20 p-2.5 rounded-r-lg text-purple-300">
                        <strong className="font-bold uppercase">INTERVIEW / EXAM:</strong> Questions that are often asked in viva and technical rounds.
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">5-Level Progression:</p>
                      <div className="grid grid-cols-5 gap-1.5 text-center text-[10px] font-mono">
                        <div className="bg-blue-950/60 p-1.5 rounded border border-blue-800 text-blue-200">L1: Basics</div>
                        <div className="bg-indigo-950/60 p-1.5 rounded border border-indigo-800 text-indigo-200">L2: Logic</div>
                        <div className="bg-purple-950/60 p-1.5 rounded border border-purple-800 text-purple-200">L3: Functions</div>
                        <div className="bg-amber-950/60 p-1.5 rounded border border-amber-800 text-amber-200">L4: OOP</div>
                        <div className="bg-emerald-950/60 p-1.5 rounded border border-emerald-800 text-emerald-200">L5: Projects</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Pages 3-5: Table of Contents */}
                {(currentPage === 3 || currentPage === 4 || currentPage === 5) && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <h4 className="text-lg font-bold text-white">Table of Contents</h4>
                      <span className="text-xs font-mono text-cyan-400">
                        {currentPage === 3 ? 'Part 1: Ch 1-6' : currentPage === 4 ? 'Part 2: Ch 7-12' : 'Part 3: Ch 13-17'}
                      </span>
                    </div>

                    {currentPage === 3 && (
                      <div className="space-y-2 text-xs">
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 1: Welcome to Python</span>
                          <span className="font-mono text-slate-400">Page 9</span>
                        </div>
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 2: Variables &amp; Data Types</span>
                          <span className="font-mono text-slate-400">Page 14</span>
                        </div>
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 3: Operators &amp; Expressions</span>
                          <span className="font-mono text-slate-400">Page 19</span>
                        </div>
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 4: Input, Output &amp; Formatting</span>
                          <span className="font-mono text-slate-400">Page 25</span>
                        </div>
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 5: Strings &amp; Slicing</span>
                          <span className="font-mono text-slate-400">Page 31</span>
                        </div>
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 6: Conditional Statements</span>
                          <span className="font-mono text-slate-400">Page 37</span>
                        </div>
                      </div>
                    )}

                    {currentPage === 4 && (
                      <div className="space-y-2 text-xs">
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 7: Loops (for, while, nested)</span>
                          <span className="font-mono text-slate-400">Page 43</span>
                        </div>
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 8: Lists &amp; Tuples (2D matrices)</span>
                          <span className="font-mono text-slate-400">Page 50</span>
                        </div>
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 9: Dictionaries &amp; Sets</span>
                          <span className="font-mono text-slate-400">Page 56</span>
                        </div>
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 10: Functions (*args &amp; **kwargs)</span>
                          <span className="font-mono text-slate-400">Page 62</span>
                        </div>
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 11: Comprehensions &amp; Lambda</span>
                          <span className="font-mono text-slate-400">Page 68</span>
                        </div>
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 12: File Handling (CSV, JSON)</span>
                          <span className="font-mono text-slate-400">Page 74</span>
                        </div>
                      </div>
                    )}

                    {currentPage === 5 && (
                      <div className="space-y-2 text-xs">
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 13: Error &amp; Exception Handling</span>
                          <span className="font-mono text-slate-400">Page 79</span>
                        </div>
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 14: Object-Oriented Programming (OOP)</span>
                          <span className="font-mono text-slate-400">Page 85</span>
                        </div>
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                          <span className="font-bold text-white">Chapter 15: Modules, Libraries &amp; pip</span>
                          <span className="font-mono text-slate-400">Page 93</span>
                        </div>
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between text-emerald-400">
                          <span className="font-bold">Chapter 16: Six Complete Mini Projects</span>
                          <span className="font-mono">Page 99</span>
                        </div>
                        <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between text-pink-400">
                          <span className="font-bold">Chapter 17: Viva Prep, Cheat Sheet &amp; 30-Day Plan</span>
                          <span className="font-mono">Page 107</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Page 6: Chapter 1 */}
                {currentPage === 6 && (
                  <div className="space-y-3 text-xs">
                    <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold">CHAPTER 01</span>
                    <h4 className="text-xl font-bold text-white">Welcome to Python</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Python is a high-level, general-purpose programming language created by Guido van Rossum in 1991. 
                      Its clean, English-like syntax makes it the favorite programming language for beginners.
                    </p>

                    <div className="border border-slate-800 rounded-lg overflow-hidden">
                      <table className="w-full text-left">
                        <thead className="bg-slate-950 text-indigo-300 font-bold border-b border-slate-800">
                          <tr><th className="p-2">Feature</th><th className="p-2">Meaning for You</th></tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-slate-300">
                          <tr><td className="p-2 font-mono text-cyan-300">Easy to read</td><td className="p-2">Reads like simple English; learn 3x faster.</td></tr>
                          <tr><td className="p-2 font-mono text-cyan-300">Interpreted</td><td className="p-2">Runs line by line; no tedious compile steps.</td></tr>
                          <tr><td className="p-2 font-mono text-cyan-300">Huge libraries</td><td className="p-2">Ready-made tools for AI, web, and automation.</td></tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="border-l-4 border-emerald-500 bg-emerald-950/30 p-2.5 rounded-r-lg text-emerald-300">
                      <strong>PRO TIP FOR BCA:</strong> Python is utilized in almost every college semester: practicals, DBMS, data structures, and final-year capstone projects.
                    </div>
                  </div>
                )}

                {/* Page 7: Installation & First Program */}
                {currentPage === 7 && (
                  <div className="space-y-3 text-xs">
                    <h4 className="text-xl font-bold text-white">Your First Program</h4>
                    <p className="text-slate-300">
                      In Python, printing your first message to the screen requires only one single line:
                    </p>

                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden font-mono">
                      <div className="px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-slate-400 flex justify-between">
                        <span>hello.py</span>
                        <span className="text-indigo-400">Python 3</span>
                      </div>
                      <pre className="p-3 text-emerald-300">print("Hello, World!")</pre>
                      <div className="p-2 bg-slate-900/60 border-t border-slate-800 text-slate-300">
                        <span className="text-cyan-400 font-bold">OUTPUT: </span>Hello, World!
                      </div>
                    </div>

                    <div className="border-l-4 border-red-500 bg-red-950/30 p-2.5 rounded-r-lg text-red-300">
                      <strong>WARNING:</strong> On Windows, always check the checkbox "Add python.exe to PATH" during installation, otherwise the command line will throw 'python not recognized'.
                    </div>
                  </div>
                )}

                {/* Page 8: Practice Zone */}
                {currentPage === 8 && (
                  <div className="space-y-3 text-xs">
                    <div className="border-l-4 border-indigo-500 bg-indigo-950/40 p-4 rounded-r-xl space-y-2">
                      <h4 className="text-base font-bold text-indigo-300">PRACTICE ZONE: Chapter 1</h4>
                      <ol className="list-decimal list-inside space-y-1.5 text-slate-200">
                        <li>Print your name, your city, and your college on three separate lines.</li>
                        <li>Print a box shape made of asterisk (*) characters using print statements.</li>
                        <li>Add a descriptive comment above each line of code explaining its intent.</li>
                        <li>Deliberately omit a quotation mark and inspect Python's syntax error message.</li>
                        <li>Verify your installed Python version in terminal using python --version.</li>
                      </ol>
                    </div>
                    <p className="text-slate-400 italic">
                      All detailed step-by-step solutions are included in Chapter 17 of the complete book.
                    </p>
                  </div>
                )}

                {/* Page 9: Operators */}
                {currentPage === 9 && (
                  <div className="space-y-3 text-xs">
                    <h4 className="text-xl font-bold text-white">Chapter 3: Operators</h4>
                    <p className="text-slate-300">
                      Special operators perform computations on operands. Python offers clean floor division (//) and exponentiation (**):
                    </p>

                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden font-mono">
                      <pre className="p-3 text-cyan-300 leading-relaxed">
{`a, b = 17, 5
print("Sum:", a + b)       # 22
print("Floor Div:", a // b) # 3
print("Remainder:", a % b)  # 2
print("Power:", a ** 2)     # 289`}
                      </pre>
                    </div>
                  </div>
                )}

                {/* Page 10: Projects */}
                {currentPage === 10 && (
                  <div className="space-y-3 text-xs">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">CHAPTER 16 PREVIEW</span>
                    <h4 className="text-xl font-bold text-white">Project 1: Smart Calculator</h4>
                    <p className="text-slate-300">
                      Concepts used: functions, dictionary dispatch, while loop, exception handling, f-strings.
                    </p>
                    
                    <div className="grid grid-cols-5 gap-1 text-center font-mono text-[9px]">
                      <div className="bg-slate-950 p-1.5 rounded border border-slate-800">1. Show Menu</div>
                      <div className="bg-slate-950 p-1.5 rounded border border-slate-800">2. Input 2 Nos</div>
                      <div className="bg-slate-950 p-1.5 rounded border border-slate-800">3. Dispatch</div>
                      <div className="bg-slate-950 p-1.5 rounded border border-slate-800">4. Handle Zero</div>
                      <div className="bg-slate-950 p-1.5 rounded border border-slate-800">5. Loop/Quit</div>
                    </div>

                    <div className="p-2.5 bg-slate-950 rounded border border-slate-800 font-mono text-slate-300">
                      <span className="text-pink-400">operations = {"{'+': add, '-': sub, '*': mul, '/': div}"}</span>
                    </div>
                  </div>
                )}

                {/* Page 11: 30-Day Plan */}
                {currentPage === 11 && (
                  <div className="space-y-3 text-xs">
                    <h4 className="text-xl font-bold text-white">Your 30-Day Practice Plan</h4>
                    <div className="border border-slate-800 rounded-lg overflow-hidden text-[11px]">
                      <table className="w-full text-left">
                        <thead className="bg-slate-950 text-indigo-300 font-bold border-b border-slate-800">
                          <tr><th className="p-1.5">Days</th><th className="p-1.5">Focus</th><th className="p-1.5">Daily Goal</th></tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-slate-300">
                          <tr><td className="p-1.5 font-bold text-amber-300">1-5</td><td className="p-1.5">Basics &amp; Operators</td><td className="p-1.5">Solve all exercises</td></tr>
                          <tr><td className="p-1.5 font-bold text-amber-300">6-10</td><td className="p-1.5">Strings &amp; Loops</td><td className="p-1.5">Pattern programs</td></tr>
                          <tr><td className="p-1.5 font-bold text-amber-300">11-15</td><td className="p-1.5">Lists, Tuples, Dicts</td><td className="p-1.5">Data structures</td></tr>
                          <tr><td className="p-1.5 font-bold text-amber-300">16-25</td><td className="p-1.5">Functions, OOP, Files</td><td className="p-1.5">Modular code</td></tr>
                          <tr><td className="p-1.5 font-bold text-amber-300">26-30</td><td className="p-1.5">6 Projects &amp; Viva</td><td className="p-1.5">Upload to GitHub</td></tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-3 bg-emerald-950/30 border border-emerald-500/40 rounded-xl text-emerald-200">
                      "Consistency beats intensity. One hour of coding every day is far better than ten hours once a week. Happy coding! — Abhishek Prajapati"
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Thumbnail dots selector */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-center gap-1.5">
              {PAGES_INFO.map((p) => (
                <button
                  key={p.pageNum}
                  onClick={() => setCurrentPage(p.pageNum)}
                  className={`text-xs font-mono px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    currentPage === p.pageNum
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30 scale-105'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  title={`Go to page ${p.pageNum}: ${p.title}`}
                >
                  {p.pageNum}
                </button>
              ))}
            </div>

          </div>
        ) : (
          /* Native Embedded Frame with fallback notice */
          <div className="bg-slate-950 rounded-2xl border border-indigo-500/30 overflow-hidden p-2 shadow-2xl">
            <div className="p-3 bg-slate-900 text-xs text-slate-300 flex items-center justify-between border-b border-slate-800 mb-2">
              <span>Embedded Document: <strong>sample-preview.pdf</strong></span>
              <button
                onClick={openSamplePdfInNewTab}
                className="text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Click here if document fails to render in browser</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="w-full h-[650px] rounded-xl overflow-hidden bg-slate-900">
              <iframe
                src={`${SAMPLE_PDF_URL}#toolbar=1&navpanes=0`}
                title="Python Mastery Sample Preview PDF"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        )}

        {/* Upgrade Callout */}
        <div className="mt-8 p-5 bg-gradient-to-r from-indigo-950/80 via-purple-950/60 to-slate-950 rounded-2xl border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Ready to get the complete 115+ page guide?</span>
            </h4>
            <p className="text-xs text-slate-300">
              Includes all 17 chapters, 100+ tested Python codes, and 6 complete mini projects.
            </p>
          </div>

          <a
            href={BOOK_DETAILS.paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-black text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-xl shadow-purple-900/40 text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap active:scale-95 transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Buy Full eBook for ₹{BOOK_DETAILS.offerPrice}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
