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
