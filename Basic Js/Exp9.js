const prompt=require("prompt-sync")();
let a= Number(prompt("Enter a number: "));
console.log("Multiplication Table : ");
for(i=1;i<=10;i++){
    console.log(a,"*",i,"=",a*i);
}