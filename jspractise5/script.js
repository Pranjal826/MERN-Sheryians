document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
    const x = e.pageX / window.innerWidth; // Get the cursor position relative to the window width
    const y = e.pageY / window.innerHeight; // Get the cursor position relative to the window height
    const hue = Math.floor(360 * x); // Map the horizontal position to a hue value (0 to 360)
    const saturation = Math.floor(100 * y); // Map the vertical position to a saturation value (0 to 100)
    cursor.style.backgroundColor = `hsl(${hue}, ${saturation}%, 50%)`; // Update cursor color
  });
  
  // Add an event listener to the document to handle mouseenter and mouseleave events
  document.addEventListener("mouseenter", () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.transform = "scale(1.5)";
    cursor.style.opacity = "1";
  });
  
  document.addEventListener("mouseleave", () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.transform = "scale(1)";
    cursor.style.opacity = "0.7";
  });
  