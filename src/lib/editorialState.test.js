import { describe, expect, it } from "vitest";
import { articles, topics } from "../data/articles.js";
import {
  filterArticles,
  normalizeQuery,
  normalizeTopic,
  readExploreState,
  sanitizeBookmarks,
  sanitizeDraft,
  toggleBookmark,
  validateDraft,
  writeExploreState
} from "./editorialState.js";

describe("editorial state", () => {
  it("normalizes unknown topics", () => expect(normalizeTopic("unknown", topics)).toBe("all"));
  it("normalizes search whitespace and length", () => expect(normalizeQuery("  local   first  ")).toBe("local first"));
  it("filters by topic and query", () => expect(filterArticles(articles, { topic: "architecture", query: "backend" }).map(a => a.id)).toEqual(["local-first-state"]));
  it("sanitizes bookmarks against known article ids", () => expect(sanitizeBookmarks(["local-first-state", "missing", "local-first-state"], articles)).toEqual(["local-first-state"]));
  it("toggles bookmarks deterministically", () => {
    expect(toggleBookmark([], "search-as-state", articles)).toEqual(["search-as-state"]);
    expect(toggleBookmark(["search-as-state"], "search-as-state", articles)).toEqual([]);
  });
  it("sanitizes malformed drafts", () => expect(sanitizeDraft({ title: 12, topic: "bad" })).toEqual({ title: "12", dek: "", body: "", topic: "product" }));
  it("validates meaningful draft content", () => {
    const result = validateDraft({ title: "A useful draft", dek: "A sufficiently descriptive summary for a draft.", body: "x".repeat(90), topic: "product" });
    expect(result.valid).toBe(true);
  });
  it("recovers invalid URL state", () => expect(readExploreState("?topic=bad&q=%20hello%20%20world%20", topics)).toEqual({ topic: "all", query: "hello world" }));
  it("preserves unrelated query parameters", () => expect(writeExploreState("?ref=portfolio", { topic: "reliability", query: "storage" })).toBe("?ref=portfolio&topic=reliability&q=storage"));
});
