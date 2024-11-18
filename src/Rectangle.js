class Rectangle {
  constructor(width, height) {
    if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers')
    }
    this.width = width
    this.height = height
  }

  area = () => {
    return this.width * this.height
  }

  perimeter = () => {
    return 2 * (this.width + this.height)
  }
}

export default Rectangle