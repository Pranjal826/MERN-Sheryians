// 4 pillars of DOM
// 1. Selection of an element
// 2. Changing CSS
// 3. Changing HTML
// 4. Event Listener

// var a=document.querySelector("h1")
// a.innerHTML="Hello fraands!!"
// console.log(a)

var h = document.querySelector("h1")

var btn = document.querySelector("button")
btn.addEventListener('click', () => {
    // console.log(`Hey ${user}`)
    h.innerHTML = "I am Pranjal"
    h.style.color = "red"
}
)