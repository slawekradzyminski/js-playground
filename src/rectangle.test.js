import { expect } from 'chai';
import Rectangle from './Rectangle';

test('should create new object with proper field values', () => {
    const rectangleOne = new Rectangle(2, 3)
    expect(rectangleOne).to.deep.equal({
        width: 2,
        height: 3
    })
})

test('should throw an error if width is not positive', () => {
    expect(() => {
        new Rectangle(0, 2);
    }).to.throw('Width and height must be positive values');
})

test('should throw an error if height is not positive', () => {
    expect(() => new Rectangle(2, 0)).to.throw('Width and height must be positive values');
})

test('should have proper area', () => {
    const rectangle = new Rectangle(2, 3)
    const rectangleTwo = new Rectangle(4, 4)
    expect(rectangle.getArea()).to.eq(6)
    expect(rectangleTwo.getArea()).to.eq(16)
})

test('should have proper perimeter', () => {
    const rectangle = new Rectangle(2, 3)
    const rectangleTwo = new Rectangle(4, 4)
    expect(rectangle.getPerimeter()).to.eq(10)
    expect(rectangleTwo.getPerimeter()).to.eq(16)
})

test('should correctly create rectangle n times bigger', () => {
    const initialRectangle = new Rectangle(2, 3)
    const multipliedRectangle = initialRectangle.createRectangleNTimesBigger(3)
    expect(multipliedRectangle.getArea()).to.eq(54)

})
