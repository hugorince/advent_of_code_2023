const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

export const turnIntoArray = (input: any) => {
  return input.split("\n");
};

export const turnStringIntoArray = (input: string) => {
  return input.split("");
};

export const removeNonNumbersOfArray = (array: string[]) => {
  const pattern = /\d/;
  return array.filter((string) => {
    return string.match(pattern);
  });
};

export const joinFirstAndLastDigitOfArray = (array: string[]) => {
  if (array.length === 1) return array[0] + array[0];
  return array[0] + array[array.length - 1];
};

export const arrayOfDoubleDigits = (array: string[]) => {
  return array.map((string: string) => {
    const array = turnStringIntoArray(string);
    const arrayWithoutNonNumbers = removeNonNumbersOfArray(array);
    return joinFirstAndLastDigitOfArray(arrayWithoutNonNumbers);
  });
};

export const calculateSum = (array: string[]) => {
  let total = 0;
  array.map((string) => {
    total += parseInt(string);
  });
  return total;
};

const array = turnIntoArray(input);
const finalArray = arrayOfDoubleDigits(array);
const result = calculateSum(finalArray);
console.log(result);
