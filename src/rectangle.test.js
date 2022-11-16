import Rectangle from "./Rectangle";
import { expect } from 'chai';

test('adds 1 + 2 to equal 3 - classic', () => {
    const rec = new Rectangle(10, 10)
    expect(rec.getWidth()).to.eq(10)
});

test('deconstruct', () => {
    const myObject = { a: 1, b: 2, c: 3 };
    const { b, ...noB } = myObject;

    expect(noB).to.deep.equal({ a: 1, c: 3 })
})