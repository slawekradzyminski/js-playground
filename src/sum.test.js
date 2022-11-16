import { sumClassic, sumArrow, sumArrowShortened } from "./sum";
import { expect } from 'chai';

test('adds 1 + 2 to equal 3 - classic', () => {
    expect(sumClassic(1, 2)).to.eq(3)
});

test('adds 1 + 2 to equal 3 - arrow function', () => {
    expect(sumArrow(1, 2)).to.eq(3)
});

test('adds 1 + 2 to equal 3 - shortcut', () => {
    expect(sumArrowShortened(1, 2)).to.eq(3)
});