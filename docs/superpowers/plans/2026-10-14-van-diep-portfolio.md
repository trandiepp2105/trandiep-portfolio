# Van Diep Tran Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, responsive, private-by-default portfolio for Van Diep Tran's Full-Stack Web Developer Internship applications.

**Architecture:** A single-page static site built with semantic HTML, responsive CSS, and small vanilla JavaScript for mobile navigation. Source assets and CV live with the site; no backend or frontend framework is introduced. The finished source is packaged under the task's `outputs/` directory and published privately through Sites unless deployment is unavailable.

**Tech Stack:** HTML5, CSS, vanilla JavaScript; existing project screenshots; supplied PDF CV; Sites static hosting.

**Spec:** `docs/superpowers/specs/2026-10-14-van-diep-portfolio-design.md`

## Global Constraints

- The primary page language is English, matching the supplied CV.
- Use the approved light, professional concept: warm off-white surfaces, dark readable text, cobalt-blue accents, restrained borders and shadows, and strong but simple typography.
- Order projects as TOEIC Lab, ViberChill, ViberStore; use “ViberChill” as the film project's display name.
- Keep every derived claim faithful to the supplied CV and repositories; do not invent project metrics, customers, deployment URLs, responsibilities, or awards.
- Do not edit the three source repositories; ViberStore currently contains uncommitted user changes.
- Do not add a backend, database, account system, framework, analytics, or language switcher.
- If hosted through Sites, retain the default private audience unless the user explicitly asks to make it public.

## Review Focus

- **Missing or mismatched repository links:** each visible project link must use the intended GitHub URL from the CV or verified repository remote; task 2 confirms the URLs before rendering links.
- **Unverified project claims:** project copy must be checked against the CV and README/source; task 2 omits claims without evidence.
- **Unavailable TOEIC Lab runtime or screenshot:** task 2 uses a clearly illustrative interface graphic if a real screenshot cannot be captured safely; never label an illustration as a screenshot.
- **Missing downloadable CV:** task 3 verifies that the copied PDF exists at the linked public path and retains its readable filename.
- **Narrow viewport and keyboard navigation:** task 3 checks responsive reflow, menu operation, visible focus, reduced-motion behavior, and accessible link names in a local preview.

---

### Task 1: Create the static site shell

**Files:**
- Create: `index.html` — page metadata, semantic section landmarks, primary navigation, and content mount points.
- Create: `assets/css/styles.css` — design tokens, typography, layout primitives, responsive breakpoints, and focus styles.
- Create: `assets/js/main.js` — mobile navigation behavior and small progressive enhancements only.
- Create: `assets/images/` — local project visuals.
- Create: `public/` — downloadable CV.

**Interfaces:**
- Produces one static site rooted at `index.html`; navigation targets are `#projects`, `#achievements`, `#skills`, and `#contact`.
- `main.js` controls the menu button using a `data-menu-toggle` button and an `aria-expanded` state; it does not own page content.

- [ ] **Step 1: Create semantic page landmarks and accessible navigation** in `index.html`, with header, main, and footer and the anchor IDs listed above.
- [ ] **Step 2: Add the approved design tokens and responsive layout primitives** in `assets/css/styles.css`, including keyboard focus and reduced-motion rules.
- [ ] **Step 3: Implement the mobile menu toggle** in `assets/js/main.js`; update `aria-expanded`, open/close state, and close after a navigation link is selected.
- [ ] **Step 4: Serve the shell locally** and confirm the document loads with all navigation targets present and the menu button usable by keyboard.

### Task 2: Add verified portfolio content and project assets

**Files:**
- Modify: `index.html` — hero, project cards/details, achievements, skills, contact, and footer copy.
- Create: `assets/images/toeic-lab-preview.png` — authentic capture if safely available, otherwise a clearly illustrative graphic.
- Copy: `assets/images/viberchill-preview.png` — selected screenshot from the ViberFilm repository, with an accessible alt description.
- Copy: `assets/images/viberstore-preview.png` — selected screenshot from the ViberStore repository, with an accessible alt description.
- Copy: `public/Van-Diep-Tran-CV.pdf` — supplied CV for download.

**Interfaces:**
- Consumes: section anchors and CSS classes from Task 1.
- Produces: project entries in order TOEIC Lab, ViberChill, ViberStore, with factual descriptions, contribution, selected features, stack labels, and repository URLs.

- [ ] **Step 1: Confirm the public repository URLs** against the CV and each source repository's Git remote; record the exact URLs in the project links.
- [ ] **Step 2: Add the hero and profile copy** using the candidate's CV: “Van Diep Tran”, “Full-Stack Web Developer Intern”, GPA 3.57/4.0, and concise internship-focused introduction.
- [ ] **Step 3: Add TOEIC Lab project details** from its README, distinguishing the modular monolith, 120-minute full tests, Part practice, vocabulary quizzes, and progress/history flows.
- [ ] **Step 4: Add ViberChill project details** from its CV entry and source repository, using the requested display name while describing verified movie browsing, search, HLS playback, backend, frontend, and supporting services.
- [ ] **Step 5: Add ViberStore project details** from its CV entry and current README, covering storefront, admin, product/cart/order flow, OTP verification, and verified stack only.
- [ ] **Step 6: Add the supplied project visuals**; inspect the two existing repository screenshots, and capture the real TOEIC Lab UI only if its environment can run without altering source data. Otherwise create a plainly illustrative local preview graphic.
- [ ] **Step 7: Copy the supplied CV to `public/Van-Diep-Tran-CV.pdf`** and attach it to the visible download link.
- [ ] **Step 8: Serve the page locally** and confirm project order, exact project names, screenshots, and outgoing links are visible and navigable.

### Task 3: Add achievements, skills, contact, and accessibility polish

**Files:**
- Modify: `index.html` — achievement and skills content, contact links, social links, page title/description, and image alt text.
- Modify: `assets/css/styles.css` — final responsive behavior and visual states.
- Modify: `assets/js/main.js` — any required menu refinements.

**Interfaces:**
- Consumes: project content and link patterns from Task 2.
- Produces: complete page sections at `#achievements`, `#skills`, and `#contact`, with GitHub, email, and CV actions.

- [ ] **Step 1: Add CV-supported achievements**: AI Challenge 2024 Encouragement Prize; Lucifer-TRACE contribution and 86/88 score at AI Challenge 2025; GPA 3.57/4.0. Do not label the 2025 score as an award.
- [ ] **Step 2: Group CV-listed skills** into frontend, backend, data/search, and delivery/tooling; avoid duplicating the project stack lists unnecessarily.
- [ ] **Step 3: Add contact actions** using the supplied email and GitHub profile, with a concise internship contact invitation.
- [ ] **Step 4: Add page title/description, meaningful image alt text, descriptive link names, visible focus, and reduced-motion support.**
- [ ] **Step 5: Review the local preview** at desktop and narrow mobile widths and by keyboard; correct overflow, clipped text, low contrast, menu issues, or broken asset links.

### Task 4: Package and deploy the private static Site

**Files:**
- Create: `.openai/hosting.json` — Site project identity and static output directory, after Site registration returns an ID.
- Package: `/home/trandiep/Documents/Codex/2026-10-14/thi/outputs/van-diep-portfolio-source.zip` — source files for the user.

**Interfaces:**
- Consumes: complete static site and CV from Tasks 1–3.
- Produces: a verified private Site URL and source archive under `outputs/`.

- [ ] **Step 1: Register a new private static Site** and persist the returned project ID and source credential through the Sites workflow; do not change audience.
- [ ] **Step 2: Set `.openai/hosting.json`** to the returned project ID and static directory `dist` after the hosting workflow establishes the expected source structure.
- [ ] **Step 3: Package the static files** into `dist/` and a source archive in `outputs/`, excluding source-repository credentials and local environment files.
- [ ] **Step 4: Run the Sites packaging workflow with no extra test commands** for buildless HTML/JS, then save and deploy the archive privately.
- [ ] **Step 5: Confirm the terminal deployment status and retain the returned URL and saved version ID.**

## Completion

The implementation is complete when all acceptance criteria in the spec are met, the deployment is confirmed private, and both the Site URL and source archive are available.
