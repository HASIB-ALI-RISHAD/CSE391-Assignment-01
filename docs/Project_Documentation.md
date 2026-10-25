# CSE 391 Assignment 01 — Technical & Rubric Verification Document

**Student:** Md. Hasib Ali Rishad  
**Student ID:** 23101389  
**Email:** `hasib.ali.rishad@g.bracu.ac.bd`  
**Course:** CSE 391 (*Programming for the Internet*), Section 01 — Fall 2026  
**Instructor:** Muhammad Abdur Rahman (ADR)  
**Live Deployment:** [https://hasib-ali-rishad.github.io/CSE391-Assignment-01/](https://hasib-ali-rishad.github.io/CSE391-Assignment-01/)

---

## 1. Architecture & Technology Stack

- **HTML5 (`index.html`, `projects.html`):** Semantic document hierarchy (`header`, `nav`, `main`, `section`, `article`, `blockquote`, `footer`) validated against the W3C Nu HTML Checker (**0 errors, 0 warnings**).
- **CSS3 (`style.css` + internal `<style>` + sparing inline adjustments):** 100% vanilla CSS using custom properties (`--bg-page`, `--card-bg`, `--accent-lime`, etc.), CSS Grid, Flexbox, responsive media queries (`1080px`, `980px`, `768px`, `520px`), pure-CSS checkbox state toggles (`#theme-toggle`, `#nav-toggle`), and `@keyframes` animations (**0 W3C CSS errors**).
- **Vanilla JavaScript (`script.js`):** Lightweight, zero-dependency script displaying `window.location.href` and `document.lastModified` in the footer, persisting dark/light mode via `localStorage`, and synchronizing active navbar anchor states.

---

## 2. Official Rubric Compliance Matrix (100 Points + Extra Credit)

| Rubric Item | Requirement Summary | Implementation Location | Status |
| :--- | :--- | :--- | :--- |
| **Part 1.1** | Multiple sections: personal info & categorized links (sports, creative hobbies, research, extracurriculars) | `index.html` Sections 2 & 3 (`#about`, `#education`) | Pass |
| **Part 1.2** | Anchor links, internal subpage links (`projects.html`), and external links | `index.html` Section 1 (`<nav>`), Section 2, Section 3, Section 5 | Pass |
| **Part 1.3** | Student name prominently at top + locally stored portrait photo | `index.html` Section 1 & Section 2 (`<h1>`, `images/hasib.jpg`) | Pass |
| **Part 1.4** | Clearly labeled sections (`About Me`, `Education & Background`, `Technical Skills`, `Class Routine`, etc.) | `index.html` Sections 2–8 (`.section-pill` + `<h2>`) | Pass |
| **Part 2.1** | Effective text formatting (`<strong>`, `<em>`, color hierarchy, typographic scale) | `index.html` & `projects.html` | Pass |
| **Part 2.2** | Favorite quote (`<blockquote>` + `<cite>`) | `index.html` Section 7 (*Dead Poets Society, 1989*) | Pass |
| **Part 2.3** | Ordered & unordered lists (`<ol>` Top 5 Books, `<ul>` Top 5 Movies) | `index.html` Section 6 (`#favorites`) | Pass |
| **Part 2.4** | 5+ hyperlinks including sentence-embedded link, BRAC University link, and CSE 391 Discord link | `index.html` Section 2 (embedded links), Section 3 (`bracu.ac.bd`), Section 5 (`discord.gg/XfFEww3kM`) | Pass |
| **Part 3.1** | At least 2 images: 1 local (`images/hasib.jpg`) + 1 web-linked image | `index.html` Section 2 (local) & Section 7 (external web image) | Pass |
| **Part 3.2** | Structured table with multi-line content, `rowspan="2"`, and `colspan="2"` / `colspan="4"` | `index.html` Section 5 (`#schedule` Weekly Class Schedule) | Pass |
| **Part 3.3** | Table CSS effects: row hover, striped even rows, borders, responsive horizontal wrapper | `style.css` Section 12 (`.table-responsive`, `.custom-table`) | Pass |
| **Part 3.4** | External (`style.css`), internal (`<style>` in `<head>`), and sparing inline (`style="..."`) CSS | `index.html` Head #3–4, Section 2 callout, Section 5 `<th>`/`<tfoot>` | Pass |
| **Part 3.5** | Display page location (`window.location.href`) & last modified date (`document.lastModified`) via JS | `index.html` Section 9, `projects.html` Section 7, `script.js` Module 3 | Pass |
| **Part 4.1** | Complete HTML5 structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<meta>`, `<title>`, `<header>`, `<main>`, `<footer>` with `&copy;`) | `index.html` & `projects.html` | Pass |
| **Part 4.2** | Valid HTML5 & CSS3 passing W3C Validator checks | Verified via W3C Nu HTML & CSS Validators (`0` errors) | Pass |
| **Bonus 1** | Functional `mailto:` email contact form | `index.html` Section 8 (`#contact`) & `style.css` Section 14 | Pass |
| **Bonus 2** | Pure-CSS dark/light mode toggle (`#theme-toggle:checked ~ .theme-wrapper`) | `style.css` Sections 2 & 5 + cross-page persistence in `script.js` | Pass |
| **Bonus 3** | Pure-CSS `@keyframes` animations (`fadeInUp`, `pulseDot`, `floatCard`) | `style.css` Section 3 | Pass |
