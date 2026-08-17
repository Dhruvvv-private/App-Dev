const prompt=require("prompt-sync")();
let a= Number(prompt("Enter a number: "));
if (a>0){
    console.log("Positive");
} else if (a==0) {
    console.log("Zero");
} else {
    console.log("Negative");
}