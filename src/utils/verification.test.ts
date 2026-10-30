import test from 'node:test';
import assert from 'node:assert/strict';
import { verifyRazorpayPayment, parsePaymentUrlParams } from './verification';

test('verifyRazorpayPayment validates valid Razorpay payment ID', () => {
  const result = verifyRazorpayPayment('pay_O7dK8J1qZ4vW9p');
  assert.equal(result.isValid, true);
  assert.ok(result.receipt);
  assert.equal(result.receipt.amount, 149);
  assert.equal(result.receipt.paymentId, 'pay_O7dK8J1qZ4vW9p');
  assert.match(result.receipt.licenseKey, /^NX-PYM-[A-Z0-9]{4}-[A-Z0-9]{4}$/);
});

test('verifyRazorpayPayment accepts demo passcodes', () => {
  const result = verifyRazorpayPayment('DEMO-PASS');
  assert.equal(result.isValid, true);
  assert.ok(result.receipt);
  assert.equal(result.receipt.amount, 149);
});

test('verifyRazorpayPayment accepts registered email', () => {
  const result = verifyRazorpayPayment('', 'student@bca.edu.in');
  assert.equal(result.isValid, true);
  assert.ok(result.receipt);
  assert.equal(result.receipt.customerEmail, 'student@bca.edu.in');
});

test('verifyRazorpayPayment rejects empty or invalid string', () => {
  const resultEmpty = verifyRazorpayPayment('');
  assert.equal(resultEmpty.isValid, false);

  const resultInvalid = verifyRazorpayPayment('abc');
  assert.equal(resultInvalid.isValid, false);
});

test('parsePaymentUrlParams extracts payment_id and success status', () => {
  const query = '?razorpay_payment_id=pay_Abc123456789&status=success';
  const parsed = parsePaymentUrlParams(query);
  assert.equal(parsed.hasParams, true);
  assert.equal(parsed.isSuccess, true);
  assert.equal(parsed.paymentId, 'pay_Abc123456789');
});

test('parsePaymentUrlParams handles empty query', () => {
  const parsed = parsePaymentUrlParams('');
  assert.equal(parsed.hasParams, false);
  assert.equal(parsed.isSuccess, false);
});
