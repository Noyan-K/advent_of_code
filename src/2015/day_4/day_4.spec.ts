import { describe } from "node:test";
import { readFileSync } from "fs";
import { resolve } from "path";
import { findLowestMD5Hash } from "./day_4";

describe('Day 4', () => {
  it('Case 1: abcdef', () => {
    const result: number = findLowestMD5Hash('abcdef', 5);

    expect(result).toBe(609043);
  });

  it('Case 2: pqrstuv', () => {
    const result: number = findLowestMD5Hash('pqrstuv', 5);

    expect(result).toBe(1048970);
  });

  it('Final case: input in puzzle_input.txt', async () => {
    try {
      const input: string = readFileSync(resolve(__dirname, './puzzle_input.txt'), 'utf-8');
      const result: number = findLowestMD5Hash(input, 5);

      expect(result).toBe(346386);
    } catch (error) {
      throw error;
    }
  });
});

describe('Day 4 part two', () => {
  it('Final case: input in puzzle_input.txt', async () => {
    try {
      const input: string = readFileSync(resolve(__dirname, './puzzle_input.txt'), 'utf-8');
      const result: number = findLowestMD5Hash(input, 6);

      expect(result).toBe(9958218);
    } catch (error) {
      throw error;
    }
  });
});