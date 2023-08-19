
var swiping = 0
var arrowRight = document.querySelector("#right")
var arrowLeft = document.querySelector("#left")
var page = document.querySelector("#page")
arrowRight.addEventListener("click",function(){
  swiping += 100
  page.scrollTo(swiping,0)
})

arrowLeft.addEventListener("click",function(){
  swiping -= 100
  page.scrollTo(swiping,0)
})