function addNumbers(a, b) {
  return a + b;
}

const prompt=require("prompt-sync")();
let a= Number(prompt("Enter a number: "));
let b= Number(prompt("Enter a number: "));
console.log(addNumbers(a,b));