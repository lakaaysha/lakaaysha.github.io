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
    const projectItems = document.querySelectorAll('#project-list li');
    const mediaContainer = document.getElementById('background-container');
    const titleElement = document.getElementById('artwork-title');
    const projects = [
        { title: "Apple", media: "images/filmpics/reflectionsondutchcapitalism.png" },
        { title: "Banana", media: "videos/Whirlpool Ea69ca.mp4" },
        { title: "Cherry", media: "images/filmpics/reflectionsondutchcapitalism.png" },
        { title: "Date", media: "videos/Whirlpool Ea69ca.mp4" },
        { title: "Elderberry", media: "images/filmpics/reflectionsondutchcapitalism.png" },
        { title: "Fig", media: "videos/Whirlpool Ea69ca.mp4" },
        { title: "Grape", media: "images/filmpics/reflectionsondutchcapitalism.png" },
        { title: "Honeydew", media: "videos/Whirlpool Ea69ca.mp4" },
        { title: "Ivy Gourd", media: "images/filmpics/reflectionsondutchcapitalism.png" },
        { title: "Jackfruit", media: "videos/Whirlpool Ea69ca.mp4" },
    ];

    function typeInEffect(element, text, delay = 100) {
        element.textContent = '';
        text.split('').forEach((char, index) => {
            setTimeout(() => element.textContent += char, delay * index);
        });
    }

    function displayProject(index) {
        const project = projects[index];

        typeInEffect(titleElement, project.title);

        if (project.media.endsWith(".mp4")) {
            mediaContainer.innerHTML = `
                <video autoplay loop muted playsinline class="background-media">
                    <source src="${project.media}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        } else {
            mediaContainer.innerHTML = `<img src="${project.media}" alt="${project.title}" class="background-media">`;
        }
    }

    projectItems.forEach((item, index) => {
        item.addEventListener('click', () => displayProject(index));
    });

    // Initialize the first project display
    displayProject(0);
});
