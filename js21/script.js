var box = document.querySelector(".box");
var btn = document.querySelector("button");
var a, b, c;

btn.addEventListener("click", function() {
    a = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    c = Math.floor(Math.random() * 255);

    // Using GSAP for color change and animation
    gsap.to(box, {
        duration: 0.5,
        backgroundColor: `rgb(${a},${b},${c})`,
        scale: 1.2, // Scale up the box during animation
        opacity: 0, // Fade out the box during animation
        onComplete: function() {
            // Restore the box to its original state after animation
            gsap.to(box, {
                duration: 0.5,
                scale: 1,
                opacity: 1
            });
        }
    });
});
