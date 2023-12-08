const fs = require("fs");
const path = require("path");

export const input_test = fs.readFileSync(
  path.join(__dirname, "input_test.txt"),
  "utf8"
);
export const input_test2 = fs.readFileSync(
  path.join(__dirname, "input_test_2.txt"),
  "utf8"
);

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

export const splitToLines = (input: string): string[] => {
  const lines: string[] = input
    .trim()
    .split("\n")
    .filter((str) => str !== "");
  return lines;
};

export const directions = (input: string): string[] => {
  const arr = splitToLines(input);
  return arr[0].split("");
};

type Coordonates = { key: string; directions: string[] };

export const coordonates = (input: string) => {
  const arr = splitToLines(input);
  const result: Coordonates[] = [];
  arr.shift();
  arr.map((line) => {
    const arrTemp = line.split(" ");
    const key = arrTemp[0];
    const directions = [
      arrTemp[2].replace(/[^a-z0-9]/gi, ""),
      arrTemp[3].replace(/[^a-z0-9]/gi, ""),
    ];
    result.push({
      key: key,
      directions: directions,
    });
  });
  return result;
};

export const result = (input: string) => {
  let directionsConst: string[] = directions(input);
  const coordonatesConst: Coordonates[] = coordonates(input);
  let nextIndex: string = "";
  let turns = 0;
  let loopDuration = directionsConst.length;

  do {
    for (let i = 0; i < loopDuration; i++) {
      if (i === directionsConst.length - 1) {
        directionsConst = directionsConst.concat(directionsConst);
        loopDuration = directionsConst.length;
      }
      if (nextIndex === "ZZZ") {
        return turns;
      } else if (i === 0 && directionsConst[i] === "L") {
        const obj: any = coordonatesConst.find((elem) => elem.key === "AAA");
        nextIndex = obj.directions[0];
        turns++;
      } else if (i === 0 && directionsConst[i] === "R") {
        const obj: any = coordonatesConst.find((elem) => elem.key === "AAA");
        nextIndex = obj.directions[1];
        turns++;
      } else if (directionsConst[i] === "L") {
        const obj: any = coordonatesConst.find(
          (elem) => elem.key === nextIndex
        );
        nextIndex = obj.directions[0];
        turns++;
      } else if (directionsConst[i] === "R") {
        const obj: any = coordonatesConst.find(
          (elem) => elem.key === nextIndex
        );
        nextIndex = obj.directions[1];
        turns++;
      }
    }
  } while (nextIndex !== "ZZZ");

  return turns;
};
