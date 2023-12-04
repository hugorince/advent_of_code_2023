const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

export const turnIntoArray = (input: string) => {
  return input.split("\n");
};

export const splitAtDots = (string: string) => {
  return string.split(".");
};

export const returnLineSumPossible = (string: string) => {
  const arr = splitAtDots(string);
  let result = 0;
  const regex: RegExp = /[^a-zA-Z\d\s:]/g;
  arr.map((line: string) => {
    if (line.match(regex)) {
      line.split(regex).map((str) => {
        if (!str.match(regex) && str !== "") {
          console.log(str);
          result += parseInt(str);
        }
      });
    }
  });
  return result;
};
