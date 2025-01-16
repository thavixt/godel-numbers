import { getGödelSymbol } from "../components/Encoding";

export const PRIMES_100 = getPrimeNumbers(100);

export function calculateGödelNumber(gödelNumbers: number[]) {
  const values = gödelNumbers.map((v, i) => PRIMES_100[i] ** v);
  return values.reduce((a, b) => a * b, 1);
}

/** Retrieve the original Gödel numbers by prime factorization */
export function getGödelNumbers(gödelNumber: number): number[] {
  const primeFactors = primeFactorsOf(gödelNumber);
  const primeExponents = getPrimeExponents(primeFactors);
  console.info(gödelNumber, primeExponents);

  return Object.values(primeExponents).map(Number);
}

export function primeFactorsOf(num: number) {
  if (num > 10 ** 10) {
    console.error("Number too big", num);
    alert(`Number too big (${num})\nPlease try with a smaller Gödel number (> 10^10)`);
    return [];
  }
  let result: number[] = [];
  let primeIndex = 0;
  for (let i = 2; i <= num; i++) {
    let prime = PRIMES_100[primeIndex];
    while (num % prime === 0) {
      result.push(prime);
      num = num / prime;
    }
    primeIndex++;
  }
  return result;
}

export function getPrimeExponents(primes: number[]) {
  return primes.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), {} as Record<number, number>);
}

export function getGödelSymbols(gödelNumbers: number[]) {
  return gödelNumbers.map(getGödelSymbol);
}

function getPrimeNumbers(n: number) {
  let arr = [];
  let x = 2;
  while (arr.length < n) {
    let count = 0;
    for (let i = 1; i <= x; i++) {
      if (x % i === 0) {
        count++;
      }
    }
    if (count === 2) {
      arr.push(x);
    }
    x++;
  }
  return arr;
}