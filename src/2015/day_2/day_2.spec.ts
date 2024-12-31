import { describe } from "node:test";
import { readFileSync } from "fs";
import { resolve } from "path";
import { calculateRibbonLengthForBoxes, calculateWrappingPaperAreaForBoxes } from "./day_2";

describe('Day 2', () => {
  it('Case 1: 2x3x4', () => {
    const result: number = calculateWrappingPaperAreaForBoxes('2x3x4');

    expect(result).toBe(58);
  });

  it('Case 2: 1x1x10', () => {
    const result: number = calculateWrappingPaperAreaForBoxes('1x1x10');

    expect(result).toBe(43);
  });

  it('Final case: input in puzzle_input.txt', async () => {
    try {
      const input: string = readFileSync(resolve(__dirname, './puzzle_input.txt'), 'utf-8');
      const result: number = calculateWrappingPaperAreaForBoxes(input);

      expect(result).toBe(1598415);
    } catch (error) {
      throw error;
    }
  });
});

describe.only('Day 2 part 2', () => {
  it('Case 1: 2x3x4', () => {
    const result: number = calculateRibbonLengthForBoxes('2x3x4');

    expect(result).toBe(34);
  });

  it('Case 2: 1x1x10', () => {
    const result: number = calculateRibbonLengthForBoxes('1x1x10');

    expect(result).toBe(14);
  });

  it('Case 3: 4x2x3', () => {
    const result: number = calculateRibbonLengthForBoxes('4x2x3');

    expect(result).toBe(34);
  });

  it('Final case: input in puzzle_input.txt', async () => {
    try {
      const input: string = readFileSync(resolve(__dirname, './puzzle_input.txt'), 'utf-8');
      const result: number = calculateRibbonLengthForBoxes(input);

      console.log(result);
      expect(result).toBeDefined();
    } catch (error) {
      throw error;
    }
  });
});
