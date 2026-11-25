# Pollinator Commons — Project Website

NSF DISES Award #2409184  
"Do landscapes shape the emergence of institutions governing the pollinator commons?"

---

## How to publish this site on GitHub Pages

### Step 1 — Create the repository

In the [Pollinator-Commons GitHub organization](https://github.com/Pollinator-Commons), create a **new public repository** named exactly:

```
Pollinator-Commons.github.io
```

This name is required for GitHub Pages to serve it at `https://pollinator-commons.github.io`.

### Step 2 — Upload the files

Either clone the repo and copy these files in, or use the GitHub web interface to upload:

```
index.html
css/
  style.css
js/
  nav.js
README.md
images/        ← create this folder and add your photos
```

### Step 3 — Enable GitHub Pages

1. Go to the repository **Settings → Pages**
2. Under "Source", select **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)`
4. Click **Save**

Your site will be live at `https://pollinator-commons.github.io` within a few minutes.

---

## Adding photos

Replace the placeholder boxes with real images:

1. Create an `images/` folder in the repository
2. Add your photos (use descriptive filenames, e.g. `hero-uttarakhand-orchard.jpg`)
3. In `index.html`, replace placeholder blocks like:

```html
<div class="hero-placeholder">...</div>
```

with:

```html
<img src="images/hero-uttarakhand-orchard.jpg" alt="Apple orchard in Mukteshwar, Uttarakhand">
```

For team photos, replace the `<div class="team-photo-placeholder">[Photo]</div>` elements with:

```html
<img src="images/team-allington.jpg" alt="Ginger Allington" class="team-photo">
```

And add this CSS to `css/style.css`:

```css
.team-photo {
  width: 72px;
  height: 72px;
  min-width: 72px;
  border-radius: 50%;
  object-fit: cover;
}
```

---

## Editing content

All content is in `index.html`. Each page section has a clear HTML comment:

- `<!-- HOME -->` — hero banner and highlights
- `<!-- ABOUT -->` — project overview, study sites, goals
- `<!-- TEAM -->` — PI, collaborator, and student bios
- `<!-- RESEARCH -->` — methods and fieldwork status
- `<!-- PUBLICATIONS -->` — papers, presentations, media
- `<!-- NEWS -->` — project updates (add new items at the top)
- `<!-- CONTACT -->` — contact info and links

---

## Site structure

```
index.html          Single-page app — all sections in one file
css/style.css       All styles
js/nav.js           Navigation between sections
images/             Add your photos here (create this folder)
README.md           This file
```

Navigation is handled with vanilla JavaScript — no build tools, no dependencies, no CDN required beyond Google Fonts. The site works entirely offline once cloned.

---

## Customization notes

- **Colors**: Defined as CSS variables at the top of `css/style.css`. Easy to adjust.
- **Fonts**: Google Fonts (Source Serif 4 + Inter). Remove the `<link>` tags in `index.html` and update the font variables in CSS to use system fonts if preferred.
- **New sections**: Copy any `<section id="..." class="page-section">` block, add a matching nav link, and add the section ID to the `valid` array in `js/nav.js`.
- **Google Analytics / tracking**: Add your tag inside `<head>` in `index.html`.

---

*Site generated November 2026. Funded by NSF DISES Award #2409184.*
