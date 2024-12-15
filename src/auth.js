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
        title: "Codedex NGL",
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
        title: "Anime Merch",
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
    const adContainers = ["ads-container", "bottom-ads-container"];
    adContainers.forEach((containerId) => {
        rotateAds(containerId);
        setInterval(() => rotateAds(containerId), 5000);
    });
}

document.addEventListener("DOMContentLoaded", initializeRotatingAds);