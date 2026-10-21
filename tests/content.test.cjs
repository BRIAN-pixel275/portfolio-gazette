// Runtime validation coverage for portfolio project and learning-note data.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const typescript = require("typescript");

function loadContent() {
  const sourcePath = path.join(__dirname, "..", "lib", "content.ts");
  const source = fs.readFileSync(sourcePath, "utf8");
  const { outputText } = typescript.transpileModule(source, {
    compilerOptions: { module: typescript.ModuleKind.CommonJS },
  });
  const loadedModule = { exports: {} };
  new Function("module", "exports", outputText)(loadedModule, loadedModule.exports);
  return loadedModule.exports;
}

const content = loadContent();

test("project links are either valid URLs or intentionally unavailable", () => {
  for (const story of content.stories) {
    assert.equal(typeof story.liveHref, "string", `${story.title} has a live-link field`);
    assert.equal(typeof story.codeHref, "string", `${story.title} has a source-link field`);

    for (const url of [story.liveHref, story.codeHref]) {
      assert.ok(url === "" || URL.canParse(url), `${story.title} uses a valid project URL`);
    }
  }
});

test("project screenshots include descriptive alt text", () => {
  const screenshots = content.stories.flatMap((story) => story.screenshots ?? []);
  assert.ok(screenshots.length > 0);
  assert.ok(screenshots.every((screenshot) => screenshot.alt.trim().length > 0));
});

test("learning notes have unique titles and useful content", () => {
  const titles = content.learningNotes.map((note) => note.title);
  assert.equal(new Set(titles).size, titles.length);
  assert.ok(content.learningNotes.every((note) => note.topic && note.text.trim().length > 0));
});
