// var arr = [10, 20, 30, 40]
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// concate array string elements

var arr = ["Hi", "I", "am", "developer"];
var str = "";
for (var i = 0; i < arr.length; i++) {
    str += arr[i] + " ";
}
console.log(str);


// Object
// var obj={
//     name:"Rahul",
//     age:20,
//     isSingle:true
// }
// console.log(obj.name);

// var user1={
//     name:"Selmon",
//     age:60,
//     isSingle:true
// }
// var user2={
//     name:"Vicky",
//     age:30,
//     isSingle:false
// }
// user1.name="Lolu"
// console.log(user1.name);


var arr1=[10,20,30,40]
var arr2=arr1
console.log(arr1)
console.log(arr2)

arr2.push(99)
console.log(arr2)
console.log(arr1)
