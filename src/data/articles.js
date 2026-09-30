export const articles = Object.freeze([
  {
    id: "local-first-state",
    topic: "architecture",
    title: "Local-first state without pretending there is a backend",
    dek: "A small editorial app can still demonstrate durable state boundaries, recovery rules, and shareable navigation.",
    author: "Fieldnote Editorial",
    publishedAt: "2026-09-12",
    readingMinutes: 6,
    featured: true,
    body: [
      "Small portfolio applications often add a mock API because remote requests look more realistic. That can make the demo more fragile without making the engineering story stronger.",
      "Fieldnote keeps published content bundled with the application and reserves browser storage for user-owned state such as bookmarks and drafts. That boundary is explicit, testable, and usable when the app is hosted as a static site.",
      "The useful engineering question is not whether every project has a backend. It is whether each state transition has a clear owner, failure mode, and recovery path."
    ]
  },
  {
    id: "search-as-state",
    topic: "interaction",
    title: "Search works better when URL state is part of the design",
    dek: "Filtering becomes more predictable when query and topic values are normalized instead of living only inside component callbacks.",
    author: "Fieldnote Editorial",
    publishedAt: "2026-09-08",
    readingMinutes: 5,
    featured: false,
    body: [
      "Search interfaces become difficult to reason about when every input mutates unrelated component state.",
      "A compact state layer can normalize the query, topic, and sort mode before rendering. The same state can be serialized into the URL, which makes refreshes and copied links deterministic.",
      "The important part is not the number of filters. It is that invalid values recover safely and unrelated URL parameters are not destroyed."
    ]
  },
  {
    id: "draft-boundary",
    topic: "product",
    title: "Drafts need a trust boundary, even in a demo",
    dek: "A local draft workspace should say exactly where content is stored and what publication does not mean.",
    author: "Fieldnote Editorial",
    publishedAt: "2026-08-28",
    readingMinutes: 4,
    featured: false,
    body: [
      "A create-article form can easily imply capabilities the application does not have. A static portfolio app should not suggest that pressing Publish writes to a production CMS.",
      "Fieldnote labels draft persistence as local-only. A draft can be saved in the browser, previewed, edited, and removed without claiming that a server or editorial review workflow exists.",
      "Clear scope is part of product quality. It protects the user from misleading behavior and keeps the code proportional to the actual problem."
    ]
  },
  {
    id: "recovery-paths",
    topic: "reliability",
    title: "Recovery paths are a feature, not cleanup work",
    dek: "Corrupted storage, unknown routes, and missing content are ordinary states that deserve explicit handling.",
    author: "Fieldnote Editorial",
    publishedAt: "2026-08-17",
    readingMinutes: 7,
    featured: false,
    body: [
      "Browser storage is editable and can outlive several application versions. Treating every stored value as valid creates brittle UI behavior.",
      "A safer approach is to parse defensively, validate against the current content model, and fall back to a known state when input cannot be trusted.",
      "The same principle applies to article routes. A missing article should render a deliberate not-found state instead of an empty shell."
    ]
  },
  {
    id: "accessible-reading",
    topic: "accessibility",
    title: "Readable interfaces begin with semantic structure",
    dek: "Typography matters, but headings, focus order, landmark structure, and reduced motion do more work than decorative polish.",
    author: "Fieldnote Editorial",
    publishedAt: "2026-08-03",
    readingMinutes: 5,
    featured: false,
    body: [
      "An editorial interface has a simple job: help a reader understand where they are, what they can act on, and how content is organized.",
      "Fieldnote uses visible focus styles, semantic navigation, labeled controls, predictable headings, and a skip link before adding visual detail.",
      "The design system stays intentionally quiet so interaction states remain obvious across desktop and mobile layouts."
    ]
  }
]);

export const topics = Object.freeze(["all", "architecture", "interaction", "product", "reliability", "accessibility"]);
