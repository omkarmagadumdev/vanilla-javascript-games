## 1. Project Title
Snake — a small browser game in plain HTML, CSS, and JavaScript

## 2. Short One-Line Description
A local, grid-based Snake game that runs in the browser for learning DOM-based animation and simple game logic.

## 3. Live Demo / Preview
Open `index.html` locally in a browser.

Windows PowerShell:
```powershell
Start-Process .\index.html
```

## 4. Tech Stack
- HTML5 (`index.html`)
- CSS3 (`style.css`)
- Vanilla JavaScript (`script.js`)

## 5. Key Features
- Click `Start Game` to begin play.
- Keyboard control (arrow keys) to steer the snake.
- Food spawns at random grid-aligned cells and avoids existing snake cells.
- Eating food increases score by 10 and grows the snake.
- Basic collision detection: hitting walls or the snake's body ends the game (browser alert).
- Score displayed above the arena; game speed increases slightly after eating.

## 6. How to Run Locally (Windows-focused)
1. Open PowerShell and change to the project folder, for example:
```powershell
Set-Location 'D:\vanilla-javascript-games\Snake_game'
```
2. Launch the game:
```powershell
Start-Process .\index.html
```
3. Click the `Start Game` button above the arena.

Alternatively open the folder in VS Code and use the Live Server extension.

## 7. Controls / Usage
- Move Up: Arrow Up
- Move Down: Arrow Down
- Move Left: Arrow Left
- Move Right: Arrow Right

Click `Start Game` once to begin. When a collision occurs the game shows an alert with your score; refresh to play again.

## 8. Project Structure
- `index.html` — page shell and inclusion of `script.js` and `style.css`.
- `style.css` — arena, snake segment, food, and UI styling.
- `script.js` — game state, movement, drawing, collision checks, and event handlers.
- `README.md` — this file.

## 9. Core Logic Explained
- The arena is 600×600 pixels with a `cellSize` of 20px; positions are multiples of 20.
- The snake is an array of `{x, y}` positions; `dx`/`dy` represent movement per step.
- `setInterval` runs a loop at `gameSpeed` ms: it updates the snake, checks collisions, and redraws DOM elements.
- `updateSnake()` adds a new head, checks for food collision (grow and score), otherwise removes the tail.
- `moveFood()` picks a random grid cell and retries if that cell overlaps the snake.
- `isGameOver()` checks head vs. body and wall collisions; on true the loop clears and an alert shows the score.

## 10. What I Learned
- Drawing and updating game state using DOM elements instead of canvas.
- Implementing grid-aligned movement and collision checks.
- Handling keyboard events safely to prevent reversing direction.
- Controlling a simple game loop with `setInterval` and restarting it to adjust speed.

## 11. Possible Improvements
- Replace `alert` with an in-page game-over screen and a restart button.
- Use `requestAnimationFrame` for smoother timing.
- Persist high score using `localStorage`.
- Add unit tests for movement and collision logic.
- Add touch controls and responsive scaling for mobile.
- Split `script.js` into modules and expose core functions for testing.

## 12. License
Unlicensed

If you want, I can implement a restart UI, add high-score persistence, or split `script.js` into modules next.
