var menu = document.querySelector("h4")
var full = document.querySelector("#full-screen")
var icon= document.querySelector(".icon")

var flag = 0

menu.addEventListener("click",function(){
  if(flag == 0){
    full.style.top = 0
    menu.innerHTML = `<i class="ri-close-fill"></i>`
    menu.style.color="white"
    flag = 1
  }else{
    full.style.top = "-100%"
    menu.innerHTML = `<i class="ri-menu-3-fill"></i>`
    menu.style.color="white"
    flag = 0 
  }
  

})