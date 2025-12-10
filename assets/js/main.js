const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__link");


  function openCert(imgSrc) {
    document.getElementById("certPopup").style.display = "block";
    document.getElementById("popupImg").src = imgSrc;
  }

  function closeCert() {
    document.getElementById("certPopup").style.display = "none";
  }
window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150;
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
});
