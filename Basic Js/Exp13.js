function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

function areaOfRectangle(length, width) {
  return length * width;
}

function areaOfTriangle(base, height) {
  return 0.5 * base * height;
}

console.log("Circle area:", areaOfCircle(5));
console.log("Rectangle area:", areaOfRectangle(4, 6));
console.log("Triangle area:", areaOfTriangle(4, 6));