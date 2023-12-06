export const races = [
  {
    time: 63,
    distance: 411,
  },
  {
    time: 78,
    distance: 1274,
  },
  {
    time: 94,
    distance: 2047,
  },
  {
    time: 68,
    distance: 1035,
  },
];

type raceType = (typeof races)[number];

export const possibilities = (obj: raceType) => {
  let result = [];
  for (let i = 0; i < obj.time; i++) {
    const distance = i * (obj.time - i);
    if (distance > obj.distance) result.push(distance);
  }
  return result.length;
};

export const calculateAllPossibilities = (array: typeof races) => {
  let result: number[] = [];
  array.map((obj) => result.push(possibilities(obj)));
  return result.reduce((a, b) => a * b, 1);
};

export const concatenateInput = (array: typeof races) => {
  let time = "";
  let distance = "";

  array.map((race) => {
    time += race.time.toString();
    distance += race.distance.toString();
  });

  return {
    time: parseInt(time),
    distance: parseInt(distance),
  };
};

export const calculateUltimatePossibilities = (array: typeof races) => {
  const obj = concatenateInput(array);
  return possibilities(obj);
};

console.log(calculateUltimatePossibilities(races));
