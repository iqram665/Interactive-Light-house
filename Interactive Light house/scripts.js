const center = document.getElementById("light_center");
const hand = document.getElementById("Light");

function setLightCenter() {
    // Reset rotation before calculation
    hand.style.transform = "rotate(0deg)";
    
    // Measure the live position of the lighthouse tower
    var bbox = document.getElementById("Lighthouse").getBoundingClientRect();
    
    // Set the focal point of the light right in the middle of the top of the tower
    // Adding window.scrollY and scrollX ensures the light stays in place when the screen is resized
    center.style.top = `${bbox.top + window.scrollY + 5}px`;
    center.style.left = `${bbox.left + window.scrollX + 12}px`;
}

function resetAnimation() {
    hand.style.transform = "rotate(0deg)";
    // Rotates smoothly in 10 seconds and loops infinitely
    hand.style.animation = "rotate 10s linear infinite";
}

// When the page loads and when the window is resized, the position will be automatically adjusted
window.addEventListener("load", () => {
    setLightCenter();
    resetAnimation();
});

window.addEventListener("resize", setLightCenter);
window.addEventListener("scroll", setLightCenter);