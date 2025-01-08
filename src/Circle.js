class Circle {
    constructor(radius) {
        if (radius <= 0) {
            throw new Error('Radius must be positive number');
        }
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

export default Circle;