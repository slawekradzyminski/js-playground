import { expect } from 'chai';
import { errorMessage, Rectangle } from './Rectangle';

test('should create new object with proper field values', () => {
    const rectangle = new Rectangle(10, 5)
    expect(rectangle.getArea()).to.eq(50)

    const square = new Rectangle(5, 5)
    expect(square.getArea()).to.eq(25)
})

test('should create two times bigger rectangle', () => {
    const rectangle = new Rectangle(10, 5)
    const square = new Rectangle(5, 5)

    expect(rectangle.getTwoTimesBiggerRectangle().getArea()).to.eq(200)
    expect(square.getTwoTimesBiggerRectangle().getArea()).to.eq(100)
})

test('should create two times bigger rectangle', () => {
    const rectangle = new Rectangle(10, 5)
    const square = new Rectangle(5, 5)

    expect(rectangle.getTwoTimesBiggerRectangle().getArea()).to.eq(200)
    expect(square.getTwoTimesBiggerRectangle().getArea()).to.eq(100)
})

test('should create two times bigger rectangle', () => {
    const rectangle = new Rectangle(10, 5)
    const square = new Rectangle(5, 5)

    expect(rectangle.getNTimesBiggerRectangle(2).getArea()).to.eq(200)
    expect(square.getNTimesBiggerRectangle(3).getArea()).to.eq(225)
})

test('should throw error if multiplicator is below or equal 0', () => {
    const rectangle = new Rectangle(10, 5)
    expect(() => rectangle.getNTimesBiggerRectangle(0)).to.throw(errorMessage);
    expect(() => rectangle.getNTimesBiggerRectangle(-1)).to.throw(errorMessage);
})

test('should throw error if multiplicator is below or equal 0', () => {
    const rectangle = new Rectangle(10, 5)
    const square = new Rectangle(5, 5)

    expect(rectangle.isSquare()).to.eq(false)
    expect(square.isSquare()).to.eq(true)
})
