# Van Diep Tran Portfolio Design

## Purpose

Create a polished, responsive personal portfolio that helps hiring teams quickly evaluate Van Diep Tran for Full-Stack Web Developer Internship roles. The portfolio will present verified experience from three projects and the supplied CV, with clear paths to inspect code, download the CV, and make contact.

## Audience and success

- Primary audience: technical recruiters and engineering interviewers.
- The first screen should identify the candidate, target role, and strongest evidence within a few seconds.
- Every project should communicate its purpose, the candidate's contribution, key engineering decisions, and technologies without unsupported claims.
- The page should remain readable and navigable on mobile and desktop.

## Visual direction

Use the approved light, professional concept: warm off-white surfaces, dark readable text, cobalt-blue accents, restrained borders and shadows, and strong but simple typography. Use generous whitespace, a clear grid, and real project screenshots where available. Avoid terminal-themed decoration, generic stock imagery, invented testimonials, fabricated metrics, and decorative UI that competes with project evidence.

## Content and page structure

The primary page language is English, matching the supplied CV. Use a single scrolling page with compact anchor navigation.

1. **Header and intro:** candidate name, “Full-Stack Web Developer Intern”, concise profile, GPA 3.57/4.0, and links to projects, CV download, GitHub, and email.
2. **Selected projects:** order projects as TOEIC Lab, ViberChill, ViberStore. Each entry includes a screenshot or clearly identified illustration, concise summary, candidate contribution, selected features, stack, and repository link.
   - **TOEIC Lab:** modular-monolith TOEIC learning application using React/SCSS, Django REST Framework, MySQL, Redis, and Nginx; full tests with a 120-minute timer, Part practice, vocabulary quizzes, and progress/history flows.
   - **ViberChill:** use this display name as explicitly requested. Describe the project using verified repository information: movie and series browsing, search, detail/episode pages, HLS playback, Django REST Framework, React, MySQL, Redis, Elasticsearch, Docker, and Nginx. The source repository folder is named `viberfilm`.
   - **ViberStore:** fashion e-commerce platform with customer storefront, admin, Django REST API, product/cart/order flows, OTP email verification, MySQL, Redis, Docker Compose, and Nginx. Mention VNPay only if the implementation details are visibly supported by the current source.
3. **Achievements:** Encouragement Prize at AI Challenge 2024; contribution to Lucifer-TRACE, which scored 86/88 at AI Challenge 2025; GPA 3.57/4.0. Do not imply the 2025 result is an award.
4. **Skills:** group CV-listed tools into frontend, backend, data/search, and delivery rather than presenting a long undifferentiated list.
5. **Contact and footer:** email, GitHub, and a concise invitation to discuss internship opportunities.

Use the candidate's CV for identity, education, contact links, skills, dates, and stated results. Keep any derived copy faithful to the sources. Do not invent project metrics, customers, deployment URLs, or responsibilities beyond what the repositories and CV support.

## Assets

- Reuse available project screenshots from ViberStore and ViberFilm repositories, after reviewing them for fit and legibility.
- TOEIC Lab has no screenshot in its `image` directory. Capture its real UI if the project can be run safely; otherwise use a clearly illustrative, portfolio-native interface image rather than presenting it as a real screenshot.
- Copy the supplied CV into the site as a downloadable PDF with an accessible filename. The site is private by default, but the CV may contain personal contact information and should be treated as such.

## Implementation approach

Build a static, single-page site with semantic HTML, responsive CSS, and small vanilla JavaScript only where needed (mobile navigation and subtle interaction). Do not add a backend, database, account system, framework, or analytics. Use accessible contrast, keyboard focus states, descriptive link labels, meaningful image alt text, reduced-motion support, and a responsive layout.

Create the portfolio in a new directory separate from the three source repositories. Do not alter those repositories; ViberStore currently contains uncommitted user changes. Use local assets and ordinary links for GitHub, email, and CV download. If hosted through Sites, retain the default private audience unless the user explicitly asks to make it public.

## Out of scope

- Editing or deploying the source projects.
- Adding a contact form backend, database, analytics, authentication, language switcher, or claims unsupported by the supplied sources.
- Publishing the site publicly or changing the default Site audience.

## Acceptance criteria

- All three selected projects appear in the approved order and use “ViberChill” as the film project's public name.
- Achievements and skills match the supplied CV; no invented facts appear.
- CV download, GitHub links, and email contact are usable.
- The page is responsive, keyboard accessible, and visually consistent with the approved light/cobalt direction.
- The project is isolated from source repos; source repositories remain untouched.
- Any hosted version remains private unless the user later requests public access.
