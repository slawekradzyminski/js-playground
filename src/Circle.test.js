import Circle from './Circle';

describe('Circle', () => {
    it('should create new object with proper field values', () => {
        const circle = new Circle(5);
        expect(circle.radius).toBe(5);
    });

    it('should throw error for negative radius', () => {
        expect(() => new Circle(-5)).toThrow('Radius must be positive number');
    });

    it('should calculate area correctly', () => {
        const circle = new Circle(5);
        expect(circle.getArea()).toBeCloseTo(78.54, 2);
    });

    it('should calculate circumference correctly', () => {
        const circle = new Circle(5);
        expect(circle.getCircumference()).toBeCloseTo(31.42, 2);
    });

    it('should handle decimal radius', () => {
        const circle = new Circle(2.5);
        expect(circle.getArea()).toBeCloseTo(19.63, 2);
        expect(circle.getCircumference()).toBeCloseTo(15.71, 2);
    });
});