document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards-container");

  fetch("data/discover.json")
    .then(response => response.json())
    .then(data => {
      data.forEach((item, index) => {
        const card = document.createElement("article");
        card.classList.add("card");
        card.style.gridArea = `card${index + 1}`;

        card.innerHTML = `
          <h2>${item.title}</h2>
          <figure>
            <img src="${item.image}" alt="${item.title}">
          </figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button>Learn More</button>
        `;

        // Add event listener to open Google Maps website in new tab
        const btn = card.querySelector("button");
        btn.addEventListener("click", () => {
          if (item.website) {
            window.open(item.website, "_blank");
          } else {
            alert("No map link available.");
          }
        });

        container.appendChild(card);
      });
    })
    .catch(err => console.error("Error loading JSON:", err));
});
