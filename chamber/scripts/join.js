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
  const modalCloses = document.querySelectorAll('.modal-close');

  // Open modal on link click
  modalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = link.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        modal.querySelector('.modal-close').focus();
      }
    });
  });

  // Close modal when clicking close button or outside modal content
  modalCloses.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    });
  });

  window.addEventListener('click', (e) => {
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  });

  // 3. Animate membership cards on page load (fade-in and slight slide)
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
