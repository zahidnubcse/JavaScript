var  numberOfWin =0;
var  numberOfLost =0;

for(var i =0; i<5;i++)
{
var guesseingNumber = parseInt(prompt("Enter number from 1 to 5: "));
var randomNumber = Math.floor(Math.random()*5)+1;
if(guesseingNumber==randomNumber)
{
     document.write("You have won");
    numberOfWin ++;
}
else{
     document.write("You have lost. randomNumber was: "+randomNumber);
    numberOfLost ++;
}

} 
 document.write("You have won: "+numberOfWin+"</br>"); 
document.write("You have lost: "+numberOfLost+"</br>");


