var preeti = document.querySelector("#preeti");
var kabeer = document.querySelector("#kabir");
var h1 = document.querySelector("h1");
var main = document.querySelector("#main");

kabeer.addEventListener("mouseenter", function() {
    main.style.backgroundColor = "red";
    h1.innerHTML = "Jaldi waha se hato";
    kabeer.setAttribute("src", "https://imgs.search.brave.com/L9IPTclqowAkoJ2Cnbe1g1iaU7oJer-bHrQoq8RriHs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS8w/UlhxY1Nta1A1OC9t/cWRlZmF1bHQuanBn");
    preeti.setAttribute("src", "https://imgs.search.brave.com/Si_Q6Bl3TTDKaoZuXFPrsHzZZd79a3DvWQvPTMn3Wn0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGlua3ZpbGxhLmNv/bS9pbWFnZXMvMjAy/Mi0wOS9raWFyYWFk/dmFuaXByZWV0aS5q/cGc");
    
});

preeti.addEventListener("mouseout", function() {
    main.style.backgroundColor = "cyan";
    h1.innerHTML = "Cameraman jaldi focus karo";
    preeti.setAttribute("src", "https://static.toiimg.com/photo/msid-72747591/72747591.jpg");
    kabeer.setAttribute("src", "https://static.abplive.com/wp-content/uploads/2019/12/12075514/Kabir-Singh-site.jpg?impolicy=abp_cdn&imwidth=650");
});
