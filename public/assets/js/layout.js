/**
 * ============================================================
 * PANKAJ KUMAR - OFFICIAL PORTAL & EDUCATIONAL PLATFORM
 * Centralized Modular Layout & Professional Three-Dots Menu (⋮)
 * File: /assets/js/layout.js
 * ============================================================
 */

(function () {
  'use strict';

  // 1. CENTRALIZED NAVIGATION & CATEGORIES CONFIGURATION
  const PORTAL_CONFIG = {
    brand: {
      name: "🌟 Pankaj Kumar 🌟",
      homeUrl: "index.html",
      tagline: "Official Educational Portal & Student Hub"
    },
    social: {
      youtube: "https://youtube.com/@pankajkumar-v7d8o",
      phone: "+919162389933",
      whatsapp: "https://wa.me/919162389933",
      instagram: "https://www.instagram.com/pankaj__kr__2400312?utm_source=qr"
    },
    primaryShortcuts: [
      { href: "index.html", label: "🏠 Home" },
      { href: "science.html", label: "🧪 Science HuB" },
      { href: "books.html", label: "📚 Books" },
      { href: "tuition-tracker.html", label: "📋 TuitionPro" },
      { href: "updates.html", label: "🔗 Updates" }
    ],
    categories: [
      {
        category: "🎓 Profile & About",
        items: [
          { href: "index.html", label: "🏠 Home Portal" },
          { href: "about.html", label: "👤 Mere Baare Mein (About)" },
          { href: "pankajcv.html", label: "📄 Biodata / Resume (CV)" },
          { href: "location.html", label: "📍 Location & Exam Centers" }
        ]
      },
      {
        category: "🧪 12th Science & VVI Question Banks",
        items: [
          { href: "science.html", label: "🧪 12th Science Hub" },
          { href: "che.html", label: "⚗️ Chemistry VVI Questions" },
          { href: "che-2026.html", label: "🎯 Chemistry 2026 Master Plan" },
          { href: "phy.html", label: "⚡ Physics VVI Bank" },
          { href: "math.html", label: "📐 Mathematics VVI Bank" },
          { href: "bio.html", label: "🧬 Biology VVI Bank" },
          { href: "hindi.html", label: "📖 Hindi VVI Questions" },
          { href: "hindi-2026.html", label: "🎯 Hindi 2026 Mission" },
          { href: "english.html", label: "📚 English 2026 Predictor" },
          { href: "cuet-ug-phy.html", label: "⚛️ CUET Physics PYQs" }
        ]
      },
      {
        category: "📚 Exam Study Materials & Results",
        items: [
          { href: "12th-result.html", label: "📊 12th Result 2026 Portal" },
          { href: "12th-activity.html", label: "📑 12th Activity / Practical Copy" },
          { href: "modelspaper.html", label: "🗞️ 12th All Stream Model Papers" },
          { href: "books.html", label: "📚 12th Books & NCERT" },
          { href: "disha.html", label: "📁 Disha Science Notes" },
          { href: "countdown.html", label: "⏳ Exam Routine & Countdown" }
        ]
      },
      {
        category: "🛠️ Tools, Student Records & Apps",
        items: [
          { href: "tuition-tracker.html", label: "📋 TuitionPro Tracker (Teacher Record)" },
          { href: "updates.html", label: "🔗 All New Updates (Admin & Media)" },
          { href: "owner.html", label: "📂 Student Documents Center" },
          { href: "allphoto.html", label: "🔒 Ultra Secure Photo Vault" },
          { href: "ai.html", label: "🤖 Your Friend Aisha (AI Bestie)" },
          { href: "font.html", label: "🅿️ Blue Unicode Font Maker" },
          { href: "movie.html", label: "🍿 Movies Vault & Calculator" },
          { href: "app.html", label: "📱 Pankaj Education Platform" }
        ]
      },
      {
        category: "🌐 Official Links & External Drives",
        items: [
          { href: "https://intermediate.biharboardonline.com/Exam26/StudentExamDummyCard.aspx", label: "🎫 Dummy Admit Card (BSEB)", external: true },
          { href: "https://techinaut.edu.in/all-student", label: "💻 Computer All Students", external: true },
          { href: "https://modyolo.com/", label: "🚀 Mod APK", external: true },
          { href: "https://drive.google.com/drive/folders/1JMxIoEtwsNviilwyP3IUyHrpqwpXB4Ks", label: "📝 CUET PYQs Drive", external: true },
          { href: "https://drive.google.com/drive/folders/1gdL2khT1D7hGZaG457oIE-gjOpS4-5OM", label: "📰 Current Affairs Drive", external: true }
        ]
      }
    ]
  };

  // 2. GET CURRENT PAGE
  function getCurrentPage() {
    let path = window.location.pathname || "";
    let file = path.split("/").pop();
    if (!file || file === "/") file = "index.html";
    return file;
  }

  // 3. RENDER SHARED HEADER COMPONENT
  function renderHeader() {
    let headerContainer = document.getElementById("header-root") || document.getElementById("portal-header");
    let existingHeader = document.querySelector("header.portal-header");
    if (existingHeader) return; // already rendered

    const currentFile = getCurrentPage();

    // Primary top-bar shortcuts
    const shortcutsHtml = PORTAL_CONFIG.primaryShortcuts.map(item => {
      const isActive = item.href === currentFile ? ' class="active"' : '';
      return `<li><a href="${item.href}"${isActive}>${item.label}</a></li>`;
    }).join("");

    // Three-dots menu items categorized
    let menuHtml = `
      <div class="menu-panel-header">
        <div class="menu-panel-title">
          <span>📋</span> All Services & Navigation
        </div>
        <button class="menu-close-btn" id="menuCloseBtn" aria-label="Close menu">✕</button>
      </div>
      <div class="menu-grid-container" id="menuGridContainer">
    `;

    PORTAL_CONFIG.categories.forEach(cat => {
      menuHtml += `<div class="menu-category-title">${cat.category}</div>`;
      cat.items.forEach(item => {
        const isActive = item.href === currentFile ? ' class="active"' : '';
        const targetAttr = item.external ? ' target="_blank" rel="noopener noreferrer"' : '';
        const extBadge = item.external ? '<span class="badge-ext">External</span>' : '';
        menuHtml += `
          <li class="menu-nav-item">
            <a href="${item.href}"${isActive}${targetAttr}>
              <span>${item.label}</span>
              ${extBadge}
            </a>
          </li>
        `;
      });
    });

    menuHtml += `</div>`;

    const headerHtml = `
  <header class="portal-header">
    <nav class="portal-nav">
      <div class="portal-brand">
        <a href="${PORTAL_CONFIG.brand.homeUrl}" class="logo">${PORTAL_CONFIG.brand.name}</a>
      </div>

      <!-- Top bar desktop shortcuts -->
      <ul class="nav-primary-links">
        ${shortcutsHtml}
      </ul>

      <div class="nav-actions">
        <!-- Live Search Box -->
        <div class="search-box">
          <input type="text" id="searchInput" placeholder="Search menu or content..." autocomplete="off">
        </div>

        <!-- Professional Three-Dots (⋮) Menu Button -->
        <button class="three-dots-btn" id="threeDotsBtn" aria-label="All Navigation Options" title="All Services & Menus">
          <span class="dots-icon">⋮</span>
          <span class="dots-label">All Services</span>
        </button>
      </div>

      <!-- Professional Categorized Dropdown Menu (ul#menuList) -->
      <ul id="menuList">
        ${menuHtml}
      </ul>
    </nav>
  </header>
  <div id="menuBackdrop"></div>
  <div id="spaLoadingBar" class="spa-loading-bar"></div>
`;

    if (headerContainer) {
      headerContainer.innerHTML = headerHtml;
    } else {
      const wrapper = document.createElement("div");
      wrapper.id = "portal-header-wrapper";
      wrapper.innerHTML = headerHtml;
      document.body.insertBefore(wrapper, document.body.firstChild);
    }

    bindMenuEvents();
    initLiveSearch();
    initSPARouter();
  }

  // 4. BIND THREE-DOTS TOGGLE & CLOSE EVENTS
  function bindMenuEvents() {
    const dotsBtn = document.getElementById("threeDotsBtn");
    const menuList = document.getElementById("menuList");
    const backdrop = document.getElementById("menuBackdrop");
    const closeBtn = document.getElementById("menuCloseBtn");

    function openMenu() {
      if (menuList) menuList.classList.add("open");
      if (backdrop) backdrop.classList.add("show");
      if (dotsBtn) dotsBtn.classList.add("active");
    }

    function closeMenu() {
      if (menuList) menuList.classList.remove("open");
      if (backdrop) backdrop.classList.remove("show");
      if (dotsBtn) dotsBtn.classList.remove("active");
    }

    if (dotsBtn) {
      dotsBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        if (menuList && menuList.classList.contains("open")) {
          closeMenu();
        } else {
          openMenu();
        }
      });
    }

    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    if (backdrop) backdrop.addEventListener("click", closeMenu);

    // Escape key closes menu
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    // Close when clicking an internal link
    if (menuList) {
      menuList.addEventListener("click", function (e) {
        if (e.target.closest("a")) {
          closeMenu();
        }
      });
    }
  }

  // 5. RENDER SHARED FOOTER COMPONENT
  function renderFooter() {
    let footerContainer = document.getElementById("footer-root") || document.getElementById("portal-footer");
    let existingFooter = document.querySelector("footer.portal-footer");
    if (existingFooter) return;

    const footerHtml = `
  <footer class="portal-footer">
    <div class="footer-content">
      <div class="footer-copy">
        © 2026 Pankaj Kumar | Rang-Biranga Portfolio & Educational Hub 🌈
      </div>
      <div class="footer-links">
        <a href="${PORTAL_CONFIG.brand.homeUrl}">🏠 Home</a>
        <a href="about.html">👤 About</a>
        <a href="science.html">🧪 Science</a>
        <a href="updates.html">🔗 Updates</a>
        <a href="${PORTAL_CONFIG.social.youtube}" target="_blank" rel="noopener">📺 YouTube</a>
        <a href="${PORTAL_CONFIG.social.whatsapp}" target="_blank" rel="noopener">💬 WhatsApp</a>
        <a href="tel:${PORTAL_CONFIG.social.phone}">📞 Call</a>
      </div>
    </div>
  </footer>
`;

    if (footerContainer) {
      footerContainer.innerHTML = footerHtml;
    } else {
      const wrapper = document.createElement("div");
      wrapper.id = "portal-footer-wrapper";
      wrapper.innerHTML = footerHtml;
      document.body.appendChild(wrapper);
    }
  }

  // 6. LIVE SEARCH WITH THREE-DOTS POPUP & RED-BLINK
  function initLiveSearch() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;

    const menuList = document.getElementById("menuList");
    const backdrop = document.getElementById("menuBackdrop");
    const dotsBtn = document.getElementById("threeDotsBtn");
    const menuItems = document.querySelectorAll("#menuList li.menu-nav-item");
    const categoryTitles = document.querySelectorAll(".menu-category-title");
    const contentBlocks = document.querySelectorAll(
      "section, .info-box, .card, .subCard, .result-card, .link-item, h1, h2, h3, p"
    );
    let lastHighlight = null;

    searchInput.addEventListener("input", function () {
      const q = this.value.toLowerCase().trim();

      if (q) {
        // Open dropdown to show search results
        if (menuList && !menuList.classList.contains("open")) {
          menuList.classList.add("open");
          if (backdrop) backdrop.classList.add("show");
          if (dotsBtn) dotsBtn.classList.add("active");
        }

        // Filter menu items
        menuItems.forEach(li => {
          const text = (li.textContent || "").toLowerCase();
          li.style.display = text.includes(q) ? "" : "none";
        });

        // Hide category titles if no children visible
        categoryTitles.forEach(t => {
          t.style.display = q ? "none" : "";
        });
      } else {
        menuItems.forEach(li => li.style.display = "");
        categoryTitles.forEach(t => t.style.display = "");
      }

      // Remove existing red blink
      if (lastHighlight) {
        lastHighlight.classList.remove("search-blink-red");
        lastHighlight = null;
      }

      if (!q) return;

      // On-page content search and blink
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

  // 7. DYNAMIC SPA CLIENT-SIDE ROUTER VIA fetch()
  function initSPARouter() {
    const mainArea = document.querySelector("main") || document.getElementById("app-content");
    if (!mainArea) return;

    document.addEventListener("click", function (e) {
      const link = e.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // Only handle internal relative HTML links
      if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) {
        return;
      }

      if (!href.endsWith(".html")) return;

      // Standalone pages with complex app state or custom layout
      const standalonePages = ["tuition-tracker.html", "updates.html", "allphoto.html", "ai.html", "font.html", "movie.html", "pankajcv.html"];
      if (standalonePages.includes(href)) {
        return; // standard browser navigation
      }

      e.preventDefault();
      loadPageDynamically(href);
    });

    window.addEventListener("popstate", function (e) {
      if (e.state && e.state.href) {
        loadPageDynamically(e.state.href, false);
      } else {
        const current = getCurrentPage();
        loadPageDynamically(current, false);
      }
    });
  }

  async function loadPageDynamically(url, push = true) {
    const loadingBar = document.getElementById("spaLoadingBar");
    if (loadingBar) {
      loadingBar.style.width = "40%";
      loadingBar.style.opacity = "1";
    }

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");

      const htmlText = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, "text/html");

      if (loadingBar) loadingBar.style.width = "80%";

      // Update document title
      if (doc.title) {
        document.title = doc.title;
      }

      // Update main content
      const newMain = doc.querySelector("main") || doc.querySelector(".content-area") || doc.querySelector(".container");
      const currentMain = document.querySelector("main") || document.querySelector(".content-area") || document.querySelector(".container");

      if (newMain && currentMain) {
        currentMain.innerHTML = newMain.innerHTML;
        currentMain.className = newMain.className;
        currentMain.classList.add("spa-fade-in");
        setTimeout(() => currentMain.classList.remove("spa-fade-in"), 400);
      } else {
        window.location.href = url;
        return;
      }

      // Execute scripts inside fetched content
      const scripts = doc.querySelectorAll("main script, .content-area script");
      scripts.forEach(s => {
        try {
          const newScript = document.createElement("script");
          if (s.src) {
            newScript.src = s.src;
          } else {
            newScript.textContent = s.textContent;
          }
          document.body.appendChild(newScript);
        } catch (err) {
          console.warn("Script exec warning:", err);
        }
      });

      // Update active links
      const links = document.querySelectorAll("#menuList li a, .nav-primary-links li a");
      links.forEach(a => {
        const h = a.getAttribute("href");
        if (h === url) {
          a.classList.add("active");
        } else {
          a.classList.remove("active");
        }
      });

      window.scrollTo({ top: 0, behavior: "smooth" });

      if (push) {
        history.pushState({ href: url }, "", url);
      }

      if (loadingBar) {
        loadingBar.style.width = "100%";
        setTimeout(() => {
          loadingBar.style.opacity = "0";
          loadingBar.style.width = "0%";
        }, 300);
      }
    } catch (err) {
      console.warn("Dynamic load error, falling back to direct navigation:", err);
      window.location.href = url;
    }
  }

  // 8. GLOBAL HAPTIC VIBRATION
  document.addEventListener("click", function () {
    if (navigator.vibrate) {
      try {
        navigator.vibrate(25);
      } catch (e) {}
    }
  }, true);

  // 9. AUTO-INITIALIZE ON DOM READY
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      renderHeader();
      renderFooter();
    });
  } else {
    renderHeader();
    renderFooter();
  }

  window.PankajPortal = {
    config: PORTAL_CONFIG,
    renderHeader: renderHeader,
    renderFooter: renderFooter,
    navigate: loadPageDynamically
  };
})();
