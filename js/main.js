document.addEventListener('DOMContentLoaded', () => {
    const scrollList = document.getElementById('scroll-list');
    const backgroundContainer = document.getElementById('background-container');
    const artworkTitle = document.getElementById('artwork-title');

    function displayMedia(element) {
        const imageSrc = element.getAttribute('data-image');
        const videoSrc = element.getAttribute('data-video');
        const projectName = element.textContent;

        // Clear previous media
        backgroundContainer.innerHTML = '';

        if (imageSrc) {
            backgroundContainer.innerHTML = `<img src="${imageSrc}" alt="${projectName}" class="background-media">`;
        } else if (videoSrc) {
            backgroundContainer.innerHTML = `
                <video autoplay loop muted playsinline class="background-media">
                    <source src="${videoSrc}" type="video/mp4">
                </video>
            `;
        }

        // Update artwork title
        artworkTitle.textContent = projectName;
    }

    scrollList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            displayMedia(event.target);
        }
    });

    // Set initial media if there are projects
    const firstProject = scrollList.querySelector('li');
    if (firstProject) {
        displayMedia(firstProject);
    }
});
