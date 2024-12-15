const adsData = [
    {
        title: "Codédex.io",
        content: "Learn to code like it's 1995! Limited-time offer.",
        cta: "Click Here!"
    },
    {
        title: "Munchyroll Premium",
        content: "Stream your favorite retro shows ad-free. Venmo $20 to Samppi!",
        cta: "Try for Free!"
    },
    {
        title: "Retro Console FREE!",
        content: "Win Codédex hackathon for SNES!",
        cta: "Shop Now!"
    },
    {
        title: "Codédex Merch",
        content: "Grab exclusive Codédex merchandise before it sells out!",
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
    const adContainers = ["ads-container", "bottom-ads-container"];
    adContainers.forEach((containerId) => {
        rotateAds(containerId);
        setInterval(() => rotateAds(containerId), 5000);
    });
}

document.addEventListener("DOMContentLoaded", initializeRotatingAds);



//popup
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector(".search-bar button");
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("close-btn");


    searchButton.addEventListener("click", (event) => {
        event.preventDefault();
        popup.classList.remove("hidden");
    });

    closeButton.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.classList.add("hidden");
        }
    });
});


//Video Player
const videoUrls = [
    "https://www.youtube.com/embed/2GsDQdvskcA?si=QALH-55SVMm3o_WW",
    "https://www.youtube.com/embed/kqgo7NSTbn4?si=c8bjgfsxkEDsomlP",
    "https://www.youtube.com/embed/y143heV51fs?si=d9F_Bnt3XHfRbI9A",
    "https://www.youtube.com/embed/VwSsMB-BigE",
    "https://www.youtube.com/embed/qJ7mWRgbz2I",
    "https://www.youtube.com/embed/zM9_UuC4OTM"
];

// Function to pick a random video from the list
function getRandomVideoUrl() {
    const randomIndex = Math.floor(Math.random() * videoUrls.length);
    return videoUrls[randomIndex];
}

// Set a random video to the iframe
document.addEventListener("DOMContentLoaded", () => {
    const videoIframe = document.querySelector(".video-player iframe");
    const randomVideo = getRandomVideoUrl();
    videoIframe.src = randomVideo;
});

