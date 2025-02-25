// public/js/theme.js
function getTheme() {
  return localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);

  // 🎨 Actualizar íconos sociales
  document.querySelectorAll('img.theme-icon').forEach((icon) => {
    const newSrc = theme === "dark" ? icon.dataset.darkSrc : icon.dataset.lightSrc;
    if (newSrc) icon.src = newSrc;
  });

  // 🌙☀️ Cambiar iconos del botón
  const sunIcon = document.querySelector(".sun");
  const moonIcon = document.querySelector(".moon");
  if (sunIcon && moonIcon) {
    sunIcon.style.display = theme === "dark" ? "block" : "none";
    moonIcon.style.display = theme === "dark" ? "none" : "block";
  }
}

function toggleTheme() {
  const newTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
}

window.addEventListener("DOMContentLoaded", () => {
  applyTheme(getTheme());
  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
});
