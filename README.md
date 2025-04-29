1. Clone the repository → `git clone https://github.com/your-username/your-repo-name.git && cd your-repo-name`  
2. Install dependencies → `npm install` *(or `yarn`)*  
3. Start development server → `npm run dev` *(for Vite)* or `npm start` *(for Create React App)*  
4. Build for production → `npm run build`  
5. Tailwind CSS is pre-configured in `tailwind.config.js`, `postcss.config.js`, and imported in `src/index.css`  
6. Ensure Node.js v14+ is installed → check with `node -v`  
7. Customize UI using Tailwind classes directly in JSX

Logic Used
`useState`
- Manages local state for notes, form input, and optionally edit mode.
- **Why:** Enables dynamic updates to UI based on user interaction.

`useEffect`
- Retrieves and saves notes to `localStorage`.
- **Why:** Ensures data persistence across browser refreshes.

`localStorage`
- Used to store the notes array locally in the user's browser.
- **Why:** Lightweight method for persistence without needing a backend
