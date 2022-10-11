import { sumClassic, sumArrow, sumArrowShortened } from "./sum";

test('adds 1 + 2 to equal 3 - classic', () => {
    expect(sumClassic(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3 - arrow function', () => {
    expect(sumArrow(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3 - shortcut', () => {
    expect(sumArrowShortened(1, 2)).toBe(3);
});