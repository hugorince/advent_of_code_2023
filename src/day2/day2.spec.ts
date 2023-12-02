import { cubesPossibility, gameWith3Colors, resultOfAllGames } from "./day2";

const mockGames = [
  {
    gameNumber: 11,
    rounds: [
      "9 blue, 13 green",
      "9 blue, 2 green",
      "10 blue, 3 red, 12 green",
      "11 blue, 1 red, 6 green",
    ],
  },
  {
    gameNumber: 12,
    rounds: [
      "7 green, 5 blue",
      "6 green, 3 red, 6 blue",
      "2 red, 5 blue, 5 green",
      "2 red, 1 blue, 1 green",
      "4 red, 4 green, 2 blue",
      "3 blue, 6 green",
    ],
  },
];

describe("day2", () => {
  it("should return true if possible to play with x color cubes", () => {
    expect(cubesPossibility(mockGames[0], "red", 12)).toEqual(true);
  });
  it("should return the gameNumber if 3 possibilities of colors", () => {
    expect(gameWith3Colors(mockGames[0])).toEqual(11);
  });
  it("should do the operation for every games in the array", () => {
    expect(resultOfAllGames(mockGames)).toEqual(23);
  });
});
