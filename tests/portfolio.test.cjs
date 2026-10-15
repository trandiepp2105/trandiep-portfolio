const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const siteRoot = path.join(__dirname, "..");
const indexPath = path.join(siteRoot, "index.html");
let menuModule;

try {
  menuModule = require(path.join(siteRoot, "assets/js/main.js"));
} catch {
  menuModule = undefined;
}

class FakeElement {
  constructor() {
    this.attributes = new Map();
    this.listeners = new Map();
    this.classes = new Set();
    this.links = [];
    this.classList = {
      toggle: (name, force) => {
        const shouldAdd = force ?? !this.classes.has(name);
        if (shouldAdd) this.classes.add(name);
        else this.classes.delete(name);
      },
      contains: (name) => this.classes.has(name),
    };
  }

  setAttribute(name, value) {
    this.attributes.set(name, value);
  }

  getAttribute(name) {
    return this.attributes.get(name) ?? null;
  }

  addEventListener(name, callback) {
    const callbacks = this.listeners.get(name) ?? [];
    callbacks.push(callback);
    this.listeners.set(name, callbacks);
  }

  emit(name, event = {}) {
    for (const callback of this.listeners.get(name) ?? []) callback(event);
  }

  querySelectorAll() {
    return this.links;
  }
}

test("page shell has semantic landmarks and all navigation destinations", () => {
  assert.ok(fs.existsSync(indexPath), "index.html should exist");
  const html = fs.readFileSync(indexPath, "utf8");
  assert.match(html, /<header\b/i);
  assert.match(html, /<main\b[^>]*id="main-content"/i);
  assert.match(html, /<footer\b/i);
  for (const target of ["projects", "achievements", "skills", "contact"]) {
    assert.match(html, new RegExp(`href="#${target}"`));
    assert.match(html, new RegExp(`id="${target}"`));
  }
  assert.match(html, /data-menu-toggle/);
  assert.match(html, /aria-expanded="false"/);
});

test("mobile navigation opens and closes with aria state", (t) => {
  assert.equal(typeof menuModule?.initMenu, "function", "main.js should export initMenu");
  if (typeof menuModule?.initMenu !== "function") return;

  const button = new FakeElement();
  const nav = new FakeElement();
  const keyboardTarget = new FakeElement();
  button.setAttribute("aria-expanded", "false");
  menuModule.initMenu(button, nav, keyboardTarget);

  button.emit("click");
  assert.equal(button.getAttribute("aria-expanded"), "true");
  assert.equal(button.getAttribute("aria-label"), "Close navigation");
  assert.equal(nav.classList.contains("is-open"), true);

  button.emit("click");
  assert.equal(button.getAttribute("aria-expanded"), "false");
  assert.equal(button.getAttribute("aria-label"), "Open navigation");
  assert.equal(nav.classList.contains("is-open"), false);
});

test("mobile navigation closes after a link or Escape is activated", (t) => {
  assert.equal(typeof menuModule?.initMenu, "function", "main.js should export initMenu");
  if (typeof menuModule?.initMenu !== "function") return;

  const button = new FakeElement();
  const nav = new FakeElement();
  const keyboardTarget = new FakeElement();
  const link = new FakeElement();
  nav.links = [link];
  button.setAttribute("aria-expanded", "false");
  menuModule.initMenu(button, nav, keyboardTarget);

  button.emit("click");
  link.emit("click");
  assert.equal(button.getAttribute("aria-expanded"), "false");
  assert.equal(nav.classList.contains("is-open"), false);

  button.emit("click");
  keyboardTarget.emit("keydown", { key: "Escape" });
  assert.equal(button.getAttribute("aria-expanded"), "false");
  assert.equal(nav.classList.contains("is-open"), false);
});

test("profile and project content follow the approved order and verified details", () => {
  const html = fs.readFileSync(indexPath, "utf8");
  assert.ok(html.includes("Full-Stack Web Developer Intern"), "target role should be visible");
  assert.ok(html.includes("GPA"), "GPA label should be visible");
  assert.ok(html.includes("8.41") && html.includes("/10"), "GPA value should be visible");

  const order = ["TOEIC Lab", "ViberChill", "ViberStore"].map((name) => html.indexOf(name));
  assert.ok(order.every((position) => position >= 0), "all three project names should be present");
  assert.deepEqual(order, [...order].sort((left, right) => left - right), "projects should use the approved order");

  for (const detail of [
    "120-minute",
    "HLS",
    "OTP email verification",
    "https://github.com/trandiepp2105/toeiclab",
    "https://github.com/trandiepp2105/viberchill",
    "https://github.com/trandiepp2105/viberstore",
  ]) {
    assert.ok(html.includes(detail), `expected verified detail: ${detail}`);
  }
  assert.equal((html.match(/class="project-contribution"/g) ?? []).length, 3);
  for (const contribution of [
    "Built a modular TOEIC learning platform",
    "Developed a full-stack movie streaming platform",
    "Developed a full-stack fashion commerce platform",
  ]) {
    assert.ok(html.includes(contribution), `expected candidate contribution: ${contribution}`);
  }
});

test("project previews and downloadable CV exist at their linked paths", () => {
  const html = fs.readFileSync(indexPath, "utf8");
  const expectedAssets = [
    "assets/images/toeic-lab-preview.png",
    "assets/images/viberchill-preview.png",
    "assets/images/viberstore-preview.png",
    "public/Van-Diep-Tran-CV.pdf",
  ];

  for (const asset of expectedAssets) {
    assert.ok(html.includes(asset), `${asset} should be linked`);
    assert.ok(fs.existsSync(path.join(siteRoot, asset)), `${asset} should exist`);
  }
});

test("CV achievements, skills, contact links, and metadata are present", () => {
  const html = fs.readFileSync(indexPath, "utf8");
  const css = fs.readFileSync(path.join(siteRoot, "assets/css/styles.css"), "utf8");

  for (const detail of [
    "Encouragement Prize",
    "AI Challenge",
    "Lucifer-TRACE",
    "86/88",
    "Frontend",
    "Backend",
    "Data &amp; Search",
    "Delivery &amp; Tooling",
    "Spring Boot",
    "FastAPI",
    "Meilisearch",
    "English",
    "Vietnamese",
    "mailto:tranvandiepp2105@gmail.com",
    "https://github.com/trandiepp2105",
    "name=\"description\"",
  ]) {
    assert.ok(html.includes(detail), `expected CV-supported content: ${detail}`);
  }
  assert.match(html, /<span class="achievement-year">2024<\/span>[\s\S]*?AI Challenge/);

  assert.doesNotMatch(html, /AI Challenge 2025 Award/i, "the 2025 result is a score, not an award");
  assert.doesNotMatch(html, /section-placeholder/, "all content placeholders should be removed");
  assert.match(html, /<title>Van Diep Tran[^<]*<\/title>/);
  assert.match(html, /href="public\/Van-Diep-Tran-CV\.pdf" download/);
  assert.doesNotMatch(html, /<img(?![^>]*\balt=)[^>]*>/i, "every image should have alt text");
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /@media \(max-width: 720px\)/);
});
