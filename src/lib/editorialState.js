export const DRAFT_STORAGE_KEY = "fieldnote:draft:v1";
export const BOOKMARK_STORAGE_KEY = "fieldnote:bookmarks:v1";

export function normalizeTopic(value, topics) {
  return topics.includes(value) ? value : "all";
}

export function normalizeQuery(value) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, 120);
}

export function filterArticles(articles, { topic = "all", query = "" } = {}) {
  const normalizedQuery = normalizeQuery(query).toLowerCase();
  return articles.filter((article) => {
    const topicMatches = topic === "all" || article.topic === topic;
    if (!topicMatches) return false;
    if (!normalizedQuery) return true;
    const searchable = [article.title, article.dek, article.author, article.topic].join(" ").toLowerCase();
    return searchable.includes(normalizedQuery);
  });
}

export function sanitizeBookmarks(value, articles) {
  if (!Array.isArray(value)) return [];
  const allowed = new Set(articles.map((article) => article.id));
  return [...new Set(value.map(String).filter((id) => allowed.has(id)))].slice(0, 20);
}

export function toggleBookmark(current, id, articles) {
  const safe = sanitizeBookmarks(current, articles);
  return safe.includes(id) ? safe.filter((value) => value !== id) : sanitizeBookmarks([...safe, id], articles);
}

export function sanitizeDraft(value) {
  if (!value || typeof value !== "object") {
    return { title: "", dek: "", body: "", topic: "product" };
  }
  return {
    title: String(value.title || "").slice(0, 120),
    dek: String(value.dek || "").slice(0, 240),
    body: String(value.body || "").slice(0, 5000),
    topic: ["architecture", "interaction", "product", "reliability", "accessibility"].includes(value.topic)
      ? value.topic
      : "product"
  };
}

export function validateDraft(draft) {
  const safe = sanitizeDraft(draft);
  const errors = {};
  if (safe.title.trim().length < 5) errors.title = "Use at least 5 characters.";
  if (safe.dek.trim().length < 20) errors.dek = "Use at least 20 characters.";
  if (safe.body.trim().length < 80) errors.body = "Use at least 80 characters.";
  return { valid: Object.keys(errors).length === 0, errors, draft: safe };
}

export function readExploreState(search, topics) {
  const params = new URLSearchParams(search);
  return {
    topic: normalizeTopic(params.get("topic") || "all", topics),
    query: normalizeQuery(params.get("q") || "")
  };
}

export function writeExploreState(search, state) {
  const params = new URLSearchParams(search);
  if (state.topic && state.topic !== "all") params.set("topic", state.topic);
  else params.delete("topic");
  const query = normalizeQuery(state.query);
  if (query) params.set("q", query);
  else params.delete("q");
  const next = params.toString();
  return next ? `?${next}` : "";
}
