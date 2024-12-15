// Get the form element
const commentForm = document.getElementById("comment-form");

// Add an event listener for the form submission
commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const commentText = document.getElementById("comment-text").value;

    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.innerHTML = `
        <span><strong>You:</strong> ${commentText}</span>
    `;

    document.querySelector(".comments").appendChild(newComment);

    commentForm.reset();
});

// Video data for recommendations
const videoData = [
    {
        thumbnail: "../images/thumbnail1.jpg",
        title: "One Piece - Episode One",
        description: "How we got introduced to Luffy.",
        video: "https://www.youtube.com/embed/VwSsMB-BigE"
    },
    {
        thumbnail: "../images/thumbnail2.jpg",
        title: "Naruto - Is that you?",
        description: "Funny Naruto Moment",
        video: "https://www.youtube.com/embed/qJ7mWRgbz2I"
    },
    {
        thumbnail: "../images/thumbnail3.jpg",
        title: "Dragonball - Gotta eat",
        description: "You gotta eat to grow strong!",
        video: "https://www.youtube.com/embed/zM9_UuC4OTM"
    },
    {
        thumbnail: "../images/thumbnail4.jpg",
        title: "Death Note - Smarty Pants",
        description: "Near is wayyyy smarter than you.",
        video: "https://www.youtube.com/embed/U-QpwsdmePo"
    },
    {
        thumbnail: "../images/thumbnail5.jpg",
        title: "Bleach - Hollows Attack",
        description: "How Ichigo got his Shinigami Powers.",
        video: "https://www.youtube.com/embed/0UM2XGXE4DM"
    },
    {
        thumbnail: "../images/thumbnail6.jpg",
        title: "Cowboy Bebop - Whatever happens, happens",
        description: "Follow Spike and his crew in their space bounty hunter adventures.",
        video: "https://www.youtube.com/embed/LcBpamZ5-CQ"
    }
];

// Shuffle function
function shuffleArray(array) {
    const arrayCopy = [...array];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
}

// Populate recommendations dynamically
function populateRecommendations() {
    const recommendationsContainer = document.getElementById("recommendations");
    recommendationsContainer.innerHTML = "";
    const shuffledVideos = shuffleArray(videoData);

    // Display first 3 videos
    shuffledVideos.slice(0, 3).forEach((video) => {
        const videoCard = document.createElement("div");
        videoCard.classList.add("video-card");
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <p>${video.title}</p>
        `;
        videoCard.addEventListener("click", () => redirectToVideo(video));
        recommendationsContainer.appendChild(videoCard);
    });
}

// Redirect to videoplayer.html with updated query parameters
function redirectToVideo(video) {
    const url = `videoplayer.html?video=${encodeURIComponent(video.video)}&title=${encodeURIComponent(video.title)}&description=${encodeURIComponent(video.description)}`;
    window.location.href = url; // Redirect to videoplayer.html
}

// Initialize recommendations on page load
document.addEventListener("DOMContentLoaded", () => {
    populateRecommendations();
});


// Get the video data from the URL
const urlParams = new URLSearchParams(window.location.search);
const videoSrc = urlParams.get("video"); 
const videoTitle = urlParams.get("title"); 
const videoDescription = urlParams.get("description"); 

// Dynamically update the iframe src
const iframe = document.querySelector(".video-player2 iframe");
iframe.src = videoSrc;

// Update the title and description
const titleElement = document.querySelector(".title-description h2");
const descriptionElement = document.querySelector(".title-description .video-description");
titleElement.textContent = decodeURIComponent(videoTitle);
descriptionElement.textContent = decodeURIComponent(videoDescription);





//Ads section for ads lol
const adsData = [
    {
        title: "Codédex NGL",
        content: "Learn to code like it's 1995! Limited-time offer.",
        cta: "Click Here!"
    },
    {
        title: "Munchyroll Premium",
        content: "Stream your favorite retro shows ad-free. Sign up now!",
        cta: "Try for Free!"
    },
    {
        title: "Retro Console Sale",
        content: "Get your favorite retro consoles at amazing prices!",
        cta: "Shop Now!"
    },
    {
        title: "Codédex Merch",
        content: "Grab exclusive anime merchandise before it sells out!",
        cta: "Explore Now!"
    }
];

function createAdElement(ad) {
    const adDiv = document.createElement("div");
    adDiv.classList.add("ad");
    adDiv.innerHTML = `
        <h3>${ad.title}</h3>
        <p>${ad.content}</p>
        <span class="blink">${ad.cta}</span>
    `;
    return adDiv;
}

function rotateAds(containerId) {
    const adsContainer = document.getElementById(containerId);
    if (!adsContainer) return;

    adsContainer.innerHTML = "";
    const randomAd = adsData[Math.floor(Math.random() * adsData.length)];
    adsContainer.appendChild(createAdElement(randomAd));
}

function initializeRotatingAds() {
    const adContainers = ["ads-container", "bottom-ads-container"]; // Include both container IDs
    adContainers.forEach((containerId) => {
        rotateAds(containerId); // Initialize ads in each container
        setInterval(() => rotateAds(containerId), 5000); // Rotate ads every 5 seconds
    });
}

document.addEventListener("DOMContentLoaded", initializeRotatingAds);

