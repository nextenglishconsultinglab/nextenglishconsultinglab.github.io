/* =========================================================
   NECL WEBSITE — EASY-EDIT SETTINGS

   常改的資料集中在這裡。
   修改後存檔並 Commit，GitHub Pages 會自動更新網站。
========================================================= */

const NECL = {
  price: "NT$4,000",
  session: "70 分鐘 × 1 次",
  group: "4 人",
  schedule: "週一至週四晚間",

  calendly: "https://calendly.com/justin-nextenglishconsultinglab/30min",
  line: "https://lin.ee/NBuN2Krj",
  instagram: "https://www.instagram.com/next_english_lab/",
  programVideo: "https://youtu.be/CbiAk9VWkk8"
};

/* ---------- Apply global links ---------- */

document.querySelectorAll('[data-link="calendly"]').forEach((el) => {
  el.href = NECL.calendly;
  el.target = "_blank";
  el.rel = "noopener noreferrer";
});

document.querySelectorAll('[data-link="line"]').forEach((el) => {
  el.href = NECL.line;
  el.target = "_blank";
  el.rel = "noopener noreferrer";
});

document.querySelectorAll('[data-link="instagram"]').forEach((el) => {
  el.href = NECL.instagram;
  el.target = "_blank";
  el.rel = "noopener noreferrer";
});

document.querySelectorAll('[data-link="programVideo"]').forEach((el) => {
  el.href = NECL.programVideo;
  el.target = "_blank";
  el.rel = "noopener noreferrer";
});

/* ---------- Apply commonly changed text ---------- */

const contentMap = {
  price: NECL.price,
  session: NECL.session,
  group: NECL.group,
  schedule: NECL.schedule
};

Object.entries(contentMap).forEach(([key, value]) => {
  document.querySelectorAll(`[data-content="${key}"]`).forEach((el) => {
    el.textContent = value;
  });
});

/* ---------- Mobile navigation ---------- */

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Accessible click/tap accordions ---------- */

document.querySelectorAll(".accordion-item").forEach((item) => {
  const trigger = item.querySelector(".accordion-trigger");
  if (!trigger) return;

  trigger.addEventListener("click", () => {
    const willOpen = !item.classList.contains("is-open");
    item.classList.toggle("is-open", willOpen);
    trigger.setAttribute("aria-expanded", String(willOpen));
  });
});

/* ---------- Scroll reveal ---------- */

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((el) => observer.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add("is-visible"));
}

/* ---------- Footer year ---------- */

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
