var menu =document.querySelector("h3")
var full=document.querySelector("#full")
var flag=0
menu.addEventListener("click",()=>{
   if(flag==0){
    full.style.top=0
    menu.innerHTML=`<i class="ri-close-line"></i>`
    flag=1
   }
   else{
    full.style.top="-100%"
    menu.innerHTML=`<i class="ri-menu-2-line"></i>`
    flag=0
   }

})