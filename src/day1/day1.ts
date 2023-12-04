const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

export const turnIntoArray = (input: string) => {
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

export const checkIfDigitsInLetters = (string: string) => {
  let result = false;
  const digits = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  digits.map((digit) => {
    if (string.toLocaleLowerCase().includes(digit)) result = true;
  });
  return result;
};

export const replaceDigitsInLetters = (string: string): string => {
  const digits = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    nineight: "98",
    fiveight: "58",
    eightwo: "82",
    eighthree: "83",
    oneight: "18",
    twone: "21",
    sevenine: "79",
    threeight: "38",
  };

  Object.keys(digits)
    .sort((a, b) => b.length - a.length)
    .forEach((digit) => {
      string = string.split(digit).join(digits[digit as keyof typeof digits]);
    });

  return string;
};

export const turnArrayIntoDigitsWithoutLetters = (array: string[]) => {
  return array.map((string) => {
    if (checkIfDigitsInLetters(string)) {
      return replaceDigitsInLetters(string);
    }
    return string;
  });
};

export const calculateSum = (array: string[]) => {
  let total = 0;
  array.forEach((string) => {
    total += parseInt(string);
  });
  return total;
};

const array = turnIntoArray(input);
const arrayWithoutDigitsInLetters = turnArrayIntoDigitsWithoutLetters(array);
const finalArray = arrayOfDoubleDigits(arrayWithoutDigitsInLetters);
const result = calculateSum(finalArray);
