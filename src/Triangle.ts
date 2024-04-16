export class Triangle {
    constructor(private a: number, private b: number, private c: number) {
      if (a <= 0 || b <= 0 || c <= 0) {
        throw new Error("All sides of the triangle must be greater than 0.");
      }
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("The sum of any two sides must be greater than the third side.");
      }
    }
  
    calculateCircumference() {
      return this.a + this.b + this.c;
    }
  
    calculateArea() {
      const s = (this.a + this.b + this.c) / 2;
      return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
  }