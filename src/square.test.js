import { expect } from 'chai'
import Square from './Square'

describe('Square', () => {
  test('should create new object with proper side value', () => {
    const side = 5
    const square = new Square(side)

    expect(square.side).to.equal(side)
  })

  test('should calculate area correctly', () => {
    const square = new Square(4)

    expect(square.area()).to.equal(16)
  })

  test('should calculate perimeter correctly', () => {
    const square = new Square(4)

    expect(square.perimeter()).to.equal(16)
  })

  test('should throw error when side is negative', () => {
    expect(() => new Square(-1)).to.throw('Side must be a positive number')
  })

  test('should throw error when side is zero', () => {
    expect(() => new Square(0)).to.throw('Side must be a positive number')
  })

  test('should throw error when side is text', () => {
    expect(() => new Square('side')).to.throw('Side must be a positive number')
  })
}) 