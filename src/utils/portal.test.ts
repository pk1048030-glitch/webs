import test from 'node:test';
import assert from 'node:assert/strict';

// 1. Password verification for Bonafide Certificate
function verifyBonafidePassword(input: string): boolean {
  return input.trim() === 'Pankaj@2026';
}

// 2. Secret Vault Decode for allphoto.html
function decodeVaultPassword(encoded: string): string {
  return Buffer.from(encoded, 'base64').toString('utf-8');
}

// 3. Puzzle answer check for allphoto.html
function verifyPuzzleAnswer(input: string): boolean {
  return input.trim().toUpperCase() === 'AKASH';
}

// 4. Calculator safe evaluate logic
function safeCalculate(expr: string): string {
  const sanitized = expr.replace(/[^0-9+\-*/.]/g, '');
  if (!sanitized) return '0';
  try {
    // eslint-disable-next-line no-new-func
    const result = Function(`'use strict'; return (${sanitized})`)();
    return String(result);
  } catch {
    return 'Error';
  }
}

// 5. Search filtering logic
function filterMenuItems(items: string[], query: string): string[] {
  const q = query.toLowerCase().trim();
  if (!q) return items;
  return items.filter(item => item.toLowerCase().includes(q));
}

test('Bonafide certificate password accepts Pankaj@2026', () => {
  assert.equal(verifyBonafidePassword('Pankaj@2026'), true);
  assert.equal(verifyBonafidePassword(' Pankaj@2026 '), true);
  assert.equal(verifyBonafidePassword('wrong123'), false);
});

test('Vault password decodes correctly from Base64', () => {
  const realEncoded = 'SGVsbG8gUGFua2FqIGppaQ==';
  assert.equal(decodeVaultPassword(realEncoded), 'Hello Pankaj jii');
});

test('Security puzzle answers for allphoto vault', () => {
  assert.equal(verifyPuzzleAnswer('akash'), true);
  assert.equal(verifyPuzzleAnswer('AKASH'), true);
  assert.equal(verifyPuzzleAnswer('Akash'), true);
  assert.equal(verifyPuzzleAnswer('Rahul'), false);
});

test('Calculator evaluator computes arithmetic correctly', () => {
  assert.equal(safeCalculate('12+8'), '20');
  assert.equal(safeCalculate('5*6-4'), '26');
  assert.equal(safeCalculate('100/4'), '25');
  assert.equal(safeCalculate(''), '0');
});

test('Search filter properly filters nav menu items', () => {
  const navItems = ['Home', 'Mere Baare Mein', '12th Books', 'Science HuB 🧪', 'Movies 🍿'];
  assert.deepEqual(filterMenuItems(navItems, 'books'), ['12th Books']);
  assert.deepEqual(filterMenuItems(navItems, 'science'), ['Science HuB 🧪']);
  assert.deepEqual(filterMenuItems(navItems, 'xyz'), []);
});
