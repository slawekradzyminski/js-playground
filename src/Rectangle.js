class Rectangle {
    constructor(width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error('Width and height must be positive numbers');
        }
        this.width = width;
        this.height = height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    getArea() {
        return this.width * this.height;
    }

    multiplyDimensions(number) {
        this.width *= number;
        this.height *= number;
    }
}

export default Rectangle;