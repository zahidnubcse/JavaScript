function heightScore(scores)
{
 var max = scores[0];
 for(var x=1; x<scores.length; x++){
    if(max < scores[x]){
        max= scores[x];
    }
 }
return max;
}
var scores =[20,100,0,56,25];
var maxScore= heightScore(scores);
document.write(maxScore);