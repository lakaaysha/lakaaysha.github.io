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

    // Add more JavaScript functionality as needed
});
