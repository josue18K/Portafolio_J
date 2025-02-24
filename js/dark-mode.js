document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los botones que tengan la clase "dark-mode-toggle"
  var darkModeToggles = document.querySelectorAll(".dark-mode-toggle");

  darkModeToggles.forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
  });
});
