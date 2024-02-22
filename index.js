var num1= prompt("Enter First Number: ");
var num2= prompt("Enter Second Number: ");
var num3= prompt("Enter Third Number: ");
var result= num1> num2 && num1> num3 ? "Num1 is large": num2>num1 && num2>num3 ? "Num2 is large" : num3>num1 && num3>num2 ? "Num3 is large": "Equal";

console.log(result);