import { expect } from 'chai';
import Rectangle from './Rectangle';

describe('Rectangle', () => {
  test('should create new object with proper field values', () => {
    const width = 5;
    const height = 10;
    const rectangle = new Rectangle(width, height);

    expect(rectangle.width).to.equal(width);
    expect(rectangle.height).to.equal(height);
  });

  test('should calculate area correctly', () => {
    const rectangle = new Rectangle(4, 5);

    expect(rectangle.area()).to.equal(20);
  });

  test('should calculate perimeter correctly', () => {
    const rectangle = new Rectangle(4, 5);

    expect(rectangle.perimeter()).to.equal(18);
  });

  test('should throw error when width is negative', () => {
    expect(() => new Rectangle(0, 5)).to.throw('Width and height must be positive numbers')
  })

  test('should throw error when height is negative', () => {
    expect(() => new Rectangle(5, 0)).to.throw('Width and height must be positive numbers')
  })

  test('should throw error when both dimensions are negative', () => {
    expect(() => new Rectangle(-1, -1)).to.throw('Width and height must be positive numbers')
  })

  test('should throw error when dimensions are text', () => {
    expect(() => new Rectangle('width', 'height')).to.throw('Width and height must be positive numbers')
  })
});
