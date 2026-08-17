const prompt=require("prompt-sync")();
let a= Number(prompt("Enter a number: "));
let f=1;
for(i=1;i<=a;i++){
    f=f*i;
}
console.log(a,"! = ",f);