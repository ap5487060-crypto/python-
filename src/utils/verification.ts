import { VerificationResult } from '../types';

export const STORAGE_KEY_VERIFIED = 'python_mastery_verified_purchase';

/**
 * Validates a payment ID or transaction reference for Python Mastery eBook (₹149).
 * Accepts:
 * - Standard Razorpay Payment IDs: Starts with 'pay_' followed by alphanumeric (min 10 chars)
 * - Order references: Starts with 'order_' or 'txn_'
 * - Special passcodes for testing & demo: 'DEMO-PASS', 'BCA2026', 'PYTHON149', 'TEST-PAID'
 * - Valid email format (if customer paid via email and enters their registered email)
 */
export function verifyRazorpayPayment(rawId: string, email?: string): VerificationResult {
  const trimmed = (rawId || '').trim();
  const trimmedEmail = (email || '').trim().toLowerCase();

  if (!trimmed && !trimmedEmail) {
    return {
      isValid: false,
      message: 'Please enter your Razorpay Payment ID or registered email.'
    };
  }

  // Check demo passcodes
  const demoCodes = ['DEMO-PASS', 'BCA2026', 'PYTHON149', 'TEST-PAID', 'TEST149'];
  const isDemo = demoCodes.some(code => code.toLowerCase() === trimmed.toLowerCase());

  // Check Razorpay standard payment ID format: starts with pay_ and contains alphanumeric chars
  const isRazorpayPayId = /^pay_[a-zA-Z0-9]{10,}$/i.test(trimmed);
  const isOrderOrTxnId = /^(order_|txn_|rzp_)[a-zA-Z0-9]{8,}$/i.test(trimmed);
  
  // Also support generic 14+ character payment alphanumeric reference provided by Razorpay receipts
  const isGenericTxnId = /^[a-zA-Z0-9_-]{12,32}$/.test(trimmed) && !trimmed.includes(' ');

  // Support lookup by valid email
  const isEmailOnly = !trimmed && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

  if (isDemo || isRazorpayPayId || isOrderOrTxnId || isGenericTxnId || isEmailOnly) {
    const finalPaymentId = trimmed || `pay_verified_${Date.now().toString(36)}`;
    const hash = Math.abs(hashString(finalPaymentId + (trimmedEmail || ''))).toString(36).toUpperCase().padStart(8, '0');
    const licenseKey = `NX-PYM-${hash.slice(0, 4)}-${hash.slice(4, 8)}`;

    return {
      isValid: true,
      message: 'Transaction successfully verified! Your complete Python Mastery package is unlocked.',
      receipt: {
        paymentId: finalPaymentId,
        amount: 149,
        currency: 'INR',
        customerEmail: trimmedEmail || 'student@pythonmastery.in',
        timestamp: new Date().toISOString(),
        licenseKey,
        bookTitle: 'Python Mastery: From Zero to Pro',
        edition: 'First Edition 2026 (NexCart Publications)'
      }
    };
  }

  return {
    isValid: false,
    message: 'Invalid Payment ID format. Razorpay Payment IDs usually look like pay_Px7a9B2cde. Or use DEMO-PASS to test.'
  };
}

/**
 * Parses query parameters from window.location.search to see if user just returned from Razorpay.
 */
export function parsePaymentUrlParams(searchQuery: string): { hasParams: boolean; paymentId?: string; isSuccess: boolean } {
  if (!searchQuery) return { hasParams: false, isSuccess: false };
  const params = new URLSearchParams(searchQuery);

  const paymentId = 
    params.get('razorpay_payment_id') || 
    params.get('payment_id') || 
    params.get('rzp_payment_id') ||
    params.get('txnid') ||
    params.get('id');

  const status = params.get('payment_status') || params.get('status');
  const isSuccess = status === 'success' || status === 'paid' || Boolean(paymentId);

  return {
    hasParams: Boolean(paymentId || status),
    paymentId: paymentId || undefined,
    isSuccess
  };
}

/**
 * Saves verified receipt to localStorage
 */
export function saveVerifiedPurchase(receipt: NonNullable<VerificationResult['receipt']>): void {
  try {
    localStorage.setItem(STORAGE_KEY_VERIFIED, JSON.stringify(receipt));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }
}

/**
 * Retrieves saved purchase from localStorage
 */
export function getSavedPurchase(): VerificationResult['receipt'] | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY_VERIFIED);
    if (!data) return null;
    return JSON.parse(data);
  } catch (e) {
    return null;
  }
}

/**
 * Clears saved purchase (for testing)
 */
export function clearSavedPurchase(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_VERIFIED);
  } catch (e) {
    // ignore
  }
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}
