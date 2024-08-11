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
    const projects = document.querySelectorAll('#project-menu li');
    const mediaContainer = document.getElementById('media-container');

    function updateMediaContent(project) {
        const image = 'images/filmpics/reflectionsondutchcapitalism.png';  // Placeholder image
        const title = project.textContent;

        mediaContainer.innerHTML = `
            <div class="artwork-title">${title}</div>
            <img src="${image}" alt="${title}" class="background-media">
        `;
    }

    projects.forEach(project => {
        project.addEventListener('click', () => updateMediaContent(project));
    });

    // Set initial content to the first project
    if (projects.length > 0) {
        updateMediaContent(projects[0]);
    }
});
