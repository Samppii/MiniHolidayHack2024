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
// Video data for recommendations
const videoData = [
    {
        thumbnail: "../images/thumbnail1.jpg",
        title: "One Piece - Episode 101",
        description: "Join Luffy and his crew in their adventures to find the legendary treasure.",
        video: "https://www.youtube.com/embed/ULdapEcU2SU"
    },
    {
        thumbnail: "../images/thumbnail2.jpg",
        title: "Naruto - Episode 52",
        description: "Experience the journey of Naruto as he becomes the Hokage.",
        video: "https://www.youtube.com/embed/qi2rByJed-E"
    },
    {
        thumbnail: "../images/thumbnail3.jpg",
        title: "Dragonball - Episode 15",
        description: "Watch Goku battle powerful foes in his epic journey.",
        video: "https://www.youtube.com/embed/example3"
    },
    {
        thumbnail: "../images/thumbnail4.jpg",
        title: "Death Note - Episode 22",
        description: "Follow Light's descent into darkness with the Death Note.",
        video: "https://www.youtube.com/embed/example4"
    },
    {
        thumbnail: "../images/thumbnail5.jpg",
        title: "Bleach - Episode 5",
        description: "Ichigo battles the Hollows to protect his friends and family.",
        video: "https://www.youtube.com/embed/example5"
    },
    {
        thumbnail: "../images/thumbnail6.jpg",
        title: "Cowboy Bebop - Episode 63",
        description: "Follow Spike and his crew in their space bounty hunter adventures.",
        video: "https://www.youtube.com/embed/example6"
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
    recommendationsContainer.innerHTML = ""; // Clear existing content

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



// // Video data
// const videoData = [
//     { thumbnail: "../images/thumbnail1.jpg", title: "One Piece - Episode 101" },
//     { thumbnail: "../images/thumbnail2.jpg", title: "Naruto - Episode 52" },
//     { thumbnail: "../images/thumbnail3.jpg", title: "Dragonball - Episode 15" },
//     { thumbnail: "../images/thumbnail4.jpg", title: "Death Note - Episode 22" },
//     { thumbnail: "../images/thumbnail5.jpg", title: "Bleach - Episode 5" },
//     { thumbnail: "../images/thumbnail6.jpg", title: "Cowboy Bebop - Episode 63" }
// ];

// // Shuffle function
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// // Populate recommendations
// function populateRecommendations() {
//     const recommendationsContainer = document.getElementById("recommendations");
//     recommendationsContainer.innerHTML = ""; // Clear the container

//     // Shuffle videos
//     shuffleArray(videoData);

//     // Display the first 3 videos
//     videoData.slice(0, 3).forEach((video) => {
//         const videoCard = document.createElement("div");
//         videoCard.classList.add("video-card");
//         videoCard.innerHTML = `
//             <img src="${video.thumbnail}" alt="${video.title}">
//             <p>${video.title}</p>
//         `;
//         recommendationsContainer.appendChild(videoCard);
//     });
// }

// // Execute on page load
// document.addEventListener("DOMContentLoaded", populateRecommendations);


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





