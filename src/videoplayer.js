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



// Video data
const videoData = [
    { thumbnail: "../images/thumbnail1.jpg", title: "One Piece - Episode 101" },
    { thumbnail: "../images/thumbnail2.jpg", title: "Naruto - Episode 52" },
    { thumbnail: "../images/thumbnail3.jpg", title: "Dragonball - Episode 15" },
    { thumbnail: "../images/thumbnail4.jpg", title: "Death Note - Episode 22" },
    { thumbnail: "../images/thumbnail5.jpg", title: "Bleach - Episode 5" },
    { thumbnail: "../images/thumbnail6.jpg", title: "Cowboy Bebop - Episode 63" }
];

// Shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Populate recommendations
function populateRecommendations() {
    const recommendationsContainer = document.getElementById("recommendations");
    recommendationsContainer.innerHTML = ""; // Clear the container

    // Shuffle videos
    shuffleArray(videoData);

    // Display the first 3 videos
    videoData.slice(0, 3).forEach((video) => {
        const videoCard = document.createElement("div");
        videoCard.classList.add("video-card");
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <p>${video.title}</p>
        `;
        recommendationsContainer.appendChild(videoCard);
    });
}

// Execute on page load
document.addEventListener("DOMContentLoaded", populateRecommendations);
