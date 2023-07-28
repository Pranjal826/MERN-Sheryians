// if(10>5){
//     let a=10;
//     console.log(10)
// }
// console.log(a);

// Template literals
// var math=95
// var phy=99
// var chem=100
// out of range, should be between [60-100]
// console.log(`Marks in maths ${math} ,physics ${phy} and in chemistry ${chem}`)

var dance=function(user){
    console.log("Hi there",user)
}//First class function

dance("pranjal")
// Fat arrow funtion
const greet = (user) => {
    return "Hello"+" "+user;
    };
    console.log(greet("Pranjal"));

// Reverse array 
var arr=[10,20,30,40,50]
var arr1=[...arr]
arr1.reverse()
// // arr is changing when reversing arr1 how to protect this?
console.log(arr1)
console.log(arr)
// // Do not change arr when reversing arr1

// var str="Pranjal Shukla"
// var str1=str.split("a")
// console.log(str1)

