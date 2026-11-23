// main.js — small helpers used on every page
// 1. Mobile menu  1b. Interests dropdown  2. Highlight the current section in the menu  3. Footer year

(function () {
  // 1. Mobile menu: open/close when "Menu" is tapped, close after choosing a link
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      })
    );
  }

  // 1b. Interests dropdown: open/close on click (hover also works on desktop)
  document.querySelectorAll(".has-menu").forEach((item) => {
    const btn = item.querySelector(".menu-btn");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll(".has-menu.open").forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".menu-btn").setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") document.querySelectorAll(".has-menu.open").forEach((i) => i.classList.remove("open"));
  });

  // 2. Home page only: underline the menu item of the section on screen
  const sections = document.querySelectorAll("main section[id]");
  const navMap = {};
  document.querySelectorAll('.nav-links a[href^="#"]').forEach((a) => {
    navMap[a.getAttribute("href").slice(1)] = a;
  });
  if (sections.length && "IntersectionObserver" in window && Object.keys(navMap).length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && navMap[entry.target.id]) {
            Object.values(navMap).forEach((a) => a.classList.remove("active"));
            navMap[entry.target.id].classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  // 3. Current year in the footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
