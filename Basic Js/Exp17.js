const students = ["Amit", "Priya", "Rahul", "Sneha", "Vikram"];
const prompt=require("prompt-sync")();
const searchName = prompt("Enter a name: ");

const index = students.indexOf(searchName);

if (index !== -1) {
  console.log(`${searchName} found at index ${index}`);
} else {
  console.log(`${searchName} not found in the list`);
}