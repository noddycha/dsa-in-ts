/* Solution is is dependent on (Gauss Summation for AP) */

export const findSumOfFirstNNaturalNumbers = (number: number): number => {
  return (number * (number + 1)) / 2;
};

const number = 100;
console.log(findSumOfFirstNNaturalNumbers(number));
