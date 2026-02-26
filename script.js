document.addEventListener("DOMContentLoaded", () => {
  // 1. Quote Button Alert
  const quoteBtn = document.querySelector(".quote-btn");
  quoteBtn.addEventListener("click", () => {
    alert("Thank you for requesting a quote! We'll contact you soon.");
  });

  // 2. Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 3. Sticky Navbar Effect
  const navbar = document.querySelector(".navbar");
  const stickyOffset = navbar.offsetTop;
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= stickyOffset) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  // 4. Fade-in Animation for Cards
  const cards = document.querySelectorAll(".card, .product");
  const revealOnScroll = () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run once on load
});
