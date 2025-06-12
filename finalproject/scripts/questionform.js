document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    localStorage.setItem("visitorName", name);
    localStorage.setItem("visitorEmail", email);

    window.location.href = "questionform.html";
  });
});
