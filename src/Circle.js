class Circle {
  constructor(radius) {
    if (!Number.isFinite(radius) || radius <= 0) {
      throw new Error('Radius must be a positive number')
    }
    this.radius = radius
  }

  area = () => {
    return Math.PI * Math.pow(this.radius, 2)
  }

  perimeter = () => {
    return 2 * Math.PI * this.radius
  }
}

export default Circle
