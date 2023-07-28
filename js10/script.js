// 1. Primitive datatype
// 2. Reference datatype
// (object) - class instance, array etc
// var a=[2.4,10,20,30,"Pranjal",true,40]
// console.log(a[1])
// a.push(10,2,4)
    
// console.log(a)
// a.pop()
// console.log(a)

// var arr=["Hello"]
// for(var a=0;a<10;a++){
//     arr.push(a)
// }
// console.log(arr)

// var arr=["hello","hey"]
// for(var a=0;a<5;a++){
//     arr.push(a)
// }
// console.log(arr[6])
// var arr=[10,20,30,40,50]
// console.log(arr[arr.length])
// var arr=["Hey","Kaise","ho","aap"]
// console.log(arr[arr.length-1])



// Traversing
var arr=[10,20,30,40]
// for(let i in arr){
//     console.log(arr[i])
// }

for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
arr[0]=99
console.log(arr)