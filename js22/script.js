var left = document.getElementById("left");
var right = document.getElementById("right");
var sliderContainer = document.querySelector(".slider-container");
var slider = document.querySelector(".slider");
var slideWidth = 200;  
var position = 0;

left.addEventListener("click", () => {
    if (position < 0) {
        position += slideWidth;
        slider.style.transform = `translateX(${position}px)`;
    }
});

right.addEventListener("click", () => {

        position -= slideWidth;
        slider.style.transform = `translateX(${position}px)`;
    
});
