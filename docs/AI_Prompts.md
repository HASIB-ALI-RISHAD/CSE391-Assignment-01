# AI Prompt Log & Iterative Development Record

**Student:** Md. Hasib Ali Rishad  
**Student ID:** 23101389  
**Course:** CSE 391 — *Programming for the Internet* (Section 01, Fall 2026)  
**Instructor:** Muhammad Abdur Rahman (ADR)  
**AI Tool Used:** Google Gemini (Antigravity Pair-Programming Assistant)  

---

## Overview

This document records the chronological prompts, design directions, bug fixes, and iterative refinements used while developing **Assignment 01: Personal Web Page & CSE 391 Course Portfolio**. Every feature was reviewed, customized with personal academic and extracurricular data, and verified against W3C HTML5 and CSS3 validation standards.

---

## Phase 1: Initial Architecture, Aesthetic Theme & Base Rubric Setup

### Prompt 1.1 — Core Webpage Structure & ZenCrypto Theme Inspiration
> *"Read the attached CSE 391 Assignment 1 specification and build a clean, beginner-friendly personal homepage using semantic HTML5 and 100% vanilla CSS3 (no external CSS/JS frameworks). Take visual inspiration from the attached ZenCrypto minimalist interface screenshots (soft sage light background `#e8ede4`, crisp white cards with `2px` solid dark `#191314` borders, bold monospace headings in Martian Mono, body copy in Inter, and `#ecf95a` lime-yellow accents). Include clearly labeled sections for personal info, education, skills, a structured table with `rowspan`/`colspan` and multi-line cells, favorite books/movies lists, a favorite quote, external/internal/inline CSS examples, and only minimal vanilla JavaScript at the bottom to display `window.location.href` and `document.lastModified`."*

**Outcome:** Established the base [`index.html`](../index.html), [`style.css`](../style.css), and [`script.js`](../script.js) architecture adhering strictly to Parts 1–4 of the assignment specification without Bootstrap or Tailwind.

---

### Prompt 1.2 — Pure CSS Dark/Light Mode Contrast & Keyframe Animations
> *"Implement the Bonus Challenges using pure vanilla CSS: (1) a `mailto:` contact form, (2) a pure CSS dark/light mode toggle using a hidden `#theme-toggle` checkbox and general sibling combinator (`#theme-toggle:checked ~ .theme-wrapper`), and (3) subtle `@keyframes` CSS animations (`fadeInUp`, `pulseDot`, `floatCard`). Fix the dark mode palette using a deep black-olive (`#0f110c` / `#181b14`) and neon lime (`#ecf95a`) combination so no white patches remain and no text or icons become invisible when switching to dark mode."*

**Outcome:** Defined scoped CSS custom properties (`:root` for Light Mode and `#theme-toggle:checked ~ .theme-wrapper` for Dark Mode) ensuring WCAG-compliant contrast across every card, table row, badge, and button.

---

## Phase 2: Personalization, Academic Profile & Class Schedule

### Prompt 2.1 — Personal Bio, LinkedIn Qualifications & Portrait Integration
> *"Replace all placeholder profile details with my real academic and professional background for Md. Hasib Ali Rishad (Student ID: 23101389, BRAC University B.Sc. in CSE, Govt. Mohammadpur Model School and College — JSC/SSC/HSC GPA 5.00). Add my portrait photo (`images/hasib.jpg`) without cropping (`object-fit: contain`), and place social/coding badge links with SVG icons directly below the photo frame for Facebook, LinkedIn, GitHub, and Codeforces. Also include my ML Engineering Internship at FlyRank AI, GCI World 2026 Fellowship at The University of Tokyo (Matsuo-Iwasawa Lab), Real-Time Bangla Sign Language (BdSL) computer vision research, Football Club of BRAC University leadership (Creative & Development Secretary, former Spring 2023 Team Captain), BRAC University Film Club (Marketing Executive, passionate about filmmaking and film theory), and Project Srijon civic engagement."*

**Outcome:** Populated `#about` and `#education` with authentic academic, research, sports, creative, and civic records plus categorized external links.

---

### Prompt 2.2 — Split Technical & Creative Competencies
> *"In the Technologies & Competencies (`#skills`) section, organize skills into two balanced cards: (1) Computer Science & AI/ML (Python, Deep Learning, Machine Learning, Data Pre-Processing, C/C++, Competitive Programming, HTML5 & CSS3, JavaScript Basics, Responsive Web Design, Git & GitHub) and (2) Video Editing & Creative Media (Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop, Canva, Motion Graphics, Video Post-Production, Promotional Campaigns)."*

**Outcome:** Structured `#skills` into a responsive two-column card grid with interactive hover-animated `.skill-pill` tags.

---

### Prompt 2.3 — Fall 2026 Weekly Class Routine Table & CSE 391 Discord Link
> *"Convert the schedule table (`#schedule`) to display my official Fall 2026 BRAC University class routine (`CSE391 -01`, `CSE391L -01`, `CSE446 -02`, `CSE446L -02`, `CSE423 -18`, `CSE423L -18`, `CSE449 -01`) across Sunday–Thursday time slots (`8:00 AM – 10:50 AM`, `11:00 AM – 12:20 PM`, `12:30 PM – 1:50 PM`, `2:00 PM – 4:50 PM`). Use `rowspan="2"` for Sunday's `CSE391 -01` session (`11:00 AM – 1:50 PM`), `colspan="2"` and `colspan="4"` in `<tfoot>`, multi-line course/faculty/room descriptions, striped rows, hover highlights, and a responsive horizontal scroll container. Embed the official CSE 391 Discord server invite (`https://discord.gg/XfFEww3kM`) with a Discord SVG icon inside the CSE 391 lecture and lab cells."*

**Outcome:** Built the 6-column W3C-validated schedule table demonstrating `<thead>`, `<tbody>`, `<tfoot>`, `rowspan`, `colspan`, multi-line cells, internal link to `projects.html`, and Discord server badge links.

---

### Prompt 2.4 — Top Favorites Lists & External Web Image Quote Card
> *"Update Top Favorites (`#favorites`) with an ordered list (`<ol>`) of my Top 5 Favorite Books (Ar-Raheeq Al-Makhtum, Bidayat al-Hidayah, How to Prove It by Daniel J. Velleman, Crime and Punishment, Can't Hurt Me) and an unordered list (`<ul>`) of my Top 5 Favorite Movies (Interstellar, Se7en, Fight Club, Dead Poets Society, The Sixth Sense). Below Favorites, create a standalone bordered quote container featuring an external web image from Dead Poets Society (1989) alongside the quote: 'Only in their dreams can men be truly free. ‘Twas always thus, and always thus will be.'"*

**Outcome:** Satisfied Part 2 (Lists, Quote, Text Formatting) and Part 3, Item 1 (Local portrait + External web image) with cohesive border and lime-inset shadow styling.

---

## Phase 3: Dedicated CSE 391 Course Projects Subpage & Cross-Page State

### Prompt 3.1 — Course Projects & 13-Week Syllabus Subpage (`projects.html`)
> *"Create a dedicated internal subpage (`projects.html`) serving as my CSE 391 Course Projects & Syllabus hub based on the official Fall 2026 course outline (Instructor: Muhammad Abdur Rahman `ADR`, Prerequisites: `CSE 220` & `CSE 370`). Include: (1) breadcrumb navigation back to `index.html`, (2) course metadata cards, (3) a visual 100% assessment weight distribution bar (20% Quizzes/Assignments, 20% Midterm, 30% Project & Term Paper, 30% Final Exam) with solid dividers, (4) a 13-week curriculum & lab roadmap table, (5) concise project milestone cards with consistent left lime inset accents culminating in the Full-Scale Commercial Website Clone Capstone, and (6) official reference textbooks."*

**Outcome:** Built [`projects.html`](../projects.html) as the central coursework hub envisioned in the assignment objective, linked from both the main navbar, hero bio, and schedule table.

---

### Prompt 3.2 — Cross-Page Dark/Light Mode Persistence & Custom Brand Favicon
> *"Ensure dark/light mode persists seamlessly when navigating between `index.html` and `projects.html` without a white flash on page load by syncing the `#theme-toggle` checkbox state with `localStorage`. Also generate a crisp custom vector `HR` favicon (`images/favicon.svg` and antialiased PNG fallbacks) matching the lime-and-charcoal brand badge instead of using a pixelated screenshot."*

**Outcome:** Added immediate inline checkbox state restoration plus `localStorage` event synchronization in [`script.js`](../script.js), and created crisp SVG/PNG favicons in `images/`.

---

## Phase 4: GitHub Pages Deployment, Navbar Redesign & Responsive Polish

### Prompt 4.1 — Subpage Cleanup & Single-Row Theme-Synced Navbar Redesign
> *"Remove the unused `hobbies.html` subpage completely so `projects.html` is the clean primary subpage, and add a subtle diagonal subpage arrow icon (`↗`) next to `Course Projects` in the navbar. Redesign `.site-header` into a sleek single-row navigation bar: `[HR] Md. Hasib Ali Rishad` brand badge on the left, clean bold `Martian Mono` navigation links with animated bottom active/hover underlines in the middle-right, and the Dark/Light Mode toggle inside a solid lime-green pill button with monochrome Moon/Sun SVG icons on the far right. Ensure the navbar matches both Light Mode and Dark Mode themes and never overflows the `1100px` container across desktop, compact laptop (`<= 1080px`), tablet collapsible hamburger drawer (`<= 980px`), and mobile phone (`<= 520px`) viewports."*

**Outcome:** Engineered the responsive single-row header with pure-CSS collapsible mobile menu (`#nav-toggle`), auto-closing drawer behavior, and zero horizontal overflow on all screen widths.

---

## Phase 5: Final Bug Testing, W3C Validation, Comment Sequencing & `/docs` Audit

### Prompt 5.1 — Complete Rubric Audit, Sequential Comments & `/docs` Repository Packaging
> *"Perform a complete bug test and requirement-by-requirement audit against the official CSE 391 Assignment 1 specification. Verify W3C HTML5 and CSS3 validation with zero errors, check all internal/external/Discord links and responsive breakpoints, clean up and number all inline comments in strict sequential order across `index.html`, `projects.html`, `style.css`, and `script.js`, and organize all project documents, the signed `AI_Declaration.txt`, and detailed prompts inside the `/docs` folder of the repository."*

**Outcome:**
1. Resolved W3C Nu HTML Validator `aria-label` attribute warning/error on `<label for="nav-toggle">` — achieving **0 errors and 0 warnings** across `index.html`, `projects.html`, and `style.css`.
2. Restored the official CSE 391 Discord invite URL (`https://discord.gg/XfFEww3kM`) with Discord SVG badges, embedded `<a href="projects.html">course projects</a>` in the hero bio sentence, and added URL-hash active underline synchronization in `script.js`.
3. Removed unused legacy CSS selectors and re-numbered every inline section comment sequentially (`Sections 1–10` in `index.html`, `Sections 1–8` in `projects.html`, `Sections 1–18` in `style.css`, and `Modules 1–4` in `script.js`).
4. Consolidated [`CSE 391- Assignment 1 V2.pdf`](./CSE%20391-%20Assignment%201%20V2.pdf), [`AI_Declaration.txt`](./AI_Declaration.txt), [`AI_Prompts.md`](./AI_Prompts.md), and [`Project_Documentation.md`](./Project_Documentation.md) inside `/docs`.
