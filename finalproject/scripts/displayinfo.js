document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("visitorName") || "Guest";
  const email = localStorage.getItem("visitorEmail") || "No email provided";

  document.getElementById("displayName").textContent = name;
  document.getElementById("displayEmail").textContent = email;
});
