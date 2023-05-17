import { expect } from 'chai';

test('should be able to define number', () => {
    const numer = -2 * 20.5
    expect(numer).to.eq(-41)
})

test('should be able to define number', () => {
    const specialNumberNaN = 20 / 'a'
    const specialNumberInfinity = 20 / 0
    const specialNumberMinusInfinity = -20 / 0

    expect(specialNumberNaN).to.be.NaN;
    expect(specialNumberInfinity).to.equal(Infinity);
    expect(specialNumberMinusInfinity).to.equal(-Infinity);
})
