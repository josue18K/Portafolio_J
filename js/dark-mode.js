// js/dark-mode.js
const toggleButton = document.getElementById('dark-mode-toggle');
const bodyElement = document.body;

// Si hay una preferencia almacenada, se aplica al cargar la página
if (localStorage.getItem('darkMode') === 'enabled') {
  bodyElement.classList.add('dark-mode');
  toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
}

toggleButton.addEventListener('click', function() {
  bodyElement.classList.toggle('dark-mode');
  if (bodyElement.classList.contains('dark-mode')) {
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('darkMode', 'disabled');
  }
});
