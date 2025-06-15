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

// Установить текущий год
document.getElementById("year").textContent = new Date().getFullYear();

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAjpoXKt0QvoLNNObOdhEO0LbZZPUZ3QQk",
  authDomain: "cv-olehouseproduction.firebaseapp.com",
  databaseURL: "https://cv-olehouseproduction-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cv-olehouseproduction",
  storageBucket: "cv-olehouseproduction.firebasestorage.app",
  messagingSenderId: "228991653336",
  appId: "1:228991653336:web:d0e0cf9bbf4b54c9d94ead",
};

// Инициализация
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Счётчик просмотров
const viewCountEl = document.getElementById("view-count");
if (viewCountEl) {
  const counterRef = db.ref("views/resume");

  counterRef
    .transaction((currentValue) => {
      return (currentValue || 0) + 1;
    })
    .then((result) => {
      viewCountEl.textContent = result.snapshot.val();
    })
    .catch((error) => {
      console.error("Ошибка Firebase:", error);
    });
}
