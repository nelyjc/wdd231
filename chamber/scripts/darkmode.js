document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.dark-mode-toggle');
  
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // change icon on toggle
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
});
