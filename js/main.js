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
document.addEventListener('DOMContentLoaded', () => {
    const projectMenu = document.getElementById('project-menu');
    const mediaContainer = document.getElementById('media-container');
    const projectTitle = document.getElementById('project-title');

    projectMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const imageSrc = event.target.getAttribute('data-image');
            const videoSrc = event.target.getAttribute('data-video');
            const projectName = event.target.textContent;

            // Clear previous media
            mediaContainer.innerHTML = '';

            if (imageSrc) {
                // Create and display new image
                const img = document.createElement('img');
                img.src = imageSrc;
                img.alt = projectName;
                mediaContainer.appendChild(img);
            } else if (videoSrc) {
                // Create and display new video
                const video = document.createElement('video');
                video.src = videoSrc;
                video.controls = true;
                video.autoplay = true;
                video.muted = true;
                video.loop = true;
                mediaContainer.appendChild(video);
            }

            // Update project title
            projectTitle.textContent = projectName;
        }
    });
});
