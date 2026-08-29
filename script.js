const views = document.querySelectorAll(".view");
const navLinks = document.querySelectorAll("[data-page]");
const toggle = document.querySelector(".nav-toggle");
const panel = document.querySelector(".sidebar-panel");

function pageFromHash() {
  const hash = window.location.hash.replace("#", "");
  return document.getElementById(hash) ? hash : "about";
}

function showPage(id) {
  views.forEach((view) => {
    view.classList.toggle("is-visible", view.id === id);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.page === id);
  });

  document.body.classList.toggle("is-about", id === "about");
  document.title =
    id === "about"
      ? "Your Name — Portfolio"
      : `${document.querySelector(`#${id} h2`)?.textContent || "Portfolio"} — Your Name`;

  if (panel && toggle) {
    panel.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", () => showPage(pageFromHash()));
showPage(pageFromHash());

if (toggle && panel) {
  toggle.addEventListener("click", () => {
    const open = panel.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
