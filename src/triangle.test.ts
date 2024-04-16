import { Triangle } from './Triangle';

describe('Triangle class', () => {
  test('creating an object with <=0 side should throw an error', () => {
    expect(() => new Triangle(0, 5, 5)).toThrow("All sides of the triangle must be greater than 0.");
    expect(() => new Triangle(5, 0, 5)).toThrow("All sides of the triangle must be greater than 0.");
    expect(() => new Triangle(5, 5, -1)).toThrow("All sides of the triangle must be greater than 0.");
  });

  test('creating an object with invalid sides should throw an error', () => {
    expect(() => new Triangle(1, 2, 3)).toThrow("The sum of any two sides must be greater than the third side.");
    expect(() => new Triangle(2, 1, 3)).toThrow("The sum of any two sides must be greater than the third side.");
    expect(() => new Triangle(2, 3, 1)).toThrow("The sum of any two sides must be greater than the third side.");
  });

  test('circumference is correctly calculated', () => {
    const triangle = new Triangle(3, 4, 5);
    expect(triangle.calculateCircumference()).toBe(12);
  });

  test('area is correctly calculated', () => {
    const triangle = new Triangle(3, 4, 5);
    const s = (3 + 4 + 5) / 2;
    const expectedArea = Math.sqrt(s * (s - 3) * (s - 4) * (s - 5));
    expect(triangle.calculateArea()).toBeCloseTo(expectedArea, 5);
  });
});