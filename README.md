# MiniHolidayHackathon 2024 Codédex
## Munchyroll

Welcome to **Munchyroll**, a retro-themed streaming platform for anime enthusiasts. This project aims to provide a nostalgic experience with 90s-inspired design and functionality.

---

## Features

### 1. **Randomized Video Player**
- The "Watch Now" section in the homepage displays a random video from a predefined list every time the page is refreshed.

### 2. **Search Popup**
- Clicking the "Go" button in the search bar triggers a popup featuring a retro-styled GIF and a "Work in Progress" message.

### 3. **Featured Shows**
- A selection of popular anime titles like *Bleach*, *One Piece*, and *Naruto*.
- Each show includes a brief description and a "Watch Now" button that navigates to a dedicated video player page.

### 4. **Dynamic Ads**
- Ad slots are dynamically updated to display different promotional content.

### 5. **Login/Register Page**
- Provides separate forms for user login and registration.
- Includes an animated banner and retro-styled side content such as GIFs and promotional offers.

### 6. **Forum Links**
- Links to a dedicated forum page for community discussions.

---

## Technologies Used

### **Frontend**
- **HTML5**: For structure and layout.
- **CSS3**: For retro-inspired styling with pixelated fonts, bold colors, and 90s design elements.
- **JavaScript**: For dynamic functionality including:
  - Random video selection.
  - Popup behavior.
  - Dynamic ads management.

### **Fonts**
- [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P): A pixelated font for a classic 90s gaming feel.

---

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/munchyroll.git
   ```

2. Navigate to the project directory:
   ```bash
   cd munchyroll
   ```

3. Open `index.html` in your favorite browser to explore the site.

4. For local development, use a live server for best results.

---

## File Structure

```
Munchyroll/
├── index.html           # Homepage
├── videoplayer.html     # Video player page
├── login.html           # Login/Register page
├── forum.html           # Forum page
├── styles/
│   ├── style.css        # Main styles
│   ├── auth.css         # Styles for login/register page
├── scripts/
│   ├── script.js        # Main JavaScript
│   ├── auth.js          # Login/Register functionality
├── images/              # Images and GIFs
└── README.md            # This file
```

---

## How It Works

### Random Video Player
- JavaScript dynamically selects a random video URL from a predefined array and updates the iframe source.

### Dynamic Ads
- Ads in the designated containers are dynamically updated with random promotional content on page load.

---

## Future Enhancements

1. **Backend Integration**
   - Add database support for user authentication and saving watchlists.
2. **Forum Functionality**
   - Enable users to create and interact with forum threads.
3. **Search Bar**
   - Implement a fully functional search feature for shows and forums.

---

## Credits

- **Developer**: Samip Gurung
- **Icons and Fonts**: Google Fonts
- **Content**: Youtube, Google, Codedex...


