const fs = require("fs");
const path = require("path");

export const input_test = fs.readFileSync(
  path.join(__dirname, "input_test.txt"),
  "utf8"
);

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

export const splitIntoLines = (input: string): string[] => {
  const lines: string[] = input
    .trim()
    .split("\n")
    .filter((str) => str !== "");
  return lines;
};

type Line = {
  key: number;
  line: string[];
};

export const splitLinesIntoArrays = (arr: string[]) => {
  const result: Line[] = [];
  let key = arr.length;

  arr.map((line) => {
    result.push({
      key: key,
      line: line.split(""),
    });
    key--;
  });
  return result;
};

export const makeRocksFall = (input: string) => {
  const lines = splitIntoLines(input);
  const arr = splitLinesIntoArrays(lines);
  let permuted = false;
  do {
    permuted = false;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i]["line"].length; j++) {
        if (
          arr[i]["line"][j] === "O" &&
          i - 1 >= 0 &&
          arr[i - 1]["line"][j] === "."
        ) {
          arr[i - 1]["line"][j] = "O";
          arr[i]["line"][j] = ".";
          permuted = true;
        }
      }
    }
  } while (permuted);
  return arr;
};

export const sumCalc = (input: string) => {
  const arr = makeRocksFall(input);
  let result = 0;
  arr.map((line) =>
    line.line.map((item) => {
      if (item === "O") {
        result += line.key;
      }
    })
  );

  return result;
};
