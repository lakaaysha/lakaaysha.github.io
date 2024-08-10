// main.js

document.addEventListener('DOMContentLoaded', () => {
    const backgroundContainer = document.getElementById('background-container');
    const artworks = document.querySelectorAll('.artwork');

    function changeBackground(element) {
        const video = element.dataset.video;
        const image = element.dataset.background;

        if (video) {
            backgroundContainer.innerHTML = `
                <video autoplay loop muted playsinline>
                    <source src="${video}" type="video/mp4">
                </video>
            `;
        } else if (image) {
            backgroundContainer.innerHTML = '';
            backgroundContainer.style.backgroundImage = `url(${image})`;
        }
    }

    artworks.forEach(artwork => {
        artwork.addEventListener('click', () => changeBackground(artwork));
        
        // Optional: Change on hover
        artwork.addEventListener('mouseenter', () => changeBackground(artwork));
    });

    // Set initial background
    if (artworks.length > 0) {
        changeBackground(artworks[0]);
    }

    // Optional: Scroll-based background change
    let lastScrollTop = 0;
    document.querySelector('.portfolio-content').addEventListener('scroll', (event) => {
        const st = event.target.scrollTop;
        const direction = st > lastScrollTop ? 'down' : 'up';
        lastScrollTop = st;

        const artworksArray = Array.from(artworks);
        const visibleArtwork = artworksArray.find(artwork => {
            const rect = artwork.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        });

        if (visibleArtwork) {
            changeBackground(visibleArtwork);
        }
    });
});
