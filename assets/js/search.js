/**
 * PANKAJ KUMAR - OFFICIAL PORTAL
 * Reusable Live Search & Highlight Utility (assets/js/search.js)
 */
(function () {
  function initSearch() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;

    const menuItems = document.querySelectorAll("#menuList li, .menu-item");
    const contentBlocks = document.querySelectorAll(
      "section, .info-box, .card, .subCard, .result-card, .link-item, h1, h2, h3, p"
    );
    let lastHighlight = null;

    searchInput.addEventListener("input", function () {
      const q = this.value.toLowerCase().trim();

      // Filter nav/menu items if present
      if (menuItems.length > 0) {
        menuItems.forEach((li) => {
          const text = (li.textContent || li.innerText || "").toLowerCase();
          li.style.display = !q || text.includes(q) ? "" : "none";
        });
      }

      // Remove existing highlight
      if (lastHighlight) {
        lastHighlight.classList.remove("search-blink-red");
        lastHighlight = null;
      }

      if (!q) return;

      // Search on-page content and blink first match
      for (let i = 0; i < contentBlocks.length; i++) {
        const block = contentBlocks[i];
        const text = (block.innerText || block.textContent || "").toLowerCase();
        if (text && text.includes(q)) {
          block.classList.add("search-blink-red");
          block.scrollIntoView({ behavior: "smooth", block: "center" });
          lastHighlight = block;
          break;
        }
      }
    });
  }

  // Global subtle click vibration (mobile feedback)
  document.addEventListener(
    "click",
    function () {
      if (navigator.vibrate) {
        try {
          navigator.vibrate(30);
        } catch (e) {
          // Ignore vibration permissions error
        }
      }
    },
    true
  );

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSearch);
  } else {
    initSearch();
  }
})();
