const cardsContainer = document.querySelector('#members');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

async function getMembers() {
  const response = await fetch('data/members.json');
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  cardsContainer.innerHTML = ''; // clear existing content
  members.forEach(member => {
    const card = document.createElement('section');
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.description}</p>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership Level: ${["", "Member", "Silver", "Gold"][member.membership]}</p>
    `;
    cardsContainer.appendChild(card);
  });
}

gridButton.addEventListener('click', () => {
  cardsContainer.classList.add('grid');
  cardsContainer.classList.remove('list');
});

listButton.addEventListener('click', () => {
  cardsContainer.classList.add('list');
  cardsContainer.classList.remove('grid');
});

getMembers();
