document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("visit-message-sidebar");
  const now = Date.now();
  const lastVisit = localStorage.getItem("lastVisit");
  let message = "";

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysBetween = Math.floor((now - parseInt(lastVisit)) / msPerDay);

    if (daysBetween < 1) {
      message = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
      message = "You last visited 1 day ago.";
    } else {
      message = `You last visited ${daysBetween} days ago.`;
    }
  }

  sidebar.textContent = message;

  // Update last visit time for next visit
  localStorage.setItem("lastVisit", now);
});
