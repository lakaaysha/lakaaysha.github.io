document.addEventListener('DOMContentLoaded', () => {
    // Ensure the video loops every 5 seconds on the hero background
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

    // Handle dynamic background changes for the portfolio page
    const artworks = document.querySelectorAll('.artwork');
    const backgroundContainer = document.getElementById('background-container');
    
    function changeBackground(element) {
        const video = element.dataset.video;
        const image = element.dataset.background;
        const title = element.dataset.title;
        
        const titleElement = document.getElementById('artwork-title');
        typeInEffect(titleElement, title, 100);  // Assuming you have a typeInEffect function

        if (video) {
            backgroundContainer.innerHTML = `
                <video autoplay loop muted playsinline class="background-media">
                    <source src="${video}" type="video/mp4">
                </video>
            `;
        } else if (image) {
            backgroundContainer.innerHTML = `<img src="${image}" alt="${title}" class="background-media">`;
        }
    }

    artworks.forEach(artwork => {
        artwork.addEventListener('click', () => changeBackground(artwork));
        
        artwork.addEventListener('mouseenter', () => changeBackground(artwork));
    });

    // Set initial background and title
