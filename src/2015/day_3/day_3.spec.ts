import { describe } from "node:test";
import { readFileSync } from "fs";
import { resolve } from "path";
import { countGiftedHouses, countGiftedHousesByDuo } from "./day_3";

describe('Day 3', () => {
  it('Case 1: >', () => {
    const result: number = countGiftedHouses('>');

    expect(result).toBe(2);
  });

  it('Case 2: ^>v<', () => {
    const result: number = countGiftedHouses('^>v<');

    expect(result).toBe(4);
  });

  it('Case 3: ^v^v^v^v^', () => {
    const result: number = countGiftedHouses('^v^v^v^v^v');

    expect(result).toBe(2);
  });

  it('Final case: input in puzzle_input.txt', async () => {
    try {
      const input: string = readFileSync(resolve(__dirname, './puzzle_input.txt'), 'utf-8');
      const result: number = countGiftedHouses(input);

      expect(result).toBe(2081);
    } catch (error) {
      throw error;
    }
  });
});

describe.only('Day 3 part two', () => {
  it('Case 1: ^v', () => {
    const result: number = countGiftedHousesByDuo('^v');

    expect(result).toBe(3);
  });

  it('Case 2: ^>v<', () => {
    const result: number = countGiftedHousesByDuo('^>v<');

    expect(result).toBe(3);
  });

  it('Case 3: ^v^v^v^v^v', () => {
    const result: number = countGiftedHousesByDuo('^v^v^v^v^v');

    expect(result).toBe(11);
  });

  it('Final case: input in puzzle_input.txt', async () => {
    try {
      const input: string = readFileSync(resolve(__dirname, './puzzle_input.txt'), 'utf-8');
      const result: number = countGiftedHousesByDuo(input);

      expect(result).toBe(2341);
    } catch (error) {
      throw error;
    }
  });
});
