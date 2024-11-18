import { expect } from 'chai'
import Circle from './Circle'

describe('Circle', () => {
  test('should create new object with proper radius value', () => {
    const radius = 5
    const circle = new Circle(radius)

    expect(circle.radius).to.equal(radius)
  })

  test('should calculate area correctly', () => {
    const circle = new Circle(2)

    expect(circle.area()).to.be.closeTo(12.57, 0.01)
  })

  test('should calculate perimeter correctly', () => {
    const circle = new Circle(3)

    expect(circle.perimeter()).to.be.closeTo(18.85, 0.01)
  })

  test('should throw error when radius is zero', () => {
    expect(() => new Circle(0)).to.throw('Radius must be a positive number')
  })

  test('should throw error when radius is negative', () => {
    expect(() => new Circle(-1)).to.throw('Radius must be a positive number')
  })

  test('should throw error when radius is text', () => {
    expect(() => new Circle('radius')).to.throw('Radius must be a positive number')
  })
}) 