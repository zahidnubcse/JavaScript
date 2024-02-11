var marks =prompt("Enter marks:");


if(marks>100 || marks<0 )
console.log("Invalid");
else if(marks>=80 && marks<= 100)
 console.log("A+");
else if(marks>=70  && marks<= 79)
 console.log("A");
else if(marks>=60  && marks<= 59)
 console.log("A-");
else if(marks>=50  && marks<=49)
 console.log("B+");
else if(marks>=40  && marks<= 39)
 console.log("B");
else if(marks>=33  && marks==33)
 console.log("B-");
else
 console.log("Fail");