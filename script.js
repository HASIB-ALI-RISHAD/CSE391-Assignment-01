/**
 * CSE 391: Assignment 1 - JavaScript
 * Features:
 * 1. Part 3, Item 5: Live page location (URL) and last modification timestamp
 * 2. Theme Persistence: Synchronize pure CSS dark/light mode across all pages
 */

(function () {
    // --- 1. Theme Persistence Across Navigation ---
    var themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        // Retrieve stored user preference from localStorage
        var savedTheme = localStorage.getItem("site-theme");
        if (savedTheme === "dark") {
            themeToggle.checked = true;
        } else if (savedTheme === "light") {
            themeToggle.checked = false;
        }

        // Listen for user toggle events and persist to localStorage
        themeToggle.addEventListener("change", function () {
            if (themeToggle.checked) {
                localStorage.setItem("site-theme", "dark");
            } else {
                localStorage.setItem("site-theme", "light");
            }
        });
    }

    // --- 2. Mobile Navbar Auto-Close & Active Underline State ---
    function initNavigationUX() {
        var navToggle = document.getElementById("nav-toggle");
        var navLinks = document.querySelectorAll(".site-nav .nav-link");

        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener("click", function () {
                // Close mobile menu drawer automatically after selecting a link
                if (navToggle && navToggle.checked) {
                    navToggle.checked = false;
                }

                // Update active underline bar for in-page section anchors
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

    // --- 3. Live Page URL and Document Modification Metadata ---
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
