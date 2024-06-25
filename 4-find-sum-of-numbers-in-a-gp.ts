/* Solution is is dependent on (Gauss Summation for GP) */

export const findSumOfNumbersInAGP = (
  startingNumber: number,
  ratio: number,
  length: number
): number => {
  return (startingNumber * (Math.pow(ratio, length) - 1)) / (ratio - 1);
};

/* Example here is: 5, 10, 20, 40, 80, 160 */
const startingNumber = 5;
const ratio = 2;
const length = 6;

console.log(findSumOfNumbersInAGP(startingNumber, ratio, length));
