// let a=+prompt("Enter Number 1")
// let b=+prompt("Enter Number 2")
// let c=+prompt("Enter number3 ")
// if(a>b&&a>c){
//     console.log("A is greater")
// }
// else if(b>a&&b>c)
// {
//     console.log("B is greater")
// }
// else {if(c>a&&c>b)
//     console.log("C is greater")
// }
// if(a<b&&a<c){
//     if(b<c){
//         console.log(a,b,c);
//     }
//     else{
//         console.log(a,c,b);
//     }
    
// }
// else if(b<a&&b<c){
//     if(a<c){
//         console.log(b,a,c)

//     }
//     else{
//         console.log(b,c,a)
//     }
// }
// else if(c<a&&c<b){
//     if(a<b){
//         console.log(c,a,b)
//     }
//     else{
//         console.log(c,b,a)
//         }
// }
// Compound Interest using simple prompt
// let principal=+prompt("Enter principle")
// let rate=+prompt("Enter rate")
// let n=+prompt("Enter n")
// let time=+prompt("Enter time")
// rate/=n; 
// let amount=principal*(1+(rate/n))**n*time
// console.log(amount-principal)

// Leap year using javascript
// get todays date object from js
// let year=+prompt("Enter year")
// if(year )
// take user's desired leapyear as an input in a prompt box
// check weather the given character is vowel or consonent
let character=prompt("Enter character")
if(character=="a"||character=="A"||character=="e"||character=="E"||character=="o"||character=="O"||character=='u'||character=="U"||character=="i"||character=="I")
{
    console.log(`${character} is a vowel`)
}
else{
    console.log(`${character} is a consonent`)
}