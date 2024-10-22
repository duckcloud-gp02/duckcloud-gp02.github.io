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

    // Load team members from JSON file
    fetch('/public/data/team-members.json')
        .then(response => response.json())
        .then(data => {
            const teamMembersContainer = document.getElementById('team-members');
            data.forEach(member => {
                const memberElement = document.createElement('div');
                memberElement.classList.add('team-member');
                memberElement.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.role}</p>
                `;
                teamMembersContainer.appendChild(memberElement);
            });
        })
        .catch(error => console.error('Error loading team members:', error));
});