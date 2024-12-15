//Add Rotating Ads
const ads = document.querySelectorAll('.ad');
let currentAd = 0;

setInterval(() => {
    ads[currentAd].classList.add('hidden');
    currentAd = (currentAd + 1) % ads.length;
    ads[currentAd].classList.remove('hidden');
}, 5000);

