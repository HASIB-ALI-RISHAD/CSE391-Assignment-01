/**
 * CSE 391: Assignment 1 — Client-Side Enhancements (100% Vanilla JavaScript)
 * Author: Md. Hasib Ali Rishad (Student ID: 23101389)
 *
 * Modules:
 * 1. Theme Persistence Across Pages (localStorage sync for pure-CSS dark mode)
 * 2. Navigation UX (Mobile drawer auto-close & active underline hash sync)
 * 3. Live Footer Metadata (window.location.href & document.lastModified)
 * 4. Initialization on DOM Ready
 */

(function () {
    // --- 1. Theme Persistence Across Pages ---
    var themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        var savedTheme = localStorage.getItem("site-theme");
        if (savedTheme === "dark") {
            themeToggle.checked = true;
        } else if (savedTheme === "light") {
            themeToggle.checked = false;
        }

        themeToggle.addEventListener("change", function () {
            localStorage.setItem("site-theme", themeToggle.checked ? "dark" : "light");
        });
    }

    // --- 2. Navigation UX: Mobile Drawer Auto-Close & Hash Active Sync ---
    function syncActiveNavWithHash(navLinks) {
        var currentHash = window.location.hash;
        if (!currentHash) {
            return;
        }

        for (var i = 0; i < navLinks.length; i++) {
            if (navLinks[i].getAttribute("href") === currentHash) {
                for (var j = 0; j < navLinks.length; j++) {
                    navLinks[j].classList.remove("active");
                }
                navLinks[i].classList.add("active");
                break;
            }
        }
    }

    function initNavigationUX() {
        var navToggle = document.getElementById("nav-toggle");
        var navLinks = document.querySelectorAll(".site-nav .nav-link");

        // Highlight matching section link if user navigated via URL hash (e.g. index.html#schedule)
        syncActiveNavWithHash(navLinks);
        window.addEventListener("hashchange", function () {
            syncActiveNavWithHash(navLinks);
        });

        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener("click", function () {
                // Close mobile hamburger drawer automatically after selecting a link
                if (navToggle && navToggle.checked) {
                    navToggle.checked = false;
                }

                // Update active underline state for in-page section anchors
                var href = this.getAttribute("href") || "";
                if (href.charAt(0) === "#") {
                    for (var j = 0; j < navLinks.length; j++) {
                        navLinks[j].classList.remove("active");
                    }
                    this.classList.add("active");
                }
            });
        }
    }

    // --- 3. Dynamic Footer Metadata: Page URL & Last Modified Date ---
    function updatePageMetadata() {
        var locationElement = document.getElementById("page-location");
        if (locationElement) {
            locationElement.textContent = window.location.href;
        }

        var modifiedElement = document.getElementById("last-modified");
        if (modifiedElement) {
            modifiedElement.textContent = document.lastModified;
        }
    }

    // --- 4. Initialization on DOM Ready ---
    function initAll() {
        updatePageMetadata();
        initNavigationUX();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initAll);
    } else {
        initAll();
    }
})();
