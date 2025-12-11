**Todo App**

A small, vanilla JavaScript todo application that stores todos in `localStorage` and provides a minimal UI for adding and viewing tasks. This project is intentionally tiny and designed for learning and quick experimentation.

**Features**
- **Add Todos:** Enter a task and click `Add Todo` to save it.
- **Persistent Storage:** Todos are saved to the browser's `localStorage` so they persist across reloads.
- **Simple UI:** Basic list view with buttons shown when adding new items (`Edit`, `Delete`).

**Files**
- `index.html`: App layout and markup.
- `script.js`: App logic — loading, saving to `localStorage`, DOM updates.
- `style.css`: Basic styling and layout.

**Quick Start**
1. Open the project folder `Todo-app` in your file explorer or editor.
2. Open `index.html` in a modern browser (double-click the file or use your editor's "Open in Browser").
3. Type a todo in the input and click `Add Todo`.

No build step or server is required — this is a static page.

**Usage**
- Type your task into the input field `Write your next todo here....` and click the `Add Todo` button.
- Todos are displayed in the list and saved to `localStorage` under the key `todos`.
- The app creates `Edit` and `Delete` buttons for newly added items, but note that the current version does not wire up the event handlers for those buttons.

**Implementation Notes & Known Issues**
- The app stores data as an object with a `todolist` array in `localStorage`. Example value: `{"todolist":["Buy milk","Read book"]}`.
- When the page loads, `script.js` reads from `localStorage` and appends saved todos to the list — however the load path creates plain `<li>` elements for saved items (without `Edit`/`Delete` buttons).
- The `Edit` and `Delete` button elements are created when adding a new todo, but event listeners for editing/deleting are not implemented.
- The CSS `box-shadow` property in `style.css` uses an incorrect RGBA format — it does not affect behavior but could be fixed for visual polish.

**Suggestions / Next Improvements**
- Add event listeners for the `Edit` and `Delete` buttons (support editing text, removing items from DOM and `localStorage`).
- Unify rendering so both loaded and newly-added todos use the same DOM structure and include action buttons.
- Add a small confirmation or undo for deletes.
- Improve accessibility (keyboard focus states, ARIA attributes) and mobile responsiveness.

**Contributing**
Feel free to open issues or make pull requests. Keep changes focused and include a short description of the problem being solved.

**License**
This project doesn't include a license file. Add one if you wish to distribute or share the code publicly.

**Contact**
If you want help extending this app (e.g., wiring up edit/delete or adding a small backend), tell me what you'd like and I can implement it.
