class Triangle {
    constructor(sideA, sideB, sideC) {
        if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
            throw new Error('All sides must be positive numbers');
        }
        
        // Check if triangle is valid using triangle inequality theorem
        if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB) {
            throw new Error('Invalid triangle: sum of any two sides must be greater than the third side');
        }

        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    getArea() {
        // Using Heron's formula
        const s = this.getPerimeter() / 2;
        return Math.sqrt(
            s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)
        );
    }
}

export default Triangle; 