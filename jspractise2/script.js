var text=document.getElementById("text")
var btn=document.getElementById("btn")
var flag=0;
var pic=document.querySelector(".card")
btn.addEventListener('click',()=>{
    if(flag==0){
    text.innerHTML="Friends"
    text.style.color="green"
    btn.innerHTML="Remove Friend"
    pic.style.display="flex"
    flag=1
    }
    else{
        text.innerHTML="Stranger"
        text.style.color="red"
        btn.innerHTML="Add Friend"
        pic.style.display="none"
        flag=0
    }

})

