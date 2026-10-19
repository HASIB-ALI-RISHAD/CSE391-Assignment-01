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

    // --- 2. Live Page URL and Document Modification Metadata ---
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

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", updatePageMetadata);
    } else {
        updatePageMetadata();
    }
})();
