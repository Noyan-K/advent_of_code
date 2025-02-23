import { describe } from "node:test";
import { tmpFunc } from "./day_tmp";
import { readFileSync } from "fs";
import { resolve } from "path";

describe('Day tmp', () => {
  it('Case 1:', () => {
    const result: number = tmpFunc('tmp');

    expect(result).toBe(0);
  });

  it('Final case: input in puzzle_input.txt', async () => {
    try {
      const input: string = readFileSync(resolve(__dirname, './puzzle_input.txt'), 'utf-8');
      const result: number = tmpFunc(input);

      expect(result).toBe(0);
    } catch (error) {
      throw error;
    }
  });
});
