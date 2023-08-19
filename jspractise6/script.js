var img = document.querySelector(".img");
var isHidden = false;
var profile = document.querySelector(".profile");
var mid = document.querySelector(".mid");
var input = document.querySelector("input");

img.addEventListener("click", () => {
  if (isHidden) {
    img.style.top = "0%";
  } else {
    img.style.top = "-100%"; 
  }

});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    var passwordValue = input.value;
    if (passwordValue === "pranjal") {
      mid.style.top = "-100%";
    }
    else{
        alert("Password Sahi daal bc!!")
    }
    input.value = ""; // Clear the input field after processing the password
  }
});
// Function to update the time and date
function updateTimeAndDate() {
    const timeElement = document.getElementById("current-time");
    const dateElement = document.getElementById("current-date");

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',second:'2-digit' });
    const dateString = now.toLocaleDateString();

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Call the function once when the page loads to set the initial time and date
updateTimeAndDate();

// Call the function every second to update the time
setInterval(updateTimeAndDate, 1000);
