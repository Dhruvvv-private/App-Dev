const numbers = [12, 45, 3, 67, 29, 8];

let largest = numbers[0];
let smallest = numbers[0];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) largest = numbers[i];
  if (numbers[i] < smallest) smallest = numbers[i];
  sum += numbers[i];
}

console.log("Largest:", largest);
console.log("Smallest:", smallest);
console.log("Sum:", sum);