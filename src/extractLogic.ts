// Extract out the logic into separate functions
const calcQuadraticEq = (a: number, b: number, c: number): void => {
  const D = b * b - 4 * a * c;
  if (D > 0) {
    let x1: number, x2: number;
    x1 = (-b - Math.sqrt(D)) / (2 * a);
    x2 = (-b + Math.sqrt(D)) / (2 * a);
    console.log("x1 = " + x1 + ", x2 = " + x2);
  }
  else if (D == 0) {
    let x: number;
    x = -b / (2 * a);
    console.log("x = " + x);
  }
  else {
    console.log("Equation has no roots");
  }
}
