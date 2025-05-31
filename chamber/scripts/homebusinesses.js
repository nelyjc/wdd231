document.addEventListener('DOMContentLoaded', () => {
  const membersContainer = document.getElementById('business-card');
  const membersURL = 'data/members.json';

  async function getMembersData() {
    try {
      const response = await fetch(membersURL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();

      // Select 3 featured businesses by name (update as needed)
      const featuredNames = ["Wasatch Wellness", "Mountain Tech", "Provo Cafe"];
      const featuredMembers = jsonData.members.filter(member =>
        featuredNames.includes(member.name)
      );

      displayMembers(featuredMembers);
    } catch (error) {
      console.error('Error loading member data:', error);
      membersContainer.innerHTML = '<p class="error-message">Unable to load featured businesses.</p>';
    }
  }

  function displayMembers(members) {
    membersContainer.innerHTML = ''; // Clear any placeholder content

    members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('business-card');

      const logo = document.createElement('img');
      logo.src = `images/${member.image}`;
      logo.alt = `${member.name} Logo`;
      logo.loading = 'lazy';

      const name = document.createElement('p');
      name.innerHTML = `<strong>${member.name}</strong><br><span>${member.description}</span>`;

      const email = document.createElement('p');
      email.innerHTML = `<strong>EMAIL:</strong> info@${member.website.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]}`;

      const phone = document.createElement('p');
      phone.innerHTML = `<strong>PHONE:</strong> ${member.phone}`;

      const website = document.createElement('p');
      website.innerHTML = `<strong>URL:</strong> <a href="${member.website}" target="_blank">${member.website}</a>`;

      card.appendChild(logo);
      card.appendChild(name);
      card.appendChild(email);
      card.appendChild(phone);
      card.appendChild(website);

      membersContainer.appendChild(card);
    });
  }

  getMembersData();
});
