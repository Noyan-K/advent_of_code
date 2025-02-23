import crypto from 'crypto';

export function findLowestMD5Hash(secretKey: string, zeroes: number): number {
  let number = 0;
  const zeroesString = '0'.repeat(zeroes);

  while (true) {
    const md5Hash = crypto.createHash('md5').update(`${secretKey}${number}`).digest('hex');

    if (md5Hash.startsWith(zeroesString)) {
      return number;
    }

    number++;
  }
}
