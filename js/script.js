// Add a shadow to the navbar once the page is scrolled down a bit
const navbar = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Highlight the nav link that matches the section currently in view
const sections = document.querySelectorAll("section, header[id]");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 90;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Close the mobile navbar menu after a link is clicked
const navbarCollapseEl = document.getElementById("navbarNav");
const bsCollapse = navbarCollapseEl ? new bootstrap.Collapse(navbarCollapseEl, { toggle: false }) : null;

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (bsCollapse && navbarCollapseEl.classList.contains("show")) {
      bsCollapse.hide();
    }
  });
});

// Show the current year in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
