# 2048 Game

This project is a web-based implementation of the popular 2048 puzzle game, created using HTML, CSS, and vanilla JavaScript. The game runs entirely in the browser without any external dependencies.

## Game Description and Rules

The game is played on a 4x4 grid with numbered tiles that slide smoothly when the player presses the arrow keys. Each move causes all tiles to slide in the chosen direction. When two tiles with the same number collide, they merge into a single tile with a value equal to the sum of the two tiles. After each move, a new tile appears at a random empty position on the board. The new tile is a 2 with a 50% probability or a 4 with a 50% probability.

The main objective of the game is to create a tile with the value 2048. The player continues to combine tiles to reach this goal. The game ends when there are no valid moves left — that is, when the board is full and no adjacent tiles have the same value.

## Features

- Responsive 4x4 grid layout styled with CSS Grid
- Real-time score tracking displayed during gameplay
- Persistence of the highest score using the browser's localStorage
- Smooth tile merging animation and update
- Keyboard controls using arrow keys for intuitive gameplay
- Restart button to reset the game at any time
- Game over detection and display

## Getting Started

To play the game locally, follow these steps:

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in any modern web browser.
3. Use the arrow keys to move the tiles and combine numbers.
4. Press the Restart button to reset the game at any time.

## Project Structure

- `index.html`: Contains the markup and structure of the game interface.
- `style.css`: Contains the styling rules for layout, colors, and animations.
- `script.js`: Implements the game logic, including movement, merging, scoring, and game over conditions.

## Technologies Used

- HTML
- CSS
- JavaScript

## Author

Developed by Sagili Tagur Deepak Reddy.
