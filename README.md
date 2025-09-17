# School Drama Portfolio (Vite + React)

A modern dark-mode enabled portfolio app to organize and showcase images from the school drama production process.

## Features
- Dark / Light theme toggle (stores preference)
- Category based photo galleries loaded automatically
- Responsive CSS grid gallery with hover zoom
- Minimal routing (React Router) with a sidebar navigation
- Zero extra backend – just drop images into folders

## Categories
Images are organized into these folders under `src/assets/photos/`:

```
costume/
background-setup/
props/
practices/
preparations/
fund-raising/
```

Add or remove image files (`.png .jpg .jpeg .gif .webp .avif`) and the gallery updates on refresh. Filenames are used for ordering (sorted descending so recent-looking names appear first).

## Getting Started
Install dependencies:
```bash
npm install
```
Run the dev server:
```bash
npm run dev
```
Then open the shown local URL (usually `http://localhost:5173`).

## Adding Images
1. Copy image files into the correct category folder in `src/assets/photos/`.
2. Return to the browser (Vite auto-reloads). If not, refresh manually.
3. The gallery displays them in a responsive grid.

Tip: Use consistent naming like `2025-01-setup-01.jpg` so ordering makes sense.

## Theming
Click the moon/sun button at the bottom of the sidebar to toggle themes. Preference persists in `localStorage`.

## Project Structure
```
src/
  components/
    Layout.jsx        # App shell (sidebar + header + outlet)
    ThemeToggle.jsx   # Dark/light toggle button
    Gallery.jsx       # Dynamic image loader grid
  pages/
    Dashboard.jsx     # Overview page with quick links
    CategoryPage.jsx  # Wrapper to render each gallery
  assets/
    photos/           # Image category folders (you add files here)
```

## Customization Ideas
- Add descriptions (JSON file alongside each image)
- Lightbox modal on click
- Drag & drop upload (writes to a server or mock layer)
- Export PDF or slideshow view

## Deployment
Build for production:
```bash
npm run build
```
Preview locally:
```bash
npm run preview
```
Deploy the `dist/` folder to any static hosting (Netlify, Vercel, GitHub Pages, etc.).

## License
Educational / personal use. Adapt freely for your school.
