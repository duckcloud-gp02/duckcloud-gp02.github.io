document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Load team members from JSON file and create team members grid
    fetch('./public/data/team-members.json')
        .then(response => response.json())
        .then(data => {
            if (data.team_members && Array.isArray(data.team_members)) {
                createTeamMembers(data.team_members);
                setupInfiniteRowAnimation();
            } else {
                throw new Error('Invalid data structure in JSON file');
            }
        })
        .catch(error => console.error('Error loading team members:', error));
});

function createTeamMembers(teamMembers) {
    if (!Array.isArray(teamMembers)) {
        console.error('teamMembers is not an array:', teamMembers);
        return;
    }

    const teamContainer = document.querySelector('.team-members');
    if (!teamContainer) {
        console.error('Team container not found');
        return;
    }

    teamMembers.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('team-member');

        memberElement.innerHTML = `
            <img src="${member.avatar_url}" alt="${member.name}">
            <div class="team-member-info">
                <h3>${member.name}</h3>
                <a href="${member.profile_url}" target="_blank" class="profile-button">Profile</a>
                <p>${member.role}</p>
                <p>${member.bio}</p>
            </div>
        `;

        teamContainer.appendChild(memberElement);
    });
}

function setupInfiniteRowAnimation() {
    const teamContainer = document.querySelector('.team-members');
    if (!teamContainer) return;

    // Clone the team members multiple times
    const originalMembers = teamContainer.innerHTML;
    teamContainer.innerHTML = originalMembers.repeat(6); // Repeat 6 times

    // Wrap the team-members in a container
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'team-carousel-container';
    teamContainer.parentNode.insertBefore(carouselContainer, teamContainer);
    carouselContainer.appendChild(teamContainer);

    // Adjust animation duration based on the number of original team members
    const memberCount = teamContainer.children.length / 6; // Divide by 6 because we repeated 6 times
    const animationDuration = memberCount * 10; // 10 seconds per original member set
    teamContainer.style.animationDuration = `${animationDuration}s`;
}