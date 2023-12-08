import {
  input_test,
  input_test2,
  directions,
  coordonates,
  result,
} from "./day8";
describe("day 8", () => {
  it("should split the input into 2 arrays", () => {
    expect(directions(input_test)).toEqual(["R", "L"]);
    expect(coordonates(input_test)[0]).toEqual({
      key: "AAA",
      directions: ["BBB", "CCC"],
    });
  });
  it("should return the number of moves to go to ZZZ", () => {
    expect(result(input_test)).toEqual(2);
    expect(result(input_test2)).toEqual(6);
  });
});
