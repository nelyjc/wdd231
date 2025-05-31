document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.querySelector('.business-cards');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');
    const membersURL = 'data/members.json'; 

    function getMembershipLevelName(level) {
        switch (level) {
            case 1:
                return 'Member';
            case 2:
                return 'Silver Member';
            case 3:
                return 'Gold Member';
            default:
                return 'Standard Member';
        }
    }

    async function getMembersData() {
        try {
            const response = await fetch(membersURL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const jsonData = await response.json();
            displayMembers(jsonData.members);
        } catch (error) {
            console.error('Could not fetch members data:', error);
            if (membersContainer) {
                membersContainer.innerHTML = '<p class="error-message">Sorry, member information is currently unavailable. Please try again later.</p>';
            }
        }
    }

    function displayMembers(membersArray) { 
        if (!membersContainer) {
            console.error('Members container element not found in the DOM!');
            return;
        }
        membersContainer.innerHTML = '';

        membersArray.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('business-card');

            const logo = document.createElement('img');
            logo.src = `images/${member.image}`; 
            logo.alt = `${member.name} Logo`;
            logo.classList.add('business-logo');
            logo.loading = 'lazy';

            const name = document.createElement('h3');
            name.textContent = member.name;
            name.classList.add('business-name');

            const address = document.createElement('p');
            address.textContent = member.address;
            address.classList.add('business-address');

            const phone = document.createElement('p');
            phone.textContent = member.phone;
            phone.classList.add('business-phone');

            const websiteLink = document.createElement('a');
            websiteLink.href = member.website;
            websiteLink.textContent = member.website;
            websiteLink.target = '_blank';
            websiteLink.rel = 'noopener noreferrer';
            websiteLink.classList.add('business-website');

            const membership = document.createElement('p');
            membership.textContent = `Membership: ${getMembershipLevelName(member.membershipLevel)}`;
            membership.classList.add('membership-level');

            const description = document.createElement('p');
            description.textContent = member.description;
            description.classList.add('other-info');

            card.appendChild(logo);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(websiteLink);
            card.appendChild(membership);
            card.appendChild(description);

            membersContainer.appendChild(card);
        });
    }

    if (gridViewBtn && listViewBtn && membersContainer) {
        gridViewBtn.addEventListener('click', () => {
            membersContainer.classList.remove('list-view');
            membersContainer.classList.add('grid-view');
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        });

        listViewBtn.addEventListener('click', () => {
            membersContainer.classList.remove('grid-view');
            membersContainer.classList.add('list-view');
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
        });

        membersContainer.classList.add('grid-view');
        gridViewBtn.classList.add('active');
    } else {
        console.warn('View toggle buttons or members container not found.');
    }

    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedP = document.getElementById('lastModified');
    if (lastModifiedP) {
        lastModifiedP.textContent = `Last Updated: ${document.lastModified}`;
    }

    getMembersData();
});
