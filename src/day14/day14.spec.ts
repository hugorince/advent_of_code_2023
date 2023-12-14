import {
  input_test,
  splitIntoLines,
  splitLinesIntoArrays,
  makeRocksFall,
  sumCalc,
} from "./day14";

describe("day 14", () => {
  it("should split the input into lines", () => {
    expect(splitIntoLines(input_test)[0]).toEqual("O....#....");
  });
  it("should split the input into object", () => {
    expect(splitLinesIntoArrays(splitIntoLines(input_test))[0]).toEqual({
      key: 10,
      line: ["O", ".", ".", ".", ".", "#", ".", ".", ".", "."],
    });
  });
  it("should makes rock falls at the bottom", () => {
    expect(makeRocksFall(input_test)[0]["line"].join("")).toEqual("OOOO.#.O..");
    expect(makeRocksFall(input_test)[1]["line"].join("")).toEqual("OO..#....#");
  });
  it("should calculate the result", () => {
    expect(sumCalc(input_test)).toEqual(136);
  });
});
