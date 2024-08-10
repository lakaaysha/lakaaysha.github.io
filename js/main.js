// main.js

document.addEventListener('DOMContentLoaded', (event) => {
    // Ensure the video loops every 5 seconds
    const video = document.querySelector('.hero-bg');
    if (video) {
        video.addEventListener('loadedmetadata', () => {
            if (video.duration > 5) {
                setInterval(() => {
                    if (video.currentTime >= 5) {
                        video.currentTime = 0;
                    }
                }, 100);
            }
        });
    }
:root {
    --color-sand: #E6D5B8;
    --color-terracotta: #B6594C;
    --color-deep-brown: #5E3023;
    --color-muted-green: #7A8C7E;
    --color-cream: #F7F3E8;
    --color-black: #1A1A1A;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    color: var(--color-black);
    background-color: var(--color-cream);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    background-color: var(--color-deep-brown);
    padding: 1rem;
}

nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 1rem;
}

nav ul li a {
    color: var(--color-cream);
    text-decoration: none;
    font-weight: 400;
    transition: color 0.3s ease;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

nav ul li a:hover {
    color: var(--color-sand);
}

main {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.portfolio-page {
    display: flex;
    flex-direction: column;
    padding: 2rem;
}

.portfolio-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.5rem;
    color: var(--color-deep-brown);
    margin-bottom: 2rem;
}

.portfolio-content {
    display: flex;
    gap: 2rem;
}

.portfolio-sidebar {
    flex: 0 0 30%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
}

.portfolio-sidebar h2 {
    font-family: 'Cormorant Garamond', serif;
    color: var(--color-deep-brown);
    margin-bottom: 1rem;
}

.scrollable-list {
    max-height: 300px;
    overflow-y: auto;
    padding-right: 10px;
}

#project-list {
    list-style-type: none;
    padding: 0;
}

#project-list li {
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 0.5rem;
    color: var(--color-deep-brown);
    cursor: pointer;
    transition: color 0.3s ease;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e0e0e0;
}

#project-list li:last-child {
    border-bottom: none;
}

#project-list li:hover {
    color: var(--color-terracotta);
}

.portfolio-display {
    flex: 1;
    position: relative;
    height: 600px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    transition: background-image 0.5s ease-in-out;
}

footer {
    background-color: var(--color-deep-brown);
    color: var(--color-cream);
    text-align: center;
    padding: 1rem;
}

@media (max-width: 768px) {
    .portfolio-content {
        flex-direction: column;
    }

    .portfolio-sidebar, .portfolio-display {
        width: 100%;
    }
}

    // Add more JavaScript functionality as needed
document.addEventListener('DOMContentLoaded', (event) => {
    // Ensure the video loops every 5 seconds
    const video = document.querySelector('.hero-bg');
    if (video) {
        video.addEventListener('loadedmetadata', () => {
            if (video.duration > 5) {
                setInterval(() => {
                    if (video.currentTime >= 5) {
                        video.currentTime = 0;
                    }
                }, 100);
            }
        });
    }

    // Existing or additional JavaScript functionality
    // (e.g., typewriter effect, dynamic background handling, etc.)
});

// Additional JavaScript functionality (e.g., typewriter effect, dynamic background, etc.) will go below this line as we progress step-by-step.

document.addEventListener('DOMContentLoaded', () => {
    const artworks = document.querySelectorAll('.artwork');
    const backgroundContainer = document.getElementById('background-container');
    
    function changeBackground(element) {
        const video = element.dataset.video;
        const image = element.dataset.background;
        const title = element.dataset.title;
        
        const titleElement = document.getElementById('artwork-title');
        typeInEffect(titleElement, title, 100);  // Use your existing typeInEffect function

        if (video) {
            backgroundContainer.innerHTML = `
                <video autoplay loop muted playsinline class="background-media">
                    <source src="${video}" type="video/mp4">
                </video>
            `;
        } else if (image) {
            backgroundContainer.innerHTML = `<img src="${image}" alt="Background Image" class="background-media">`;
        }
    }

    artworks.forEach(artwork => {
        artwork.addEventListener('click', () => changeBackground(artwork));
        
        artwork.addEventListener('mouseenter', () => changeBackground(artwork));
    });

    // Set initial background and title
    if (artworks.length > 0) {
        changeBackground(artworks[0]);
    }
});

});
