# branch-viewer

A lightweight iframe viewer for sharing multiple prototype branches with stakeholders. Renders a full-screen iframe with a floating pill switcher at the bottom — stakeholders tap between branches without knowing anything about git or Vercel.

## What it does

- Loads any list of URLs inside a full-viewport iframe
- Shows a floating dark pill with one button per branch
- Active branch is highlighted white; inactive branches are grey
- Zero login, zero setup for stakeholders — just a URL

## How to use it in a review branch

When you're ready to share work with stakeholders, create a dedicated review branch in your prototype repo and install this package:

```bash
git checkout main
git checkout -b stakeholder-review-04-01
npm install github:kvieciai/branch-viewer
```

Then update `src/App.jsx` to a single-line wrapper:

```jsx
import ViewerApp from 'branch-viewer'
import BRANCHES from './branches.json'

export default function App() {
  return <ViewerApp branches={BRANCHES} />
}
```

Edit `src/branches.json` with the real Vercel preview URLs for this review:

```json
[
  { "label": "Phase 1", "url": "https://your-project-git-phase1-yourteam.vercel.app" },
  { "label": "Phase 2", "url": "https://your-project-git-phase2-yourteam.vercel.app" }
]
```

Push the branch — Vercel auto-deploys it and gives you one URL to share.

## Required: allow iframes on feature branches

Vercel blocks iframes by default. Add a `vercel.json` to each feature branch being reviewed:

```json
{
  "headers": [{ "source": "/(.*)", "headers": [
    { "key": "X-Frame-Options", "value": "ALLOWALL" },
    { "key": "Content-Security-Policy", "value": "frame-ancestors *" }
  ]}]
}
```

Do this once per feature branch when you create it.

## Standalone dev

To develop or test the viewer itself:

```bash
npm install
npm run dev
```

Edit `src/branches.json` with any URLs to test with.
