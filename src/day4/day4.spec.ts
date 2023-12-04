import { cleanData, findWinnerNumber, sumOfAllWinners } from "./day4";

const fs = require("fs");
const path = require("path");
const inputTest = fs.readFileSync(
  path.join(__dirname, "input_test.txt"),
  "utf8"
);

describe("day 4", () => {
  it("should count the winner numbers", () => {
    expect(findWinnerNumber([1, 2, 3], [1, 7, 3])).toEqual(2);
  });
  it("should double the points each winner after the first", () => {
    expect(
      findWinnerNumber([1, 21, 53, 59, 44], [69, 82, 63, 72, 16, 21, 14, 1])
    ).toEqual(2);
  });
  it("should do this operation for every game and return the sum", () => {
    expect(sumOfAllWinners(inputTest)).toEqual(13);
  });
});
