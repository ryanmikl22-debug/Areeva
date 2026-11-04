# Areeva’s birthday — GitHub Pages edition

The same birthday website, with the original wording, six images, teal glitter styling, fonts, and gift, wish, and music controls. It runs as a static site; no Lovable account or server is needed.

## Put it on GitHub Pages
1. Unzip and copy **everything inside `areeva-birthday-github-pages`** into your repository root. Include the hidden `.github` folder and `.gitignore`.
2. Push to your `main` or `master` branch. If your default branch has another name, update the branches in `.github/workflows/pages.yml`.
3. Open your repository’s **Settings → Pages**, then choose **GitHub Actions** as the source.
4. Open the **Actions** tab. Run “Deploy birthday site to GitHub Pages” manually if the initial run occurred before Pages was enabled. Later pushes deploy automatically.
5. The workflow provides your public Pages URL once deployment completes.

Both `https://username.github.io/repository/` and `https://username.github.io/` work without changing the configuration. Use the trailing slash when opening the repository URL.

## Run locally
Install Node.js 22. In this folder run:

```sh
npm ci
npm run dev
```

To check the static version:

```sh
npm run build
npm run preview
```

The generated `dist` folder is the upload artifact. It is intentionally not included in this source ZIP; GitHub Actions creates it.

## Music
The original YouTube embed and song ID are unchanged. Playback starts after clicking the music or gift button, subject to YouTube availability and browser autoplay rules. Fonts load from Google Fonts, and music loads from YouTube, so those features require internet access.
