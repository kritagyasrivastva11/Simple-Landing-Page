const hamb = document.querySelector(".hamb");
const navList = document.querySelector(".menu-overlay");

hamb.addEventListener("click", function() {
    navList.classList.toggle("active");
    hamb.classList.toggle("click");
});

// Adding keyboard accessibility
hamb.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === " ") { // Allow activation with Enter or Space
        navList.classList.toggle("active");
        hamb.classList.toggle("click");
        event.preventDefault(); // Prevent default to avoid scrolling
    }
});