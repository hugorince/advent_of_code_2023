import {
  possibilities,
  calculateAllPossibilities,
  concatenateInput,
  calculateUltimatePossibilities,
} from "./day6";

const mockRaces = [
  { time: 7, distance: 9 },
  { time: 15, distance: 40 },
  { time: 30, distance: 200 },
];

describe("possibilities", () => {
  it("should return the amount of possibilities of record", () => {
    expect(possibilities(mockRaces[1])).toEqual(8);
  });
  it("should return the multiplication of all possibilities", () => {
    expect(calculateAllPossibilities(mockRaces)).toEqual(288);
  });
  it("should return only one race with all inputs concatenated", () => {
    expect(concatenateInput(mockRaces)).toEqual({
      time: 71530,
      distance: 940200,
    });
  });
  it("should calculate the possibilities for this one race", () => {
    expect(calculateUltimatePossibilities(mockRaces)).toEqual(71503);
  });
});
