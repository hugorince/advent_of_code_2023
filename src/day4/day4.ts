const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

export const cleanData = (input: string) => {
  const lines: string[] = input.trim().split("\n");
  const resultArray: { [key: string]: number[][] }[] = [];

  lines.forEach((line) => {
    const [, cardNumber, values] =
      line.match(/Card (\d+): (.+)/) || line.match(/(\d+): (.+)/) || [];

    if (cardNumber && values) {
      const [group1, group2] = values.split(" | ");
      const array1: number[] = group1
        .split(" ")
        .map((num) => parseInt(num))
        .filter(Number.isInteger);
      const array2: number[] = group2
        .split(" ")
        .map((num) => parseInt(num))
        .filter(Number.isInteger);
      const cardObject = {
        ["Card"]: [array1, array2],
      };

      resultArray.push(cardObject);
    }
  });

  return resultArray;
};

export const findWinnerNumber = (array1: number[], array2: number[]) => {
  let points = 0;
  array2.map((num) => {
    if (array1.includes(num)) {
      if (points === 0) {
        points = 1;
      } else {
        points = points * 2;
      }
    }
  });
  return points;
};

export const sumOfAllWinners = (input: any) => {
  const inputObj = cleanData(input);
  let result = 0;
  inputObj.map((card) => {
    result = result + findWinnerNumber(card.Card[0], card.Card[1]);
  });
  return result;
};

console.log(sumOfAllWinners(input));
