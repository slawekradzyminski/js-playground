export class Circle {
    constructor(private radius: number) {
        if (radius <= 0) {
            throw new Error("Radius must be greater than 0.");
        }
    }

    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}