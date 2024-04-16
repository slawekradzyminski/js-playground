export class Rectangle {
  constructor(private a: number, private b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error("Both sides of the rectangle must be greater than 0.");
    }
  }

  calculateCircumference() {
    return 2 * (this.a + this.b);
  }

  calculateArea() {
    return this.a * this.b;
  }
}
