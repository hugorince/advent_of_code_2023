const fs = require("fs");
const path = require("path");

export const input_test = fs.readFileSync(
  path.join(__dirname, "input_test.txt"),
  "utf8"
);

export const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

export const splitIntoArr = (input: string) => {
  return input.split(",");
};

export const findASCII = (char: string) => {
  return char.charCodeAt(0);
};

export const operationHash = (num: number) => {
  num *= 17;
  return num % 256;
};

export const fullStringOperation = (str: string) => {
  let currentValue = 0;
  str.split("").map((char) => {
    currentValue += findASCII(char);
    currentValue = operationHash(currentValue);
  });
  return currentValue;
};

export const resultCalc = (input: string) => {
  const arr = splitIntoArr(input);
  let result = 0;
  arr.map((str) => {
    result += fullStringOperation(str);
  });
  return result;
};
