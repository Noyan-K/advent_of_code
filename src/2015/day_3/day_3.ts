export function countGiftedHouses(moves: string): number {
  let lastLocation: number[] = [0, 0];
  const setOfLocations = new Set([lastLocation.toString()]);

  for (let i = 0; i < moves.length; i++) {
    const currentMove = moves[i];

    switch(currentMove) {
      case '^':
        lastLocation = [lastLocation[0] + 1, lastLocation[1]];
        break;
      case 'v':
        lastLocation = [lastLocation[0] - 1, lastLocation[1]];
        break;
      case '>':
        lastLocation = [lastLocation[0], lastLocation[1] + 1];
        break;
      case '<':
        lastLocation = [lastLocation[0], lastLocation[1] - 1];
        break;
    }

    setOfLocations.add(lastLocation.toString());
  }

  return setOfLocations.size;;
}

export function countGiftedHousesByDuo(moves: string): number {
  let santaLastLocation: number[] = [0, 0];
  let robotLastLocation: number[] = [0, 0];
  const setOfLocations = new Set([santaLastLocation.toString()]);

  for (let i = 0; i < moves.length; i++) {
    const currentMove = moves[i];
    const isSanta = i % 2 === 0;

    switch(currentMove) {
      case '^':
        if (isSanta) {
          santaLastLocation = [santaLastLocation[0] + 1, santaLastLocation[1]];
        } else {
          robotLastLocation = [robotLastLocation[0] + 1, robotLastLocation[1]];
        }

        break;
      case 'v':
        if (isSanta) {
          santaLastLocation = [santaLastLocation[0] - 1, santaLastLocation[1]];
        } else {
          robotLastLocation = [robotLastLocation[0] - 1, robotLastLocation[1]];
        }

        break;
      case '>':
        if (isSanta) {
          santaLastLocation = [santaLastLocation[0], santaLastLocation[1] + 1];
        } else {
          robotLastLocation = [robotLastLocation[0], robotLastLocation[1] + 1];
        }

        break;
      case '<':
        if (isSanta) {
          santaLastLocation = [santaLastLocation[0], santaLastLocation[1] - 1];
        } else {
          robotLastLocation = [robotLastLocation[0], robotLastLocation[1] - 1];
        }

        break;
    }

    setOfLocations.add(isSanta ? santaLastLocation.toString() : robotLastLocation.toString());
  }

  return setOfLocations.size;
}