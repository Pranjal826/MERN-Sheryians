// var name=prompt("Enter your name");
// console.log(`My name is ${name}`)
// var num1=(prompt("Enter number1"))
// var num2=FileSystemDirectoryReader(prompt("Enter num2"))
// function sum(num1,num2){
//     var sum=num1+num2
//     console.log(`the sum of num1 and num2 is ${sum}`)
// }
// sum(num1,num2)


// take two float and sum up
// var num1=parseFloat(prompt("Enter number1"))
// var num2=parseFloat(prompt("Enter num2"))
// function sum(num1,num2){
//     var sum=num1+num2
//     console.log(`the sum of num1 and num2 is ${sum}`)
// }
// sum(num1,num2)

// Write a program to accept username and age
// var name=prompt("Enter your name")
// var age=parseInt(prompt("Enter your age"))
// function details(name,age){
//     console.log(`Hello ${name}, your age is ${age}`)
// }
// details(name,age)
// Write a program to accept 3 integers and check whether all are equal ,any two are equal
// or no two are equal
// var num1=parseInt(prompt("Enter number1"))
// var num2=parseInt(prompt("Enter num2"))
// var num3=parseInt(prompt("Enter num3"))
// function equal(num1,num2,num3){

//     if(num1==num2 && num2==num3){
//         console.log("All are equal")
//     }
//     else if(num1==num2 || num2==num3 || num1==num3){
//         console.log("Any two are equal")
//     }
//     else{
//         console.log("No two are equal")
//     }
// }
// equal(num1,num2,num3)

// Accept 3 integers and prints them in ascending order
var num1=parseInt(prompt("Enter number1"))
var num2=parseInt(prompt("Enter num2"))
var num3=parseInt(prompt("Enter num3"))
var arr=[]
arr.push(num1)
arr.push(num2)
arr.push(num3)
arr.sort()
console.log(arr)
// print array in descending order using reverse
arr.reverse()
console.log(arr)
// console.log(arr)
// using for loop in descending order
// for(var i=arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }
// Frequency of elements in array
// var arr=[1,2,3,4,5,6,71,2,34,5]
// var count=0
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             count++
//         }
//     }
//     console.log(`${arr[i]} occurs ${count} times`)
//     count=0
// }
// using map method
// var arr=[1,2,3,4,5,6,71,2,34,5]
// var count=0
// var map=new Map()
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             count++
//         }
//     }
//     map.set(arr[i],count)
//     count=0
// }
// var arr1=[]
// Split method 
// var str="hello world"
// var arr=str.split("he ")
// console.log(arr)