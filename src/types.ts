export interface Chapter {
  id: number;
  number: number;
  title: string;
  startPage: number;
  level: 1 | 2 | 3 | 4 | 5;
  levelName: string;
  description: string;
  topics: string[];
  codeSample: {
    filename: string;
    code: string;
    output: string;
  };
}

export interface MiniProject {
  id: number;
  number: string;
  title: string;
  concepts: string[];
  description: string;
  starterCode: string;
  expectedOutput: string;
  pageNumber: number;
}

export interface VerificationResult {
  isValid: boolean;
  message: string;
  receipt?: {
    paymentId: string;
    amount: number;
    currency: string;
    customerEmail?: string;
    timestamp: string;
    licenseKey: string;
    bookTitle: string;
    edition: string;
  };
}

export interface Review {
  id: number;
  name: string;
  role: string;
  college: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'payment' | 'content' | 'download' | 'author';
}
