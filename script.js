console.log("Website is loaded!");
const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.body;

if (darkModeBtn) {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        body.classList.add("dark");
        darkModeBtn.textContent = "Light Mode Toggle ☀️";
    } else {
        darkModeBtn.textContent = "Dark Mode Toggle 🌙";
    }
    darkModeBtn.addEventListener("click", () => {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            darkModeBtn.textContent = "Light Mode Toggle ☀️";
            localStorage.setItem("theme", "dark");
        } else {
            darkModeBtn.textContent = "Dark Mode Toggle 🌙";
            localStorage.setItem("theme", "light");
        }
    });
}