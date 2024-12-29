import { describe } from "node:test";
import { findBasement, findRightFloor } from "./day_1";
import { readFileSync } from "fs";
import { resolve } from "path";

describe('Day 1', () => {
  it('Case 1: (()) and ()()', () => {
    const firstResult: number = findRightFloor('(())');
    const secondResult: number = findRightFloor('()()');

    expect(firstResult).toBe(0);
    expect(secondResult).toBe(0);
    expect(secondResult).toBe(firstResult);
  });

  it('Case 2: ((( and (()(()(', () => {
    const firstResult: number = findRightFloor('(((');
    const secondResult: number = findRightFloor('(()(()(');

    expect(firstResult).toBe(3);
    expect(secondResult).toBe(3);
    expect(secondResult).toBe(firstResult);
  });

  it('Case 3: ))(((((', () => {
    const result = findRightFloor('))(((((');

    expect(result).toBe(3);
  });

  it('Case 4: ()) and ))(', () => {
    const firstResult: number = findRightFloor('())');
    const secondResult: number = findRightFloor('))(');

    expect(firstResult).toBe(-1);
    expect(secondResult).toBe(-1);
    expect(secondResult).toBe(firstResult);
  });

  it('Case 5: ))) and )())())', () => {
    const firstResult: number = findRightFloor(')))');
    const secondResult: number = findRightFloor(')())())');

    expect(firstResult).toBe(-3);
    expect(secondResult).toBe(-3);
    expect(secondResult).toBe(firstResult);
  });

  it('Final case: input in puzzle_input.txt', async () => {
    try {
      const input: string = readFileSync(resolve(__dirname, './puzzle_input.txt'), 'utf-8');
      const result: number = findRightFloor(input);

      expect(result).toBe(74);
    } catch (error) {
      throw error;
    }
  });
});

describe('Day 1 part 2', () => {
  it('Case 1: )', () => {
    const result = findBasement(')');

    expect(result).toBe(1);
  });

  it('Case 2: ()())', () => {
    const result = findBasement('()())');

    expect(result).toBe(5);
  });

  it('Final case: input in puzzle_input.txt', () => {
    try {
      const input: string = readFileSync(resolve(__dirname, './puzzle_input.txt'), 'utf-8');
      const result: number = findBasement(input);

      console.log(result);
      expect(result).toBeDefined();
    } catch (error) {
      throw error;
    }
  });
})