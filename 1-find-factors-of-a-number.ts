/* The optimization technique uses the observation that:
 * 1. "i" and "n/i" are both factors of "n"
 * 2. Condition to stop the loop is : "i" <= "n/i" (to make sure that we run the loop only √n times)
 */

export const findFactorsOfANumber = (number: number): Array<number> => {
  const factors: Array<number> = [];
  const startTime = new Date().getTime();

  for (let i = 0; i < number / i; i++) {
    if (number % i === 0 && !factors.includes(i)) {
      factors.push(i);
      factors.push(number / i);
    }
  }

  const endTime = new Date().getTime();

  console.log(
    `Time taken to find factors is: ${(endTime - startTime) / 1000} seconds`
  );
  // return factors.sort((a: number, b: number): number => {
  //   return a - b;
  // });
  return factors;
};

const number = 100000000;
// console.log(findFactorsOfANumber(number));
