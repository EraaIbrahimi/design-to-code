const navLinks = document.querySelectorAll(".header__nav-list li > a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    navLinks.forEach((l) => {
      l.classList.remove("highlight--gray");

      l.parentElement
        .querySelector(".header__nav-line")
        .classList.add("header__nav-line--hidden");
    });

    this.classList.add("highlight--gray");

    this.parentElement
      .querySelector(".header__nav-line")
      .classList.remove("header__nav-line--hidden");
  });
});

window.addEventListener("load", () => {
  if (navLinks.length > 0) {
    navLinks[0].classList.add("highlight--gray");
    navLinks[0].parentElement
      .querySelector(".header__nav-line")
      .classList.remove("header__nav-line--hidden");
  }
});
