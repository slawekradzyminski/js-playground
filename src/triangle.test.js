import Triangle from './Triangle';

describe('Triangle', () => {
    it('should create new object with proper field values', () => {
        const triangle = new Triangle(3, 4, 5);
        expect(triangle.sideA).toBe(3);
        expect(triangle.sideB).toBe(4);
        expect(triangle.sideC).toBe(5);
    });

    it('should calculate perimeter correctly', () => {
        const triangle = new Triangle(3, 4, 5);
        expect(triangle.getPerimeter()).toBe(12);
    });

    it('should calculate area correctly', () => {
        const triangle = new Triangle(3, 4, 5);
        expect(triangle.getArea()).toBe(6);
    });

    it('should handle decimal side lengths', () => {
        const triangle = new Triangle(3.5, 4.5, 5.5);
        expect(triangle.getPerimeter()).toBe(13.5);
        expect(triangle.getArea()).toBeCloseTo(7.85, 2);
    });

    it('should throw error for negative sides', () => {
        expect(() => new Triangle(-3, 4, 5)).toThrow('All sides must be positive numbers');
        expect(() => new Triangle(3, -4, 5)).toThrow('All sides must be positive numbers');
        expect(() => new Triangle(3, 4, -5)).toThrow('All sides must be positive numbers');
    });

    it('should throw error for zero sides', () => {
        expect(() => new Triangle(0, 4, 5)).toThrow('All sides must be positive numbers');
        expect(() => new Triangle(3, 0, 5)).toThrow('All sides must be positive numbers');
        expect(() => new Triangle(3, 4, 0)).toThrow('All sides must be positive numbers');
    });

    it('should throw error for invalid triangle sides', () => {
        expect(() => new Triangle(1, 1, 3)).toThrow('Invalid triangle: sum of any two sides must be greater than the third side');
        expect(() => new Triangle(1, 3, 1)).toThrow('Invalid triangle: sum of any two sides must be greater than the third side');
        expect(() => new Triangle(3, 1, 1)).toThrow('Invalid triangle: sum of any two sides must be greater than the third side');
    });
}); 