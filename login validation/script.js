// Email validation
function submithandler() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Wrong email or password")
        return false;
    } else {
       email.innerHTML = "";
        return true;
    }
}