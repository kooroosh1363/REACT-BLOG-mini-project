# Fieldnote — Local-First Editorial Workspace

Fieldnote modernizes a 2023 Create React App blog exercise into a static, portfolio-ready editorial workspace.

The original application depended on a separately running `json-server` at `http://localhost:8000`, used placeholder content and remote GIFs, hard-coded new article IDs, mixed incompatible field names, and shipped with no meaningful README, CI, or deployment workflow.

## Engineering focus

Fieldnote demonstrates a small but explicit front-end architecture:

- bundled published article data
- URL-backed search and topic state
- sanitized browser bookmarks
- local-only draft persistence
- deterministic not-found recovery
- pure state policies that can be tested outside React
- static deployment without a fake backend

## Architecture

```text
src/data/articles.js
        │
        ▼
src/lib/editorialState.js
        ├─ query normalization
        ├─ topic validation
        ├─ filtering
        ├─ bookmark sanitization
        ├─ draft sanitization / validation
        └─ URL read/write rules
        │
        ▼
src/App.jsx
        ├─ Explore route
        ├─ Article route
        ├─ Draft workspace
        └─ localStorage integration
        │
        ▼
HashRouter + static hosting
```

## State boundaries

Published content is bundled with the application and is read-only.

User-owned state is separate:

- bookmarks → `fieldnote:bookmarks:v1`
- draft → `fieldnote:draft:v1`
- search/topic → query string

Malformed storage is ignored or normalized before it reaches the UI.

## Features

- topic filtering
- text search
- shareable explore state
- article detail routes
- local bookmarks
- local draft save/clear flow
- explicit validation feedback
- unknown article / route recovery
- responsive editorial layout
- skip navigation
- visible keyboard focus
- reduced-motion support

## Security and privacy

Fieldnote does not require API keys, credentials, accounts, analytics, or a backend.

Draft text never leaves the browser in this demo. It is stored only in localStorage when the user explicitly saves it.

No user-controlled HTML is rendered with unsafe injection APIs.

## Local development

Requirements:

- Node.js 22+
- npm

```bash
npm install --legacy-peer-deps
npm run dev
```

## Tests

```bash
npm test
```

The test suite covers:

- invalid topic recovery
- search normalization
- combined filtering
- bookmark sanitization
- bookmark transitions
- malformed draft recovery
- draft validation
- URL-state recovery
- unrelated query parameter preservation

## Quality gate

```bash
npm run check
```

This runs syntax checks, Vitest, and a Vite production build.

## CI

The Quality workflow runs on pull requests and pushes to `main`.

Dependency versions are pinned exactly. CI uses `npm install --legacy-peer-deps` to avoid the npm 10 Arborist resolver issue observed on current GitHub-hosted Node 22 runners.

## Deployment

Fieldnote is static and compatible with GitHub Pages.

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Run **Actions → Deploy Pages → Run workflow**.

The app uses `HashRouter`, so article and draft routes remain refresh-safe on static hosting.

## Scope and limitations

Fieldnote intentionally does not include:

- authentication
- server-side publishing
- a database
- comments
- multi-user collaboration
- CMS integration
- analytics
- fake API latency

The draft route is a local writing workspace, not a claim of production publishing infrastructure.

## License

MIT. See [LICENSE](./LICENSE).
