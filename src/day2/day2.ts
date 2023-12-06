const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

const input_test = fs.readFileSync(
  path.join(__dirname, "input_test.txt"),
  "utf8"
);

export const games = input.split("\n").map((line: string) => {
  const [gameNumber, gameData] = line.split(": ");
  const rounds = gameData.split("; ").map((round) => {
    return round.split(", ").join(", ");
  });
  return { gameNumber: parseInt(gameNumber.split(" ")[1]), rounds };
});

const games_test = input_test.split("\n").map((line: string) => {
  const [gameNumber, gameData] = line.split(": ");
  const rounds = gameData.split("; ").map((round) => {
    return round.split(", ").join(", ");
  });
  return { gameNumber: parseInt(gameNumber.split(" ")[1]), rounds };
});

type Game = {
  gameNumber: number;
  rounds: string[];
};

export const cubesPossibility = (game: Game, color: string, amount: number) => {
  let result = true;
  game.rounds.map((round: Game["rounds"][number]) => {
    if (round.includes(color)) {
      const turn = round.split(", ");
      turn.map((cube: string) => {
        if (cube.includes(color)) {
          const number = parseInt(cube.split(" ")[0]);
          if (number > amount) {
            result = false;
          }
        }
      });
    }
  });
  return result;
};

export const gameWith3Colors = (game: Game) => {
  let result = 0;
  if (
    cubesPossibility(game, "red", 12) &&
    cubesPossibility(game, "blue", 14) &&
    cubesPossibility(game, "green", 13)
  )
    result = game.gameNumber;

  return result;
};

export const resultOfAllGames = (games: Game[]) => {
  let result = 0;
  games.map((game) => {
    result += gameWith3Colors(game);
  });
  return result;
};

export const lowestCubesPossibility = (game: Game, color: string) => {
  let result: number[] = [];
  game.rounds.map((round: string) => {
    if (round.includes(color)) {
      const turn = round.split(", ");
      turn.map((cube: string) => {
        if (cube.includes(color)) {
          const number = parseInt(cube.split(" ")[0]);
          result.push(number);
        }
      });
    }
  });
  return Math.max(...result);
};

export const gameMultiplicationOfLowestPossibilities = (game: Game) => {
  const red = lowestCubesPossibility(game, "red");
  const blue = lowestCubesPossibility(game, "blue");
  const green = lowestCubesPossibility(game, "green");
  return red * blue * green;
};

export const resultOfLowestAllGames = (games: Game[]) => {
  let result = 0;
  games.map((game) => {
    result += gameMultiplicationOfLowestPossibilities(game);
  });
  return result;
};
