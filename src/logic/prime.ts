/**
 * Generates and logs the first `n` prime numbers.
 */
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

export const PRIMES = getPrimeNumbers(100);

export function calculateGödelNumber(gödelNumbers: number[]) {
  const values = gödelNumbers.map((v, i) => PRIMES[i] ** v);
  console.log(gödelNumbers);
  console.log(values);
  return values.reduce((a, b) => a * b, 1);
}

function getPrimeFactors(n: number) {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  console.log("factors", factors)
  return factors;
}

/** Retrieve the original Gödel numbers by prime factorization */
export function getGödelNumbers(gödelNumber: number): number[] {
  console.log('--- gödel number:', gödelNumber);
  const primeFactors = getPrimeFactors(gödelNumber);
  console.log("factors", primeFactors)
  const occ = getOccurrences(primeFactors);
  console.log("getOccurrences", occ);
  return occ;
}

// [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5]
function getOccurrences(numberList: number[]): number[] {
  const freq = numberList.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {} as Record<number, number>);
  
  return Object.values(freq);  
}