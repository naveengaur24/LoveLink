document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const profileForm = document.getElementById('profileForm');
    const matchResults = document.getElementById('matchResults');
    const profileSection = document.getElementById('profile');
    const matchesSection = document.getElementById('matches');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;

        console.log(`Registered with Username: ${username}, Email: ${email}`);
        alert('Registration Successful 🚀');

        profileSection.classList.remove('hidden');
        registrationForm.classList.add('hidden');
    });

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const location = document.getElementById('location').value;
        const interests = document.getElementById('interests').value;

        console.log(`Profile Created: Name: ${name}, Age: ${age}, Location: ${location}, Interests: ${interests}`);
        displayMatches();

        matchesSection.classList.remove('hidden');
        profileSection.classList.add('hidden');
    });

    function displayMatches() {
        const matches = [
            { name: 'Alice', age: 25, location: 'New York', interests: 'Reading, Traveling' },
            { name: 'Bob', age: 28, location: 'San Francisco', interests: 'Cooking, Hiking' },
            { name: 'Charlie', age: 30, location: 'Chicago', interests: 'Movies, Music' },
        ];

        matchResults.innerHTML = ''; 
        matches.forEach(match => {
            const matchDiv = document.createElement('div');
            matchDiv.className = 'match';
            matchDiv.innerHTML = `
                <h3>${match.name} 💕</h3>
                <p>Age: ${match.age}</p>
                <p>Location: ${match.location}</p>
                <p>Interests: ${match.interests}</p>
            `;
            matchResults.appendChild(matchDiv);
        });
    }
});


