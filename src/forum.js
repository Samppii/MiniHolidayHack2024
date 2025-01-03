const form = document.getElementById("new-thread-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("thread-title").value;
    const content = document.getElementById("thread-content").value;

    // Script to add new thread to the page
    const newThread = document.createElement("div");
    newThread.classList.add("thread");
    newThread.innerHTML = `
        <h4><a href="#" class="watch-btn" data-title="${title}">${title}</a></h4>
        <p>Started by You | 0 Replies</p>
    `;

    document.querySelector(".forum-threads").appendChild(newThread);
    
    form.reset();
});

// Temporary alert for watch buttons using event delegation
document.querySelector('.forum-threads').addEventListener('click', (event) => {
    if (event.target.classList.contains('watch-btn')) {
        event.preventDefault();
        const threadTitle = event.target.getAttribute('data-title');
        alert(`Threads coming soon! ${threadTitle}`);
    }
});


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
