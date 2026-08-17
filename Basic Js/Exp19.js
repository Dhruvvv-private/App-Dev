const str = "Hello JavaScript";

console.log("Original String:", str);
console.log("Length:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Character at index 3:", str.charAt(3));
console.log("Substring (0-5):", str.substring(0, 5));

// Reverse the string
const reversed = str.split("").reverse().join("");
console.log("Reversed:", reversed);