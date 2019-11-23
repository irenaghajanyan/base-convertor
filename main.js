const convert = require("./converter");
const reader = require ("readline-sync");
let input= reader.questionInt("Please enter the number to be converted = ");
console.log("Binary of " + input + " is -> " +  convert.convertToBinary(input));
console.log("Hexadecimal of " + input + " is -> " +  convert.convertToHex(input));