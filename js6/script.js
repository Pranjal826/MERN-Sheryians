var sub1=Number(prompt("Enter marks1"))
var sub2=Number(prompt("Enter marks2"))
var sub3=Number(prompt("Enter marks3"))
var sub4=Number(prompt("Enter marks4"))
var sub5=Number(prompt("Enter marks5"))
var sum=sub1+sub2+sub3+sub4+sub5
var percentage=(sum/500)*100
console.log("Total marks obtained by student out of 500:",sum)
console.log("Total percent obtained by student",percentage)
if(percentage>=90){
    console.log("Grade A+")
}
else if(percentage>=80&&percentage<=90){
    console.log("Grade A")
}
else if(percentage>=75&&percentage<=79){
    console.log("Grade B+")
}
else if(percentage>=70&&percentage<=74){
    console.log("Grade B")
}
else if(percentage>=65&&percentage<=69){
    console.log("Grade C+")
}
else if(percentage>=60&&percentage<=65){
    console.log("Grade D+")
}
else if(percentage>=55&&percentage<=59)
{
    console.log("Grade D")
}
else{
    console.log("Fail")
}

if(sub1>75){
console.log("Dist in chemistry")
}
else if(sub2>75){
    console.log("Dist in maths")
}
else if(sub3>75){
    console.log("Dist in physics")
}
else if(sub4>75){
    console.log("Dist in hindi")
}
else{
    console.log("Dist in english")
}