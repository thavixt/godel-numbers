import { expect, test } from 'vitest'
import { primeFactorsOf } from './prime';
import { getPrimeExponents } from './prime';
import { getGödelSymbols } from './prime';

// primeFactorsOf
test('should return an empty array for 1', () => {
  const result = primeFactorsOf(1);
  expect(result).to.deep.equal([]);
});

test('should return correct prime factors for a prime number', () => {
  const result = primeFactorsOf(2);
  expect(result).to.deep.equal([2]);
});

test('should return correct prime factors for a composite number', () => {
  const result = primeFactorsOf(4);
  expect(result).to.deep.equal([2, 2]);
});

test('should return correct prime factors for a large number', () => {
  const result = primeFactorsOf(128);
  expect(result).to.deep.equal([2, 2, 2, 2, 2, 2, 2]);
});

test('should return correct prime factors for a number with multiple prime factors', () => {
  const result = primeFactorsOf(243_000_000);
  expect(result).to.deep.equal([2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5]);
});

// getPrimeExponents
test('should return an empty object for an empty array', () => {
  const result = getPrimeExponents([]);
  expect(result).to.deep.equal({});
});

test('should return correct exponents for a single prime factor', () => {
  const result = getPrimeExponents([2]);
  expect(result).to.deep.equal({ 2: 1 });
});

test('should return correct exponents for multiple same prime factors', () => {
  const result = getPrimeExponents([2, 2, 2]);
  expect(result).to.deep.equal({ 2: 3 });
});

test('should return correct exponents for multiple different prime factors', () => {
  const result = getPrimeExponents([2, 3, 5]);
  expect(result).to.deep.equal({ 2: 1, 3: 1, 5: 1 });
});

test('should return correct exponents for a mix of prime factors', () => {
  const result = getPrimeExponents([2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5]);
  expect(result).to.deep.equal({ 2: 6, 3: 5, 5: 6 });
});

// getGödelSymbols
test('should return an empty array for an empty input array', () => {
  const result = getGödelSymbols([]);
  expect(result).to.deep.equal([]);
});

test('should return correct symbols for a single Gödel number', () => {
  const result = getGödelSymbols([1]);
  expect(result).to.deep.equal(['~']);
});

test('should return correct symbols for multiple Gödel numbers', () => {
  const result = getGödelSymbols([1, 2, 3]);
  expect(result).to.deep.equal(['~', '∨', '⊃']);
});

test('should return correct symbols for a mix of Gödel numbers', () => {
  const result = getGödelSymbols([6, 5, 6]);
  expect(result).to.deep.equal(['0', '=', '0']);
});

