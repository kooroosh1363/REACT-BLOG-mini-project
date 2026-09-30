import { useMemo, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { articles, topics } from "./data/articles.js";
import {
  BOOKMARK_STORAGE_KEY,
  DRAFT_STORAGE_KEY,
  filterArticles,
  readExploreState,
  sanitizeBookmarks,
  sanitizeDraft,
  toggleBookmark,
  validateDraft
} from "./lib/editorialState.js";

function safeRead(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "null");
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function Layout({ children, bookmarkCount }) {
  return (
    <>
      <header className="site-header">
        <div className="shell nav-shell">
          <Link className="brand" to="/">FIELDNOTE</Link>
          <nav aria-label="Primary navigation">
            <NavLink to="/">Explore</NavLink>
            <NavLink to="/draft">Draft</NavLink>
            <span className="bookmark-count">{bookmarkCount} saved</span>
          </nav>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="shell site-footer">
        <span>Fieldnote</span>
        <span>Local-first editorial workspace · React + Vite</span>
      </footer>
    </>
  );
}

function Explore({ bookmarks, setBookmarks }) {
  const location = useLocation();
  const navigate = useNavigate();
  const state = readExploreState(location.search, topics);
  const filtered = useMemo(() => filterArticles(articles, state), [state.topic, state.query]);

  function updateState(next) {
    const params = new URLSearchParams(location.search);
    const topic = next.topic ?? state.topic;
    const query = next.query ?? state.query;
    if (topic === "all") params.delete("topic"); else params.set("topic", topic);
    if (query.trim()) params.set("q", query.trim()); else params.delete("q");
    navigate({ search: params.toString() ? `?${params.toString()}` : "" }, { replace: true });
  }

  return (
    <div className="shell page">
      <section className="hero">
        <p className="eyebrow">Editorial systems · local-first state</p>
        <h1>Reading, filtering, and drafting without a fake backend.</h1>
        <p>Fieldnote turns the original localhost-dependent blog demo into a resilient static editorial workspace with shareable search state and browser-owned drafts.</p>
      </section>

      <section className="explore-controls" aria-label="Article filters">
        <label>
          <span>Search</span>
          <input value={state.query} onChange={(e) => updateState({ query: e.target.value })} placeholder="Search titles, topics, authors…" />
        </label>
        <div className="topic-list">
          {topics.map((topic) => (
            <button key={topic} aria-pressed={state.topic === topic} onClick={() => updateState({ topic })}>{topic}</button>
          ))}
        </div>
      </section>

      <section className="article-grid" aria-live="polite">
        {filtered.length ? filtered.map((article) => (
          <article className="article-card" key={article.id}>
            <div className="article-meta"><span>{article.topic}</span><span>{article.readingMinutes} min</span></div>
            <h2><Link to={`/article/${article.id}`}>{article.title}</Link></h2>
            <p>{article.dek}</p>
            <div className="article-actions">
              <Link to={`/article/${article.id}`}>Read article</Link>
              <button
                aria-pressed={bookmarks.includes(article.id)}
                onClick={() => setBookmarks(toggleBookmark(bookmarks, article.id, articles))}
              >
                {bookmarks.includes(article.id) ? "Saved" : "Save"}
              </button>
            </div>
          </article>
        )) : <p className="empty-state">No articles match this view.</p>}
      </section>
    </div>
  );
}

function ArticlePage({ bookmarks, setBookmarks }) {
  const { id } = useParams();
  const article = articles.find((item) => item.id === id);
  if (!article) {
    return <div className="shell page"><section className="empty-state"><h1>Article not found</h1><Link to="/">Return to explore</Link></section></div>;
  }
  return (
    <article className="shell reading-page">
      <p className="eyebrow">{article.topic} · {article.readingMinutes} min read</p>
      <h1>{article.title}</h1>
      <p className="dek">{article.dek}</p>
      <div className="byline">By {article.author} · {article.publishedAt}</div>
      <button className="save-button" aria-pressed={bookmarks.includes(article.id)} onClick={() => setBookmarks(toggleBookmark(bookmarks, article.id, articles))}>
        {bookmarks.includes(article.id) ? "Remove bookmark" : "Save article"}
      </button>
      <div className="article-body">{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </article>
  );
}

function DraftPage() {
  const [draft, setDraft] = useState(() => sanitizeDraft(safeRead(DRAFT_STORAGE_KEY, {})));
  const [message, setMessage] = useState("Drafts stay only in this browser.");
  const validation = validateDraft(draft);

  function update(field, value) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  function save() {
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(sanitizeDraft(draft)));
    setMessage("Draft saved locally.");
  }

  function clear() {
    const empty = sanitizeDraft({});
    setDraft(empty);
    localStorage.removeItem(DRAFT_STORAGE_KEY);
    setMessage("Local draft cleared.");
  }

  return (
    <div className="shell page draft-page">
      <section className="section-heading">
        <p className="eyebrow">Local draft workspace</p>
        <h1>Write without implying publication.</h1>
        <p>No server receives this content. Saving writes only to localStorage in this browser.</p>
      </section>

      <form onSubmit={(e) => { e.preventDefault(); save(); }} className="draft-form">
        <label><span>Title</span><input value={draft.title} maxLength="120" onChange={(e) => update("title", e.target.value)} />{validation.errors.title && <small>{validation.errors.title}</small>}</label>
        <label><span>Topic</span><select value={draft.topic} onChange={(e) => update("topic", e.target.value)}>{topics.filter((t) => t !== "all").map((t) => <option key={t}>{t}</option>)}</select></label>
        <label><span>Summary</span><textarea rows="3" value={draft.dek} maxLength="240" onChange={(e) => update("dek", e.target.value)} />{validation.errors.dek && <small>{validation.errors.dek}</small>}</label>
        <label><span>Body</span><textarea rows="12" value={draft.body} maxLength="5000" onChange={(e) => update("body", e.target.value)} />{validation.errors.body && <small>{validation.errors.body}</small>}</label>
        <div className="draft-actions">
          <button type="submit">Save local draft</button>
          <button type="button" onClick={clear}>Clear</button>
        </div>
      </form>
      <p className="status" aria-live="polite">{message}</p>
    </div>
  );
}

export default function App() {
  const [bookmarks, setBookmarksState] = useState(() => sanitizeBookmarks(safeRead(BOOKMARK_STORAGE_KEY, []), articles));

  function setBookmarks(next) {
    const safe = sanitizeBookmarks(next, articles);
    setBookmarksState(safe);
    localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(safe));
  }

  return (
    <Layout bookmarkCount={bookmarks.length}>
      <Routes>
        <Route path="/" element={<Explore bookmarks={bookmarks} setBookmarks={setBookmarks} />} />
        <Route path="/article/:id" element={<ArticlePage bookmarks={bookmarks} setBookmarks={setBookmarks} />} />
        <Route path="/draft" element={<DraftPage />} />
        <Route path="*" element={<div className="shell page"><section className="empty-state"><h1>Page not found</h1><Link to="/">Return home</Link></section></div>} />
      </Routes>
    </Layout>
  );
}
