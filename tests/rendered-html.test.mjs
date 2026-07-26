import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

test("exports the production landing page for GitHub Pages", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<title>AI Build Labs/);
  assert.match(html, /We turn sharp ideas/);
  assert.match(html, /into useful software/);
  assert.match(html, /hello@aibuildlabs\.dev/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("includes required public assets", async () => {
  await Promise.all([
    access(new URL("favicon.svg", outputRoot)),
    access(new URL("og.png", outputRoot)),
    access(new URL("_next/", outputRoot)),
  ]);
});
