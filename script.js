console.log("Website is loaded!");

// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.body;

if (darkModeBtn) {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        body.classList.add("dark");
        darkModeBtn.textContent = "Dark Mode: On 🌙";
    } else {
        darkModeBtn.textContent = "Dark Mode: Off ☀️";
    }
    darkModeBtn.addEventListener("click", () => {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            darkModeBtn.textContent = "Dark Mode: On 🌙";
            localStorage.setItem("theme", "dark");
        } else {
            darkModeBtn.textContent = "Dark Mode: Off ☀️";
            localStorage.setItem("theme", "light");
        }
    });
}

// A simple function to check if an element is in view
function checkElementsInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

// Makes the scrolling smooth and only fades in when the user sees it
const fadeItems = document.querySelectorAll(".fade-in");
function updateFadeItems() {
    fadeItems.forEach(item => {
        if (checkElementsInView(item)) {
            item.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", updateFadeItems);
window.addEventListener("resize", updateFadeItems);

updateFadeItems();