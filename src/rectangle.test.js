import Rectangle from './Rectangle';

describe('Rectangle', () => {
    it('should create new object with proper field values', () => {
        const rectangle = new Rectangle(5, 3);
        expect(rectangle.width).toBe(5);
        expect(rectangle.height).toBe(3);
    });

    it('should calculate perimeter correctly', () => {
        const rectangle = new Rectangle(5, 3);
        expect(rectangle.getPerimeter()).toBe(16);
    });

    it('should calculate area correctly', () => {
        const rectangle = new Rectangle(5, 3);
        expect(rectangle.getArea()).toBe(15);
    });

    it('should handle decimal dimensions', () => {
        const rectangle = new Rectangle(2.5, 3.5);
        expect(rectangle.getPerimeter()).toBe(12);
        expect(rectangle.getArea()).toBe(8.75);
    });

    it('should throw error for negative width', () => {
        expect(() => new Rectangle(-5, 3)).toThrow('Width and height must be positive numbers');
    });

    it('should throw error for negative height', () => {
        expect(() => new Rectangle(5, -3)).toThrow('Width and height must be positive numbers');
    });

    it('should throw error for zero width', () => {
        expect(() => new Rectangle(0, 3)).toThrow('Width and height must be positive numbers');
    });

    it('should throw error for zero height', () => {
        expect(() => new Rectangle(5, 0)).toThrow('Width and height must be positive numbers');
    });
});
