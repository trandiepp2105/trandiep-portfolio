function initMenu(menuButton, siteNav, keyboardTarget = document) {
  function setMenuOpen(isOpen) {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    siteNav.classList.toggle("is-open", isOpen);
  }

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  keyboardTarget.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}

if (typeof document !== "undefined") {
  const menuButton = document.querySelector("[data-menu-toggle]");
  const siteNav = document.querySelector("#site-nav");
  if (menuButton && siteNav) initMenu(menuButton, siteNav, document);
  document.querySelector("[data-current-year]")?.replaceChildren(String(new Date().getFullYear()));
}

if (typeof module !== "undefined") module.exports = { initMenu };
