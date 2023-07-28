var second = document.getElementsByClassName("second")
for (var i = 0; i < second.length; i++) {
    second[i].style.display = "none";
    second[i].style.opacity = "0";
    if(second[i].style.opacity="0"){
        second[i].classList.add("sec")
        

    }
}

// var second=document.getElementsByClassName("second")
var first = document.getElementsByClassName("first")
var left = document.getElementById("left-arrow")
var right = document.getElementById("right-arrow")
left.addEventListener("click", () => {
    for (var i = 0; i < second.length; i++) {
        second[i].style.opacity = "0";
        second[i].style.display = "none";
    }
    for (var i = 0; i < first.length; i++) {
        first[i].style.display = "block"
        first[i].style.opacity = "1"; 
        
    }
})
right.addEventListener("click", () => {
    for (var i = 0; i < first.length; i++) {
        first[i].style.display = "none"
        first[i].style.opacity = "0";
    }
    for (var i = 0; i < second.length; i++) {
        second[i].style.display = "block"
        
        second[i].style.opacity = "1";
    }
}
)

var body=document.querySelector("body")
var day=document.getElementById("day")
var night=document.getElementById("night")
day.addEventListener("click",()=>{
    body.style.backgroundColor="white"
    day.style.display="none"
    night.style.display="block"
    // Add transition
    body.style.transition="1s all"
}
)
night.addEventListener("click",()=>{
    body.style.backgroundColor="black"
    night.style.display="none"
    day.style.display="block"
    body.style.transition="1s all"

}
)
if(body.style.backgroundColor="white"){
    day.style.display="none"

}
else{
    night.style.display="none"
}

    var bar = document.getElementById("bars");
    var nav = document.getElementById("nav-list");
    bar.addEventListener("click", () => {
        nav.classList.toggle("show-lists");
    }
    )
 