import { Review, FaqItem } from '../types';

export const BOOK_DETAILS = {
  title: 'Python Mastery',
  tagline: 'From Zero to Pro',
  subtitle: 'The Complete Hands-On Guide',
  author: 'Abhishek Prajapati',
  authorRole: 'BCA Student • Entrepreneur • Content Creator',
  authorImage: '/author.jpg',
  authorImageBackup: '/assets/aistudio/WhatsApp_Image_2026-09-06_at_5.34.26_PM_9fbabfc7.jpeg',
  publisher: 'NexCart Publications',
  edition: 'First Edition 2026',
  pagesCount: 115,
  chaptersCount: 17,
  codesCount: '100+',
  projectsCount: 6,
  regularPrice: 999,
  offerPrice: 149,
  discountPercent: 85,
  paymentUrl: 'https://rzp.io/rzp/pythonmastery149',
  samplePdfUrl: '/sample-preview.pdf'
};

export const WHAT_YOU_GET = [
  {
    title: 'Complete 115+ Page Guide',
    desc: 'All 17 chapters from zero basics to advanced OOP with clear diagrams.',
    badge: '17 Chapters'
  },
  {
    title: '100+ Tested Python Codes',
    desc: 'Ready-to-run code snippets tested on Python 3.12+ for every concept.',
    badge: '100+ Codes'
  },
  {
    title: '6 Real-World Mini Projects',
    desc: 'Smart Calculator, ATM System OOP, To-Do List, Quiz App, Password Gen.',
    badge: '6 Projects'
  },
  {
    title: '30-Day Action Blueprint',
    desc: 'Step-by-step day-wise study schedule for college practicals and exams.',
    badge: '30-Day Plan'
  },
  {
    title: 'Viva & Interview Q&A Bank',
    desc: 'Top questions university examiners ask in lab exams with answers.',
    badge: 'Viva Prep'
  },
  {
    title: 'Universal PDF & Free Updates',
    desc: 'Read smoothly on any Phone, Tablet, Laptop, or PC with lifetime updates.',
    badge: 'Lifetime Access'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'payment',
    question: 'How do I receive the complete eBook after payment?',
    answer: 'Immediately upon completing your payment of Rs. 149 on Razorpay, you will receive instant access to download the full 115+ page PDF along with the complete source code pack.'
  },
  {
    category: 'payment',
    question: 'Is Rs. 149 a one-time payment?',
    answer: 'Yes, absolutely! It is a 100% one-time payment. No monthly fees, no hidden charges.'
  },
  {
    category: 'content',
    question: 'Is this book suitable for absolute beginners and BCA students?',
    answer: 'Yes! The book is written specifically for college students and beginners with zero prior coding experience, progressing step-by-step from variables to real projects.'
  },
  {
    category: 'download',
    question: 'Can I read the book on my mobile phone and laptop?',
    answer: 'Yes! The eBook is formatted as a crisp, high-resolution PDF that opens seamlessly on any Android, iPhone, iPad, Windows, or Mac device.'
  }
];
