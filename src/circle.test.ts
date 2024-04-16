import { expect } from 'chai';
import { Circle } from './Circle';

describe('Circle class', () => {
  test('creating an object with <=0 radius should throw an error', () => {
    expect(() => new Circle(0)).to.throw("Radius must be greater than 0.");
    expect(() => new Circle(-1)).to.throw("Radius must be greater than 0.");
  });

  test('circumference is correctly calculated', () => {
    const circle = new Circle(5);
    expect(circle.calculateCircumference()).to.closeTo(31.415, 0.001);
  });

  test('area is correctly calculated', () => {
    const circle = new Circle(5);
    expect(circle.calculateArea()).to.closeTo(78.54, 0.01);
  });
});
