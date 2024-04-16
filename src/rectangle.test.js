import { expect } from 'chai';
import { Rectangle } from './Rectangle';

describe('Rectangle class', () => {
  test('creating an object with <=0 value should throw an error', () => {
    expect(() => new Rectangle(0, 5)).to.throw("Both sides of the rectangle must be greater than 0.");
    expect(() => new Rectangle(5, 0)).to.throw("Both sides of the rectangle must be greater than 0.");
    expect(() => new Rectangle(-1, -1)).to.throw("Both sides of the rectangle must be greater than 0.");
  });

  test('circumference is correctly calculated', () => {
    const rectangle = new Rectangle(5, 10);
    expect(rectangle.calculateCircumference()).to.eq(30);
  });

  test('area is correctly calculated', () => {
    const rectangle = new Rectangle(5, 10);
    expect(rectangle.calculateArea()).to.eq(50);
  });
});
