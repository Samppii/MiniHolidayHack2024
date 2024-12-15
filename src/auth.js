document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const showRegister = document.getElementById("show-register");
    const showLogin = document.getElementById("show-login");

    showRegister.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    });

    showLogin.addEventListener("click", (e) => {
        e.preventDefault();
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });
});


//add

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
