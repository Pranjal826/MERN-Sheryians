// sum of n numbers
// var n=+prompt("Enter how many number you want to sum.")
// var sum=0
// for(let i=0;i<n;i++){
//     var num=+prompt("Enter number")
//     sum=sum+num
// }
// console.log(sum)


// Factorial of number
// var num=+prompt("Enter number")
// function fact(num){
//     let res=1;
//     if(num==0)
//     return 1;
//     for(let i=2;i<=num;i++)
//         res*=i
//         return res
    
// }
// console.log(fact(num))


// 

// Sum of even and odd numbers in range respectively
// var num=+prompt("Enter value of n")
// var even=0
// var odd=0
// for(var i=0;i<num;i++){
//     var n=+prompt("Enter numbers")
//     if(n%2==0){
//         even=even+n
//     }
//     else{
//         odd=odd+n
//     }
// }
// console.log(even)
// console.log(odd)


// Number divisible by 3 or 5
var n=+prompt("Enter range")
function threeorfive(n){
    for(var i=0;i<=n;i++){
        if(i%3===0||i%5===0){
            console.log(i)
        }
        }    
}
threeorfive(n)
