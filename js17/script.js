var btn = document.querySelector(".btn");
var h2 = document.querySelector("h2");
var flag = 0
var timeOut;
btn.addEventListener("click", () => {
    if (flag == 0) {
        h2.innerHTML = "Stranger"
        h2.style.color = "red"
        btn.innerHTML = "Requesting..."
       
       timeOut= setTimeout(()=>{
            h2.innerHTML = "Friends"
            h2.style.color = "green"
            btn.innerHTML = "Remove"
            
        },2000)
        flag = 1
    }
    else {
        h2.innerHTML = "Stranger"
        btn.innerHTML = "Add Friend"
        h2.style.color = "red"
       
        flag=0
    }
    clearTimeout(timeOut)
})