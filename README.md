# Jashua Luna Website

Personal website for Jashua Luna, built with Express and EJS.

## Run

```bash
npm install
npm start
```

The server listens on `PORT` when provided, otherwise `8080`.

## Structure

- `website.js`: Express server and route registration
- `data/site-data.js`: site navigation, resume content, portfolio entries, and route configuration
- `views/`: EJS templates and legacy project pages
- `assets/`: shared CSS, images, and client-side assets for the preserved site
- `lib/legacy-page.js`: legacy HTML page loader used by portfolio routes
