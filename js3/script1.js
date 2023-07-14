// // Conditional statement
// var n=12
// if(n%2==0){
//     console.log("Even")
// }
// else{
//     console.log("Odd")
// }

// // Palindrome number using reverse funtion of js
// var a=121
// var b=a.toString()
// var c=b.split("").reverse().join("")
// if(c==b){
//     console.log("Palindrome")
// }
// else{
//     console.log("Not Palindrome")
// }


// Take age as input and print the person eligible for vote
// var age=Number(prompt("Enter your age"))
// if(age>=18){
//     console.log("Eligible for vote")
// }
// else{
//     console.log("Not eligible for vote")
// }

// Take a number as input and print the number is positive or negative
//  var a=+(prompt("Enter number"))
// if(a>0){
//     alert("Positive")
// }
// else if(a===0){
//     alert("Number is 0")
// }
// else{
//     alert("Number is negative");
// }


// Takes 2 number as input and print the greater one
// Take 3 number a input and print the greater greater one


// var a=Number(prompt("Enter numbr 1"))
// var b =Number(prompt("ENter number 2"))
// if(a>b){
//     console.log("Num 1 is greater",a)
// }
// else{
//     console.log("Num 2 is greater",b)
// }


var a=Number(prompt("Enter num1"))
var b=Number(prompt("Enter number2"))
var c=Number(prompt("Enter num3"))
if(a>b&&a>c){
    console.log("Num1 is greater",a)

}
else if(b>a&&b>c){
    console.log("Number 2 is greater",b)
}
else{
    console.log("Number3 is greater",c)
}