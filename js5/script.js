// var age=Number(prompt("Enter your age:"))
// if(age>=18){
//     console.log("Eligible")
// }
// else {
//     console.log("Not Eligible")
// }


// var one=Number(prompt("Enter side1:"))
// var two=Number(prompt("Enter side2:"))
// var three=Number(prompt("Enter side3"))
// if(one!=two&&one!=three&&two!=three){
//     alert("Scalene triangle")
// }
// else if(one==two&&one==three&&two==three){
//     alert("Equilateral triangle")
// }
// else{
//     alert("Isosceles triangle")
// }

var price=Number(prompt("Enter price"))
if(price>10000){
    var newprice=price*(20/100)
    console.log("Discounted price is "+newprice)
    console.log(price-newprice)
}
else if(price>=5000&&price<=9999){
    var newprice=price*(15/100)
    console.log("Discounted price is "+newprice)
    console.log(price-newprice)
}
else if(price<5000){
    var newprice=price*(10/100)
    console.log("Discounted price is "+newprice)
    console.log(price-newprice)
}
else{
    console.log("Invalid")
}