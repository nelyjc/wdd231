document.addEventListener('DOMContentLoaded', () => {
  // 1. Set timestamp hidden field
  const timestampField = document.getElementById('timestamp');
  if (timestampField) {
    const now = new Date();
    timestampField.value = now.toISOString();
  }

  // 2. Modal handling
  const modalLinks = document.querySelectorAll('.open-modal');
  const modals = document.querySelectorAll('.modal');
  const modalCloses = document.querySelectorAll('.close'); // Fixed class name

  // Open modal on link click
  modalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = link.getAttribute('href').replace('#', '');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        modal.querySelector('.close').focus();
      }
    });
  });

  // Close modal on close button click
  modalCloses.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    });
  });

  // Close modal when clicking outside the modal content
  window.addEventListener('click', (e) => {
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  });

  // Optional: Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      });
    }
  });

  // 3. Animate membership cards on page load (fade-in and slide up)
  const cards = document.querySelectorAll('.membership-card');
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(10px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, 150 * index);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
});
