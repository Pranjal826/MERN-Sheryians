var on=document.getElementById("onbtn")
var off=document.getElementById("offbtn")
var bulb=document.querySelector(".bulb")
// on.addEventListener("click",()=>{
//  bulb.style.backgroundColor="yellow"
// }
// )
// off.addEventListener("click",()=>{
//     bulb.style.backgroundColor="white"
// }
// )

var btn=document.getElementById("btn")
var flag=0
btn.addEventListener("click",()=>{
    if(flag==0){
        bulb.style.backgroundColor="yellow"
        bulb.style.transition="0.5s"
        flag=1
        console.log("Jal gaya")
    }
    else{
        bulb.style.backgroundColor="transparent"
        bulb.style.transition="0.5s"
        flag=0
        console.log("Bujh gaya")
    }
}
)