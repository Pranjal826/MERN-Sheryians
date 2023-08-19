var heart = document.querySelector(".heart")
var icon1 = document.querySelector(".icon1")
var icon2 = document.querySelector(".icon2")
var flag = 0
heart.addEventListener("click", function () {
    if (flag == 0) {
        icon1.style.color = "white"
        icon2.style.transform = "scale(1)"  
        icon1.style.transition = "all 0.5s ease"
     
        flag = 1
    }

    else {
        icon1.style.color = "red"
        icon2.style.transition = "all 0.5s ease"
        icon2.classList.toggle("heart-animation") 

        flag = 0
    }


})