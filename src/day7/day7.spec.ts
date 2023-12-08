import {
  lineToObj,
  input_test,
  objsToArr,
  returnTypeOfHand,
  populateType,
  calculateArrayOfHands,
  transformCardIntoNumValue,
  sortByKind,
  permuteIfSameKind,
  rankedArray,
  calculateResult,
} from "./day7";

describe("day 7", () => {
  it("should create an object for each input line", () => {
    const line = "32T3K 765";
    expect(lineToObj(line)).toEqual({
      hand: "32T3K",
      bid: 765,
      kind: 1,
      rank: 0,
    });
  });
  it("should create an array of objects from the input", () => {
    expect(objsToArr(input_test)[0]).toEqual({
      hand: "32T3K",
      kind: 1,
      bid: 765,
      rank: 0,
    });
  });
  it("should find the type from 1 to 7 for every hand", () => {
    expect(returnTypeOfHand("TTTTT")).toEqual(7);
    expect(returnTypeOfHand("TTTTK")).toEqual(6);
    expect(returnTypeOfHand("TT6T6")).toEqual(5);
    expect(returnTypeOfHand("5TTKT")).toEqual(4);
    expect(returnTypeOfHand("T2T2K")).toEqual(3);
    expect(returnTypeOfHand("T83TK")).toEqual(2);
    expect(returnTypeOfHand("1234K")).toEqual(1);
  });
  it("should populate a hand", () => {
    expect(
      populateType({
        hand: "32T3K",
        kind: 1,
        bid: 765,
        rank: 0,
      })
    ).toEqual({
      hand: "32T3K",
      kind: 2,
      bid: 765,
      rank: 0,
    });
  });
  it("should calculate an array of hands", () => {
    expect(calculateArrayOfHands(input_test)[0]).toEqual({
      hand: "32T3K",
      kind: 2,
      bid: 765,
      rank: 0,
    });
  });
  it("should transform card into value", () => {
    expect(transformCardIntoNumValue("K")).toEqual(13);
  });
  it("should sort the array by kind", () => {
    const array = calculateArrayOfHands(input_test);
    expect(sortByKind(array)[2]).toEqual({
      bid: 220,
      hand: "KTJJT",
      kind: 3,
      rank: 0,
    });
  });
  it("should sort the array by kind and compare hands of same kind", () => {
    const array = calculateArrayOfHands(input_test);
    const arraySorted = sortByKind(array);
    expect(permuteIfSameKind(arraySorted)[2]).toEqual({
      hand: "KK677",
      bid: 28,
      kind: 3,
      rank: 0,
    });
  });
  it("should add rank based on position in array", () => {
    const array = calculateArrayOfHands(input_test);
    const arraySorted = sortByKind(array);
    const arraySortedWithSimilarHands = permuteIfSameKind(arraySorted);

    expect(rankedArray(arraySortedWithSimilarHands)[3].rank).toEqual(4);
  });
  it("should calculate the total winnings", () => {
    expect(calculateResult(input_test)).toEqual(6440);
  });
});
