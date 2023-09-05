/*=====================toggle icon navbar============== */

const menuIcon = document.querySelector("#menu-ico");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*=====================Scroll section active link============== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*===================== Scroll sticky nav bar============== */
  const header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*=====================Remove toggle icon navbar============== */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*=================Scroll revel ================== */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 300,
});

ScrollReveal().reveal(
  ".home-content, .home-content h2, .home-content h1, .home-img img, .heading, .about-content",
  {
    origin: "top",
  }
);
ScrollReveal().reveal(
  ".btn, .about-img, .education p#para , .skill-container, .project-container,  form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(
  ".home-content h3 , .home-content .social-media a , .education .container, .contact-img ",
  {
    origin: "left",
  }
);

ScrollReveal().reveal(
  ".home-content p, .home-content p ,  .about-content h3 ,   ",
  {
    origin: "right",
  }
);

// ScrollReveal({
//   reset: true,
//   distance: "80px",
//   duration: 5000,
//   delay: 200,
// });

// ScrollReveal().reveal(" .education .container .Clg-education a", {
//   origin: "top",
// });

// ScrollReveal().reveal(".tagline", { delay: 500 });
// ScrollReveal().reveal(".punchline", { delay: 2000 });

/*=================Typing text================== */

const type = new Typed(".typing-text", {
  strings: [
    "Frontend Developer",
    "Software Developer",
    "Junior Engineer",
    "Fresher",
  ],

  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing-2", {
  strings: [
    "Frontend Developer",
    "Software Developer",
    "Junior Engineer",
    "Fresher",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

/*=================Dark Mode To Light Mode================== */

const DarkModeIcon = document.querySelector("#darkMode");

DarkModeIcon.onclick = () => {
  DarkModeIcon.classList.toggle("bxs-sun");
  document.body.classList.toggle("darkMode");
};
