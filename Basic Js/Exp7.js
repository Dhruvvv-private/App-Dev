const prompt=require("prompt-sync")();
let a = Number(prompt("Enter a number: "));
let b = Number(prompt("Enter a number: "));
let c = Number(prompt("Enter a number: "));
if (a>b){
    if (a>c) {
      console.log(a," is largest");
    } else {
      console.log(c," is largest");
    }
} else{
    if (b>c) {
      console.log(b,"A is largest");
    } else {
      console.log(c,"A is largest");
    }
} 