document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('#project-menu li');
    const mediaContainer = document.getElementById('media-container');

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const image = item.dataset.image;
            const video = item.dataset.video;

            if (image) {
                mediaContainer.innerHTML = `<img src="${image}" alt="Project Image" class="background-media">`;
            } else if (video) {
                mediaContainer.innerHTML = `
                    <video autoplay loop muted playsinline class="background-media">
                        <source src="${video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const artworks = document.querySelectorAll('.artwork');
    const backgroundContainer = document.getElementById('background-container');
    const titleElement = document.getElementById('artwork-title');

    function changeBackground(element) {
        const image = element.dataset.background;
        const title = element.dataset.title;
        
        // Update the title
        titleElement.textContent = title;

        // Update the background image
        backgroundContainer.innerHTML = `<img src="${image}" alt="${title}" class="background-media">`;
    }

    artworks.forEach(artwork => {
        artwork.addEventListener('click', () => changeBackground(artwork));
    });

    // Set initial background and title (optional)
    if (artworks.length > 0) {
        changeBackground(artworks[0]);
    }
});
