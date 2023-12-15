import {
  splitIntoArr,
  input_test,
  findASCII,
  operationHash,
  fullStringOperation,
  resultCalc,
} from "./day15";

describe("day 15", () => {
  it("should transform the input into an array of string without commas", () => {
    expect(splitIntoArr(input_test)[0]).toEqual("rn=1");
  });
  it("should find the ASCII code for each character", () => {
    expect(findASCII("H")).toEqual(72);
  });
  it("ASCII should be multiplied by 17 the divided by 256 and it should return the reminder", () => {
    expect(operationHash(72)).toEqual(200);
  });
  it("should do the operation for a whole string", () => {
    expect(fullStringOperation("HASH")).toEqual(52);
  });
  it("should do the sum of the operations for the whole input", () => {
    expect(resultCalc(input_test)).toEqual(1320);
  });
});
