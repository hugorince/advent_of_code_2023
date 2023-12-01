import fs from "fs";
import path from "path";
import {
  turnIntoArray,
  turnStringIntoArray,
  removeNonNumbersOfArray,
  joinFirstAndLastDigitOfArray,
  arrayOfDoubleDigits,
  calculateSum,
} from "./day1_part1";

describe("day1", () => {
  it("should transform the text input into an array of string", () => {
    const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
    const array = turnIntoArray(input);
    expect(typeof array).toEqual("object");
    expect(typeof array[0]).toEqual("string");
  });
  it("should transform a string into an array of string", () => {
    const string = "abc3ef";
    const array = turnStringIntoArray(string);
    expect(typeof array).toEqual("object");
    expect(array).toEqual(["a", "b", "c", "3", "e", "f"]);
  });
  it("should remove non numbers of an array of string", () => {
    const array = ["a", "b", "4", "c", "d", "e", "f", "1", "2", "3"];
    const result = ["4", "1", "2", "3"];
    expect(removeNonNumbersOfArray(array)).toEqual(result);
  });
  it("should join the first and last digit of an array of string", () => {
    const array = ["1", "5", "6"];
    const result = "16";
    expect(joinFirstAndLastDigitOfArray(array)).toEqual(result);
  });
  it("should return 2 digits even if only one in string", () => {
    const array = ["1"];
    const result = "11";
    expect(joinFirstAndLastDigitOfArray(array)).toEqual(result);
  });
  it("should return an array of string of only numbers", () => {
    const array = ["kjh&1jkh6", "1mskldfhjkkjh", "jkh15"];

    const finalArray = arrayOfDoubleDigits(array);

    expect(finalArray).toEqual(["16", "11", "15"]);
  });
  it("should return the sum of an array of string of only numbers", () => {
    const array = ["kjh&1jkh6", "1mskldfhjkkjh", "jkh15", "mlmlkmlk10"];
    const finalArray = arrayOfDoubleDigits(array);
    const result = calculateSum(finalArray);
    expect(result).toEqual(52);
  });
});
