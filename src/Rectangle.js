export default class Rectangle {
    constructor(width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error('Width and height must be positive values');
        }
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    createRectangleNTimesBigger(n) {
        if (n)
        return new Rectangle(this.width * n, this.height * n)
    }
}
