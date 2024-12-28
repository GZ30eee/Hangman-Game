![image](https://github.com/user-attachments/assets/d7a097ef-4319-4ebd-9dc6-249eccc18959)

# Hangman Game

A simple, yet fun, Hangman game built using HTML, CSS, and JavaScript. The game allows users to guess words from various categories such as Football Teams, Hollywood, Cities, Animals, and more. The game includes features like a virtual keyboard, a dynamic category display, and a canvas to visually display the hangman.
(NOTE- FOR BETTER EXP. OPEN IN FULL SCREEN MODE!!)

## Features

- **Categories**: Choose from a variety of categories including:
  - Football Teams
  - Hollywood
  - Cities
  - Animals
  - Aquatic
  - Television Series
  - Bollywood
  - Companies
  - Landmarks
  - Food Items
  - Cricket
  - Flowers
  - Colors
  - Rivers
  - Fruits
  
- **Canvas Drawing**: A dynamic canvas to draw the hangman as you make incorrect guesses. The game will update the drawing to show the hangman’s progress with each wrong guess.

- **Virtual Keyboard**: A clickable virtual keyboard for input, making it easier to play on touchscreen devices.

- **Score Tracking**: The game tracks and displays the current score and high score.

- **Category Display**: The current category is shown at the top for each round. Categories include various themes such as football teams, movies, cities, and animals.

- **Sound Effects**: Background music and sound effects for actions such as hint and reset, adding to the immersive experience.

- **Responsive Design**: The game is fully responsive and works on devices ranging from mobile phones to desktop screens.

## Requirements

- Web browser that supports HTML5, CSS3, and JavaScript.
- No additional software required; the game works directly in the browser.

## Game Features

### 1. **Category Selection**:
The game selects a category from a list of predefined categories. Based on the chosen category, the `catagoryName` (category name) is displayed at the top.

Example code snippet for category selection:

```javascript
var selectCat = function() {
  if(chosenCategory === categories[0]){
    catagoryName.innerHTML = "<span style='font-family:monospace;'>FOOTBALL TEAMS</span>";
  }
  else if(chosenCategory === categories[1]){
    catagoryName.innerHTML = "<span style='font-family:monospace;'>HOLLYWOOD</span>";
  }
  else if(chosenCategory === categories[2]){
    catagoryName.innerHTML = "<span style='font-family:monospace;'>CITIES</span>";
  }
  // More categories can be added in the same way...
}
```

### 2. **Canvas for Hangman Drawing**:
The game uses an HTML5 canvas to visually represent the hangman’s progress. The stickman is drawn as incorrect guesses are made.

```javascript
var canvas = document.getElementById('stickman');
var ctx = canvas.getContext('2d');
```

### 3. **Virtual Keyboard**:
The virtual keyboard allows users to click on the letters to make their guesses. The keyboard is updated as letters are selected, making it easier for users to play on touch devices.

### 4. **Responsive Design**:
The game is designed to work on various screen sizes. It adjusts automatically to smaller screens such as tablets and mobile devices.

### 5. **Gradient Background**:
The game features a beautiful gradient background for a visually appealing experience.

```css
body {
  background: linear-gradient(to right, #ff7e5f, #feb47b);
}
```

### 6. **Sound Effects**:
The game plays background music and sound effects. For example, background music starts when the game is loaded, and hints or reset actions trigger their respective sounds.

## How to Play

1. Start the game by selecting a category.
2. You will be presented with an incomplete word, and you must guess the missing letters.
3. Use the virtual keyboard to make your guesses.
4. For every wrong guess, a part of the hangman is drawn on the canvas.
5. The game ends when the word is completed or the hangman is fully drawn.

## Supported Screen Sizes

- **Mobile**: Fully responsive, works well on small devices like smartphones.
- **Tablet**: Adapted for medium-sized devices.
- **Desktop**: Supports large screen sizes with a neat layout.

## Controls

- **Virtual Keyboard**: Click the letters on the virtual keyboard to make a guess.
- **Reset Button**: Click the Reset button to restart the game.
- **Hint Button**: Get a hint for the current word.
- **Quit Button**: Exit the game with a confirmation modal.

## Setup

To run the game locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Open `index.html` in your browser.

## Gallery
![image](https://github.com/user-attachments/assets/8c593684-b095-4b08-add8-f5ef88e81f56)
![image](https://github.com/user-attachments/assets/36d4c8b0-65bc-42e6-9c84-fb5754e26165)
![image](https://github.com/user-attachments/assets/143eb130-8cb7-4820-85b9-fdfb344d1310)
![image](https://github.com/user-attachments/assets/6dd2e9b7-747b-4c3f-ad45-a7b338e50d79)

## Code Snippets

Here is the relevant code for category selection from the JS file:

```javascript
var selectCat = function() {
  if(chosenCategory === categories[0]){
    catagoryName.innerHTML = "<span style='font-family:monospace;'>FOOTBALL TEAMS</span>";
  }
  else if(chosenCategory === categories[1]){
    catagoryName.innerHTML = "<span style='font-family:monospace;'>HOLLYWOOD</span>";
  }
  else if(chosenCategory === categories[2]){
    catagoryName.innerHTML = "<span style='font-family:monospace;'>CITIES</span>";
  }
  // Add more categories...
}
```

### Canvas Drawing for Hangman

The canvas function helps to draw the hangman dynamically as the player makes incorrect guesses:

```javascript
var canvas = document.getElementById('stickman');
var ctx = canvas.getContext('2d');

var drawHangman = function(step) {
  switch (step) {
    case 1: // head
      ctx.beginPath();
      ctx.arc(50, 50, 10, 0, Math.PI * 2, true); // Draw head
      ctx.stroke();
      break;
    // Draw more parts of the hangman (body, arms, etc.)
  }
}
```

### Virtual Keyboard

The virtual keyboard is implemented to make it easier for players to input guesses by clicking the onscreen letters.

```javascript
var keyboard = document.getElementById('keyboard');
keyboard.addEventListener('click', function(event) {
  var letter = event.target.innerText;
  // Handle letter guessing
});
```

## Conclusion

This Hangman game is a fun way to test your word-guessing skills. With a variety of categories, a dynamic game experience, and visually appealing design, it provides a great user experience. Enjoy playing, and challenge your friends to beat your high score!
