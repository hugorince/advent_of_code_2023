const fs = require("fs");
const path = require("path");
export const input_test = fs.readFileSync(
  path.join(__dirname, "input_test.txt"),
  "utf8"
);

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

type Hand = {
  hand: string;
  bid: number;
  kind: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  rank: number;
};

export const lineToObj = (str: string): Hand => {
  const arr = str.split(" ");
  return {
    hand: arr[0],
    bid: parseInt(arr[1]),
    kind: 1,
    rank: 0,
  };
};

export const objsToArr = (input: string): Hand[] => {
  const lines: string[] = input.trim().split("\n");
  const result: Hand[] = [];
  lines.map((line) => result.push(lineToObj(line)));
  return result;
};

export const countsOfSeries = (str: string) => {
  const arr = str.split("");
  const counts: any = {};
  arr.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  return counts;
};

export const returnTypeOfHand = (str: string): Hand["kind"] => {
  const counts = countsOfSeries(str);
  const max = Object.keys(counts).reduce(
    (a, v) => Math.max(a, counts[v]),
    -Infinity
  );
  const severalSeries = Object.values(counts).filter(
    (card: any) => card > 1
  ).length;

  if (max === 5) return 7;
  else if (max === 4) return 6;
  else if (max === 3 && severalSeries === 2) return 5;
  else if (max === 3 && severalSeries === 1) return 4;
  else if (max === 2 && severalSeries === 2) return 3;
  else if (max === 2 && severalSeries === 1) return 2;
  return 1;
};

export const populateType = (obj: Hand): Hand => {
  obj.kind = returnTypeOfHand(obj.hand);
  return obj;
};

export const calculateArrayOfHands = (input: string): Hand[] => {
  const arr = objsToArr(input);
  arr.map((hand) => {
    hand = populateType(hand);
  });
  return arr;
};

export const sortByKind = (arr: Hand[]) => {
  arr.sort((a, b) => a.kind - b.kind);
  return arr;
};

export const transformCardIntoNumValue = (card: string) => {
  if (card === "T") return 10;
  else if (card === "J") return 11;
  else if (card === "Q") return 12;
  else if (card === "K") return 13;
  else if (card === "A") return 14;
  return parseInt(card);
};

export const compareTwoHands = (
  string1: Hand["hand"],
  string2: Hand["hand"]
) => {
  const arr1: number[] = [];
  string1.split("").map((card) => arr1.push(transformCardIntoNumValue(card)));
  const arr2: number[] = [];
  string2.split("").map((card) => arr2.push(transformCardIntoNumValue(card)));

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      return string1;
    } else if (arr2[i] > arr1[i]) {
      return string2;
    }
  }
};
export const permuteIfSameKind = (arr: Hand[]) => {
  let permuted = false;
  let n = arr.length;

  do {
    permuted = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i].kind === arr[i + 1].kind) {
        const strongest = compareTwoHands(arr[i].hand, arr[i + 1].hand);
        if (strongest === arr[i].hand) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          permuted = true;
        }
      }
    }
    n--;
  } while (permuted);

  return arr;
};

export const rankedArray = (arr: Hand[]) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].rank = i + 1;
  }
  return arr;
};

export const calculateResult = (input: string) => {
  const array = calculateArrayOfHands(input);
  const arraySorted = sortByKind(array);
  const arraySortedWithSimilarHands = permuteIfSameKind(arraySorted);
  const finalArray = rankedArray(arraySortedWithSimilarHands);
  let result = 0;
  finalArray.map((hand) => (result += hand.rank * hand.bid));
  return result;
};
