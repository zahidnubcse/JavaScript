function heightScore(playersInfo)
{
var heightScorer = playersInfo [0][0];
var heightScore = playersInfo [0][1];
for(var x=1; x< playersInfo.length; x++)
{
    if(heightScore< playersInfo[x][1])
    {
        heightScore = playersInfo[x][1];
        heightScorer = playersInfo[x][0];
    }
}
return heightScorer
}
var playersInfo =[
    ["Tamim",110],
    ["Sakib",75],
    ["Musfiq",55],
    ["Mhamudullah",50],
    ["Ashraful",100]
]
var Name= heightScore(playersInfo);
document.write(Name);