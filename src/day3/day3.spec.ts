import { splitAtDots, returnLineSumPossible } from "./day3";
const mockInput = [
  "........954......104.......52......70..............206.806........708..........................217...............................440........",
  ".......@...................*.............................*.664..............677................@....459.........687.........................",
  "..................378.....398........548..495..........983....*................*..282.................*...........$.248.....409.......165...",
];

describe("day 3", () => {
  it("should should split the string at every dots", () => {
    expect(splitAtDots("..23#.")).toEqual(["", "", "23#", ""]);
  });
  it("should return the amount of the string if possible", () => {
    expect(returnLineSumPossible("..23#.")).toEqual(23);
    expect(returnLineSumPossible(mockInput[0])).toEqual(0);
  });
});
