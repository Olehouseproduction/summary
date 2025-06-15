const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

function setTheme(dark) {
  if (dark) {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  } else {
    body.classList.remove("dark");
    toggleBtn.textContent = "🌙";
  }
}

// Проверяем сохранённую тему
const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark");

toggleBtn.addEventListener("click", () => {
  const isDark = !body.classList.contains("dark");
  setTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
