# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project overview

This is a small portfolio scaffold built with Vite + React. It includes a left hamburger menu, an above-the-fold `Hero` section, `About`, `Projects` with a modal for details, and a `Contact` form that opens the user's email client.

Files and where to edit them
- `index.html`: page shell and script entry.
- `src/main.jsx`: React entry, imports global styles and mounts `App`.
- `src/App.jsx`: root layout — includes `Menu`, `Header`, `Hero`, `About`, `Projects`, `Contact`, and `Footer`.
- `src/components/Header.jsx`: top bar title and quick nav links.
- `src/components/Menu.jsx`: left hamburger button and slide-in side menu. Toggle styles in `src/styles/global.css`.
- `src/components/Hero.jsx`: the landing section text — edit heading and tagline here.
- `src/components/About.jsx`: your about content.
- `src/components/Projects.jsx`: lists projects, opens `ProjectModal` on Details.
- `src/components/ProjectModal.jsx`: modal to show project details — edit layout or add images here.
- `src/components/Contact.jsx`: contact form with client-side validation — change the `mailto:` address inside this file to receive emails.
- `src/styles/global.css`: global styling, menu / modal / form styles. Modify variables at the top (`:root`) to change colors and spacing.
- `src/data/projects.json`: project entries used by `Projects.jsx`. Add or edit objects (id, title, summary, details, link).

Run locally
```bash
npm install
npm run dev
```

Deployment
I can't deploy the site from this environment, but you can host it easily with Vercel, Netlify, or GitHub Pages. Pick one of the options below.

- Vercel (recommended):
	1. Install the Vercel CLI: `npm i -g vercel`.
	2. Run `vercel` in this project folder and follow prompts.
 3. After successful deploy, Vercel provides a public URL (paste it here to share).

- Netlify:
	1. Drag-and-drop the `dist` folder in the Netlify UI after running `npm run build`, or connect the repository in Netlify and set the build command to `npm run build` and publish directory to `dist`.

- GitHub Pages (static):
	1. Build: `npm run build`.
	2. Push the `dist` folder to a branch and enable GitHub Pages to serve from that branch (or use an action to deploy `dist` to `gh-pages`).

If you want, I can create a simple `vercel.json` or GitHub Actions workflow here and give you step-by-step deploy commands you can run locally. Once you deploy, paste the generated public URL and I'll verify everything to suggest small fixes if needed.
