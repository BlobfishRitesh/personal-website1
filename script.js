console.log("Website is loaded!");
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