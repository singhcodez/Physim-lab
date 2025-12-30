function searchSims() {
    // 1. Get the search input value and convert to lowercase
    const input = document.getElementById('simSearch').value.toLowerCase();
    
    // 2. Get all the simulation cards
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // 3. Get the title text from the card
        const title = card.querySelector('h3').innerText.toLowerCase();
        const description = card.querySelector('p').innerText.toLowerCase();

        // 4. Check if the search term is in the title or description
        if (title.includes(input) || description.includes(input)) {
            card.style.display = "block"; // Show card
        } else {
            card.style.display = "none"; // Hide card
        }
    });
}




function launchSim(title, fileName) {
    // Switch Views
    document.getElementById('gallery-view').style.display = 'none';
    document.getElementById('sim-view').style.display = 'block';
    
    // Set content
    document.getElementById('current-sim-title').innerText = title;
    const frame = document.getElementById('main-frame');
    
    // Load the local file
    frame.src = fileName;
    
    window.scrollTo(0, 0);
}

function showGallery() {
    document.getElementById('gallery-view').style.display = 'block';
    document.getElementById('sim-view').style.display = 'none';
    document.getElementById('main-frame').src = ""; // Clear frame to save memory
}

function filterSims(grade) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.getAttribute('data-class') === grade) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
