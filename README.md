# Atelier Civic Theme

An original React + plain CSS website theme for architecture schools, design journals, and civic research institutes. The demo combines an editorial homepage with institutional inner-page patterns for programs, people, events, and long-form content.

## Stack

- React 18
- Vite
- Plain CSS with custom properties
- Semantic HTML and keyboard-accessible navigation

## Run

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Theme Structure

- `src/App.jsx`: lightweight client-side routing and page assembly
- `src/data/demoContent.js`: realistic demo content and navigation data
- `src/components/`: reusable UI building blocks
- `src/pages/`: page templates
- `src/theme/tokens.css`: design tokens
- `src/theme/base.css`: resets, typography, focus states, reduced-motion support
- `src/theme/layout.css`: responsive layout and grid behavior
- `src/theme/components.css`: shared component styling
- `src/theme/pages.css`: page-specific styling
- `public/media/`: original local SVG artwork for hero and card imagery

## Included Templates

- `HomePage`
- `ArticlePage`
- `ListingPage`
- `ProgramsPage`
- `PeoplePage`
- `EventPage`
- `AboutPage`

## Included Components

- `SiteHeader`
- `PrimaryNav`
- `UtilityNav`
- `MobileMenu`
- `FeaturedStoryCard`
- `StoryCard`
- `StoryListItem`
- `EventCard`
- `ProgramCard`
- `PersonRow`
- `FilterBar`
- `Pagination`
- `SidebarModule`
- `NewsletterSignup`
- `SiteFooter`

## Reusing The Theme In Another React Project

1. Copy `src/components`, `src/pages`, `src/theme`, `src/data/demoContent.js`, and `public/media`.
2. Import the five theme CSS files near your app entrypoint in the same order used by `src/main.jsx`.
3. Replace the demo content in `src/data/demoContent.js` with your institution's stories, programs, people, events, and about content.
4. Swap the lightweight router in `src/App.jsx` for your preferred routing setup if your project already uses `react-router-dom` or another router.
5. Keep styling changes token-driven by editing `src/theme/tokens.css` first, then adjusting component or page CSS only when structure needs to change.

## Notes

- All images are local SVG compositions created for this demo.
- The page shell uses a 4-column mobile grid, 8-column tablet grid, and 12-column desktop grid.
- Motion is intentionally restrained and reduced-motion preferences are supported.
