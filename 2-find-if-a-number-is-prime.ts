import { findFactorsOfANumber } from "./1-find-factors-of-a-number";

/* Use the existing logic to find factors of a number */

export const findIfANumberIsPrime = (number: number): boolean => {
  return findFactorsOfANumber(number).length === 2;
};

const number = 121;
console.log(findIfANumberIsPrime(number));
