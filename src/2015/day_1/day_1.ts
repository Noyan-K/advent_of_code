export function findRightFloor(instruction: string): number {
  let floorNumber: number = 0;

  for (let i = 0; i < instruction.length; i++) {
    floorNumber += changeFloor(instruction[i]);
  }

  return floorNumber;
}

export function findBasement(instruction: string): number {
  let floorNumber: number = 0;

  for (let i = 0; i < instruction.length; i++) {
    floorNumber += changeFloor(instruction[i]);

    if (floorNumber < 0) {
      return ++i;
    }
  }

  return floorNumber;
}

function changeFloor(character: string): number {
  if(character === '(') {
    return 1;
  } else if (character === ')') {
    return -1;
  } else {
    throw new Error(`Bad instruction:${character}`);
  }
}