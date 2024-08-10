document.addEventListener('DOMContentLoaded', () => {
    const artworks = document.querySelectorAll('.artwork');
    const backgroundContainer = document.getElementById('background-container');
    const titleElement = document.getElementById('artwork-title');
    
    function changeBackground(element) {
        const video = element.dataset.video;
        const image = element.dataset.background;
        const title = element.dataset.title;

        // Update title with typewriter effect or simply set it
        if (title) {
            titleElement.innerText = title;  // Simple update, replace this with typewriter effect if needed
        }

        // Update the background with either a video or an image
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

    // Set initial title or background if needed
    if (artworks.length > 0) {
        changeBackground(artworks[0]);
    }
});
