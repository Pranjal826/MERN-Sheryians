var arr=[
    {
        dp:"https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        story:"https://images.unsplash.com/photo-1610631066894-62452ccb927c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },

    {
        dp:"https://images.unsplash.com/photo-1590650213165-c1fef80648c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        story:"https://plus.unsplash.com/premium_photo-1691917243211-9e2a353f238b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1663954645655-b5890232b10f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        story:"https://images.unsplash.com/photo-1598815000898-7d8cd4dc90f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWN0cmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a29yZWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        story:"https://images.unsplash.com/photo-1546471180-335a013cb87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtvcmVhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        story:"https://images.unsplash.com/photo-1630930195151-3b8434d19cd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtvcmVhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1661964306610-5a918aecba05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        story:"https://images.unsplash.com/photo-1570212773364-e30cd076539e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWN0cmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1657846256980-62f7166394c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVrcmFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        story:"https://images.unsplash.com/photo-1559588485-27e8606e0ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVrcmFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    }
    
]
var card = document.getElementById("card");
// function showStory(index) {
//   var story = arr[index].story;
//   var modal = document.createElement("div");
//   modal.className = "modal";
//   modal.innerHTML = `
//     <div class="modal-content">
//       <img src="${story}" alt="Story">
//     </div>
//   `;
//   card.appendChild(modal);

//   setTimeout(function() {
//     if (modal.parentNode === card) {
//       card.removeChild(modal); 
//     }
//   }, 2000);
// }
var storiyan=document.querySelector("#storiyan")
var full=document.querySelector("#full-scr")

var clutter = ""
arr.forEach(function(elem,index){
    clutter += `<div class="story">
    <img id="${index}" src="${elem.dp}" alt="">
  </div>`
})
storiyan.innerHTML = clutter
 storiyan.innerHTML = clutter;
  storiyan.addEventListener("click",function(dets){
    full.style.display = "initial"
  full.style.backgroundImage = `url(${arr[dets.target.id].story})`
  setTimeout(function(){
  full.style.display = "none"
  },2000)
  })